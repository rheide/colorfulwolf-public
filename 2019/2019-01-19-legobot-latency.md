---
published: true
title: "Raspberry Pi powered Legobot: latency"
id: 20190119
slug: "raspberry-pi-powered-legobot-latency"
author: rv
date: 2019-01-19 17:29
categories: Tech
tags: lego,raspberry pi
---
I've blogged before about my neverending attempts to build the perfect robot to drive around my apartment remotely. I've gone through a lot of mechanical designs, and had a lot of failures. Eventually I settled on something that was very much simplified compared to my initial ambitions, but it works alright now. It's been serving as my remote camera every time we go on holiday, so it's doing its job. Here's a writeup on the software latencies involved.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2019/2018-04-25+11.53.04PS.jpg"><img class="aligncenter" src="https://s3.amazonaws.com/cfwblog/uploads/2019/2018-04-25+11.53.04PSsml.jpg" title="Legobot, latest incarnation"></a>

At the core of this contraption is a Raspberry Pi that controls a whole bunch of Lego motors, and one set of lights. I wrote my own Python+Django web app to control access to the device from the internet. It uses <a href="https://channels.readthedocs.io/en/latest/" target="_blank">Django Channels</a> to send the user input to the server-side, where the web app controls the Raspberry Pi's GPIO ports directly. This means it's not very thread-safe, but then it was never really meant to be controlled by more than one user at a time anyway.

For the video stream, I tried a lot of different solutions, but all of them had terrible latency. The problem is that the Raspberry Pi just does not have enough CPU power to encode the video into a stream and send it over a websocket. However, after a long search, I did eventually find a solution someone else developed that's pretty nifty: it uses the native Raspberry Pi video tool to stream the raw (H264-encoded) camera stream directly to a websocket, hosted by a Node.js webserver. This means that the video stream has to be decoded client-side, in the javascript executed by the client's browser, using a nifty js library. (I'll eventually get around to placing links to these libraries, once I remember where I got them from). Turns out this works pretty well!

Here's a really terrible video that shows the latency of the controller software, as served from a web page on my mobile phone, over the phone's 4G connection, so not on the wifi.

<iframe width="560" height="315"  class="aligncenter" src="https://www.youtube.com/embed/u69eTCxLm1k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video was taken on my old Canon S110 camera, which has a super slow-mo mode which records at 240 frames per second. So, counting the frames between events, I get these results (averaged over a couple of different videos):

<ul>
<li>Time between pushing the 'lights on' button in the mobile phone browser and the UI registering the event (client-side-only lag): ~31 frames = ~129ms.</li>
<li>Time between the button being pushed, and the lights turning on in the video: ~12 frames = ~5ms. I'm guessing this is very short because the actual action is being sent to the Raspberry Pi well before the UI update begins, so it'll overlap with the first action. Time between finger push and real-life consequence: about 135ms.</li>
<li>Time until the mobile phone video stream shows the lights being turned on (since the lights actually turned on): ~55 frames = ~229ms.</li>
</ul>

All in all it's close to half a second between requesting the action, and actually seeing confirmation of the action on-screen. And that's on a fairly reliably mobile connection close to my home. It's a different story altogether on crappy hotel wifi halfway across the world, although I've also been to some amazing hotels in Japan where the speed was very similar to the speeds in this test.

Still to do: open-source the Raspberry Pi software I wrote for this. More to come!



