---
published: true
title: "Raspberry Pi controlled Lego car part 3"
id: "6864"
slug: "raspberry-pi-controlled-lego-car-part-3"
author: rv
date: 2017-03-05 15:26
categories: Tech
tags: lego,power bank,raspberry pi,usb battery
---
Things have not gone smoothly since the last post. I can't seem to stop spending money on this..

Last time my goal was to build a two two-speed&nbsp;gearboxes, connected via a gear switch lever, controlled via servo motor, that will allow me to switch both gearboxes simultaneously via the Raspberry Pi. I have absolutely no reason to do this. The car will work just fine with only one gear. It just seemed like an&nbsp;interesting thing to do. It led to me researching some rather <a href="https://en.wikipedia.org/wiki/Cross-drive_steering_transmission" target="_blank" rel="noopener">complicated things</a> on Wikipedia, but given&nbsp;that I&nbsp;only have one differential and (despite&nbsp;what these posts might make you believe) am trying to keep it simple, I decided to go with the dual gearbox option. I had already bought extra parts for this and felt too stubborn to give up on it.

That was a few weeks ago. Here's what I initially came up with.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-11-19.50.00.jpg"><img class="aligncenter size-medium wp-image-6865" src="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-11-19.50.00-400x300.jpg" alt="" width="400" height="300"></a>

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-11-22.02.03-1.jpg"><img class="aligncenter size-medium wp-image-6866" src="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-11-22.02.03-1-400x300.jpg" alt="" width="400" height="300"></a>

The first image shows the interior: the M motor controls two mini&nbsp;actuators. You can see the top one, there's a bottom one as well controlling the axis in the other direction. The second image shows both gearboxes attached. I had to give up my plan to use the servo motor almost right away,&nbsp;because getting the gearing right for the servo motor to shift the axis exactly 1 block left or right proved nearly impossible, and very easy to go wrong&nbsp;over time. In this&nbsp;first design I&nbsp;had planned to use the regular M motor with a clutch gear to make it stop when it reached the end of its travel, but&nbsp;due to the way I connected the gears it didn't quite work. I also realized during building this that I couldn't have two identical gearboxes; I had to mirror the design in order for the gear-shift actuators to select the same gear every time.

This design was way more sturdy&nbsp;than the one from the previous post, but still not quite study enough. Other than that there are two major problems with this design. The first is that it is just massive. Both driving axes are mounted very far away from each other, meaning&nbsp;I needed lots of tracks to connect the two. My prototype&nbsp;had completely flat tracks in-between the two axes, which resulted in a massive contact surface with our thick carpet. The prototype was geared the same way as previous ones, but simply did not have enough power to move.

The second problem is the way it shifts the gear-shift axes. Each actuator is connected to gear axle with only one point, so in order to shift gear it either performs a push or a pull motion. There's nothing stopping the actuator mount point from shifting other than two little stoppers on the axle. This turned out to be rather weak, and they ended up getting pushed or pulled away from the bit that connects the actuator to the axle, making&nbsp;its range wider and wider until it just stopped working completely after a few shifts. Fail.

Last time I mentioned that the USB-to-9v cable that I bought was faulty, and that I was actually able to power both the Pi and the motors from&nbsp;a single USB battery pack. This turned out to be mostly&nbsp;true,&nbsp;yet ended up not helping me in any way. I bought a new USB-to-9v cable, and this time it did work correctly on my battery pack of choice I was using, a Tecknet 10000mah pack, which is very thin and easy to hide inside the Lego. Sadly I found out after getting the new USB cable that this battery pack doesn't provide the amperage needed to power two&nbsp;XL motors at the same time. It just barely manages, but as soon as you put some load on it then it shuts down and doesn't restart.

That led me into yet another unexpected quest: that of finding the perfect USB battery pack: one that has two USB connectors for input, plenty of amps on each output, and ideally allows for passthrough charging without&nbsp;blipping the power or requiring you to press a button after plugging/unplugging.&nbsp;I have spent a long time searching for a suitable battery pack on the internet and have found absolutely nothing that satifies all of these requirements. There's plenty of powerful battery packs, even powerful battery packs that allow passthrough charging, but none of them do it without blipping the power or requiring a button push to resume. There are some boards for the Raspberry Pi that allow multiple power inputs, which&nbsp;I think would work&nbsp;for autonomous recharging. That's yet more&nbsp;money to spend on this though, and makes things even more complicated, so I'm holding off on that for now.

Eventually I tore apart the previous prototype and started&nbsp;on a new gearbox assembly. I considered building&nbsp;the gearbox bit vertically, but eventually decided to go horizontal again for the sake of simplicity. I&nbsp;increased the length of the gearbox axles by one, which allows me to&nbsp;connect to the gear-shifting axle on both sides rather than on just one side, so there's no issues any more with the axle shifting from too much pushing or pulling.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-23-21.32.21-2.jpg"><img class="aligncenter size-medium wp-image-6867" src="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-02-23-21.32.21-2-400x403.jpg" alt="" width="400" height="403"></a>

Instead of using two&nbsp;actuators this version can do the shifting with just one actuator, which controls the two shifting arms connected to the gearboxes.&nbsp;I'm using a clutch gear directly on the M-motor used for shifting (not pictured in the picture above but it connects directly to the small gear on the top right).&nbsp;Some bits of the shifting arm&nbsp;have some tolerance, so that combined with the clutch gear seems to result in quite satisfying gear shifts.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-03-05-12.00.24.jpg"><img class="aligncenter size-medium wp-image-6868" src="https://s3.amazonaws.com/cfwblog/uploads/2017/03/2017-03-05-12.00.24-400x265.jpg" alt="" width="400" height="265"></a>

Above is a picture of the latest gearbox core in yet another prototype shell. It ended up still being quite wide because I wanted to keep it modular, so I can take apart both sidewall tracks quite easily&nbsp;to access the gearbox core. In the end I just piled up all the non-Lego components on top in order to test it out. There's still plenty of space inside so my goal of&nbsp;having a flippable robot that willwork on both sides is quite attainable.

I found out&nbsp;that in the current setup the highest gear doesn't really work for turning, most likely because there's still a fair bit of contact area. I think I can gear it down by 1.5x/1.67x and it'll be perfect. I also&nbsp;need to buy a new USB battery pack, so the final design will depend a lot on the dimensions of that. I haven't decided yet which one. More to come&nbsp;much later because I'm off cycling from next week!

Still to do:
<ul>
 	<li>Fix the gearing.</li>
 	<li>Make it&nbsp;lower.</li>
 	<li>Get better USB battery that allows for more amps.</li>
 	<li>Buy UPS circuit so I can build a charging station.</li>
 	<li>Hook up the Raspberry Pi camera, camera motor and lights.</li>
 	<li>Decrease track&nbsp;contact surface with ground if possible.</li>
 	<li>Build internal compartments for&nbsp;the electronics and the battery.</li>
</ul>