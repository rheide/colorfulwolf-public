---
published: true
date: 2022-01-26 19:50
title: I made a Minecraft mod!
categories: Games,Tech
tags: java,minecraft,python
type: article
slug: i-made-a-minecraft-mod
author: randy
---
After 10 years of not touching Java I somehow made a Minecraft mod. The reason? I wanted to see if I could turn on my IoT living room light with a switch inside Minecraft. <a href="https://github.com/rheide/breakoutbox#control-your-iot-devices" rel="noopener" target="_blank">Great success</a>!

The mod is called Breakoutbox and is available on my github page: <a href="https://github.com/rheide/breakoutbox" target="_blank" rel="noopener">https://github.com/rheide/breakoutbox</a>.

Breakoutbox is a very basic mod that lets you 'break out of Minecraft' by calling external scripts on the serverside. Once you're out, anything's possible. Controlling IoT lights as mentioned above, pulling in cryptocurrency prices into your Minecraft world, pushing a button to make a Tweet, you name it. And building all those things is a hell of a lot easier in an ad-hoc external script than it is to publish a dedicated Minecraft mod every time. Anything and everything, all of the time.

It was interesting to experience the Java ecosystem again after such a long time away. Some observations:

* The build system for Minecraft mods is really nice. The Forge MDK (mod development kit) comes with <a href="https://mcforge.readthedocs.io/en/1.18.x/" target="_blank" rel="noopener">good documentation</a> to get you started, and a gradle build file that makes it super easy to compile a mod jar or run a dev Minecraft server.
* That said, the Minecraft code itself is closed-source, so from there on you're walking through decompiled, de-obfuscated bytecode, guessing at what things are ok to call, hoping the arguments you've provided make sense. This could've been an absolute nightmare, but thanks to the fact that Java is a strongly typed language, and community efforts at deobfuscating the code every time a new release comes out, it's surprisingly not that painful.
* It's so difficult/terse to do simple things in Java, compared to Python. The Java standard library featureset is still a joke. No json or yaml parser in the standard lib? Bah.
* I gave up trying to figure out how to bundle a third party library with my jar. Couldn't figure out if it's just not standard practice or if I then had to burden everyone who downloads the mod with also figuring out how to download the dependency. Either way seemed bad.
* It's veerrry easy to get Minecraft to misbehave. The redstone behavior has a 'contract' in that running a redstone command should finish quickly, e.g. in less than .1 second. External scripts can easily take any amount of time, and I had to guard against that. I found it quite interesting how easily I could get a 'professional' game to break just by adding a few lines of code in a tiny jar file.
* I managed to get around the long-running script issue by queueing the tasks in the Minecraft server object's internal threadpool, but I wasted hours trying to figure out why it wouldn't just work from my own threadpool. I had created a separate threadpool for my own tasks, but somehow the commands never executed if I ran them from my own threadpool. Queueing them in the threadpool that was kept in the server object fixed things. Without looking at the actual source code, which is impossible, it's very difficult to say why. My guess is that the internal threadpool had some kind of hooks attached to it that updated the game state at the end of each task, whereas with my own pool stuff just disappeared into nowhere and was ignored by the game loop. But who knows.

Anyway, it was a fun little exercise. It was a project I started in spite of wanting to finish other projects I had already started. I had no particular need for it, but having it available on github in the form of a downloadable jar that anyone can stick into their Minecraft server, and source code available for anyone who feels like forking it, does feel good. I will endeavor to finish more things this year.

(I think I finally have an idea in my head to reintroduce comments to this blog without incurring massive maintenance or financial costs. More to come.)