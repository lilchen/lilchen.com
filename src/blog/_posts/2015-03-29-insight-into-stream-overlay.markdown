---
layout:      post
title:       Insight into Stream Overlay Creation
description: Digging deeper into the design process of producing a stream overlay.
thumbnail:   /blog/overlay-wireframe.jpg
date:        2015-03-29 12:31:19
tags:        overlay html css design
featured:    false
condensed:   false
subcategories: [gaming, design]
---


I began [streaming](http://www.twitch.tv/milktea) about two months ago due to a fascination with the culture. As a designer and gamer, I was enticed by the idea of critically thinking about design for the sole purpose of streaming video games :D.

This is just the beginning of my foray into overlays. Still, I thought it may be helpful for others to explain my thought process behind creating one. I firmly believe that overlays (and most design) require an iterative approach, so don’t be surprised when my overlay changes yet again just days after posting this ;).

### Research: Creepin'

I first began with __“research”__, aka prowling the channels of popular Twitch streamers to see what types of information and language they used in their overlays. Some of the most common categories included:

  * Webcam Feed
  * Chat
  * Game Capture
  * Recent Donor
  * Top Donation
  * Latest Tips
  * Now Playing (Music)
  * Follower Goal
  * Sub Goal
  * Social Media (Twitter, Facebook, etc.)

After compiling a mental bucket list of these categories, I evaluated which my personal needs required. As a new streamer, I didn't need anything related to donations (or so I thought). I am also not partnered with Twitch, so sub goals were out of the picture. This left me with:

* Webcam Feed
* Chat
* Game Capture
* Follower Goal
* Now Playing (Music)
* Social Media

### Wireframing: Drawing boxes

The next stop was my sketchbook for wireframing. Despite what few categories I needed initially, I wanted to create a flexible overlay that could be built upon without necessitating a complete facelift. I determined that compartmentalizing these tidbits of information into modules would allow for the most fluidity (my extreme bias towards grids aside).

<div class="width--wide">
  <img src="{{ site.baseurl }}/img/blog/overlay-wireframe.jpg" alt="sketched wireframes">
</div>

### Iteration: Failing a lot

