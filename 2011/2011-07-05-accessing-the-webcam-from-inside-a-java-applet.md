---
published: true
title: "Accessing the webcam from inside a Java Applet"
id: "4244"
slug: "accessing-the-webcam-from-inside-a-java-applet"
author: rv
date: 2011-07-05 15:50
categories: Tech
---
Update 2017: to everyone reading this, this article is <strong>old!</strong> Links are broken and the method described is definitely no longer the best way to access your webcam in Java. I recommend reading up on Java Native Interface (JNI) instead. Alternatively, a great way to interface with your webcam is to use Javascript directly from the browser. Javascript: the definite guide is a great book if you want to get started with that.

-------------

These days there's not a lot of Java applets left on the interwebs. Off the top of my head, the only one I can think of that I still use is the one on keepvid.com, and I'm mighty suspicious of it every time I run it. This article is by no means a pro-applet one, although I do believe they still have their uses. Whether or not accessing the webcam is a valid usage is something I'll leave you to decide.

Some background info: I researched the wonderful <a href="http://opencv.willowgarage.com/wiki/" target="_blank" rel="noopener">OpenCV </a>library a while back when looking into image recognition. It has a Java port called <a href="http://code.google.com/p/javacv/" target="_blank" rel="noopener">JavaCV </a>which allows you to access the webcam in Java. Another personal project of mine dealt with QR codes, so I felt compelled to somehow combine the two into a single technolurgic monstrosity. The result was a bit hacked together, but it works. So I thought I'd share it.

Get the source code here:&nbsp;<a href="https://github.com/rv/WebcamApplet">https://github.com/rv/WebcamApplet</a>

Or just get the Eclipse project from here: &nbsp;<a href="https://www.colorfulwolf.com/dev/cam/WebcamApplet.zip" target="_blank" rel="noopener">https://www.colorfulwolf.com/dev/cam/WebcamApplet.zip</a>

Lastly, for a demonstration, go here:&nbsp;<a href="https://www.colorfulwolf.com/dev/cam/demo.html" target="_blank" rel="noopener">https://www.colorfulwolf.com/dev/cam/demo.html</a>

&nbsp;

Here's how it works. JavaCV uses a library called JNA (Java Native Access) to directly access the OpenCV libraries on the client's computer. But for that to work, the libraries must first be present. The applet, after starting, downloads the OpenCV libraries to a temp folder, and then sets the system property <em>jna.library.path</em>&nbsp;to include that temp folder.&nbsp;&nbsp;Then the webcam can be initialized and accessed via JavaCV.

The whole download is quite heavy. The jar libraries weigh in at about 2 megabyte, and the opencv native libraries are another 2.7 megabyte (compressed). I made it so that the opencv libraries are not downloaded again after the first run, which helps a bit. Still, it's a long way from just doing a simple API call.

The demo recognizes <a href="https://en.wikipedia.org/wiki/QR_code" target="_blank" rel="noopener">QR code</a>s and displays the corresponding text in a textbox in the browser. It's possible to call a Javascript function from inside the applet, so you can send your results to the browser, which is then free to do anything it wants with it, including making an AJAX request to fetch information based on the QR code.

Any feedback is appreciated of course. Feel free to fork the github code and play with it, as I probably won't have time to work on this in the future.

&nbsp;