---
published: true
title: "A competent programmer"
id: "4708"
slug: "a-competent-programmer"
author: rv
date: 2012-02-10 22:12
categories: Tech
tags: programming
---
Most programmers know what's to focus on when trying to become better in their profession.<a href="http://www.grobmeier.de/the-10-rules-of-a-zen-programmer-03022012.html" target="_blank"> This website</a> offers a very good list. But lately I am finding increasingly that there are other things a programmer must be able to do in order to be truly successful that technology-focused sites often neglect to mention.

These are traits that are not often focused on by a lot of programmers I know. They're implicit things that some programmers just seem to be forgetting, or don't place a high enough value of. But I think if you don't possess the traits mentioned in this post then you can never be an effective programmer. Here's some of the things I found extremely useful on my current project. They apply to projects done in teams but you can just as easily apply them to lone wolf projects (but you'll be playing out all the roles mentioned below by yourself).
<ul>
	<li><strong>Deal with crap legacy code.</strong> Know how to deal with badly written and undocumented legacy code. Don't refactor a solution that's worked for years if it's not necessary. Don't break shit. Get to know the code before attempting to make major changes in it. If you are thinking that you will not be confronted with a situation like that then you are naive and should go back to school.</li>
	<li><strong>Know your priorities.</strong> Yes, designing that new e-mail framework from scratch is a great challenge, but there's also 5 minor bugs that break the product. Don't indulge yourself on what you like better, don't rely on other people to prioritize for you, know what's important yourself. This is one of the most important skills a programmer can have, especially when functioning in a team.</li>
	<li><strong>Communicate.</strong> Don't do something without confirming what it is you're actually doing. Don't try to get away with doing things according to the problem description if you know the problem description doesn't make sense.</li>
	<li><strong>Know better. </strong>People will ask you to do stupid shit, then change their mind and ask you to do even more stupid shit. Expect this and program your system accordingly so you don't have to change it all the time while you're in requirement limbo. (Which can last months, trust me.)</li>
	<li><strong>Don't trust people.</strong> If a person tells you that a piece of code is not in use and you can delete it, ignore him/her completely and do a full-text search. The only thing you can trust as a programmer is <strong>full-text search!</strong></li>
	<li><strong>Don't trust new technology. </strong>If you have a crappy solution to a problem that has been working fine for years, don't change it. Almost always there will be business logic behind the crap solution that you are not aware of and will unknowingly refactor away, realizing only weeks later that you broke something important. (Unit tests avoid this problem, of course.). This point is a bit tricky and depends on the case, the crappiness of the original source code and the wackiness of the framework you're planning to replace it with.</li>
</ul>
But the most important skill is, in my opinion: <strong>achieving the right balance between writing clean code and getting things done</strong>. This is by far the most difficult thing to master for any programmer, and I have seen countless of my brilliant colleagues (and myself too) fail horribly at this. At some point in your project you will have an upcoming deadline that you simply cannot complete in time. Then what do you do? Do you try to do things properly and deliver an incomplete product? Do you fudge things up and deliver poor quality code? And where do you draw the line?

This is a bit tricky, but it's nothing compared to deciding on which technologies to use months before a deadline. That's when you really need to be able to estimate what the project's going to need and what technologies should be used. Compromises must be made and you must think about how much crap you'll tolerate given the deadline. That is the real skill of a programmer. It's not about achieving technological brilliance in every facet of the project, it's about getting the product out the door, and making compromises along the way to do it.

&nbsp;