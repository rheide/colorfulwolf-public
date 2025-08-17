---
published: true
title: "Blog is back online, sort of"
id: "5660"
slug: "blog-is-back-online-sort-of"
author: rv
date: 2013-06-20 19:19
categories: Tech
---
Well, that did not go well. Only days after moving to Amazon I now have an EC2 instance that consumes 100% CPU usage and doesn't allow me to log in any more. There's three options: 1. I misconfigured the server and broke it, 2. I configured the server correctly but Wordpress broke it, or 3. somebody hacked into it and broke it. My first instinct was to suspect hackers, since the instance was working perfectly fine for over 6 months, but as soon as I installed Wordpress on it and gave it a public IP, things broke. Might not be Wordpress-related, it might just be that since the public IP address was attached to it, it became a target. Ugh. For now, this blog is hosted on bluehost again. At least the database is on Amazon RDS..