---
published: true
title: "Restoring files that chkdsk messed up"
id: "1730"
slug: "restoring-files-that-chkdsk-messed-up"
author: rv
date: 2009-11-24 14:45
categories: Tech
tags: backup,chkdsk,paper turtle,restore
---
So, as you can read in the previous posts I have a hard drive that has crashed. But not completely. After running "chkdsk /f" on the thing I am left with 9999 files that have been restored, very conveniently called FILExxxx.CHK. How wonderful. I'm rather annoyed that only 9999 files were restored, and not more. At this point I am suspecting that only the file table broke, and the files themselves should be intact. Now I can access my files again, but I have no idea which file is which, and I sure as hell am not going to click every individual file to find out what it is. Being the software engineer that I am, I wrote a script.

I should mention here that I was rather fortunate/foresighted to have made a regular directory index of all my files, and my latest listing was from two days before the crash. That's very lucky. I have in my possession a huge text file containing the exact output of a "dir /a/s&gt;out.txt" call. What to do with that? Well, for once my laziness paid off. Had I bothered to add the '/b' option, output would only contain the filenames, but omitting this causes the file sizes to be output as well.

So we have a listing of a file containing its name and its file size, and a mystery file xxxx.CHK containing 'something', which also has a file size. So... I think you can see where I'm going with this. I doubt that there's many people in a similar situation as me though, as usually hard drives crash a bit harder than this, and usually people don't run the kind of script that I was running to index my disk. I did not envision this use case either though..

Linking the two pieces of information together turns out to be harder than I thought, though. The file size of the mystery files seems to be off by a tiny amount, which I guess is a result of chkdsk not being able to guess the file boundary exactly. As a result, exact file size matching results in zero matches, so a bit of fuzziness must be added. I haven't had time to do this yet, but at first glance it seems that all mystery files are a tiny bit larger (at most 32kb) than the ones in the directory listing, so I'm thinking I'll just grab the closest match that is larger than the original. This will probably mix up at least some of the files on the disk, though, but that should be easily solved. Once I know which two files are swapped it's easy to get back the data that I want. This works for most of my personal files and some hard-to-get stuff, but most of the files I can download again without too much trouble.

When/If I finish the perl script (yes, yuck) I'll post it online somewhere. When it's done.