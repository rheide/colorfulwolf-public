---
published: true
title: "A tale of two bugs"
id: "6315"
slug: "a-tale-of-two-bugs"
author: rv
date: 2015-02-10 11:29
categories: Tech
tags: insanitization
---
A long time ago in a content management system far, far away.. a manager was sending out lifecycle emails. These emails would be sent out by the CMS automatically once a day, iterating over all recipients in the system. The CMS would weed out the recipients that did not match the email's filters, those recipents that had opted out, and those that had already received the email. It would then send the email to all the new recipients every night.

Sounds fairly simple, right? Let's complicate things a little: one of the sources of email addresses for these lifecycle emails was a customizable form that would be presented on the public-facing site. Since the email might want to reference some of the fields in the user's form submission, the email module had to be made aware of this data. Because both the email module and the forms module were unaware of each other some glue code had to be introduced: an automated task runs every night and imports form submissions from the forms module and turns them into usable recipients for the email module. For each form submission the task first calculates a checksum over the user's data; if there's already a record in the email module that matches the checksum then the same record won't be copied twice.

This system in the way that it's described here ran for many months without any issues. Until one day, just before I was about to leave of course, a project manager came to me and asked: "How come this email only has 300 form submissions but has been sent 3000 times?". A quick check of the database and server logs didn't show up any obvious bugs, so I knew I'd be working through the evening that day.

The logs confirmed that an email was indeed being sent multiple times to the same recipient. I began by trying to reproduce the problem, and immediately hit frustration. I tried to manually add myself multiple times as a recipient to a new email, but I only received it once. Then I tried to reproduce the entire workflow, creating a form on the public site and trying to register myself via there. Since the form wouldn't allow be to register multiple times, I manually added multiple form submissions for myself with the same email address. That didn't work either. Not only that: the glue code successfully detected that my multiple form submissions had the same checksum, and only created a single email recipient in the email module.

If there's one thing that sucks about programming, it's when things work when you expect them to fail. At least when things fail you've got an obvious thing you can work on, but if things are (seemingly) working you need to figure out how to break them, and that can be way more difficult.

I went back to the logs of the original email to try and find out if there was a pattern to the email addresses that were receiving the email multiple times. Something immediately stood out: out of all the addresses that the email was being sent to, only a single address received the email more than once. The real moment of clarity came when I saw the address: rather than being all lowercase, it looked something like this: "AAaaAA@BBbb.com".

With this clue I managed to reproduce the problem. I first tried to add my own email address to the email module directly using mixed case letters, but this didn't cause me to receive multiple emails. So I repeated the test doing a form submission, ran the glue code task and sent the email again. It worked! Finally I managed to reproducibly break the system.

Now I had two major clues: a) it only happens when the email address is not all-lowercase, and b) it only happens on form submissions. It was pretty easy to debug from there. Here's a step-by-step of what happened.
<ul>
	<li>The daily email task starts up and tries to send an email to 'AAA@BBB.COM'</li>
	<li>It finds that no email was sent yet, so it re-saves the email recipients with the lowercase address 'aaa@bbb.com'. It then sends the email and creates a log record confirming that the email was indeed sent to 'aaa@bbb.com'.</li>
	<li>The daily data duplication task runs and happily (but mistakenly) adds a new email recipient with the address 'AAA@BBB.COM'.</li>
	<li>The next day the whole process repeats itself.</li>
</ul>
Two major bugs!
<ol>
	<li>The email task checked if a sent record existed before sanitizing (lowercasing) the email address.</li>
	<li>Because the record in the email module got sanitized, its checksum changed. So the glue task ended up duplicating the same record over and over again every time it ran.</li>
</ol>
If there was just the data duplication bug then the email address would have gotten sanitized correctly, and only one email would ever have been sent out. If there was just the address sanitizing bug then the recipient would have been sanitized correctly after the first time, and only one email would ever have been sent out. With both bugs present things turned into an infinite loop of sanitizing and duplication.

We deleted the duplicate data, made sure that the checksum check would lowercase all fields when calculating the checksum, and modified the email task to sanitize the email address <em>before</em> doing the 'was-already-sent' check, not after. It would have been better to sanitize all of our existing data and to rewrite the email module, but that never happened. The entire CMS, including the email module, eventually got rewritten from scratch, but that's a story for another time.

Besides the fix, the most important lessons learned were in procedure. <strong>Always have an extra set of eyes on critical code.</strong> Code reviews are massively useful to catch problems like this. The same goes for unit testing: if we had thought of testing the email address sanitizer, it's quite likely that we would've thought of testing it with mixed case email addresses. Neither code reviews nor unit tests are an absolute guarantee that problems like this won't happen, but they make it a hell of a lot less likely.