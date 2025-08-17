---
published: true
title: "Fun with Square Codes"
id: "3751"
slug: "fun-with-square-codes"
author: rv
date: 2011-02-16 00:24
categories: Tech
tags: applet,django,java,python,qr code,square code
---
This is a <a href="https://en.wikipedia.org/wiki/QR_Code" target="_blank">qr code</a>:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2011/02/07.png"><img class="aligncenter size-full wp-image-3742" title="07" src="https://s3.amazonaws.com/cfwblog/uploads/2011/02/07.png" alt="" width="410" height="410" /></a>

It's used to embed data inside of it, which can then be scanned by a large variety of devices. It's widely used in Japan to advertise links to web pages, which are otherwise difficult to type on a small device like a mobile phone. But they can be used for all kinds of things. All in all it's a very cool technology, so I wanted to experiment with it.

Python and Django are my server of choice, so I started looking for a library to generate square codes in Python. I soon wandered upon <a href="http://code.google.com/p/pyqrnative/" target="_blank">pyqrnative</a>, which is a port from a javascript version, apparently. It's very compact and easy to use. Generating images was a piece of cake. I had Django serve dynamically generated images in no-time.

But how to read these images client-side? Since I recently dabbled in <a href="http://opencv.willowgarage.com/wiki/" target="_blank">OpenCV</a> and JavaCV I learned of an easy way to access the webcam in Java, so I made a Java implementation. This step was not very difficult, so I decided to make things harder on myself by embedding the webcam part in a Java applet, so it could run from a website.

I had a bit of trouble here, as accessing native libraries (using <a href="http://jna.java.net/" target="_blank">Java Native Access</a>) proved quite difficult. I had a lot of trouble figuring out where JavaCV was loading its dll files from, and it took me a good half hour to debug it. A list of paths to OpenCV are hardcoded in the JavaCV source code. I wanted to include the dll files dynamically, which seemed near impossible. What's worse, removing or adding paths did not seem to make any difference as to whether JNA could find the dlls or not. I finally tracked it down to one folder: /usr/local/lib was the folder where my libraries were being loaded from. Which is damn peculiar, because that's a Linux folder and I'm running Windows 7. I suspected cygwin at first, but the problem was not that: When specifying the /usr/local/lib folder, jna looks for all folders in the system variable called jna.library.path, which contains the system path by default. Very obscure...

Having figured that out I could continue building the applet. I had jump through a bunch of hoops to get it to work, namely signing the applet (which is a very good thing considering I'm running native code that accesses a webcam!) and figuring the right tags to put in the HTML. HTML tags for applets are a big bloody mess, there's no standard at all. There's a deprecated <em>applet</em> tag, an <em>object</em> tag for IE and an <em>embed</em> tag for Mozilla (which also works in Chrome). I chose the embed tag for now.

There's a <a href="http://download.oracle.com/javase/1.4.2/docs/api/java/applet/AppletContext.html#showDocument(java.net.URL)" target="_blank">nice method</a> in Java's AppletContext class which lets you change the browser's document's URL. It also allows you to execute arbitrary Javascript, so you can call a javascript function that does an ajax call back to the server that can update the web page! It's all very roundabout and takes three languages and a whole bunch of libraries to get going, but it's quite cool once it works. Here's a video of the result:

[youtube=https://www.youtube.com/watch?v=Fj1UPSs9pFw]