---
published: true
ts: 2022-09-18 16:33:41
date: 2022-09-18 16:33
title: Dumb things programmers do
categories: Tech
tags: blog
type: article
author: randy
slug: dumb-things-programmers-do
---
<p>I&#8217;ve written before about this blog&#8217;s journey away from WordPress into becoming a statically hosted blog, and how I&#8217;ve regretted it ever since. Allow me to present you with the next chapter in this increasingly silly saga.</p>



<p>WordPress has a lot of limitations. It had them years and years ago when I first decided to move away from it, and it still has them now. Back then, you basically had three choices: 1. host your site through wordpress.com, meaning not a lot of customization options. 2. Host everything yourself, meaning it&#8217;s on you to keep things up to date and running. And 3. go with a hosted WordPress solution that allowed you to customize some things without having to manually manage your host or software stack. I was on option 3 at the time, and the major drawback was that it just wasn&#8217;t fast, and near-impossible to make it fast while still taking advantage of WordPress&#8217; ease of use. Oh yeah, one constraint I forgot to mention in my quest: it had to be dirt-cheap.</p>



<p>So at some point I decided to statically host this blog. After all, how hard could it be, right? Just generate a bunch of files, put them in an S3 bucket and you&#8217;re done. Except you need to either use a framework that does that for you, adding a thing to learn and a depedency that could cease to be updated in the future, or do it yourself, increasing the time spent on writing and maintaining your own software. I went with the latter and wrote my own blog generation software. I tried to be strict on myself in terms of maintenance burden: I only wanted the absolute barebone functionality and as little reliance on third-party libraries as possible. I would only be satisfied if, years later, I would open up the code for this blog to add a new feature without having to trudge through thousands of lines of code, or having to stare at what I wrote in disgust and confusion.</p>



<p>I didn&#8217;t quite make it. Even in trying to keep the codebase minimal, it&#8217;s still a maintenance burden compared to WordPress for only a fraction of the features. I spent a long time trying to figure out how I was going to do comments on a static blog without having to rely on some shitty service like disqus. I ended up with something working, but clunky, and it only added to the maintenance burden. In retrospect I am 100% sure that staying on WordPress would have been the better solution.</p>



<p>So&#8230; where does a lazy programmer like me go from there? Back to WordPress? Ugh. I would have to re-convert all the blog posts I wrote in my custom format back into WordPress SQL or whatever other format WordPress allows you to import. I would have to rejig the DNS, undo all the magical things I had to do to convince AWS to host things in the way that they are.. It&#8217;s all certainly possible, but it sounds like a time sink. So instead, I did what every self-disrespecting developer would do, and I made things even worse.</p>



<p>One major disadvantage about this static blog is that I need to run software in order to write and publish posts. Since that software is something janky that I built myself I&#8217;m not super keen on exposing that to the world wide internet, so basically the only way I can write blog posts when I&#8217;m away is if I bring a laptop that&#8217;s got the blog software on it. Old school, I know. My solution to fix that was to come up with a little script I&#8217;d run on a local raspberry pi which would ping Github for published blogposts, and in turn render them and publish them. It would solve the problem of allowing me to write blogposts remotely, but I&#8217;d still need access to a git client.</p>



<p>So then I thought: why not write the blogposts on WordPress instead? I could read a WordPress RSS feed and use that to convert each post into my custom static blog format, and publish whenever there&#8217;s a new post. So that&#8217;s what I did. I now have a script that runs every couple of minutes on a local raspberry pi that checks if the WordPress blog has a new post, which it then publishes. The circle of madness is now complete. I have come full circle when really what I should have been doing is just stand still.</p>



<p>Eventually I will probably spend some time moving everything back to a more manageable platform. The way my life has slowed down over the years I&#8217;d say that&#8217;s probably not going to be any time soon, but let&#8217;s see how long this duct-taped solution will last, and which will be the first part to break. For now at least, I am &#8220;feature complete&#8221;. Yay. </p>