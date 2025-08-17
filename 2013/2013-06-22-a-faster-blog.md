---
published: true
title: "A faster blog"
id: "5662"
slug: "a-faster-blog"
author: rv
date: 2013-06-22 00:59
categories: Tech
---
Even after moving to EC2 site performance was still crap, at least according to Pingdom. Every time I access the site I get &lt;500ms response times, but Pingdom never manages to get a response time lower than 5 seconds. Time to fix that.

The first thing I did after the downtime a couple of days ago was to set up Cloudflare, and it seems to have helped greatly. After that, I moved my Wordpress theme's resource files to an S3 bucket. I also copied the uploaded images to S3, but I don't have a plugin for Wordpress yet that will do it automatically for me. So I'll have to keep doing this manually in the future, which is a bit of a pain. Besides speed, it also saves money to host static files on S3, as you only pay for data traffic and not instance usage.

The last thing I set up is <a href="http://wordpress.org/plugins/backwpup/" target="_blank">BackWPup</a>, a Wordpress plugin that backs up the database and/or Wordpress files to various clouds, including Amazon S3. I already had database snapshots on Amazon RDS but this gives me just a bit more security, especially cause I know how easy it is to get the backups out of S3 in a format that's easy for me to restore.

End result: blitz.io reports ~50-100ms response times. Pingdom response times went down to ~800-900ms, which seems a lot more reasonable. I'll run with this for a while and see how it goes. It's fun to play with professional server setups, but if this new blog setup ends up costing me more money than it did before I would definitely consider moving back.