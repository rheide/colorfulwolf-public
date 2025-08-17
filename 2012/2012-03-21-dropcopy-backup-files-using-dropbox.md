---
published: true
title: "dropcopy: backup files using dropbox"
id: "4787"
slug: "dropcopy-backup-files-using-dropbox"
author: rv
date: 2012-03-21 16:36
categories: Tech
tags: backup,dropbox
---
People reading this blog know that I've been <a href="/blog/2011/12/18/backing-up-photos/">looking</a> for a good solution to get my photos from my travel laptop onto my server pc. Long story short: I don't have time to build what I want, but here's an alternative that works <strong>right now.</strong>

<strong></strong>The <a href="https://github.com/rv/dropcopy" target="_blank">dropcopy</a> script will move all files in a subdirectory of your Dropbox folder to a different folder, deleting them from the dropbox folder. Using the script you can backup terabytes of files using even the free dropbox account. Here's how to do it:
<ul>
	<li>Before traveling, schedule dropcopy to run on your server computer every x hours or days.</li>
	<li>Copy your newly made photos to your dropbox dump folder. Dropbox syncs them to all your computers.</li>
	<li>The server runs the script and moves the photos out of the dropbox folder, freeing space.</li>
	<li>Your travel laptop syncs the dropbox folder so you'll know immediately when you can backup more files.</li>
</ul>
I know, it's silly and it's simple. But it works.