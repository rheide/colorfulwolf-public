---
published: true
title: "Backing up photos"
id: "4645"
slug: "backing-up-photos"
author: rv
date: 2011-12-18 20:16
categories: Tech
---
Today I finally took some time to work on a viable solution for backing up my photos. I've been panicky about my data ever since my first hard drive crash, and I've been looking for a good solution to store my photos off-site ever since I came back to Europe. I may be overprotective of my data, but let me explain my reasoning first.

I make TONS of photos. And videos, from time to time. I do time-lapses, as you can see from the post below. I throw nothing away. On adventurous years in the past I've had more than 100GB worth of data. (For comparison, this year has been about 20GB, but I've lost interesting in photography ever since coming back to Europe. Europe sucks). This rules out any form of online storage as it's just too expensive. Besides that, it's just not permanent enough, as the data size will only increase and never decrease.

Back in Japan I started backing up my photos to blu-ray (47GB per disc) and sending or bringing them back to my parents. This worked for me because I would still have the primary copy on my home PC, which back in Japan contained a RAID-1 mirror set-up and an external hard disk for backup. That way, even if one hard disk crashed, the other one would have my photos, and if the house burned down I could still grab the external hard disk which contained the most recent ones that I hadn't sent back to my parents yet.

These days though, I have no 'proper' PC in my home, just a laptop. A bloody awesome laptop with 750GB of storage, but a laptop nonetheless. No backup drive, no RAID mirroring. If the hard disk dies, it's all gone. As I said before, online services charge too much than I'm willing to pay to put all my photos online. I don't have a blu-ray burner in my laptop, but blu-ray discs are expensive in this part of the world and not getting any cheaper. Blu-ray has quite failed, it seems. Another solution would be to buy a hard disk, copy the photos and send that back home, but I don't trust the postal service to keep the thing in one piece.

Since sending via snail-mail is not an option only the internet is left. Online services are too expensive, so there's only one way left: I need to copy the photos from my laptop to my PC in Holland, which is always on and always connected and has a RAID mirroring setup with plenty of space. Unfortunately Virgin Media, my local internet provider here in the UK, has failed to fix my internet several times already and generally sucks ass and should just go bankrupt, only provides an upload speed of about 20kb/sec. The line is far from stable and the connection often drops, requiring me to re-upload. In fact, I have NEVER been able to upload even a thumbnail of a photo to my blog while on the Virgin connection, I need to use my mobile phone's tethered internet connection for that. The message is: I will not always have access to a fast or stable internet connection, so I can't just plain-old dump the originals to my home PC.

The last problem I must face is the fact that my PC in Holland will simply not always be online. Sometimes the internet connection will break, sometimes the connection will be slow. Very rarely a hard drive might break and I will have to instruct my parents on how to fix it. Something I know they will fail to do. So my photos are at risk. Nevertheless I devised a solution that would involve sending thumbnails of my photos in increasing size, from small to large, to a webserver managed by me (which is always online). At a later point my Holland-PC would access the webserver and start downloading the thumbnails and the originals. It seemed like an interesting project to do, and as an added benefit would provide me with a website full of thumbnails of my photos that I could share with others.

I"m not doing it though. I simply don't have time for it. Or more specifically, considering the amount of mental energy I am spending on programming during working hours, the last thing I want to do is debug a Python/Django request in my free time. As I found out today, I'd rather spend a Sunday working professionally on something useful that gets shared with lots of people instead of working on my half-assed hobby project.

I downscaled my demands and decided that I could just as easily solve the problem with a free Dropbox account. I would still generate thumbnails of my photos, but instead of uploading them I would place them in my free Dropbox account until it was filled up. Then I would run another (scheduled) script on my PC in Holland which would download/copy the files from the Dropbox folder onto the RAID-mirror and then delete them from the Dropbox folder, freeing it up for my local script to add more photos.

I didn't do that either. I was about to get started on it when I realized a much simpler solution: <strong>USB Memory Sticks</strong>. They sell for ridiculously cheap these days. I can mail them to my parents very cheaply and they're much more likely to stay in one piece than a hard disk. I can include the checksums of all files I put on the stick so I can verify that they were transferred correctly. Then my parents can put them in their vault or whatever and my photos will be much safer than they could ever be anywhere else. The only issue I can see is that if I start taking more photos I might end up having to buy lots of USB sticks. When that time comes I might consider sending a hard disk and doing the same checksum trick. In fact, that might be better in any case, financially. I don't know if I can trust my data on there for the long term though.

Considering the amount of mental energy I've already spent on this problem I've got mixed feelings about my conclusion. The only thing I can say for certain is that any solution not involving hardware is wrong, and that any solution involving hard disks should be weighed very carefully. Flash memory that is not read from is reliable and shock-proof and should be viable until far into the future.

&nbsp;

&nbsp;

&nbsp;

&nbsp;