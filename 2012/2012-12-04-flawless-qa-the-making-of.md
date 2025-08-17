---
published: true
title: "Flawless.QA: the making of"
id: "5272"
slug: "flawless-qa-the-making-of"
author: rv
date: 2012-12-04 13:56
categories: Tech
---
It's been a while since I've updated. I've been meaning to write something ever since faux-launching (faunching?) <a title="Flawless.QA" href="http://www.flawless.qa" target="_blank">Flawless.QA</a> last week, but have been occupied with many other things. I thought I'd share here how we went from idea to landing page in about a week, and the troubles that accompanied it.

The stack we're using is essentially Python+Django on top of a gunicorn webserver, running on Heroku. We're using Unfuddle for project management and git repositories, and are currently using Cloudflare for our DNS server. For e-mail we're using Mailgun. Although we're only two people we've just started using Hipchat, which offers lovely integration with git + unfuddle. The beauty of this setup is that all of the component scale with money. Need better webserver performance? Just throw money at Heroku. All the services listed here offer you a free account to get started, and you can scale it up from there without spending too much time.

There are limitations, of course, and you'll hit them sooner than you think. Mailgun's free account only offers to send out 200 e-mails per day, which, if you're an e-mail-heavy business like us, will not last you long. There's alternatives, such as Google Apps, but that's not free. The same thing goes for Cloudflare: I've tested the performance (using blitz.io, a great product for performance testing) of Flawless.QA on the actual domain via Cloudflare's DNS, and via Heroku's subdomain at herokuapp.com, and the performance of Cloudflare is quite appalling compared to the direct access. I'm not quite sure why yet. Cloudflare offers tons of little micro-optimizations for your website, but I'm guessing they might prioritize their paying customers, resulting in worse performance for the free accounts.

The reason we had to change DNS servers and mail servers for our domain was that the provider we bought the domain from seemed to have trouble keeping the site up. Every once in a while we would try to access the domain via their nameservers and get a blank page or a 404 as a result. Unable to pinpoint the exact reason we decided to use the Cloudfare nameservers instead, which solved the issue. During the process we learned a lot about CNAME records and A records. You can go 90% of the way to launching your startup, but until you buy the actual domain name and set it up you'll never run in to these issues. A lesson learned.

We ran into e-mail issues as well, as the provider we bought the domain from would no longer allow us to set up e-mail forwarding after we switched nameservers. The old redirects still work, but it's definitely something we'll need to address in the near future.

Besides e-mail there's a lot of other shortcuts we took just to get a minimum viable product out there as soon as possible. From a technical point of view we've released an entirely unoptimized version of the site: no minifying and bundling of resources, no public caching, not even serving the static files from a fast location. Fortunately these are some of the things that Cloudflare adddresses, so we managed to get away with it so far.

As I am learning, it's one thing to get a minimum viable landing page out there, but getting a minimum viable paid subscription is a whole other thing. The problem we set out to solve, automating content quality checking for websites, is a fairly technical one, but fortunately for us a lot of it is behind-the-scenes code, which will not affects users if it breaks from time to time. If I had to do it all over again I would probably have started working on the paid accounts sooner. But like any startup, it's hard to know that before doing one, and we're learning as we go along.