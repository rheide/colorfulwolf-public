---
published: true
title: "Why I won't be moving away from WordPress"
id: "6458"
slug: "why-i-wont-be-moving-away-from-wordpress"
author: rv
date: 2016-02-01 17:19
categories: Tech
tags: blog,static,wordpress
---
I've made some time for myself to do some personal projects, and one of the things that's been on my mind for the longest time was to move this blog away from Wordpress and host it statically on S3 instead. Serving a single static html page (plus a few resource files, but not many) from S3 would be so much faster than letting the shared hosting server parse endless lines of php, most of which I don't even want. The benefit in that aspect is clear, but in other areas it's less obvious.

Easy of deployment is one of the issues. I'm not bothered about not being able to post by email or mobile - whenever I have something to write I'll usually have my laptop with me. It doesn't bother me that it won't be WYSIWYG either (which it wouldn't be if I write my own blog software because I don't care about WYSIWYG). The problem is always with the software and the libraries. My software of choice for my would-be static blog is python, but I'll inevitably end up requiring some libraries that will need to be downloaded and/or set up on each machine that I want to publish from. Knowing myself, I will forget to do this before I go on a trip and end up having to download those libraries at ultra-slow speed at some hotel in the middle of nowhere. Or I might be on a public machine, which will be even worse.

Comments are another issue. If the blog is completely static I'd have to go for a javascript-based comment service. I also have old comments that will either have to be converted to the new commenting system or else inserted into the html somehow if I want to preserve them. Again, there are solutions, but they're hardly easier than what I have with WordPress.

Finally there's the issue of dynamic pages: the calendar, archive and search functionality. Calendar and archive pages are pretty easily generated, but I'd either have to remove the search function or rely on an external service for that. Bleh.

The system I had in mind would be a collection of small tools:
<ul>
	<li>A converter tool to convert a wordpress database into raw blogpost/page files (the exact format of which I would have to think about).</li>
	<li>A compiler tool that reads the raw posts and writes usable html
<ul>
	<li>Inserts content into a predefined template, I was thinking Django templates. This doesn't have to be fast.</li>
	<li>Regenerates related pages (front page, archives, calenders, category pages)</li>
	<li>Converts any markdown text to html</li>
</ul>
</li>
	<li>An uploader tool that publishes the generated html
<ul>
	<li>Would upload to S3, perhaps pluggable so other providers would work too.</li>
	<li>Would be smart enough to recognize linked images/files and upload those too.</li>
</ul>
</li>
</ul>
I'd leave the template design and making the javascript commenting system work all up to the user, since that'd be a one-off job (for me, anyway). The goal of all this is to make my life easier, but it's an awful lot of work for an awfully small amount of easiness.. Anyway, if someone else would also be interested in using something like this (or willing to pay for something like this!) then do let me know.

&nbsp;