---
published: true
title: "Why I will not switch to Linux"
id: "4904"
slug: "why-i-will-not-switch-to-linux"
author: rv
date: 2012-06-17 15:27
categories: Tech
tags: linux,windows
---
Linux is used by people who work from the terminal. I prefer Windows.

Every couple of years I get frustrated with my Windows installation and feel like trying something else. The moment that sparked this adventure happened yesterday as I was trying to set up Heroku with the Play framework, and I couldn't get the damn stack to run properly on Windows. The error appeared to be some JVM issue, and online posts suggested switching to OpenJDK. OpenJDK is not available on Windows. That's not very open, is it?

I like windows. I like moving them around, arranging them with hotkeys, having many of them side by side, having a fully functional IDE that does all the fancy heavyweight stuff I want. I'm not a command line person, really. I use it for git because the git plugin for eclipse is slow, but other than that I prefer a GUI. This, apparently, is weird in the circles I hang out in. If you're a developer you're supposed to be a die-hard vim addict who never uses anything else except the terminal. I think that's ridiculous and old-fashioned. People who do that are doing it because they are the most efficient in those environments, but I will challenge any terminaler with my tricked-out windows setup and prove that I am just as efficient with windows as they are with a terminal. I'm not a typical user, and my dislike of regressions in my performance do make me a very picky eater.

So, after deciding that I needed a more compatible programming stack, I decided to give Ubuntu another try. It's been about a year since I did any serious work on it, and it's good to see if it's improved since then. The short answer is: no, it did not improve. The Ubuntu Unity shell is ridiculously minimalistic and does not offer anything useful. I quickly realized this was not going to work when a friend recommended I look into gnome shell. After installing gnome shell I was marginally more happy and felt ready to start customizing it.

And that's where I got really annoyed. I tried to install a custom user theme, which seems like a fairly standard thing to do. Not so. You have to install some custom tweak tool first, then a common extension package, then a user theme extension. After doing that I found out the user theme extension didn't work because of incompatible versions of gnome-shell. Googling the solution to this took ages. One solution offered was to disable one source repository and get it from a different one. Tried this, didn't work. Another solution said to edit the python files related to the tweak tool to pick up the extension settings from a different package. This seemed to work at first, but in reality it just made the tweak tool <strong></strong><em>say</em> that it supported user themes, when in fact it didn't really when you tried to add one. Total failure and massive waste of time.

Why do I need to install twenty thousand different packages one by one to get a goddamn piece of software to work? Why I do need to edit configuration files manually to make it work? Actually, I'm ok with both of the above, as long as the end result works. Which it didn't. In Windows you just download the binary and it works. Done. No need to get required packages, no need to compile. It. Just. Works.

The next thing I tried was to tune the performance of gnome-shell. I'm running it inside a VM so performance is less than optimal. I found many tiny performance tweaks, but even basic window dragging was sluggish after all that. It was at this point that I found out that gnome-shell uses 3d acceleration, which is not brililant when running inside a VM. At least, that's what I assume was making it sluggish, it might just have been poor design.

Then I found out about <strong>lxde</strong>, a lightweight desktop environment that replaces gnome-shell entirely. It looks perhaps 10% less pretty, but it's 1000% faster. The response is phenomal and I was in love with it right from the start. This is how GUIs are supposed to react: instantly.

As it turns out, lxde was not the answer to all my problems. The file manager decided to crash seemingly at random. It was perhaps related to moving windows around and right-clicking a lot. You know, actions that you often do in a desktop environment...

Still, it didn't happen very often, and I was fairly happy. But then the next problem appeared: somehow right-clicking in Chrome immediately caused the browser to go back to the previous page. Other programs (some, not all) had the same problem: after right-clicking the context menu pops up so quickly that when you release the mouse button, the first item is already selected and gets activated, causing Chrome to go back to the previous page, the file browser to create a new folder, etc. Some Googling discovered bug reports about this exact same issue dating back to the summer of 2011, and they've still not been solved. The solution seems known, yet the patch is in C code so if you want to fix it you have to compile your own kerner/window manager/whatever. Yes, all the useless things are configurable, all things that actually matter are broken.

The thing that finally made me decide to stick with Windows is simple: EmEditor. It's a low-resource text editor with tons and tons of options and exceptional support for multiple languages and encodings. It's great for quickly editing text files and, unfortunately, only available on Windows. I had gotten it to work on wine on OSX before, so I figured that it would be a piece of cake to get it up and running on Ubuntu as well. Of course it wasn't. I ran into some dll error that I had never seen before and couldn't solve using any of the advice found by Googling the problem.

Ubuntu is simply not meant to be a desktop OS. If you want linux, run a remote shell from Windows or even OS X (I'll save my rant about OS X's GUI for another time). Compared to Windows, Ubuntu's GUIs (lxde, unity, gnome-shell) are immature, buggy and slow (except lxde), and just not a valid replacement for a proper desktop system such as Windows 7. Microsoft perfected desktop window management in Windows 2000, why can Linux still not get it right?

If you don't believe, or if you want to find out for yourself, here's the tools I'm using on my Windows machine that I use to get the best behaviour of other OSes, while keeping the performance and reliability of Windows. (who would've thought someone would say that about Windows?)
<ul>
	<li><a href="http://windowspager.sourceforge.net/" target="_blank">windowspager</a> for virtual desktops. This is fast, none of that sliding delay bullshit that os-x pulls on you.</li>
	<li><a href="http://antibody-software.com/web/software/software/wizmouse-makes-your-mouse-wheel-work-on-the-window-under-the-mouse/" target="_blank">wizmouse</a> to scroll non-active windows as os-x does natively</li>
	<li><a href="http://winsplit-revolution.com/" target="_blank">winsplit revolution</a> to tile your windows side by side in any number of configurations using hotkeys</li>
</ul>
This is what I'm used to, and I've been unable to replicate a similar setup in Ubuntu. I've tried it several times before and always gave up at some point. I used to blame myself, thinking my experience with Linux wasn't sufficient. I'm done doing that. I learned a lot about the way this stuff works behind the scenes, and I'm certain that if I had a month (or more), I could find all relevant config files, recompile relevant source code bits, download all the right packages and eventually get it to work. It's linux after all, it's open-source and fully customizable.

But I don't want to do all that and waste weeks of my time. I just want the damn thing to work, and offer me a stable platform, with easy-to-install extensions, a reasonable set of configuration options and a performance that is not too slow. Linux just does not have that. And that's why I'm staying with Windows.