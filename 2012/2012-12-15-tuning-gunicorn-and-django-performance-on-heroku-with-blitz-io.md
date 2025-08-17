---
published: true
title: "Tuning gunicorn and Django performance on Heroku with blitz.io"
id: "5291"
slug: "tuning-gunicorn-and-django-performance-on-heroku-with-blitz-io"
author: rv
date: 2012-12-15 17:18
categories: Tech
tags: blitz.io,flawless.qa,gevent,gunicorn,heroku
---
Before starting to promote your startup to the public you really need to make sure that your landing page can handle any kind of traffic that will come your way. <a title="blitz.io" href="http://blitz.io" target="_blank">Blitz.io</a> is my tool of choice. Heroku integrates with blitz and sets you up for a free account right from the start. Very nice.

Here's how <a title="Flawless.QA" href="http://www.flawless.qa">Flawless.QA</a>'s landing page performance looked like, serving a page directly from memcached:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2012/12/4workers-gevent-on.jpg"><img class="aligncenter size-medium wp-image-5292" title="4workers-gevent-on" alt="" src="https://s3.amazonaws.com/cfwblog/uploads/2012/12/4workers-gevent-on-400x343.jpg" width="400" height="343" /></a>

Note that we're not tuning Django here, or database performance. Our Postgres database is running on a different EC2 instance behind pgbouncer and should not have any effect on the results. <a href="http://www.askthepony.com/blog/2011/07/getting-django-on-heroku-prancing-8-times-faster/" target="_blank">This guide</a> will show you how to set up your own Postgres instance. I suspect that using Amazon's RDS will be even easier than setting up Postgres ourselves, but that's something to look into at a later stage.

Based on <a href="https://devcenter.heroku.com/articles/django" target="_blank">Heroku</a>'s recommendations, the setup above is using gevent so we can have asynchronous workers. This seems to be a point of controversy, as Heroku's docs mention gevent but don't actually show you how to install it and set it up in your Procfile. Here's how our initial setup looks like:
<blockquote>web: python manage.py run_gunicorn -b 0.0.0.0:\$PORT -w 4 -k gevent --max-requests=500 --preload</blockquote>
The easiest thing to tune seems to be the number of workers, so let's try 9 workers instead of 4:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2012/12/9workers-gevent-on.jpg"><img class="aligncenter size-medium wp-image-5293" title="9workers-gevent-on" alt="" src="https://s3.amazonaws.com/cfwblog/uploads/2012/12/9workers-gevent-on-400x340.jpg" width="400" height="340" /></a>

Well, that went to shit real fast. Performance is worse than with 4 workers, and if there's many concurrent requests they all fail, not just a small portion of the requests, which is what happened when we had 4 workers.

Now let's see what happens if we turn gevent off:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2012/12/9workers-gevent-off.jpg"><img class="aligncenter size-medium wp-image-5294" title="9workers-gevent-off" alt="" src="https://s3.amazonaws.com/cfwblog/uploads/2012/12/9workers-gevent-off-400x336.jpg" width="400" height="336" /></a>

Perfect! Response times fluctuate a bit around the 200 requests per second limit, but every single requests is served quickly and correctly.

So why does gevent not give better performance on Heroku? In my test case there was nothing infrastructure-related that should have posed a problem, as the response was fetched from memcached directly, and the database was on a different instance. I'm guessing it might be because the overhead of gevent is a bit too much for a Heroku dyno to handle, especially when you're using a large number of worker processes (in gunicorn). I also wonder if this result might be more in favor of gevent if we count web page requests that include loading the static files references on the page. In our case this is a non-issue though, as our static files are hosted directly on Amazon S3, so I can't see any reason to turn gevent on when you're running a similar setup on Heroku.

But don't believe anything you read on the internet. Benchmark it yourself for your particular use case.