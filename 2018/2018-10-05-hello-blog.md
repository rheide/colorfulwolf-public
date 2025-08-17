---
published: true
title: "Hello blog!"
id: 20181005
slug: "hello-blog"
author: rv
date: 2018-10-05 16:43
categories: Thoughts,Daily Life,Tech
---
Hello, blog. It's been a while.

Last year, after the previous blogpost, I felt a good sense of closure for the blog, so I decided to take the plunge and turn the entire site into a static site. No more wordpress, no more new comments, no more new posts. This turned out to be pretty easy to do: all I had to do was scrape all the pages on the domain and upload them to S3. I had been meaning to get an https certificate set up, but ran into some snags that I couldn't be bothered to work out. It's still on my to-do list, but at the time it was just yet another thing that prevented me from continuing the blog.

Continuing? But why? Didn't I say that I was done blogging? Well, yeess.. but.. 

Everything I said in the Goodbye post holds true, and I stand by what I said. The internet is not the same place it was when I first started blogging. Compared to 10 years ago I still feel quite strongly that it's way less appealing now to to put content online. The second argument, about my own life, also still holds true. I really do have way less things I want to blog about, and way less time to write blogposts. It compounds, of course: because the internet feels less inviting to me now, I feel the need to structure new blogposts better, more coherently. That costs more time. It all compounds.

But despite all that, during the past year I did find myself occasionally having the desire, the inspiration and the time to blog. Even if the amount of things I write is cut down ten-fold, there will still be the occasional blogpost. So, while the desire to blog was occasionally there, I was blocked by having made the site static: with no wordpress interface it's just a major pain to manually write something: I'd have to manually edit HTML files, update the index page, update the category pages, tag, pages, archive pages.. It's simply a non-starter. I had to make this easier.

There's a bunch of static blog generators out there. Some of them look nice. I'm willing to bet that there's a very large change that whichever one I pick won't be maintained any more ten years from now, and if there's one thing I hate it's dealing with someone else's codebase in my free time. Big nope. Since I'm a web developer anyway, I decided to build something myself. That was in January..

I got pretty stuck on doing something simple. If there's ever a second thing I hate, it's dealing with my own codebase in my free time, so I wanted to make things as simple as possible. This often meant that, as soon as I wrote something, I immediately discarded it for being too complicated. Perfect is the enemy of good, and nothing got done for months. I had decided that I wanted a flat file format consisting of a yaml section for each post's metadata, and markdown(+HTML) for the post content. But I really didn't get further than that, because I desperately tried to pretend that it was just a small project and could be contained in one simple file. I finally found myself with a lot of free time this week and decided to tackle the problems head on.

The result-for-now is that I ended up with more code than I wanted, but nothing too crazy. Since I'm the most familiar with Python, I ended up writing a template renderer using jinja2, a generator which gathers all the pages that need to be updated for each article, and a publisher that uploads to Amazon S3 using boto3. No other dependencies, although I did write a little preview site in Django just so I could get instant gratification as I was doing all the template and CSS tweaks.

I ran into major issues with transforming my original blogposts from Wordpress to the new yaml+markdown format. At first I was working on a scraper-like tool that would read my old blog's static HTML files and do some parsing. Then I found out that for some reason my old static blog was missing all posts before 2007. So I had to deal with the Wordpress SQL backup. I wasted an hour trying to import the bloody thing into SQLite, but ran into countless SQL dialect errors. Eventually I gave up and installed MySQL and ended up wasting another hour getting all the settings right and connecting to it from Python. In the end I did manage to extract all the posts from the database and into happy little human-readable flat files.

Then I hit another snag: turns out a lot of posts on this blog use special [block] tags for extra functionality, and that of course wouldn't work as-is. So I had to convert those to HTML. Since I was doing some search-replaces anyway I decided to do some anonymization as well: my goal for this blog is for it to be a one-way street: if you already know me it should be easy for you to discover this blog, but if you don't know me already, searching my name should not bring up this blog as the topmost hit. I realize I am completely failing at this at the moment by having a Github link in the header. That'll probably go away at some point.

Another snag was the post count: since each page shows the number of posts in each category, I'd have to update very single page every time I add a post for a category, just so the counts are updated. What a pain. I decided to remove the counts from the HTML entirely, and I added a separate <a href="/blog/stats.json" target="_blank">stats.json</a> file that adds the counts in through javascript. No javascript required for this blog, but it does do enhancements.

It was at this point that I realized that I was getting very carried away with everything and that I had to put a stop to this: I ended up spending the better part of five days rather than the two or three mornings I had estimated. But finally I am in a state where I can relatively easily write a new post and publish it. I need to have the python code and the raw blog contents on the machine that I'm writing from, and it currently only works via a command line one-liner, but it works. I intend to make a very basic front-end for it at some later point in time so I can publish from any machine using a Django app. Another thing I'd like to add back is the comments section. Who knows, perhaps I'll get around to that before 2020..

There's a lot of things I want to do, both in terms of adding features as well as things to write about. I still want to write down in detail what the Lego Raspberry Pi project ended up becoming, and I also want to publish the static blog generator on github after I'm done cleaning up the code. Who knows, I might even be tempted to write about my personal life again at some point. In any case, stay tuned for more exciting content.

More to come!
