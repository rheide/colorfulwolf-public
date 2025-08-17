---
published: true
title: "StarCanvas: a Star Trek based galaxy map"
id: "5548"
slug: "starcanvas-a-star-trek-based-galaxy-map"
author: rv
date: 2013-05-11 22:36
categories: Tech
tags: star trek,starcanvas
---
<a href="https://www.colorfulwolf.com/dev/starcanvas/demo/"><img class="aligncenter size-medium wp-image-5551" alt="starcanvas" src="https://s3.amazonaws.com/cfwblog/uploads/2013/05/starcanvas-400x194.png" width="400" height="194" /></a>.

Yes, I've been geeking out lately. I wrote a little Javascript library that displays a 2D galaxy map a la Google maps. The Star Trek-y thing about it is that it divides each area of the galaxy up into <a href="https://en.wikipedia.org/wiki/Sector_(Star_Trek)" target="_blank">sectors</a> of 20x20LY each.

<a href="https://www.colorfulwolf.com/dev/starcanvas/demo/" target="_blank">Click to see the StarCanvas demo</a>. Use the mousewheel to zoom out/in. Also available on <a href="https://github.com/rv/starcanvas" target="_blank">GitHub</a>

The whole thing started as a private indulgement for a space 'game' that I'll probably never release, but along the way I realized that the map bit was fairly standalone, so I decided to extract it and github it. There's still a ton of things I'm not satisfied with, but I don't know when I'll have the time or motivation to work on this again. Better to release something crap but working than nothing at all.

Things I want to fix: zoom should focus on mouse cursor, not corner of the canvas. Additional backgrounds for zoom levels larger than 1 are currently not working. For the game I'm hoping to fetch area data via ajax from the server but that's a whole other challenge. I also want to show sector contents such as star systems, starbases etc. Currently I've got a separate canvas library that does that, but I think I can integrate them.

More to come? Who knows. At least it's out there. If you fancy it, grab it, touch it, fork it, eat it. Technologic.