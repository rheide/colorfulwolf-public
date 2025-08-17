---
published: true
title: "Adding tabbed pages to Wordpress"
id: "3813"
slug: "adding-tabbed-pages-to-wordpress"
author: rv
date: 2011-02-28 16:52
categories: Tech
tags: jquery,tabs,wordpress
---
As a side project I've been working on a way to get all my developing experience out of my CV and into a website. I started doing this in Django because that's what I knew best, but I decided to just implement all my desires in Wordpress. I haven't even begun adding content to my online portfolio, but I have been thinking about ways to display it. One of the things on my wishlist is tabbed pages/posts, so that's what I've been working on.

<a href="/blog/?post_type=tabbed&amp;p=3806" target="_blank">And here is the result. </a>

My implementation uses a plugin for jQuery called <a href="http://www.sunsean.com/idTabs/" target="_blank">idTabs </a>on the client-side. On the server side I registered a new page type for wordpress for tabbed pages. The tabbed pages are hierarchical. The parent page is empty, and all child pages are added to the html as divs, which are converted to tabs by idTabs. Comments are added to the main post, and can be turned off when not needed. I really should open-source this stuff some time..

&nbsp;