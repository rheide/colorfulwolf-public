---
published: true
title: "Raspberry Pi controlled Lego car part 1"
id: "6843"
slug: "raspberry-pi-controlled-lego-car-part-1"
author: rv
date: 2017-01-15 18:41
categories: Tech
tags: lego,raspberry pi
---
So, I have a fair bit of Lego lying around from my childhood days. Not&nbsp;a lot of technical parts, but enough to have some fun with. I also have a Raspberry Pi lying around after a failed experiment&nbsp;where I tried to use it as a security camera. Why not combine the two? I figured I could build a Lego car that I can control remotely via a little server on the Raspberry Pi, which would also stream its camera feed. It seemed easy enough, especially after discovering&nbsp;<a href="http://pdwhomeautomation.blogspot.co.uk/2012/11/raspberry-pi-powered-lego-car.html?m=1" target="_blank" rel="noopener">a page</a> that&nbsp;explained exactly how to make the hardware part of it work. Never did I imagine it would take this much work to get it up and running..

This post will detail the hardware iterations and setbacks I faced. The next post will go into detail about the software side of things.

So, before starting on this project, here is the list of things&nbsp;I thought I'd need to make this work:
<ul>
 	<li>Bunch of Lego: wheels, gears, other technic parts and some&nbsp;generic bricks to connect it all up. (already owned)</li>
 	<li>Raspberry Pi plus camera module. (already owned)</li>
 	<li>A USB battery pack (already owned)</li>
 	<li>Two Lego power functions motors.</li>
 	<li>A 9 volt battery.</li>
 	<li>A motor controller.</li>
 	<li>Some Dupont wires to connect it all up.</li>
</ul>
<h3>Version 1</h3>
I bought the M motor starter kit and a separate M motor for my first iteration. I built a very nifty motor assembly and a very strong shell structure to house the components. Here's how it looked like:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v1.0.jpg"><img class="aligncenter size-medium wp-image-6844" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v1.0-400x300.jpg" alt="v1.0" width="400" height="300"></a>

It is thus that I found out that I should never overengineer before testing. While building the thing I discovered that I didn't have the parts required to drive all six wheels, so I chose to just drive the middle wheels instead. I figured that by gearing down a bit it should be fine. Much nope. The M motors were way too weak to power the construction, which was already quite heavy from the USB battery pack, but weighed down even more because of&nbsp;its overengineered sturdiness. Having just the center wheels powered was also a terrible decision. Fail.
<h3>Version 2</h3>
<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v2.0.jpg"><img class="aligncenter size-medium wp-image-6845" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v2.0-400x286.jpg" alt="v2.0" width="400" height="286"></a>

I built this is a test version to experiment with gear ratios and to see if in a lighter version the M motors would&nbsp;have enough power to drive the car. Answer: not really. I got it to go forward and backward pretty decently, but I still didn't have the parts required to power all the wheels, so the motors were not strong enough to turn the whole thing without a steering assembly. Fail again.

So I had two options at this point. Option one was to build a rack-and-pinion steering assembly, for which I had the parts available and did end up experiment with, but in the end I wasn't happy with its turning radius and how I'd either have to buy a servo motor or have an 'unclean' solution with a clutch gear to handle the stopping at the end of&nbsp;the wheel turning axis.

Instead, I went with option two:&nbsp;throw more money at it. I bought two XL motors and a crapload of caterpillar tracks. That'll give me the power and the grip I need to build something really nice.
<h3>Version 3</h3>
..or not. It does look impressive though. Here's a test build with the power functions battery box instead of the external 9 volt battery.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.0-test.jpg"><img class="aligncenter size-medium wp-image-6846" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.0-test-400x291.jpg" alt="v3.0-test" width="400" height="291"></a>

At this point I was still powering the motors via a separate 9 volt battery.&nbsp;I figured that, since my USB battery had two USB connectors, I could use it to power the motors as well, so I ordered a <a href="https://www.amazon.co.uk/gp/product/B01IM3FNQW/ref=oh_aui_detailpage_o01_s00?ie=UTF8&amp;psc=1" target="_blank" rel="noopener">USB-to-9-volt</a>&nbsp;cable from Amazon. That should help me save some weight by not having to put in two batteries. Sadly, this did not go well.

