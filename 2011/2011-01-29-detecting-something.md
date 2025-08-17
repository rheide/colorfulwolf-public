---
published: true
title: "Detecting something!"
id: "3681"
slug: "detecting-something"
author: rv
date: 2011-01-29 20:18
categories: Tech
tags: haar,image recognition,machine learning
---
[youtube=https://www.youtube.com/watch?v=d8XLfsaoo00]

I never expected this to work on the first try, but it's amusing to see it fail in this way. I wanted to see if my mastery of computer vision-related technologies was good enough for me to train a haar classifier for text. I was lucky enough to find a fairly large amount of training data online, so I just chucked it all in the trainer and gave it a go. As expected, without a more.. scientific, training method, things go to hell pretty easily. Note that the training is not actually finished, it just seems stuck without the values ever changing. Probably a result of poorly selected training data, or lack of it.

I do suspect the webcam resolution might have something to do with it. The little thingie is supposed to go up to 1280x720 but the Java Media Framework can only seem to access it at 320x240. I tried before to stream the 1280x720 stream from VLC with the intention of accessing the stream with the JMF, but I never got VLC to behave. I might give that another shot. That, and a proper round of training, of course.