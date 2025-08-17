---
published: true
title: "Gumbug: A better way to browse real estate"
id: "6305"
slug: "gumbug-a-better-way-to-browse-real-estate"
author: rv
date: 2015-01-24 14:37
categories: Tech,UK
---
Last summer I really wanted to find a decent rental apartment around London. Every day I scoured Gumtree, Rightmove and the likes in search of something affordable. In the end I decided to wait until I was able to buy an apartment instead, but I spent several weeks searching and getting annoyed at real estate sites nonetheless. I decided I could save myself a lot of time and effort by automating some of the steps of my search process. My search process went roughly like this:
<ul>
	<li> Go to Gumtree, search by location and price</li>
	<li>Mentally filter out all the ads that I'd already rejected, usually because they were old or just looked crappy</li>
	<li>Check the new ads, decide which ones I might be interested in based on my more subjective criteria (not ground floor, too far from public transport, high-crime area etc.)</li>
	<li>Repeat the above process for a different set of locations</li>
	<li>Repeat the above process for all locations on a different website (Rightmove, Zoopla etc.)</li>
</ul>
Thus Gumbug was born. Initally it was meant to search both Gumtree and Rightmove for rental apartments, but I've adapted it to only do Rightmove's To Buy section, for now. I've found a lot of duplication between sites that are listing property to sell, whereas for rental apartments there was often a whole category of quirky private listings that would only appear on Gumtree. The need to scrape multiple sites seems a lot less when only considering things to buy.

You can find Gumbug on github: <a href="https://github.com/rv/gumbug" target="_blank">https://github.com/rv/gumbug</a>. I'm also running a semi-public version of it on Heroku, although it won't be very fast if a lot of people end up using it. You can have a play with it here: <a href="http://floating-forest-4090.herokuapp.com/" target="_blank">http://floating-forest-4090.herokuapp.com/</a>, or to see some example search results, have a look at this link: <a href="http://floating-forest-4090.herokuapp.com/s/gzr1vwthsd" target="_blank">http://floating-forest-4090.herokuapp.com/s/gzr1vwthsd</a>. Since it might not handle the load, I'll describe how it works.

For each search you can add multiple sources, which are all consolidated into one page. I tried to avoid pagination of things as much as possible because I just want to see everything on one big page that I can scroll through at my leisure. If a listing appears on more than one source url it'll only appear once in the results. If the listing is already in the system its details won't be re-fetched every search, to save time. Adding urls as input might be a bit 'techy' but it saves a lot of coding time and allows me to specify a whole bunch of hard filters right at the source, since the url can already contain filters for price range, number of bedrooms etc.

<div class="caption">
<a href="https://s3.amazonaws.com/cfwblog/uploads/2015/01/settings.png"><img class="size-medium wp-image-6306" src="https://s3.amazonaws.com/cfwblog/uploads/2015/01/settings-400x294.png" alt="Keywords" width="400" height="294" /></a> Keywords
</div>

You can add a list of keywords to ignore and a list of keywords that are required. Eg. you can ignore 'ground floor, retirement' and you can require 'leasehold'. For the ignored keywords, if a listing contains at least one of the keywords, it'll be marked as ignored and moved to the bottom. For the required keywords, if an add doesn't contain at least one of the required keywords, it will also be marked as ignored and moved to the bottom.

<div class="caption">
<a href="https://s3.amazonaws.com/cfwblog/uploads/2015/01/transport.png"><img class="size-medium wp-image-6307" src="https://s3.amazonaws.com/cfwblog/uploads/2015/01/transport-400x339.png" alt="Filter by distance to public transport" width="400" height="339" /></a> Filter by distance to public transport
</div>

The public transport filter lets you select the stations you wish to be near to (or far away from). The list of stations is prepopulated from the zoned stations around London, but it'll automatically update after every search. If you add at least one station filter, all the listings will have to match at least one of your station filters, or else they will be ignored. Eg. if you add two filters: between 0.0-0.5 miles from Chesham station and between 0.2-1.0 miles from Amersham station, a listing must be either close to Chesham or close to Amersham (but not necessarily both) to match.

The distance filter is pretty stupid because distances are simply scraped from Rightmove, which (as far as I can tell) only shows straight-line distance. You might have to make a massive detour to get to the station, but Rightmove will still happily report that the listing is right next to the station.

Once the search is complete you get to see all the results on one page: all their images, important information and a map. No useless clicking through tiny thumbnails here. The key feature in the search results page is this: you can manually mark listings as either favorited or ignored, and any future searches you do from that particular search result page will preserve your favorites and ignored listings. So let's say you haven't searched anything for a week or so, all you have to do is press the search button to perform the exact same search again to get the new listings. Gumbug will pre-filter the new listings according to your criteria and will automatically move the ones you've already ignored manually down to the bottom.

So, why am I showing the ignored listings at all, if I'm clearly not interested in them? The reason for this is that humans (especially real-estate agents) make mistakes. They will mislabel things, forget to mention a keyword that every other ad that you're interested in has, or they'll add something stupid like "not ground floor" which throws off the keyword filters.

A second reason to display ignored listings is because you might be sharing the link to the search results with more than one person, and the other person might want to un-ignore a listing. Gumbug isn't exactly built on security: any person that you share the search results url with can favorite and ignore listings. This is great for me because I want to share search results with my girlfriend so she can go through them as well, but when sharing in public it's better to spawn a new search with a new url.

Lastly, there's the map. One of the things I've consistently found myself doing when checking listings, is to cross-reference the area with the <a href="http://opendatacommunities.org/showcase/deprivation" target="_blank">deprivation map</a>, which gives a rough indication of how much crime/poverty/incidents/bad things there are in an area. You can also click the name of each public transport station to display walking directions, so you know if that 0.6 miles is actually 0.6 miles (hint: it usually isn't).

<div class="caption">
<a href="https://s3.amazonaws.com/cfwblog/uploads/2015/01/depdir.png"><img class="size-medium wp-image-6308" src="https://s3.amazonaws.com/cfwblog/uploads/2015/01/depdir-400x200.png" alt="Deprivation and Directions" width="400" height="200" /></a> Deprivation and Directions
</div>

Gumbug will continue to be a work-in-progress, but it's reached a point where I'm quite able to use it to make my own life easier. Maybe it can help someone else too. Here's some of its issues:
<ul>
	<li>When you flag something as ignored and then go to the next page, the ignored listing will pop up again because it's been moved to the back of the sort order.</li>
	<li>No street view support yet</li>
	<li>Some map issues when viewing on mobile</li>
	<li>No floor plans yet</li>
</ul>
Feel free to give it a try on Heroku. If for some reason your search doesn't seem to be working then that might be because the worker process is not running. Since Heroku's not cheap I'm running the worker process on my local machine. Heroku's database is very tiny so it might fill up very quickly. If there's enough demand I could consider setting up a more proper version of it, so consider this an attempt to gauge the public interest. Let me know what you think :)