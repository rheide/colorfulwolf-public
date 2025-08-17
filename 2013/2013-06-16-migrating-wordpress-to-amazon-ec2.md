---
published: true
title: "Migrating Wordpress to Amazon EC2"
id: "5648"
slug: "migrating-wordpress-to-amazon-ec2"
author: rv
date: 2013-06-16 22:56
categories: Tech
---
This is not quite a guide to migrating your Wordpress blog to EC2, but having just gone through the process I thought I'd highlight some of the stuff that I had to deal with.
<h2><strong>Why move?</strong></h2>
<a href="https://s3.amazonaws.com/cfwblog/uploads/2013/06/25449560.jpg"><img class="aligncenter size-full wp-image-5652" alt="25449560" src="https://s3.amazonaws.com/cfwblog/uploads/2013/06/25449560.jpg" width="237" height="213" /></a>

For me, this was obvious. My blog was previously hosted on Bluehost's shared hosting plan. Lately response times have been getting worse and worse and I've even seen the occasional downtime. They were very much worth the money when I first signed up with them, but times have passed them by. I already have the infrastructure in place in EC2 to self-host, so it's about time I made the plunge.

<strong style="font-size: 1.5em;">Setting up the Amazon environment</strong>

This involved setting up an RDS instance with a micro database to host the Wordpress database and granting access to it from the EC2 instance. After that was done I had to install PHP + MySQL bindings, and Apache. What a pain this turned out to be. The default Apache install did some things that  I really didn't want, and finding the right configuration file to edit took forever. In the end I managed to enable mod_rewrite support (which was installed by default but not enabled for my www dir) and turn off folder indexing.

I mounted an additional volume to my instance for the uploaded files, a collection which has grown to several hundred megabytes over the years. As usual, Amazon's management console is full of buttons and screens that I don't know the meaning of, but stackoverflow and Google helped me find the right way to create, attach, mount and format the additional volume. Symlinked it into the Wordpress folder and off we go.

Uh, nope. Forgot to allow my EC2 instance to access the RDS database. Then I had tweaked the database dump a little to use InnoDB instead of MyISAM (come on, MyISAM in 2013, really?). After the dump was complete I ran some queries to change the absolute paths of images to relative ones so I could actually test to see if my new Wordpress install was working.
<h2><strong style="font-size: 1.5em;">Configuring Wordpress</strong></h2>
<a href="https://s3.amazonaws.com/cfwblog/uploads/2013/06/1357963301931.jpg"><img alt="1357963301931" src="https://s3.amazonaws.com/cfwblog/uploads/2013/06/1357963301931.jpg" width="450" height="268" /></a>

First off, it took me forever to get permission right. I'm not really experienced with Linux configurations, so even tiny stuff like figuring out the username of the account that runs Apache took me a while to find out. The chmod syntax and adding users to a group and a group to a folder always baffles me, so this was a frustrating uphill climb.

But eventually I got there, and managed to produce the front page of my blog in my browser. Unfortunately none of the permalinks to articles worked, which triggered another quest to get Apache to respect the .htaccess files properly. All this followed by more chmodding, of course. Wouldn't want it to be too easy, now.

At this point I started to realize that a lot of Wordpress plugins simply won't work. I used WP Minify to minimize and bundle the CSS and JS files of my blog. Bundling the CSS files worked fine but any request for the JS bundle resulted in an http 400 error. Eventually I found out where PHP logs its errors, which showed an obscure message about being unable to fork(). A little Googling suggested that PHP didn't have enough memory to spawn a new process, so after spending yet more time finding out where php.ini lives I increased PHP's memory from 128MB to 256MB. This didn't solve the problem, so I followed the second suggestion, which was to add a swap file to my EC2 instance. I would never have figured out how to do this if someone didn't already paste the exact commands in an answer on the internet somewhere. Regardless, it didn't work. According to a third answer EC2's micro instance just doesn't have enough memory, and raising the memory to 1GB should fix it. My reaction to that answer: "Fuck you, PHP, you don't need a whole fucking gigabyte of memory just to minify 100kb of javascript", so I turned off the plugin. Piece of crap.

The next problem I ran into is email. In all fairness, I haven't actually bothered to set up PHP's email system properly. Apparently email send settings are a global thing in PHP, probably hidden away in that giant config file somewhere. I installed WP-SES instead, which lets you send email via the Amazon SES email service. However, this plugin crapped out on me every time after I filled in my secret key without so much as an error message anywhere, just showing a blank page without any way to proceed. I uninstalled it and tried Amazon SES DKIM mailer instead, which worked like a charm. Well, mostly.

Another useful plugin I had installed was a backup plugin that creates a dump of the Wordpress database every week and emails it to you. Sadly, this plugin failed to send email with the SES/DKIM mailer plugin installed because... no idea. I uninstalled it too and now rely on Amazon's RDS snapshot service. I don't feel confident about that yet though. Need to spend more time understanding what it actually does.
<h2><strong>The result</strong></h2>
The blog feels faster to me. Pingdom stats tell me it's not. But it's not worse either. I'll monitor it for a while and post an update later. Before undertaking this endeavor I seriously considered writing my own blog platform in Django just for shits and giggles, but as I started listing out features of my current blog I realized it would take me a long time to replicate the same behavior, and I'd probably never finish it. Migrating the whole Wordpress shebabble took me at least 6 hours, but at least now it's under my own control. I get to improve it as I see fit.
<h2><strong>Still to do</strong></h2>
Speaking of improvements, some of the obvious improvements I want to make have to do with static files. I want to try out Amazon's content delivery network for resources and uploaded files, in combination with S3. I did find a plugin for Wordpress called WP2Cloud which lets you upload files to S3 instead of the local filesystem. But to enable that you have to install a custom cloud storage engine for MySQL. Seriously? My database is managed by Amazon so I'm not able to do that, but even if it was possible, that is probably the worst possible solution to the problem. Wordpress is already horribly linked to MySQL, don't make it worse by requiring a weird MySQL extension. Then again, this is PHP-land, where anything's possible, and if it's ridiculous enough, it's already been done by someone.

Instead of weird Wordpress plugins, a quicker and easier solution would be to slap on Nginx to serve the static files and bypass Apache. It would also be easy to modify existing content to point to S3, but I'm not sure how easy it is to insert new images into S3 dynamically (without having to resort to changing my database storage engine). Something for another time, perhaps.<a href="https://s3.amazonaws.com/cfwblog/uploads/2013/06/1357963301931.jpg">
</a>

<a href="https://s3.amazonaws.com/cfwblog/uploads/2013/06/Clipboard01.jpg"><img class="aligncenter size-full wp-image-5651" alt="Clipboard01" src="https://s3.amazonaws.com/cfwblog/uploads/2013/06/Clipboard01.jpg" width="400" height="274" /></a>