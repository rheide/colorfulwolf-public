---
published: true
title: "How to find out if your phone is spying on you"
id: "6911"
slug: "how-to-find-out-if-your-phone-is-spying-on-you"
author: rv
date: 2017-05-13 17:39
categories: Daily Life,Tech
tags: 9gag,ads,android,facebook,microphone,spying,tinfoil
---
&lt;tinfoil-hat&gt;

I browse 9gag a lot during my commute.&nbsp;Sitting shoulder-to-shoulder with my fellow commuters I find it uncomfortable to do something on my laptop, and&nbsp;at least in the mornings I'm not awake enough yet to properly enjoy a book or audiobook. So instead, I turn to 9gag for my cheap&nbsp;entertainment. As such, I see quite a lot of ads.

Over the past few months I've managed to convince myself somehow that the ads&nbsp;that I'm seeing are targeting things that&nbsp;I've only ever mentioned verbally, but never digitally. It's just extremely suspicious to see an ad for one particular brand the day after you've spoken about it to someone.&nbsp;This kept happening to me, so I thought of a way to try and 'prove' that my phone is indeed listening in. My wife and I had a running joke for a while where we'd shout odd terms ("ARNE JACOBSEN CHAIR!", "NISSAN MICRA!") at my phone to see if ads for them would show up. (No for the Arne Jacobsen chair, yes for the Nissan Micra, but cars in general are already&nbsp;a natural search term for me and there's a digital trail showing that I like cars, so no solid evidence there).

To take it one step further I devised an experiment. For a few days my wife and I brainstormed about topics that we would never ever look up naturally; topics that are&nbsp;so far removed&nbsp;from our daily (digital) lives that&nbsp;it would be very unlikely for us to see targeted ads for them. We tried to focus on popular topics that people or companies would actually buy ads for. All this was done offline, on a small piece of paper, and to the best of my knowledge neither of us ever uttered one of these topics out loud or typed it in digitally until the experiment was over.

While we were devising the list of topics I took screenshots of all the ads I saw on 9gag, as well as a few on Facebook and in&nbsp;my browser. The idea is to compare these to the ads I got served after uttering each of these topics out loud.

With the list of topics finished, rather than manually&nbsp;conversating through them in the vicinity of my phone, I instead prepared an old laptop of mine with a text-to-speech script which I ran overnight. I&nbsp;downloaded PyTTSx, made sure that it worked, then disconnected the laptop, which had a clean Windows installation with no personal information about myself, from the network, and uninstalled the network drivers. Then I wrote&nbsp;a Python script to run some plausible conversations about the topics we had written down on paper thought the TTS engine, and set it to loop. I&nbsp;had to listen&nbsp;through each topic several times to&nbsp;make small adjustments to the spelling because the TTS didn't quite pronounce all the words right unless you spelled it slightly wrong. I added in a few voices and a few speeds and ran the script overnight with my phone charging right next to the laptop, far far away from the bedroom. Because listening to a computer having a fake conversation about topics you couldn't&nbsp;possibly be less interested in does get boring after a while.

At this point the topics did exist digitally, but only on a laptop that was disconnected from the internet. I continued my daily routines as usual and again took screenshots of all the ads that I saw. I kept this up for&nbsp;2 days before I got bored of taking screenshots, after which&nbsp;I&nbsp;categorized all the ads I saw into one or two categories and tallied up the results.&nbsp;

<a href="https://s3.amazonaws.com/cfwblog/uploads/2017/05/ads.png"><img class="aligncenter size-medium wp-image-6912" src="https://s3.amazonaws.com/cfwblog/uploads/2017/05/ads-400x372.png" alt="" width="400" height="372"></a>

The Topic column contains whether the category would be something I'd expect to see naturally anyway, or one of the "highly unlikely taboo topics" that I would otherwise never search for or would never even come up in my daily life. The rows highlighted in yellow are where the taboo topics&nbsp;overlap with the ads I saw, and the rows highlighted in red are the particularly suspicious rows of topics of which I suddenly got served a lot more ads after running the taboo topic script. There were also a whole bunch of taboo topics that I never saw ads for, presumably because no company paid for ads for those topics, or because I'm a crazy tinfoil-hat guy who's just a bit too paranoid.

I'll try and be generous and explain away both the medical category and the pets category. I was already served one ad in the medical category before running the script (which uttered some new and much more.. un-science-y medical keywords), so a slight increase is not entirely unbelievable. The same goes for pets: although the keywords in the taboo script were very heavily focused on dogs (whereas my wife and I are very much of the cat persuasion), we do have a pet and it's not unlikely that this information could have crept up in our digital life&nbsp;during the course of the experiment, outside of the TTS script.

Then there's the third red category that shows a sharp increase, for which I just can't find a reasonable explanation: loans. The&nbsp;ads in this category were for 1. credit ratings, 2. leasing cars, and 3. short term loans.&nbsp;I've been employed pretty much continuously over the past 12 years, have never searched for or had a loan (other than my mortgage, which is a very specific loan category that hasn't popped up either before or after the experiment). The TTS script contained several passages about wanting to buy or build (expensive) DIY&nbsp;things as well as the actual term "pay day loan", and some other words that could perhaps imply increased gullibility to these kind of ads. When I was categorizing the ads I saw a very clear distinction between ads that focused on investing capital (category 'Investing' in the image) and ads that focused on how to loan things or improve&nbsp;one's ability to loan things.

I can think of several explanations of why the&nbsp;ads changed after the experiment:
<ul>
 	<li>Coincidence. Ads change over time. Maybe the loan companies just didn't buy any (targeted) ads until in the middle of my experiment. I didn't run the experiment anywhere near long enough to rule this out.</li>
 	<li>Leaks. Maybe I&nbsp;changed something about my online behaviour that&nbsp;changed the ads I was served.</li>
 	<li>Something on my phone or in my house is listening in. Could be the phone OS, could be an app on the phone, could be a nearby TV or PS3.</li>
</ul>
It would be possible to go one step further and intercept&nbsp;the network traffic coming from my phone, but I don't think I would&nbsp;be able to conclusively prove anything one way or another. If the speech recognition&nbsp;happens client-side then I wouldn't see any speech data over the network. Or it could be encrypted. It might be worth a try, but I suspect I won't find anything obvious.

Is this&nbsp;enough evidence for me to say that my phone is definitely listening in on me?&nbsp;Definitely not. But this, combined with earlier&nbsp;incidents of ads matching conversation topics over the course of the past few months, I think is more than enough reason for me to be suspicious. It would be interesting to see other people try the same experiment. If they find the same results then we could start comparing phone OS, installed apps,&nbsp;other nearby electronic devices, etc.

For now, since I hardly ever speak on my phone anyway, I've put a little bit of blu tac over the microphones. I tested this with by calling my wife to confirm that&nbsp;no audio is heard on her end when I speak.&nbsp;If, over the course of the next few weeks, I find&nbsp;myself not noticing a single instance of an ad matching a conversation topic, I would consider that pretty strong proof that something on my phone is listening in. No matter the outcome, it's probably worth a followup experiment. Time to think of new categories.. (Don't send ideas for new categories to me, obviously! Unless it's a handwritten letter..)

&lt;/tinfoil-hat&gt;