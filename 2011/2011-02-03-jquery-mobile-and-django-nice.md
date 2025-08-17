---
published: true
title: "jQuery.mobile and Django: nice!"
id: "3697"
slug: "jquery-mobile-and-django-nice"
author: rv
date: 2011-02-03 16:28
categories: Tech
tags: django,jquery,jquery mobile
---
I'm working on a little project in Django, and in the process of learning about writing web pages for mobile devices I came across <a href="http://jquerymobile.com/" target="_blank">jQuery mobile</a>. It's a framework that runs on top of jQuery and provides an extremely easy way of creating web pages that look good on mobile devices. I really like working with it. It does have some quirks, though.

Today I got stuck on page navigation. I was trying to submit a form through a post request, yet jqm seems to cache pages permanently once they're loaded, so no content was getting updated. To make matters worse I could not actually request the same page twice after doing a post request, the whole thing just hangs up. This does seem to be a known problem, and there are some workarounds. The easiest one is to disable ajax forms in jqm. I did this, and then changed the form redirect to point to a jquery mobile url (the one with the hash). This seems to have fixed my problem in most of the cases, and also preserves navigation information somehow. Very nice. The only problem I have now is that in some cases the page history still contains a dialog page that shouldn' t be there.

I've been using jquery mobile for a couple of days now and that's really the only problem I encountered. Other than that I've been extremely pleased in working with the api. Functions are where you expect them to be, and all of the things I wanted for my website were already included. My hat off to you, jquery mobile. May you soon get out of the alpha stage and fix the dynamic page issue.

&nbsp;