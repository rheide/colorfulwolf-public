---
published: true
title: "Thoughts on post-modern web development"
id: "5287"
slug: "thoughts-on-post-modern-web-development"
author: rv
date: 2012-12-14 00:31
categories: Tech
tags: flawless.qa
---
We're getting ready to (p)(re)launch <a href="http://www.flawless.qa/" target="_blank">Flawless.QA</a> with some new features that I am quite excited about. That sounds a bit like a marketing phrase, but weirdly enough I am really genuinely excited. Brian and I worked hard to get the project to the state that it's in now, and it's about to pay off. Here's some short programming-related thoughts on the stack that we're using.

<strong>Django-south:</strong> I can't believe I've lived so long without using this. Well, actually, I can, because at Potato London we're mainly on the appengine platform, which doesn't play nicely with South. That's a terrible shame because django-south is one of the two great revelations for me during this project. Database migrations have never been easier.

<strong>Django-celery: </strong>this is the other great revelation for me. Celery makes it extremely easy to set up background tasks and periodic tasks. It was wonderfully easy to set up and works brilliantly. Django-south and django-celery are the two must-have modules of any serious Django project.

<strong>Amazon Web Services:</strong> scares the shit out of me still, but I can taste the potential. It tastes like mango. The amount of <a href="https://aws.amazon.com/free/" target="_blank">free things</a> that Amazon gives you is amazing: a free machine with an operating system of your choice, free super-fast static file storage, 2000 free email sends per day, 30GB of storage, a 20GB database with another 20GB for automatic database backups. Seemingly the only catch is that the free tier has a bandwidth cap of up to 15GB, after which they start charging you money. We haven't reached that yet so I've really no idea how much it's going to cost us.

<strong>Heroku: </strong>I feel a bit sorry about Heroku. We signed up enthusiastically for their free services and it helped us got our site in the air just a tad bit faster than if we had to configure it from scratch on AWS, but we don't even have paying customers yet and I already feel constrained on Heroku. The biggest limitation is the database. The free Postgres database Heroku offers is useless with a 10.000 row limit, and the next step up is 'not recommended for production' and artificially crippled. Even if you did go for that, it would cost you $8 per month and you get a worse product than with the free Amazon Relational Database Service. So yes, the database really is the big blocker for Heroku.

Note that I'm still a big fan of Heroku. Their developer-oriented product is beautiful to behold and calming to interact with. Finding out how to do something on Heroku is an order of magnitude more easy than it is in Amazon Web Services. AWS adds a lot of clutter and worry to my already messed up brain, but Heroku takes it away. Too bad it also takes away a lot of your money.

<strong>Cloudflare:</strong> not sure if want. We've set this up as our dns server because the nameservers of the company we bought the domain from seem terrible, but Cloudflare introduces a lot of things that we're not sure of, in particular the page caching mechanism. It seems like it could end up being a danger, and given that dns-level changes take a long time to propagate, there's no easy solution if we mess something up. I'll need to read up a bit more on what they do before I can decide what to think of Cloudflare.

<strong>Postgres vs MySQL:</strong> One of the eternal debates. We went with Postgres because Heroku gives it to you by default, and Django is pretty much database-agnostic. It's my first experience with Postgres having come from a long background in MySQL. So far I have no problem with either, but I know a lot of MySQL tricks related to configuring it to act more like a proper RDBMS (something which Postgres does by default), but also related to scaling and backing it up. It seems that we won't have to worry about this at all if we go with Amazon's RDS though, which is essentially a managed MySQL database service. Migrating the data worries me..

<strong>Appengine:</strong> I mention this here because my previous project was developed on Google Appengine. I can't help but wonder how that project would have turned out if we did not use appengine. Sure, you would lose a lot of the automatic scalability that appengine does, but in practice, having that automated scalability meant that I had to spend a lot of time learning appengine's very-specific APIs that are totally useless elsewhere. If we didn't use appengine I would have had to spend that time on a much wider variety of topics, which would surely include database tuning, configuring webservers for static file hosting, managing virtual machines etc. And that knowledge would have carried over a lot more easily into a next job or a startup. That said, appengine did teach me a lot, especially on how to scale things, and that will definitely come in handy in the future.