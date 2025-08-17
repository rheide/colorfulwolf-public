---
published: true
title: "iPhone rocket launcher"
id: "2186"
slug: "iphone-rocket-launcher"
author: rv
date: 2010-03-11 12:56
categories: Tech
tags: accelerometer,iphone,rocket launcher,usb rocket launcher
---
A <a href="http://www.thinkgeek.com/interests/techies/8a0f/" target="_blank">USB rocket launcher</a> is a nifty desktop toy with which you can threaten your neighbouring cubicles with missile attacks. You can control the movement and firing of the launcher via USB with a program running on the PC. Being bored at work during lunch time gave rise to the idea of controlling the launcher using the iPhone. Turns out I'm <a href="http://dgwilson.wordpress.com/2009/04/05/usb-missile-launcher-nz-iphone/" target="_blank">not</a> the first one to try this, but it was an interesting experiment nonetheless.

<iframe width="420" height="345" src="https://www.youtube.com/embed/PJJr121yp2k" frameborder="0" allowfullscreen></iframe>

The <a href="http://dgwilson.wordpress.com/2006/12/13/usb-missile-launcher-14d-release-dreamcheeky-support/" target="_blank">SharpLauncher</a> source code was a great help in building my own RocketServer, listening on a RocketSocket for RocketConnections from basically anywhere. I made two rather plain-looking iPhone apps to control the launcher. One app uses buttons, and the other one uses accelerometer values to control the movement.

Since I'm not going to have time to work on this in the near future, I decided to post the source code here, hereby released to the public domain. Have you have fun with it :)

<a href="https://www.colorfulwolf.com/rocket/iPhoneRocket_src.zip" target="_self">iPhone application source code</a>

<a href="https://www.colorfulwolf.com/rocket/RocketSocket2.zip" target="_self">Server binary</a> (Update 2010-03-18: fixed a stupid bug)

(Usage: should run fine without any parameters. If it fails, try giving it your public IP. Eg: RemoteRocketController 192.168.0.x)