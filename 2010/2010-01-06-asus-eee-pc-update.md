---
published: true
title: "Asus Eee PC update"
id: "1889"
slug: "asus-eee-pc-update"
author: rv
date: 2010-01-06 15:38
categories: Tech
tags: asus,bartpe,eee,netbook
---
I finally got a happy nice and stable version of  English WinXP up and running. BartPE  can boot from SD card, and I can run Norton Ghost from within there to backup my primary partition. Except... the keyboard doesn't work. Don't ask me why, it seems too silly to be even possible, but the keyboard simply does not work from within BartPE. Of all the hardware to support, how difficult can it be to support a keyboard? Damn. Well, I could still backup my partition, but I had to copypaste the characters of the backup file with my mouse. Now that's hard-core.

I ordered a 2GB SODIMM last weekend, and it arrived yesterday. After installing it, I found I could no longer use the highest performance mode in the power settings. I already knew that, because that's apparently a known problem. Many articles online speak about this problem: when you update the memory, you can only use memory modules that Asus has certified, otherwise the overclocking option is not available. The solution is simple: download the latest BIOS. Installation is simple: just press Alt+F2 on startup and the BIOS flash tool will start. Then just insert the SD card containing the new BIOS, and it installs automatically. Brilliant.

Oh wait. No it isn't! After installing the latest BIOS I can no longer boot from my SD card! In other words, it's now once again impossible for me to restore the backups that I finally managed to create with Norton Ghost. For other people who might get this problem: the BIOS version 0323 from 12/30/2009 for the Asus 1101HA cannot boot from SD card!

Incredible. New hardware doesn't work properly with old software, and new software disables some of the stuff that used to work before. Thank god these people don't build airplanes.