---
published: true
title: "GIT and Eclipse"
id: "4430"
slug: "git-and-eclipse"
author: rv
date: 2011-08-26 13:34
categories: Tech
tags: eclipse,git,svn
---
Recently I'm using GIT quite heavily, and I find that it doesn't interact very well with my favorite IDE, Eclipse. The <a href="http://eclipse.org/egit/">egit </a>plugin integrates quite well and mimics the behavior of the SVN plugins almost perfectly. There's just one major problem: it's crappy-ass slow. Committing things is near instant, but then for some reason the tasks just enters a waiting state which lasts for hours. This is not a major problem as it doesn't affect anything. I'm suspecting it might be a quirk of the Windows version of GIT that I'm using.

What's really unfortunately slow is the synchronize perspective. It takes forever to get the list of changes, which is strange, because the command line version will do it for you instantly even for quite large projects. As a result I only use the synchronize functionality of Eclipse once: right before committing my code. I really want to make more use of the synchronize functionality though.

Lastly, one thing that the creators of egit did do very well is that they let you use the command-line version of GIT as much as you like. Eclipse just picks up the changes and continues functioning normally. I remember having more troubles with this in the past when I was still using SVN.

I haven't really noticed any of GITs advantages yet. Branching and merging is supposed to be easier with GIT, but I've never really worked on an SVN project with as many users as my current GIT project has. GIT does have a generally faster and more robust feel to it, but that effect is negated if you're using Eclipse because the IDE integration makes it just so horribly slow. In short: no verdict yet. Need more playtime.