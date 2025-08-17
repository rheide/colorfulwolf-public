---
published: true
title: "Text Detection in Images"
id: "3673"
slug: "text-detection-in-images"
author: rv
date: 2011-01-26 15:39
categories: Tech
tags: text detection
---
That's the search term I've been using to find areas of an image in which text is present, with the idea of pushing it through an OCR library once I've identified the right areas. Unfortunately text detection is a seriously tough problem, and countless papers have been written on the topic. I read a bunch of them today, and they range from idiotically simple to well beyond my comprehension. I took one of the simple ideas and implemented it upon what I built earlier this week. Here's the output.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2011/01/out.jpg"><img class="aligncenter size-medium wp-image-3674" title="Out" src="https://s3.amazonaws.com/cfwblog/uploads/2011/01/out.jpg?w=300" alt="" width="300" height="225" /></a>

The paper itself suggested a rather basic (read: stupid) approach to edge detection, which I quickly did away with in favor of the <a href="https://en.wikipedia.org/wiki/Canny_edge_detector" target="_blank">Canny edge detector</a> of OpenCV. The basic approach is like this:
<ul>
	<li>Massage the image to make it easy to detect edges</li>
	<li>Detect vertical lines that have the most edges OR have a very large difference with its surrounding lines</li>
	<li>Detect the first and last 'high intensity' horizontal lines to crop the area already obtained by vertically slicing the image</li>
</ul>
Given the simplicity of the algorithm it does surprisingly well. Given the complexity of the task and the desired result it does surprisingly shit.

I really want to avoid creating a home-grown solution for this problem, but it's really hard to find a good starting point for doing text detection. I hope I can find some better papers to base my next approach on. More later.

&nbsp;

&nbsp;