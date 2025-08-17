---
published: true
title: "All paths of safe communication are blocked"
id: "5768"
slug: "all-paths-of-safe-communication-are-blocked"
author: rv
date: 2013-08-05 20:01
categories: Tech
---
Yesterday it was reported that <a href="http://www.twitlonger.com/show/n_1rlo0uu" target="_blank">half of all Tor sites were compromised</a>, due to an exploit in Firefox, the only widespread browser you can trust, more or less. Authorities could easily get access to the certificate authorities issuing https certificates, not to mention that they're snooping all internet traffic anyway and the possibility that a weakness exists in the https encryption cannot be ruled out. All ways of communicating via the internet without a prenegotiated encryption key are not secure.

All ways of generated an encryption key on your computer are most likely unsafe as well. All mobile OSes are unsafe because they are owned by companies who have to conform to government requests for access. Linux may be safe, depending on which distro you use, but if you're using Windows or OS X then it's obvious that you're fucked. But even if your OS is safe, there's always the rumors that your hardware might have some custom firmware installed on it that logs everything you do. It could be as simple as a little device between your keyboard and your PC.

So, if I wanted to send a message absobloodysecurely to my friend with no chance of anyone being able to know what the message says, how do I do it? The only way that's been proven to work: <strong>talk to him/her in person</strong>. And even then you're not fully secure as people may be listening in and there may be surveillance cameras. For now let's assume that there's nothing physical eavesdropping on you and let's focus on sending the message.

It is possible to send a message securely via the internet that even the most paranoid spy organisation can't do anything about. Here's a list of the things you'll need.

First, you'll need a fully open-source computer: hardware, firmware, OS, drivers, software. Not a single component may contain closed-source components. You need two of these because the person you're sending the message to will need one too.

Next, you'll need a way to confirm that your machine isn't compromised. I think this one's pretty much impossible and will always remain the biggest risk. If you have reason to suspect your machine is compromised then you can't trust anything your own machine says about its state. Validating the authenticity of your firmware/OS/whatever over a network connection is impossible because you can't trust the endpoint.

Frankly, I think the second problem is unsolvable. Modern computers are so complex that no single person can manually verify that each component has not been tampered with, and any shortcut function can be used to circumvent the authenticity check. I'm no expert on hardware, but the way I would do it is to have a portable mini-computer (USB stick, yubikey-like and/or raspberry pi) with me at all times, which contains the checksum of each of the software and firmware components that make up my computer. To check the computer you could physically connect this device to each component, which would then access each component's bit of code, calculates the checksum and tells you if it's been compromised. It has to be the mini-pc that does the checking since you can't trust your own machine.

Third: a way of securely encrypting the message you're about to send. At this point it should be safe to assume that your local machine hasn't been compromised, so you can run open-source encryption software on it to encrypt your message. Since you're encrypting it client-side and never sending any kind of key, public or private, to the recipient, there's no need for the network to be secure.

Having achieved all this, there's still two ways an attacker can get access to your message. One: they force you to give up your encryption key, and two: they use a brute-force attack or a ultra super quantum magic attack. The first one is easy to solve. Truecrypt does this by allowing you to decrypt a partition with two different keys, allowing you to show different content for each key.

The second problem is a lot more tricky. I think it can be solved with <a href="https://en.wikipedia.org/wiki/Steganography" target="_blank">steganography</a>, but I'm not entirely sure. As an example, let's take the method of encrypting a message inside an image. This provides you with plausible deniability, since the data you're sending just looks like an image, and there's no way of telling that the image contains a hidden message. But here's the key point: <strong>decrypting the image with a key other than the correct one should also (have a chance to) produce a coherent message</strong>. If the attacker knows exactly what to decrypt then he can brute-force it. <a href="https://code.google.com/p/2pix-steganography/" target="_blank">2-pix steganography</a> appears to allow for different messages depending on encryption key, but I'm not 100% sure.

So, to summarize, I don't think the biggest problem we have right now is that the network is insecure. This is something we have to take for granted. The problem is that we can't say with 100% certainty that the machine we're using to write the unencrypted message is secure.