---
published: true
title: "Optimum Flow rate"
id: "1756"
slug: "optimum-flow-rate"
author: rv
date: 2009-12-01 15:14
categories: Daily Life,Tech
tags: code quality,flow,iphone,plastic boat
---
Things have been faring well at work recently. After a couple of weeks of developing for the iPhone I finally feel that I can be as efficient as I was when working in Java. It took some brain adjustments and a lot of working environment adjustments (different keyboard, different mouse, IDE hotkey changes, ...) but I'm finally up to speed, and starting to enjoy it. Which is good, cause there's a deadline approaching. Yet it is perhaps thanks to this deadline that I am able to achieve <a href="https://en.wikipedia.org/wiki/Flow_(psychology)" target="_blank">flow</a> once again. Just the right combination of pressure and skill. It's like a drug, really.

I think I underestimated developing for a mobile phone in the beginning, and that was the reason why I couldn't quite enjoy it. I felt limited by the framework cause the things I wanted to do were simply not directly possible. I never really felt that when programming in Java. That shouldn't really be a problem, because normally if you notice something missing, you create it. That's what programmers do: create code. Yet I was very reluctant to do so at first. The first thing Objective-C throws at you is memory management, which is scary as hell when coming from a garbage-collected language. Then the second thing that's easy to notice is the documentation. Every other line in Apple's iPhone documentation states "but be careful because processing resources are scarce! you need to code very carefully and smartly". Putting the elephant in the porcelain closet, and telling it to collect its own garbage. Ya.

I found that it's best to completely ignore these warnings altogether. Aside from a few basic rules that programmers must stick to when dealing with memory management there's really not that much to it. If you're neat and tidy, which I am in the process of becoming thanks to Apple. Great memory profiler too by the way. In the beginning I was reluctant to create a new re-usable component every time I face a problem, because I couldn't directly justify the extra time needed to make the component elegant enough to be reusable. Especially on a mobile platform I think it won't happen very often that I'll be able to re-use one of the components that I've created.

As a result the code that I wrote was quite ugly. And unmanageable. I made the assumption that on a mobile platform with a rather dodgy object-oriented implementation the rules of programming must somehow be different. Well, I can be very clear on this: they're not. It pays off to create reusable components and an elegant structure. Don't worry about resources or performance until it actually becomes a bother, and then refactor it into something faster. A cleaner design is always worth spending the extra time, even on mobile platforms.

Side note: Windows 7. Hmmmmm. It's clean.

<a href="https://s3.amazonaws.com/cfwblog/uploads/2009/12/bg.jpg"><img class="alignleft size-medium wp-image-1757" title="bg" src="https://s3.amazonaws.com/cfwblog/uploads/2009/12/bg.jpg?w=300" alt="" width="300" height="187" /></a>