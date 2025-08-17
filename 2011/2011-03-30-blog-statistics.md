---
published: true
title: "Blog statistics"
id: "3939"
slug: "blog-statistics"
author: rv
date: 2011-03-30 13:56
categories: Daily Life,Tech
tags: statistics,wordpress
---
Got bored today and played around with SQL and pivottables. I wanted to see if I could find a pattern in the times that I usually post, and the categories that I post in. The first image shows posting times regardless of category. The images after show a comparison between categories.
[jsgallery size="large"]
Note that this information is not entirely correct, because sometimes I schedule a post to be placed in the future at some arbitrary time. I usually schedule stuff late at night or when I've already made a post for that day. I've also excluded a couple of categories that didn't have a lot of posts.
<ul>
	<li>The fact that I'm a night person is now scientifically proven.</li>
	<li>Ideal post time for me is between 20:00 and 01:00</li>
	<li>During the cycling trip last year (Spirit of Japan category) I rarely posted late at night.</li>
	<li>Other than that there aren't really a lot of differences between categories.</li>
</ul>
For code monkeys, here's the wordpress query to get the count of your posts for each category and each hour of day:
<code>
SELECT terms.name, HOUR( p.post_date ), count(p.id)
FROM wp_posts p
JOIN wp_term_relationships rel ON p.ID = rel.object_ID
JOIN wp_term_taxonomy ttax ON rel.term_taxonomy_id = ttax.term_taxonomy_id
JOIN wp_terms terms ON ttax.term_id = terms.term_id
WHERE post_type='post'
AND ttax.taxonomy='category'
GROUP BY terms.name, HOUR( p.post_date )</code>