Once I stopped unnecessarily obsessing, I decided to move forward with a three column approach. It wasn’t perfect (yay minimum viable product), but I wanted to begin using it as soon as I could to begin receiving feedback from __viewers__ (aka people watching me play video games). As my friends know, I don’t wear colors so my first overlay predictably followed the same trend (except in this pic, it's old okay).

![Gray overlay]({{ site.baseurl }}/img/blog/overlay-gray.jpg)

I only used this overlay maybe twice during evening hours before receiving amusing, critical feedback:

>“Omg, this is burning my eyes out! I'm trying to watch this in a dark room, ahhh!”

Ha. I would have _never_ thought of that. Noted, go darker.

Not to mention, the decision to cut colors also meant I had willingly eliminated a great visual tool for creating hierarchy and contrast. Regardless of what my fashion sense dictated, I wasn’t very happy about that. Back to the drawing board I went.

![Color overlay]({{ site.baseurl }}/img/blog/overlay-color.jpg)

_I know_, you’re cringing. Don’t worry, so am I. I quickly pumped this out to see if it would help reinforce my “branding” since I use these colors on my [site](http://www.lilchen.com). The feedback, of course, was that these colors were blinding. I concur, I totally did not do this color palette justice with my rushed execution.

![Color overlay]({{ site.baseurl }}/img/blog/overlay-pink.jpg)

The next attempt focused on using color as subtle highlights. The obvious choice was __pink__, duh (those who know me in real life would _never_ guess that pink is my favorite color).

Using a pop of color was a great way to add contrast to my flat-design overlay without crossing over into the world of drop-shadows and gradients. Given the [skeuomorphic](http://www.bbc.com/news/magazine-22840833) approach video games take, I really wanted to __establish an immediate visual difference between the game content and my content__.

This overlay was probably the one I stuck with for the longest before realizing that making even a tiny change required editing the image in Photoshop and reuploading a new image entirely. If I didn’t feel like listening to music, there was no easy way of removing that module. The only option would be to leave that spot blank despite the music icon’s presence, which screams _“you failed as a designer”_ to me.

My viewers also then began requesting a donation button, which would further require several more pieces of content on my overlay. It was clear that I needed even moar flexibility.

### Converting to code

It dawned on me one day that because of my gridded approach, this overlay could easily be translated to HTML/CSS! After letting the idea marinate for a bit, I snapped one evening and camped my couch until 8AM coding it (shoutouts to pita chips and popcorn).

This is what I ended up with.

<div class="width--wide">
  <img src="{{ site.baseurl }}/img/blog/overlay-final.jpg" alt="Coded overlay gif">
</div>


The entire overlay is wrapped inside a `div` sized at __1920 x 1080 pixels__. It features a three column layout.

The tips section, follower-goal/music/etc. section, and social media section are unordered lists. The chat box, webcam area, and game capture area are styled DIVs. The three headers up top are styled header tags.

The typeface was purchased from [HypeForType](http://hypefortype.com) and is being pulled in locally. Something worth noting is that I did have to convert it to .TTF format for [OBS](http://www.obsproject.com) to pick it up for regular text sources.

The icons are all SVGs which are hosted remotely because [OBS](http://www.obsproject.com) was having issues grabbing these particular files, even with relative paths. You don’t have to use SVGs, but the fact that they appeared fuzzy on my retina display drove me nuts. Yes, fully aware of how obsessive I am.

![Coded overlay gif]({{ site.baseurl }}/img/blog/overlay-code-vid.gif)

My overall goal in creating an HTML/CSS overlay was to be able to __edit it easily without a dependency on images__. In the section ahead, I’m going to explain the approaches I took with code. Here’s where things get nerdy so if you aren’t a web-designer, feel free to drop off. Geeks, keep on readin’.


#### SCSS 
To make things easier for myself, I used __SCSS__ to define obvious variables, like typeface, highlight-color (the pink), and a few DIV heights. If I want to turn all the pink strokes in my layout orange, I only have to alter `$highlight-color` at the top of the .scss file.

{% highlight sass %}
// COLORS
$highlight-color: rgba(#ff9d9c, 1);

//BACKGROUNDS
$header-bg: rgba(#ffffff, .25);
$module-bg: rgba(#ffffff, .35);
$capture-border: rgba(#ffffff, 1);

// FONTS
$body-type-color: rgba(#ffffff, 1);
$body-type-font: 'Texta-Bold';
$header-type-color: rgba(#bbbbbb, 1);
$header-type-font: 'Texta-Medium';

// LAYOUTS
$block-height: 50px;
$chat-height: 544px;
{% endhighlight %}

#### OOCSS

Moving onto the info-categories like follower goal, music, tips, and others. Let’s call them __medallions__ since they are small tokens of information. Each section is an `<ul>`, therefore each medallion is just a `<li>`. If I want to remove one, all it takes is commenting out the list item. Likewise, adding one just requires appending a list item.

For styling, `display: -webkit-flex;` is used to center the icons and text. I then used __object-oriented CSS__ to make each medallion as malleable as possible. Each icon, height, and border is determined by a class. For example, if I want to create the music medallion, all I’d have to type is:

{% highlight html %}
<li class="music border h1"></li>
{% endhighlight %}

_By the way, `h1` actually refers to “height-1”. Yep, bad choice of class name on my part. But hey, I made this in one night to just test it out! I’ll smooth things over as I make more modular, systematic layouts._

Likewise, if I wanted the notes section without a border, I would type:

{% highlight html %}
<li class="note borderless h1">Notes</li>
{% endhighlight %}

I pasted a snippet of my these classes below so you get an idea of how I organized them. You’ll notice that the varying heights are defined by multiplying one constant variable. That way, all I have to do is change `$block-height` to alter all heights. Either that or I can tweak the multiple specific to the height I want to adjust.

{% highlight scss %}
.follower-goal {
background: 2px center no-repeat url(/icons/heart-icon.svg);
}

.music {
background: 2px center no-repeat url(/icons/play-icon.svg);
}

.goal {
background: 2px center no-repeat url(/icons/banner-icon.svg);
}

.note {
background: 2px center no-repeat url(/icons/note-icon.svg);
}

.tip {
background: 2px center no-repeat url(/icons/sparkle-icon.svg);
}

.h1 {
height: $block-height * 2;
}

.h2 {
height: $block-height * 4;
}

.border {
border-bottom: 1px solid rgba(#ffffff, .4);
}

.borderless {
border-bottom: 0;
}
{% endhighlight %}

### Testing functionality

Using CLR browser plugin, I pulled the overlay seamlessly into OBS. There was just one problem...

![Sketched wireframes]({{ site.baseurl }}/img/blog/overlay-error.gif)

Weird, huh? The overlay clearly works, but fails to load consistently in [OBS](http://www.obsproject.com) upon start. Until I double-click the source and hit “OK” (_without even making any other adjustments_), it does not appear 9 out of 10 times. Not a major issue, but who wants to see this lack of preparation at the start of each VOD? I surely don’t.

I'm still chiseling away at this problem with the help of some awesome developer friends. If you think you have a solution to this, I'd appreciate a hint! :)

### Fin (for now)

And that’s where I currently am in this process! I have a lot more plans in the near future which include custom donation alerts, different versions of in-between game overlays, and more. __Do let me know if this peek into my brain was insightful or helpful__. And please keep in mind that this is not meant to be a tutorial!

_That's a wrap! Catch me on [Twitter](http://www.twitter.com/_lilchen) for more silliness/nerdiness/obsessiveness._
