---
published: true
title: "De buggery"
id: "2017"
slug: "de-buggery"
author: rv
date: 2010-02-04 11:43
categories: Tech
tags: de bug,debug.buggery
---
I didn't really know how to use a debugger four years ago, even after I graduated from computer science. Of course the theory behind debugging was taught to me, and we had some practical tests too, but I never really needed it during my education, so it became a neglected skill. When I first arrived here at AK I realized that I was the exception to the rule, as everyone around me relied heavily on their debuggers.

So what did I do when my program broke? Basically, I guessed. Usually when a bug happens it's a direct consequence of something you changed in the very recent past, so that's a good place to start looking. My analysis was never very detailed, basically just changing something back or slightly modifying something to see if this would fix or influence the problem. When my first instinct didn't prove right, I'd either try more guesses or resort to a massive amount of printlns that output debug info while running the program normally. I've since learned a lot, and I try to avoid println statements wherever I can, and I think my skill as a programmer and the quality of my code improved after I made this step.

I still don't do much debugging, although it does depend on which language I'm using. I blame perl for making me dislike debuggers. I never liked debugging perl. It was just way faster to guess-run-fix the problem than to figure out how to use the debugger. In Java I use the debugger in Eclipse, which is excellent. Still, I rarely ever need it, but during the times that I did need it I've realized the value of the debugger.

It's quite easy to depend on it too much though. In a recent case I was developing for the iPhone and mixing Objective-C, C++ and C code, which confused the debugger a lot. And trying to fix a problem on an iPhone app without a debugger and in a crappy environment (XCode just plain sucks), it's like trying to pick up a dime in the middle of a highway while wearing earplugs and eyeshades. At night.
Interestingly the XCode debugger, when switching from Obj-C/C to C++, messed up all data types, making it impossible to look at the values of anything: pointers, integers, ids, they're all messed up. So how did I solve the problem I was having? Simple: I used printlns. Lots of them...

Viva la debugger!