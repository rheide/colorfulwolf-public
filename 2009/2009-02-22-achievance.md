---
published: true
title: "Achievance!"
id: "929"
slug: "achievance"
author: rv
date: 2009-02-22 13:37
categories: Tech
---
<a href="https://s3.amazonaws.com/cfwblog/uploads/2009/02/pic.png"><img class="aligncenter size-medium wp-image-930" title="pic" src="https://s3.amazonaws.com/cfwblog/uploads/2009/02/pic.png?w=300" alt="pic" width="300" height="209" /></a>

So I finally got the android web cam to do what I want, and I didn't even need to download the source to make it work. These two links proved extremely useful:
<ul>
	<li><a href="http://www.tomgibara.com/android/camera-source" target="_blank">Tom Gibara's Live Camera Preview</a></li>
	<li><a href="http://www.anddev.org/the_pizza_timer_-_threading-drawing_on_canvas-t126.html" target="_blank">The Pizza Timer</a></li>
</ul>
As it turns out it was a simple thing. I wasn't updating the GUI properly using <em>invalidate()</em> and I was using a <em>SurfaceView</em> instead of a <em>View</em>. I made a couple of changes to Tom's interface so that it more closely resembles Android's Camera class. So far I only included preview functionality, and this code can hardly be called stable or even good. Stilll, it might be useful for people who are getting started with Android, so I've provided a download link <a href="http://rapidshare.com/files/201156931/CamDemo.zip.html" target="_blank">here</a>. Use as you please. Since it's an Eclipse project the entry level might be a bit lower for beginners. 

Now the programming can begin! :D