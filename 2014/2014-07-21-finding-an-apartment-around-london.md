---
published: true
title: "Finding an apartment around London"
id: "6218"
slug: "finding-an-apartment-around-london"
author: rv
date: 2014-07-21 20:26
categories: Daily Life,Tech,UK
---
Ever since I started my 'break' period after my cycling trip I've spent 1 to 2 hours almost every day on Rightmove and Gumtree, looking for apartments. Rightmove has a much better offer and more decent-looking apartments, but Gumtree shows private offerings of landlords who want to circumvent agencies, which results in zero fees and a much more casual way of dealing with things. Depending on the landlord this can either be a good thing or a bad thing. In my experience in London, I've been bitten once by a bad estate agent, and been incredibly surprised at the niceness of my current landlord whom I found via Gumtree. Businesses or people, either one can screw you over if you pick a bad one, I guess.

I'm quite systematic about my search. I've got about 4-5 areas that I'd like to live in, and a tight maximum budget. This means my search always ends up pointing me towards apartments that have something wrong with them. Either they're ridiculously tiny, right next to a railway line, too far away from a railway line or in a shitty neighborhood. The <a href="http://opendatacommunities.org/deprivation/map" target="_blank">Deprivation Map Explorer</a> is an absolute must-have. I keep a spreadsheet of travel times and costs for the stations around which I center my search. Another good criteria that mustn't be left out is how long the walk to the nearest station is.

Recently, since I've been seeing a lot of apartments online, I've gotten a good grasp of what a decent apartment 'should' cost in each area, so I've noted that down in my spreadsheet as well. Whenever an apartment pops up that's way cheaper than the average, I usually know to check for what's wrong. But occasionally, just very occasionally, a jewel pops up: an apartment that's 100 pounds per month or more underpriced. I've seen two of them so far, and in both cases I was too late.

I've been thinking about writing a script that spiders Gumtree every x hours, in certain categories, looking for certain keywords. In fact, I'm very tempted to do this already, but I suspect it'll take a lot of fine-tuning to get usable results out of it. The things that can be wrong with an apartment can't always be easily spotted by a script. Hooking it up to the deprivation map explorer would be a must, and it would have to make heavy use of the Google Maps api to find the nearest station(s) and walking distance to each station. Most of the important criteria can already be filtered out in the url (area, max price, only ads with pictures, no agencies) so the core bit would be the scraping. Notifications can be sent out by email either immediately after the scrape, or consolidated every x hours or days.

I might give this a go if I'm still unsuccessful in finding an apartment next week. After all, there's always that golden rule of scripting: if you have to do it once, do it manually. If you have to do it twice, do it manually. But the third time, write a script.