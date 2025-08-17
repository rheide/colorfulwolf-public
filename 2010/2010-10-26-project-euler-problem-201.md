---
published: true
title: "Project Euler Problem 201"
id: "3464"
slug: "project-euler-problem-201"
author: rv
date: 2010-10-26 17:44
categories: Tech
tags: euler,heavy,project euler
---
In preparation for a job interview I've been playing around a bit on <a href="http://projecteuler.net/" target="_blank">Project Euler</a>, which poses a lot of nice programming and mathematics challenges. Trying out problems at random (and solving them ^^) I eventually stumbled onto <a href="http://projecteuler.net/index.php?section=problems&amp;id=201" target="_blank">Problem 201</a>. And that's where I stayed.

After some thinking I got a logically sound solution to the problem, but my algorithm was terrible. I basically ignored all the mathematical clues that were staring me in the face and chose to solve the problem programmatically. Having finished the naive algorithm I quickly realized that it would take eons for the bloody program to finish. I managed to devise a different algorithm that was faster than my original, and after optimizing it I shaved another few millennia off the runtime, but I was basically getting nowhere.

A friend then pointed me to the obvious math clues, which was that the array contained the squares of the first 100 natural numbers. Combining that with the fact that the obvious algorithm was obviously not the solution I thought about a better solution for a while. Unfortunately I couldn't find one, and I needed to move on, so I cheated. I looked up the solution online. I know, that's not a very educative thing to do, but I did use the opportunity to understand the correct algorithm and implement it myself.

Looking for a solution online, I first came across <a href="http://www.maztravel.com/haskell/euler_problem_201.html" target="_blank">this Haskell implementation</a>. I installed Haskell to confirm that it worked, which confirmed that this solution was just as slow as my flawed algorithm. It works on a list of 30 elements, but on a list of 100 elements you'll be waiting forever. Next I came across <a href="http://wonderfl.net/c/3zwX" target="_blank">this ActionScript solution</a>, which is absolutely brilliant. I would explain the algorithm here but I won't, for two reasons: 1. I'm not sure if I can explain it correctly and 2. if you see it in action you will realize why it's brilliant.

I ported the algorithm to Java (my 'home' language), added a GUI that shows the contents of the array and a Next button that allows you to skip through the program step by step. You can give this a try for yourself: <a href="https://www.colorfulwolf.com/euler/P201.jnlp" target="_blank">here's the WebStart version</a>. The program shows you step by step what happens for a list of 30 elements. I added some colors to make it more clear what's happening. The yellow blocks at the bottom of the array are the values that are used to get the final answer in the end. (Note that the scrolling is quite buggy. If you scroll back left, resize the window a bit to make it refresh properly &gt;_&lt;;)

<a href="https://s3.amazonaws.com/cfwblog/uploads/2010/10/euler201.jpg"><img class="aligncenter size-medium wp-image-3465" title="Euler201" src="https://s3.amazonaws.com/cfwblog/uploads/2010/10/euler201.jpg?w=300" alt="" width="300" height="198" /></a>

<a href="https://www.colorfulwolf.com/euler/P201.java" target="_blank">Click here</a> to see the Java source code.

Doing this problem made me realize that in some cases the choice of algorithm is absolutely vital, and understanding the problem and extracting the right bits of information is very important. A healthy background in math can also save your day, in this case the <a href="http://understanding.mindtangle.net/?p=205" target="_blank">formula</a> for the sum of the square of the first n integers. I leave you with this quote, which I will not soon forget:
<blockquote><strong>Work with the definition of a set, not with the set itself.</strong></blockquote>