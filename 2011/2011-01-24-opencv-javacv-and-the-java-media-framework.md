---
published: true
title: "OpenCV, JavaCV and the Java Media Framework"
id: "3664"
slug: "opencv-javacv-and-the-java-media-framework"
author: rv
date: 2011-01-24 16:34
categories: Tech
---
A friend told me about a very cool project called <a href="http://opencv.willowgarage.com/wiki/" target="_blank" rel="noopener">Open Computer Vision</a> (OpenCV). It's a library that contains a whole bunch of useful functions that you'll absolutely need if you're doing any kind of image processing. It has a Java wrapper as well called <a href="http://code.google.com/p/javacv/" target="_blank" rel="noopener">JavaCV</a>, which internally makes native system calls to the OpenCV C++ library. I played with it a bit today and I was very impressed. Unlike every other open-source project I ever downloaded, this one actually works out of the box. No messing around with libraries, OS-dependent settings and whatnot. Just put the jars in Eclipse and everything works. Brilliant.

I played a bit with the edge detection features and figured I might as well hook it up to my webcam to see the output in real-time. I remember that the Java Media Framework was supposed to be able to interface with a webcam, but JMF has been long dead. I googled a bit but couldn't find a better alternative, so I gave the ol' JMF a try. And lo and behold, it does indeed work.

[youtube=https://www.youtube.com/watch?v=vNr7YA44x1k]

I like this stuff. It's tangible progress in the right direction.&nbsp;Now I have a great starting point to get involved in image recognition :)

If you're interested in learning more about OpenCV &nbsp;I can recommend this book: Learning OpenCV: Computer Vision in C++.