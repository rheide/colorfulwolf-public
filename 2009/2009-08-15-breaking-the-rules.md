---
published: true
title: "Breaking the rules"
id: "1365"
slug: "breaking-the-rules"
author: rv
date: 2009-08-15 05:52
categories: Tech
---
When I'm working on a (programming) project in my spare time my standards for quality are a lot less high than during work hours. Even if the scope of the project is similar to that at work I tend to skip a lot of steps that make people working on the project happy.

The first thing I never do when I work for myself is specify a clear target or purpose for my project. I seem to know vaguely what the project will be in my head, but writing it down seems annoying so I don't bother. This is also useful because the purpose of the project might change, grow or shrink during the development.

On a more practical note, I've recently started using SVN for my projects, which I am a bit ashamed of because it really is impossible to live without <a href="https://en.wikipedia.org/wiki/Source_Code_Management" target="_blank">version control</a>. That being said, I still don't bother with commit comments unless it's either a very very simple or a very very complicated change. I figure that even if I have to look through old versions of my own code at some point I will be able to figure out why or what I changed based on the diffs.

But the thing that I really regret most is that I don't spend enough time on my design. Because I'm developing only for myself I really don't care that much if the end product is beautiful inside or not. If it works it works, and I don't care about the insides once it's done. Whereas at work I spend hours and hours trying to think of the best and the most extensible design, my pet projects at home are usually neglected ugly little creatures.

So is this discrepancy bad or good? I'd say it's good that there's a difference, and I see no need to change my ways in both situations. Professional projects need to be executed professionally and with high quality and care. For a personal project it's already enough if the end result is a working application or website.

I would raise a very important IF here though: if you expect your personal project to survive for a long time you might want to rethink your strategy before slacking off on your design or your svn commits. If the product turns out to be useful it's not unlikely that you'll want to expand it later on, so either you or other people will have to revisit that ugly source code again.

I strongly believe that a good design documents itself. While I would call my own designs sloppy, they're definitely not far-fetched or hard to understand. If I look at my code from five years ago I'm still able to grasp a lot of it at first glance, and the rest of it by looking through the code a bit more. It might not be the most elegant code, but it's understandable, and that's what counts most.

To quote <a href="https://en.wikipedia.org/wiki/Robert_A._Heinlein" target="_blank">Robert A. Heinlein</a>:
<blockquote>I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.</blockquote>
You are morally responsible for your own source code!

(on a slightly related note, I'm quite fond of the <a href="http://sam.zoy.org/wtfpl/" target="_blank">Do What the Fuck You Want To Public License</a> and I wish more people would use it :D)