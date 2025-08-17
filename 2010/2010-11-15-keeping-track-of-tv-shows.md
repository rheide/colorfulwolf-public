---
published: true
title: "Keeping track of TV shows"
id: "3483"
slug: "keeping-track-of-tv-shows"
author: rv
date: 2010-11-15 16:37
categories: Tech
---
Ok, so I'm designing this website that allows you to keep track of which TV shows you're watching. It lets you rate the shows and also mark how much episodes you've watched. So if you're watching a lot of TV shows you can easily figure out what's the last episode you watched. It'll also allow you to see how many minutes you've spent watching the show. Here's a picture to make things more clear:

<a href="https://s3.amazonaws.com/cfwblog/uploads/2010/11/bbt.png"><img class="aligncenter size-full wp-image-3484" title="bbt" src="https://s3.amazonaws.com/cfwblog/uploads/2010/11/bbt.png" alt="" width="303" height="40" /></a>

I'm watching <a href="http://www.imdb.com/title/tt0898266/" target="_blank">The Big Bang Theory</a>, and so far I've on the 3rd season having just finished watching episode 3. Episode 3 of season 3 is the 43rd episode, chronologically, of TBBT. Based on this information, and knowing the length of each episode, I can calculate how much time I've spent watching this show.

Here's what I'm stuck on right now: imagine that I can import all information about TBBT from IMdb, and I import that info today. Then one month later a new episode of TBBT comes out, which I want to mark on my website. Oops, I already imported the info from IMDb one month ago, so my site doesn't know about this episode. Do I import from IMDb again? On the user's request? Automatically every night? All of these options are not really feasible because there would just be too many items to synchronize. So, I want to be able to input this information manually, independently from external sources.

So how do I do that, and how do I do that in a user-friendly way? TBBT is a fairly common example: every season has a different number of episodes, but the duration of each episode is the same. However, I cannot rely on that. Every TV show has their own quirks. Here's a list of the quirks I've come across so far:
<ul>
	<li>Not every episode has the same length. Some of the episode lengths are unknown (but might be deduced by the average episode length. eg. every Star Trek The Next Generation episode is ~45 minutes).</li>
	<li>Most TV shows start at episode 1, but some TV shows mark their first episode as Episode 0, or they release a prequel episode later that is called episode 0.</li>
	<li>Some TV shows have 'minor' episodes, eg. Episode 4.5 that happens betweens two episodes but is less relevant to the main story.</li>
	<li>Some TV shows have side stories, behind-the-scenes features or other episodes that cannot be added to any of the known seasons. Do these count when marking how many episodes you've watched? Even IMDb is pretty vague on how it handles these.</li>
	<li>Usually all important information from a season can be retrieved from its episodes. In some cases no details about some episodes in a season are available.</li>
</ul>
Try to look at these quirks with the intention of designing a data model that can store the relationship between shows, seasons and episodes while storing the duration of each. My first approach was a pure hierarchical solution, storing TV show objects that contain Season objects that contain Episode objects. However, the last point in the list means that I had to make some compromises. In some cases I can't find out about how many episodes a season has, or how long each episode is. Sticking to a pure hierarchy, I added dummy items with default durations to fill in the gaps, but I'm not satisfied with this solution.

So, here's an exercise for you, dear reader. How would you store and display this information? Keep in mind that your solution will need to be able to do the following:
<ul>
	<li>Store the show-season-episode hierarchy</li>
	<li>Store the duration of each element as best as possible</li>
	<li>Be robust against missing information. (A single missing episode should not break progress tracking of an entire TV show)</li>
	<li>Handle edge cases like episode 0 and episode 4.5</li>
	<li>Be at least as user-friendly as the picture shown above</li>
	<li>Offer a way for the user to change the duration of each item in a user-friendly way</li>
</ul>
As for that last item, let's assume for now that every user has his own set of items, so nothing he changes will break the user experience of any other user.

This is pretty much the biggest hurdle for the website that I'm planning to launch. If I can solve this in a generic way then I'm good to go. In fact, just writing this blogpost and defining the problem in words made things a bit more clear already. Let me know your thoughts!

&nbsp;