---
published: true
date: 2021-03-07 15:04
title: Legobot + Base Station 1.0
categories: Tech
tags: lego,legobot,raspberry pi
type: article
slug: legobot-base-station-10
author: randy
---
It's been <a href="/blog/2019/01/19/raspberry-pi-powered-legobot-latency/">a while</a> since I wrote about my ongoing hobby project of building a Lego Raspberry Pi tracked vehicle. I've been working on it on and off since the last post, so here's a bunch of updates.

<a href="https://cfwblog.s3.amazonaws.com/uploads/2021/2021-03-07-Legobot.jpg">
<img class="aligncenter"   src="https://cfwblog.s3.amazonaws.com/uploads/2021/2021-03-07-Legobot-sml.jpg" />
</a>

I finally made the plunge and bought a <a href="https://amzn.to/3v3RQdO" target="_blank" >Raspberry Pi UPS Hat</a> (note: does not come with batteries). The reason I held off for so long was mainly for two reasons: the capacity is lower than a separate USB power bank, and I didn't want to faff about with custom wiring and having to worry about short-circuiting things. I ended up caving in because the UPS hat just wasn't that expensive, and faffing about with custom wiring means the end product can be a lot smaller.The big gain you get from a UPS hat is that actually unintterrupted. With every single USB power bank I tried there was always a blip in voltage when plugging the power bank in to mains power that caused the Raspberry Pi to reset itself. No such issue exists when you're using a UPS Hat, and the 2.5A output is more than enough to power two Lego Power Functions XL motors at 8.4V.

Things worked out really well with the UPS hat. Previously I had a separate converter that stepped up the external power bank's 5V USB Power to 9 or 12 volts, which then went into the ThunderBorg motor controller. I found that with the UPS Hat I can pipe the 8.2V input power straight into the ThunderBorg and it's more than enough to drive the two tracks. I ended up having to add an additional switch, because hooking it up to the input power means there's no real way to turn off the power at all, since the ThunderBorg ends up powering the Pi if the UPS hat power switch is turned off. A bit weird, but all in all a lot more compact than my previous solution.

With things getting closer to a finished product I also shortened the Lego power cables, which I had kept intact so far, and was hooking into them with awkward DuPont cables that took up a lot of space. I also made the camera mount more compact by removing the ability to rotate horizontally.

With so much space saved, I managed to add in an additional motor to the front of the vehicle. This motor doesn't connect to anything when the vehicle is driving around. When docked into the base station, this motor can drive any kind of functionality supported by the base station. As you can see from the video below, the base station I built has a retractable ramp which is powered by this custom front motor. Another idea I have is to build a lift for it so I can make the bot look out the window.

<iframe width="560" height="315" class="aligncenter" src="https://www.youtube.com/embed/8eCqjllyR1I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I had originally planned to have a worm gear somewhere in the base station winch assembly, but then I figured that the motor resistance is easily enough to hold up the ramp when docked. Plus, as you can see from the second half of the video, you get this cool rapid ramp drop effect just by driving the bot backwards out of the docking station without having to lower the ramp through the winch motor.

The UI shows the video feed and various control buttons for all the motors and lights. It's not clear from the video, but the status bar shows information about battery charge, wifi signal, current wattage, motor voltage and so on. The UPS hat came with a Python library to read the charge percentage, but it did not compensate for the nonlinear dropoff of Li-ion cells, so I had to write a layer on top of that to get a somewhat predictable battery percentage out of it. It's not perfect, but good enough.

Software-wise it's all quite messy. I've been meaning to publish the finished product on github, but the last time I seriously looked at the code was a couple of years ago. The video streaming solution was very unprofessional and optimized to work for the first Raspberry Pi. It definitely needs some polish before I can publish it. But once the software has been published I think I can officially consider this project done. I can't believe I've been at this for several years now. I'll have to find a new hobby..
