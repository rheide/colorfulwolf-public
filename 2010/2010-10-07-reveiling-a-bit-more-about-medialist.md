---
published: true
title: "Reveiling a bit more about MediaList"
id: "3395"
slug: "reveiling-a-bit-more-about-medialist"
author: rv
date: 2010-10-07 01:50
categories: Tech
tags: beautifulsoup,django
---
What is about programming that makes it so fun to do at night? Or so terrible to do in the morning? Maybe I'm just a night person.

I ran into an uncomfortable realization yesterday while working on MediaList. Since I've switched from Java to Python I've focused on keeping my code clean, empty and generally sense-making. I decided to prioritize readability and cleanliness over performance, which is something I seldom if ever do in Java. Figuring that this is a hobby project I thought I might get away with it. The future will prove me right or wrong, but I'm starting to have my doubts already.

As a way of generating a large volume of high-quality content for my site dynamically I'm planning to let the site's users input URLs of other websites. MediaList will load the site, scrape all the relevant info from it and insert it into a database. I've already mentioned before that the site allows you to rate stuff, so here's an example: you can rate a movie by pasting a link from <a href="http://www.imdb.com" target="_blank">IMDb.com</a>. MediaList will then fetch information from the page on IMDb, like the movie title, year it was released and its duration. I chose not to let users add this content manually for two reasons. One: I don't have users. (And I'm sure as hell not going to add all that crap myself.) Two: letting people input things manually will surely mean a lot of mistakes. With a large community that's not an issue as moderators will notice the mistakes and fix them, but with a small userbase (or none at all) it's just a lot easier to scrape the data from somewhere else.

Here's where I ran into a lot of problems. IMDb does not have an official API, and the unofficial ones don't have information about the IMDb URL  belonging to each movie, which is vital for my purposes. I decided to take a rather risky step and parse the raw HTML from IMDb directly. It's risky because it can change at the whim of the people at IMDb, and when that happens I'll have to update my parser. IMDb, if you're reading this, a public API (preferrably using JSON) would be awesome.

After messing around with Python's htmllib and sgmllib I realized that they both sucked, and that if I wanted to get something done quickly (in dev time, not in processing time) I'd need a DOM parser. After sniffing around the net a bit I quickly found <a href="http://www.crummy.com/software/BeautifulSoup/" target="_blank">BeautifulSoup</a>, a wonderful piece of code that builds a DOM tree and provides search functions for *ML documents. The code I wrote using BeautifulSoup is easy to understand and easy to modify, quite unlike the turd I wrote with sgmllib.

Building a model of a single IMDb page in BeautifulSoup takes mere milliseconds on my system at home. The bottleneck lies in fetching the urls from IMDb. While the time it takes for a single url is acceptable, importing a list of several hundred urls takes painfully long, and is not something I can let the users wait around for. Fortunately I only have to lead each url once, after which the information is cached inside MediaList. If the information on IMDb was incorrect (which, after testing this feature, turns out to be the case more often than imagined), the information inside ML will also have to be updated. Manually.

Still, after all the work on the MediaList concept, this has been the only potential performance bottleneck I've encountered. I'm confident that, this point excluded, the site will still work fine up to 1000+ active users, even on shared hosting. For all I know the site might bog up at 50 users though, I haven't tested that yet. I do feel satisfied about the code I wrote though. It's always a trade-off. Pretty code, high performance, rapid development: pick two. I'm glad I chose a different combination for this experiment.

&nbsp;

&nbsp;

&nbsp;

&nbsp;