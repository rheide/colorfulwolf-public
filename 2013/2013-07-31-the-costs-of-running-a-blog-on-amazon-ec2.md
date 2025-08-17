---
published: true
title: "The costs of running a blog on Amazon EC2"
id: "5758"
slug: "the-costs-of-running-a-blog-on-amazon-ec2"
author: rv
date: 2013-07-31 11:30
categories: Tech
---
Last month I migrated this blog from a shared hosting provider to EC2. Wordpress was already using WP supercache, and I've set up <a href="/blog/2013/07/19/nginx-woohoo/">nginx</a> to serve any cached and static content. All of the uploaded images pre-migration I moved to S3 to reduce bandwidth cost. I was planning to set this up automatically or hack into Wordpress to upload to S3 by default but didn't really find the inspiration to, or the necessity.

The month of the migration I uploaded about 800MB worth of images onto S3 and, because of not thinking things through very well, also uploaded the same set to EC2. I installed a whole bunch of software in order to get the Wordpress installation up and running. For about one whole day the EC2 instance experienced a quirk which caused a constant 100% CPU usage, driving up the cost. Since then this blog has been steadily serving anywhere between 50 and 150 views per day.

Interestingly enough response times in Pingdom went down initially, but seen settled between 800ms and 1000ms. Testing manually results sub-300ms times, so it's probably because the micro instance that comes free with AWS has to spin up for each request. This blog doesn't quite get enough traffic to warrant buying an always-on instance.

Anyway, here's the costs:
<ul>
	<li>Initial data migration - first month cost: <strong>$5.46</strong></li>
	<li>Second month cost: <strong>$0.50</strong></li>
</ul>
Amazon is great.