USB batteries are pretty smart. So smart in fact, that they only output power if they think something's plugged in. The&nbsp;USB-to-9-volt cable worked fine on a powered usb hub, but&nbsp;every time I'd try to hook it up between the battery and the motor controller it would simply not turn on. Crap.

I found another USB battery, which is actually a battery used for starting cars that happens to have a USB port on it. This one did&nbsp;always keep the power on if I plugged in the USB-to-9V cable. Good! Except it only had one USB port, so I couldn't also power the Raspberry Pi from it. So I ended up with two USB batteries and over double the original weight..

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.0-final.jpg"><img class="aligncenter size-medium wp-image-6847" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.0-final-400x300.jpg" alt="v3.0-final" width="400" height="300"></a>

The big green thing is the car-charging battery. Even without the second battery the 3:1 gearing wasn't quite powerful enough to rotate this monstrosity when on certain surfaces, such as medium-thick carpet. Once again, fail. And once again, I spent way too much time overengineering the construction without testing it first&nbsp;with its full weight.
<h3>Version 3.5</h3>
I figured I'd try to keep the next version as small and light as possible and worry about motor powering and recharging issues later. I managed to build a pretty small prototype.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.5-test.jpg"><img class="aligncenter size-medium wp-image-6848" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.5-test-400x300.jpg" alt="v3.5-test" width="400" height="300"></a>

Now,&nbsp;I had one option left to avoid the use of two batteries. The big green car charger battery did, in addition to its one USB port, come with a 12V output. It's not the 9 volts that the Lego motors need, but I did find at least <a href="http://www.sheepo.es/2015/05/tips-and-curiosities-power-functions.html" target="_blank" rel="noopener">one link</a> claiming that the motors should run fine on 12 volts as well. I had previously done this as a child when connecting an old technic 9V motor to my 12V Lego train controller, which gave it quite a nice speed boost as well. I figured this would be an acceptable trick. I butchered an old power supply, cut off it's circular connector and used it to connect up the green battery's 12V port up to the motor connector.

To avoid any more gearing issues I added another axis, bringing the final ratio down to 9:1.&nbsp;The build ended up much&nbsp;larger than I had intended, but still smaller than v3.0. With better gear ratios and a higher voltage to the motors.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.5-final.jpg"><img class="aligncenter size-medium wp-image-6849" src="https://s3.amazonaws.com/cfwblog/uploads/2017/01/v3.5-final-400x300.jpg" alt="v3.5-final" width="400" height="300"></a>

You may notice the second battery sticking out at the end of this bulky thing, despite the fact that the green battery has a free USB port thanks to the makeshift 12V connector. This is because the stupid battery&nbsp;doesn't let you use both outputs at once. It just turns off one or the other. Not ideal!

I'm still annoyed at this but don't have an immediate solution. The reason I spent so much effort trying to get everything onto one battery was because I intended to build a little wall charging station, so I can drive the robot into the charging station, which will connect the charging port of the USB battery onto a USB wall socket. I gave this a try with the double-ported battery while the Raspberry Pi was connected, and sadly it resets the Pi as soon as the charging connector is plugged in. Crap times two. I haven't tried this trick with the green battery, but that's pointless anyway since it only lets you use one device at a time.&nbsp;Looks like I won't be able to charge&nbsp;the thing remotely while it's running.

V3.5 still has a whole bunch of issues. It works great in terms of&nbsp;motor and track performance though. It moves and turns fantastically. even loaded with two bulky batteries. The motor placement isn't great though; they're way too close to the ground. I need to fix that in the next version. It's also longer and wider than it needs to be. Once I get a solution to the two-batteries issue I'll decide on how large the next version will be. I'm also thinking about buying the servo motor and using it to power a small gearbox, but I'd also need to buy more technic gears and axles for that, and I've kind of already spent&nbsp;way more on this project than I thought I would spend..

For now though, I'll stick with this hardware design and focus on getting the software up and running. More on that next time.

&nbsp;