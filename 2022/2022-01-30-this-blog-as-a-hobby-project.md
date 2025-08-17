---
published: true
date: 2022-01-30 17:36
title: This blog as a hobby project
categories: Tech
tags: blog
type: article
slug: this-blog-as-a-hobby-project
author: randy
---
My rate of blogposting started going down around 2012. That's *ten years* ago. Between then and now I thought a lot about what I wanted to do with this blog, and if I even wanted to continue it. I probably changed my mind on that every year or so. The term 'blogging' itself has kind of become obsolete in the meantime, as did the code for the static blog generation framework I built to produce these pages. It feels weird to unironically work on 'comment forms' for a 'blogging framework' in 2022. All of a sudden it's gone from mainstream internet to a weird kind of nostalgia. Who even 'blogs' in this day and age? Plenty of people write, of course, but it doesn't take a self-hosted, self-published platform to do that. Just sign up for a Medium account, or if you don't like that there's plenty of alternatives. Some people write entire articles on Twitter, which is a whole other weird internet thing..

I can liken the experience of blogging and maintaining your personal blog software to that of driving and tinkering on a classic car. It's a fun weekend project with no practical purpose whatsoever, all commercially available solutions are way newer and better than what you're working on, and whatever you're doing will never actually be useful to anyone else. But it's fun somehow. It keeps me busy. And, to continue the analogy, there is tangible output: just like you can take a finished oldtimer back on the public road, this blog exists on the public internet. Even if it can't keep up with all the modern alternatives around it, it's still there for people to see. And that's worth something. In my case, pretty much all of my life is documented here - from all the way back in 2005 to now. I enjoy reading what I did back then, and I hope the people who knew me back then do too. If Medium is a modern-day Toyota, this blog is a poorly-put-together 80s kit car.

(I guess for most people reading this the car example is actually less relatable than that of maintaining a blog. Oh, how time flies..)

So that's what I spent my weekend on. Old man blogger. Here's what I did over the weekend, and how things easily spiral out of control..:

* I wanted to make comments work so I had to first decide on a format and import comments from the wordpress days. This meant interacting with a wordpress SQL backup that only really restored well onto a MySQL installation, which I didn't have running, so I wrote a nasty little script that regexes over the SQL dump and extracts comments. Yum..
* As I was playing around with the comments I noticed that a lot of the old articles' image links were broken due to the way they linked to S3 bucket content. So I did some search/replaces on historical content to fix that.
* Because I fixed a bunch of old posts and changed the base templates I had to regenerate the full site from scratch. This turned out to be less user-friendly than I liked given the scripts I wrote a couple of years ago, so I ended up spending hours refactoring those scripts to be more user-friendly.
* As part of the comment loading I ended up making some rapid-fire javascript changes to static files, which I had to upload manually myself every time I made a change. This eventually annoyed me so much that I updated the blog generation scripts to also be able to upload static files.
* While working on the styling for comments I figured I might as well do some other drive-by fixes to padding, colors etc. so I improved the styling a bit.
* The imported comments needed to be mass-published, so I added functionality to the generation scripts for that as well.
* For the first time since starting this static blog I actually have non-broken 404 and 403 pages. omg
* In the end I got comment display working but didn't manage to finish work on the comment submission form. I'll save that for another weekend..

It's my goal to eventually publish the static blog generation framework on github, even though I know for a fact that there's way better alternatives out there already, and I wouldn't recommend anyone to start a static blog themselves at this point as the hosted solutions are way easier. But if I can publish the code on github I can at least call it 'finished'. Perhaps when that happens I'll finally consider moving back to a hosted solution. But for now I will stubbornly keep tinkering..