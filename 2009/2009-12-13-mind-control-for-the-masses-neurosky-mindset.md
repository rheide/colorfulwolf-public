---
published: true
title: "Mind control for the masses: NeuroSky Mindset review"
id: "1789"
slug: "mind-control-for-the-masses-neurosky-mindset"
author: rv
date: 2009-12-13 07:46
categories: Tech
tags: brainwave,mindset,neurosky
---
Before I start, take a look at this video:

[youtube=https://www.youtube.com/watch?v=CV411vt_51w&amp;feature=player_embedded]

<a href="http://www.neurosky.com/" target="_blank">NeuroSky </a>sells a device called the MindSet, which is basically a bluetooth headset with a couple of sensors added that measure your brain activity. They provide several applications, like the NeuroBoy game mentioned in the video and a program called Brainwave Visualizer, which shows your real-time brain activity in several cool charts, showing separate values for each of the important waves (alpha, beta, delta, theta). Besides that they also provide an API so you can program your own software with it. Sounds awesome, doesn't it? I thought so too a couple of weeks ago, but was then disappointed that they didn't ship to either Europe or to Japan. That is, until last week. I received it last Friday and have been playing with it a lot, so I thought I'd write down my impressions here.

NeuroSky did a great effort at translating everything to Japanese, much to my dismay. The first thing I did was scrounge their website to find English versions of manuals and software. Having found those I proceeded to install it. (Yes, I am one of those guys who actually reads the manual before trying something). Installation was fairly easy: NeuroSky provides a bluetooth dongle plus driver, which is easily set up. The headset then acts as a regular bluetooth headset, and provides a bluetooth virtual COM port interface for the brrainnnn data. Applications can hook in from there, or they can connect to a local service listening on a port if the provided application to do that is running.

First impressions: works straight out of the box, no trouble installing the software, and then it stops. After installing the brainwave visualizer I got some random responses on the brainwave chart, but I was unable to get any activity at all on the 'Concentration' and 'Meditation' scales, which are supposed to react by either focusing strongly on something or closing your eyes and relaxing. The manual suggested that the signal might be too weak to be used to control concentration and meditation, so I wiggled the headset around a bit, and indeed I got some response. Eventually though it took me more than 10 minutes to get the headset in a position so that the signal was at high strength (4 or 5 bars). But it worked!

<div class="caption">
<a href="https://s3.amazonaws.com/cfwblog/uploads/2009/12/brainnnnns.png"><img class="size-medium wp-image-1792" title="Brainnnnns" src="https://s3.amazonaws.com/cfwblog/uploads/2009/12/brainnnnns.png?w=300" alt="" width="300" height="195" /></a>
<div class="caption-text">Brainwave Visualizer</div>
</div>

Indeed after practicing only a tiny bit for the past three days I am roughly able to control the concentration and meditation meters with my mind, which is an awesome feeling. Unfortunately it only worked for about 30% of the time that I used it, because the signal strength was never strong enough, no matter how I wore the headset. Even after following all the instructions on improving signal quality (clean the sensors, remove hair out of the way, adjust position) the quality of the signal seemed to depend most on luck and the position of the moon. It gets worse though. At times when the signal quality is actually good it's still impossible to use the headset. Why? Well, the movement caused by the mere blink of an eye creates a spike about ten times greater than any brainwave. Don't blink. Don't move. Don't even look left and right cause that will fuck up your reading.

Despite all this I can still see the brain interface working quite well. The thing that really kills this headset is the bluetooth interface. The Toshiba bluetooth stack provided by NeuroSky is basically shit. It works about 5% of the time on Windows 7. For 5 minutes, and then it bluescreens. I have to say that I'm quite impressed: a simple bluetooth device can crash an entire Windows 7 platform, something I haven't experienced yet since I installed Win7 several weeks ago.

A final note on the user experience: the audio quality is just fucking terrible! I can't believe that a bluetooth headset's audio quality is supposed to be this poor. There is so much static and noise on the line it's just horrible. The range also seems limited to about 1 meter from wherever you plug in the bluetooth dongle, so don't think (...) about moving too far away. Also, I'm guessing thanks to the crappy bluetooth driver, the sound and the COM connection terminate randomly after some time. I tested this both on XP and Win7, but I was never able to use the headset longer than 20 minutes until either my PC crashed or the signal disappeared and I had to restart to get it to work again. Well done guys...

I really want to believe in this product. It's one of the first consumer devices that can interface with the brain, which is absolutely awesome. It's state-of-the-art technology! It's supposed to have some quirks in the beginning, right? It's not supposed to work perfectly right from the start. Well, the range of software available is as expected very narrow. There's about two or three applications available right now. But perhaps the best part of NeuroSky is that they offer an API so you can create your own programs that use the brain's information. Brilliant!

They provide you with an API in all the major languages, including Java. The API documentation is excellent, the API functions are easy to understand and the sample code is a great help. One minor negative point was that the Java class used to interface with the headset driver was located in the default package, and apparently (I found this out today) Java classes that are not located in the default package cannot access any class in the default package. In other words, my com.heidesoft.RuleTheWorldByMindControl class couldn't access the NeuroSky class. I resorted to solving this in a nasty way with reflection, which was good enough for a test, but it would certainly be helpful if NeuroSky spent just a little bit more time testing their Java driver for their next release.

So how did my programming go? Well, while programming I was using the headset to listen to music. After 20 minutes the signal disappeared, I got pissed off and gave up.

So, to summarize, here are the conditions for being able to enjoy this device. One: you are unable to move any muscle in your head. Movement destroys the signal. Two: you are deaf. If you are not deaf then the crappy sound quality will piss you off and create suicidal tendencies. Three: you have an attention span longer than 10 minutes and shorter than 20 minutes. 10 minutes is the time it takes to position the headset properly. 20 minutes is the time you have until the software crashes your pc.

As a programmer, I really, really, believe that brain-computer interface is the only way to communicate with our PC in the future. Forget about that Wii crap or hand gestures. That's just ineffective compared to directly controlling the PC with your brain. I wasn't expecting the first available consumer product for brain-computer interfacing to offer something anywhere near as awesome as this. What I was hoping for was a way to take a look at the brainwaves inside my head and perhaps write a program that can analyze them. The NeuroSky is not the device I was looking for. I wouldn't recommend this device to anyone, not even geeks like myself. I'm really sorry to say this, because NeuroSky seems like a nice company, and they seem to have the right mindset. I hope that they can improve their product in the future. Until then, there's also <a href="http://www.emotiv.com/" target="_blank">Emotiv</a>, which provides an alternative but similar approach. It's companies like these that push technology forward, even if they don't succeed all the time.

The headset's lying on my desk right next to me. Whenever I see it I feel the urge to play with it. No matter how sucky, there is a strong technological attraction. Despite all the crappiness I still want to play with it! I still feel the urge to write a program for it. Maybe I'll try again next week.

2010 update: <a href="/blog/2010/01/29/mind-control-revisited/" target="_blank">read the continuation here. </a>