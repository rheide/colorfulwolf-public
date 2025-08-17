---
published: true
title: "Controlling foobar 2000 from Ubuntu with global hotkeys"
id: "6297"
slug: "controlling-foobar-2000-from-ubuntu-with-global-hotkeys"
author: rv
date: 2015-01-20 19:21
categories: Tech
---
Uh, long title, short explanation: I work primarily on an Ubuntu laptop but I listen to music from my Windows machine right next to it using <a href="http://www.foobar2000.org/" target="_blank">foobar 2000</a>, still the best mp3 player available (come at me bro!). On Windows I'm used to using foobar's global hotkey functionality to quickly pause and switch tracks, but on Ubuntu any way you try to pause or skip a track requires a context switch, which is damn annoying if you're in the programming zone. Here's how I solved it.
<ul>
	<li>Get the foobar http control plugin: <a href="https://code.google.com/p/foo-httpcontrol/" target="_blank">https://code.google.com/p/foo-httpcontrol/</a></li>
	<li>Configure it to require a password just to be safe. Without it anyone can log in to your music player and mess up your playlist and what you're listening to. With the password on they can still do exactly that but they'll have to sniff the network packets, which really isn't worth it just to control a music player.</li>
	<li>Once configured, use the python script below to remote-control your foobar from the shell.</li>
	<li>Put a shell script in usr/bin (or usr/local/bin, I forget) that calls the python script with the appropriate parameter (PlayOrPause, StartNext, StartPrevious). For more commands you can check the javascript of the browser interface of the http control plugin.</li>
	<li>In Ubuntu's hotkey configuration settings, add your hotkey and make it call the shell script you just created.</li>
</ul>
Here's the script:
<pre><code>
import sys
import requests
from requests.auth import HTTPBasicAuth
requests.get("http://your-ip-address-goes-here:1234/default?cmd=%s" % sys.argv[1],
                 auth=HTTPBasicAuth('username', 'password'))

</code>
</pre>

Voila! Cross-platform music hotkeys :D