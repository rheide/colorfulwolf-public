---
published: true
title: "Photo workflow and tools"
id: "827"
slug: "photo-workflow-and-tools"
author: rv
date: 2009-01-18 09:47
categories: Photography,Tech
---
As the years pass by and digital camera's images become larger and larger in resolution and file size, my hard disk is slowly filling up. Measures need to be taken. This weekend and last weekend I managed to make a nice system for myself, to always have access to all of my pictures without filling up my harddrive too much. I planned to explain my workflow here, thinking it would only take a couple of lines. Now it seems that i have quite a lot to explain if I go into details, so I'll keep it brief and pretend that my readers are all as geeky as I am.

My main photo folder is divided into years, inside which I have a folder for each date, starting with the month and date. Inside those folders I usually keep just the raw images from my camera, but if I have a lot I make another level and create folders for the RAW images, and the Small thumbnails (usually 1600x1200 or 2048x1536). When I review my pictures, first I make the thumbnails, then delete the crappy ones, and I run a perl script to move all the good pictures from the RAW folder into a 'Original' folder. Then I delete the RAW folder, which only contains blurry and crappy pictures after I am done reviewing. 

This became quite hard to manage when I decided that I want to back-up my originals but keep the thumbnails on my harddisk. I decided to no longer use Raw/Small/Original folders, but rather I will keep a completely separate index in a different folder. I will delete pictures from my index folder, and then run a perl script to synchronize with the original folder. I still don't directly delete the originals, but I move them to a 'Discarded' folder,  so that I can make sure that I really want to delete them. 

For this purpose I wrote a couple of Java programs and a perl script. The Java tool is called Eternal (don't know why -__-). It builds an index of images and movies from a certain source folder. It's configurable via a configuration file, where you can set the size of the images in the index, the jpeg quality, and also the movie quality. Yes, it also compresses movies. 

Of course I didn't write any of the resizing or movie compressing code myself. For resizing the images I make use of <a href="http://www.irfanview.com/" target="_blank">Irfanview</a>, which has some nice command line options for resizing things. For compressing movies I use <a href="http://ffmpeg.org/" target="_blank">FFMpeg</a>, which is by far the most brilliant piece of software that I've discovered in the past year. You can literally do anything to any kind of movie type just by using the command line. 

I got FFMpeg for Windows from <a href="http://tripp.arrozcru.org/" target="_blank">here</a>, and you can download Irfanview from <a href="http://www.irfanview.com/main_download_engl.htm" target="_blank">here</a>. As for my own software, you can get it from <a href="http://rapidshare.com/files/185323588/Eternal_Web.rar.html" target="_blank">here</a>. It's a RapidShare link so don't expect it to be up for too long. There's three programs:
<ul>
	<li>Eternal.bat: creates an index folder (with smaller versions of images and movies) out of a source folder, recursively. (Eternal_rv2008.bat is an example of how I run it for my photo folder)</li>
	<li>RevSync.jar: moves photos from the original folder to a 'discarded' folder, by looking at whether or not the same image exists in the index folder</li>
	<li>MoveBig.pl: calls RevSync.jar for whichever index folder it is placed in, based on my own personal folder structure. </li>
</ul>
If you want to use the tools that I wrote you should download FFMpeg.exe and Irfanview.exe as well, and point to their paths in the configfile. I don't think a lot of people will use my tool, but it's useful for me, so I might as well share it. 

I should note that there much better ways to index your photo's, and the only reason I do things the way I do is because I make a lot of pictures, and I'm too lazy to tag all of them individually. 

There you have it. That's how I manage my photo's. Hope it's useful to you. If you prefer a different systemor if you see a way to make managing photos easier, let me know :)