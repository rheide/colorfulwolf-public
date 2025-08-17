---
published: true
title: "Resources are being utterly and completely wasted on mining Bitcoins"
id: "4158"
slug: "resources-are-being-utterly-and-completely-wasted-on-mining-bitcoins"
author: rv
date: 2011-05-31 11:43
categories: Tech
tags: bitcoin
---
There's something fundamentally wrong with the current Bitcoin mining system, yet this wrongness is also part of what makes it brilliant and could never be changed. The reason why it could never be changed is not because of technical difficulties, it's because of human nature. It's a beautiful example of the <a href="https://en.wikipedia.org/wiki/Prisoner's_dilemma" target="_blank" rel="noopener">Prisoner's Dilemma</a> being played out in real life. Here's why.

(If you don't know what Bitcoin is yet, Mastering Bitcoin is a great book to get started with).

The extremely short version of how bitcoins are generated (the <a href="http://www.bitcoin.org/" target="_blank" rel="noopener">main site</a> has a lot more info): a lot of computers calculate cryptographical hashes that match a certain pattern. When the pattern set by the network is found, one computer announced that he found the hash, and all network members cooperatively agree to grant the 'winner' 50 bitcoins. Then the network members cooperatively decide what will be the next hash that's to be found, and they all start calculating again from scratch.

The most important aspect of the whole thing is the rate at which the bitcoins are generated. If more PCs join the number-crunching effort, more hashes can be tested and therefore found in the same timespan. Ten PCs are faster than one. But here's the kicker: the network self-regulates the speed at which bitcoins are generated. After a certain timespan (measured in days), the network does a self-check to see how many days it took to generate x many hashes. If that timespan is too short, the difficulty level is increased, which makes it harder for PCs to find the next hash during the next round. This description may sound a bit simple, but it's enforced by rock-solid math and a peer-to-peer network of which more than 50% would need to be controlled in order to break the rules. That's like saying more than 50% of all PCs connected to the internet would have to be hacked. It's extremely unlikely.

The problem is the self-regulation. This regulation process works the other way around as well. If the network members detect that the last iteration took too many days, the difficulty will be adjusted down, and the next round the hashes will be easier to locate. This means that if all members of the network could agree on only using 1% of their available computing power, thus also only 1% of electricity and 1% of the electricity bill they have right now, the entire bitcoin system would still continue to work exactly as before! Everybody would still get the same payout in amount of bitcoins received, and the self-regulating nature of the network means that exactly the same total amount of bitcoins would be generated as before.

Human nature does not allow that to happen, of course. After all, if you do have the computing power available to make 100 times more than you are making now, why not use it? And that's what everybody is doing right now (myself included). We're all trying to profit from the high exchange rates (1BTC is 9USD at the time of writing this) that we're throwing everything we've got at the bitcoin network. We profit from our actions for a couple of days, then the network detects the increase in speed and adjusts itself down, negating all the efforts we put into it, forcing us to buy even more processing power. It's an endless cycle of stupidity that simply cannot be solved by human nature.

I should note here that the driving force of all this madness is the economy. Capitalism. As soon as people realized that bitcoins are a unique concept, whose properties might well make it extremely successful, they wanted to invest in it. Since the supply of bitcoins is limited and regulated, eventually demand exceeds supply, and prices go up. As bitcoin gained popularity that's exactly what's been happening over the past few months. The ridiculous prices that people are paying for bitcoins right now still more than makes up for the cost of buying new hardware to find bitcoins faster. But eventually that's going to bottom out, and we'll be stuck with a network of the most powerful computers ever built, grinding down on a problem that doesn't even need all that power. What a tremendous waste of resources.

There is a solution to this problem. If someone releases a new Bitcoin client (and miners) that run on only 1% of the available processing power, and gets more than 50% of the network to adopt this new client, then total electricity costs drop would drop hugely, and still the same amount of bitcoins would be generated. &nbsp;The demand for bitcoins sets the price, and the supply won't change, so everybody profits. Yet we all choose our own success, which ultimately has negative consequences for everyone involved. That's just not smart.

&nbsp;

Update: it's been pointed out to me that the solution I propose is flawed and wouldn't work. I have to agree. I tried to think of a way that would let the peer-to-peer part of bitcoin regulate the processing power, but I can't think of any way to do that reliably and securely. As other people pointed out, it would still be possible to game the system. This only serves to illustrate the elegance of the original bitcoin idea.