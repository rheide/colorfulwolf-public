---
published: true
title: "Windows + MySQL + Python == hell"
id: "3401"
slug: "windows-mysql-python-hell"
author: rv
date: 2010-10-08 22:45
categories: Tech
---
At the moment I am thoroughly pissed off at MySQLDB's lack of support for getting the library to work under Windows. The documentation even clearly states that Windows is not supported at all. I can feel the geek anger from here. As a self-respecting programmer, how can you write a library for a cross-platform scripting language that is in fact not supported on a major platform like Windows?

Anyway, after browsing around the net I found several solutions, none of which are good. Essentially the problem is that the installer doesn't work on windows, for various reasons. I'll list here everything you need to do to get the damn thing to work, based on the MySQLDB 1.2.3 version of the library, and the target being Python 2.6. (you can get the Python 2.5 egg of a recent version directly from the MySQLDB site).
<ul>
	<li>You need to install MySQL server on your windows PC. The lib won't compile if you don't have MySQL's header files.</li>
	<li>If you're any MySQL version that is not 5.0 then you need to change the site.cfg file in the mysqldb lib so it has the right version. The setup step might complain about a registry key missing. Just insert it manually if it doesn't exist. Add a 'location' key with the value being the path to your MySQL.</li>
	<li>You need to compile the damn thing, so you need a compiler. Another post I found mentions installing MS Visual Studio Express 2008 but you're probably beter off installing Cygwin, GCC, G++ and Mingw32.</li>
	<li>When building the lib, tell Python to use mingw32: setup.py build --compiler=mingw32</li>
	<li>Theoretically you should now have a working MySQLDB for Python 2.6</li>
</ul>
Note that the last point says theoretically: I haven't actually gotten to this stage yet as I realized too late that I forgot to install gcc. It's late now and I'm going to bed.

It would be great if people could just precompile this stuff for Python 2.5/6/7 and x32/x64 and then include links to those libs on the front page of mysqldb. I guess that would be too easy.

Update: after installing gcc I still can't get the thing to compile. If you're planning to do things this way you'd better be prepared to edit the python scripts that do the mysqldb build. I recommend using Python 2.5 and the mysqldb egg for p2.5, which is readily available. If you really need python 2.6 or 2.7 then be prepared to suffer for it.

Update2: <a href="http://www.codegood.com/archives/4" target="_blank">these distributions</a> should work for most Windows versions. It didn't for me, of course. I am very annoyed right now.

Final update: I installed Python 2.5 and everything went smoothly from scratch. I'm done in 10 minutes. Bleh.

&nbsp;

&nbsp;

&nbsp;