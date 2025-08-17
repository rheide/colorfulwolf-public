---
published: true
title: "Androiding..."
id: "926"
slug: "androiding"
author: rv
date: 2009-02-21 14:07
categories: Tech
---
I took up the challenge today and finally installed the SDK on my home PC. The last time I tried Android was quite a while ago, and a lot has changed. After reading the documentation I was quite excited to start programming. The docs were clear, and I had a feeling I understood how to do stuff. As with all environments it takes a while to get used to the way it handles files, user interfaces, coding standards etcetera, but it didn't take long to get into. I ran into real difficulties after trying something slightly more advanced (but not much!). 

I'm trying to write a test application that accesses the mobile phone's camera and displays the output. Since Android development happens through an emulator, I cannot actually get any real camera output. Fortunately someone else had the same thought and wrote a<a href="http://www.tomgibara.com/android/camera-source" target="_blank"> page</a> on how to get a live preview using an Http webcam source instead. Problem number one. The Android SDK has since been updated and the source files for using the webcam were outdated. After updating them I tried again, and failed again. Forgot to set the applications permissions. No big deal. Tried again: fail. 

It seems that I can't make a canvas from a bitmap if the bitmap is immutable. Fixed that, but now my application closes as soon as it starts up. When I try to debug the program, it seems that the entire app just shuts down when I call new Canvas(bitmap)... I'm sure this is a trivial problem that can be fixed easily, but I just can't find how to fix it. In the end I tried to download the source code of the Canvas class, and failed!!@! Apparently Android is open-source as long as you have Linux or MacOS, but Windows users are excluded from looking at the source code. It even says so on the <a href="http://source.android.com/download" target="_blank">web site</a>.:  "Building under Windows is not currently supported". Well, that's just great. 

So I have to install Linux and download 2.1gb of source files just to look at the source code of one tiny class? Either I overlooked something very obvious or Google hasn't quite streamlined the developer experience yet. Well, it's a young system with a lot of promise. I'm sure it will improve in the future. For now, I'm calling it a day. Maybe I'll have more luck tomorrow. The Ubuntu distro download should be finished by then :D