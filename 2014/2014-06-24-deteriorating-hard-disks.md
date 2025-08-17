---
published: true
title: "Deteriorating hard disks"
id: "6197"
slug: "deteriorating-hard-disks"
author: rv
date: 2014-06-24 06:10
categories: Tech
---
An odd thing has been happening to my hard drives lately: they keep swapping IDs. My 2TB disk used to always be \Device\Harddisk1 but now it sometimes appears as \Device\Harddisk2 and another disk takes the place of Harddisk1. I always assumed that the number was determined by which port on the motherboards was being used, but it doesn't appear so.

My guess is that the disk has to be spun up before it can report itself to the BIOS. Assuming that spin-up time naturally increases in a disk's lifetime, both disks must now have a similar spin-up time, which makes it a race to see which disk can report itself to the BIOS first. Since nothing else changed in my setup, the only other theory I have is heat. My room has been very hot lately, and perhaps one brand of hard drive doesn't tolerate heat as easily as the other brand. Maybe. Perhaps.