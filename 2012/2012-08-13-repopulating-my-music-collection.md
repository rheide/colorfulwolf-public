---
published: true
title: "Repopulating my music collection"
id: "4968"
slug: "repopulating-my-music-collection"
author: rv
date: 2012-08-13 08:28
categories: Tech
---
My hard disk crashed while I was travelling, causing me to lose about 60Gb worth of music. I say lose, but I did of course have backups, namely on my computer back home, and on my iPod classic which is with me on my travels. I wanted my music back on my travel laptop while preserving the folder structure that I used to have. (I know, I'm picky like that). Unfortunately I can't just copy all the music from my home pc (which has the folder structure I want) because my home's bandwidth is nowhere near fast enough. It would take a month to get everything back, so I had to come up with another solution.

I do actually have my music with me: on my iPod. But the hugely annoying part of the iPod is that it forces you to use iTunes as an interface to your music, which completely disregards any structure that you used to have for your files. Apple does not like files. I think they're wrong. I managed to copy all my music back onto my laptop, but it's all in Apple's folder structure, eg. "F04/XCDF.mp3" is a song. Boo.

So I needed to get the folder structure of my home computer and the data of my iPod's music. I whipped up a quick python script that reads id3 tags from  all my mp3s and ran it on my laptop's obfuscated collection, outputting a json data file. Then I Teamviewered into my home PC and ran the same script on my correctly structured collection. Copying the 2mb of json metadata was quick enough, and after that it's just a matter of matching fields. Although the collections are out of sync by about 3 months the script seems to catch nearly everything correctly. The remainder, eg. the ones without ID3 tags and the files that only exist in the newer collection I can move manually without too much effort.

The resulting scripts are ugly and utilitarian, and almost not worth sharing. But you never know, someone might find a use for it, and I might need them again if I manage to crash my hard disk again, so here they are: <a href="https://www.colorfulwolf.com/dev/musicfix/id3er.py">id3er.py</a> iterates over all mp3s and builds a json output file with id3 data. It requires <a href="http://code.google.com/p/mutagen/" target="_blank">Mutagen</a> to work. <a href="https://www.colorfulwolf.com/dev/musicfix/mover.py">Mover.py</a> compares two json files and moves files from one location to the other.

(And in retrospect, comparing hashes would have been much easier &gt;_&lt;;)