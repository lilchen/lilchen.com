---
layout:     post
title:      The process for my site redesign
date:       2015-09-13 01:20:19
description: An exploration and breakdown of the steps taken to redesign my site.
thumbnail:   /blog/site-redesign-thumbnail.png
tags:        testing
featured:    true
condensed:   false
subcategories: [design]

---

<div class="width--full">
  <img src="{{ site.baseurl }}/img/blog/site-redesign-thumbnail.png" alt="site redesign sketch mockups">
</div>

Once upon a time, I promised myself that I would redesign my site. We all know how that story goes, or rather, how long it takes to even begin. _/insert cheeky smile here_.

During said interim of avoiding my site, I spent my time compiling a list of components that I felt it needed. Web-technology was (and still is) evolving at alarming speeds, and I didn’t want to get left behind. The more articles I read, the more I found myself jotting down “requisites” in Evernote. Here are just a few:


* Conditional loading
* Keyboard integrated commands
* Touch screen responsive
* Optimized images for all social media platforms
* Optimize load request times
* 508 compliance
* Project featured image fading to white as you scroll
* Loading animations

As these list items continued to grow, so did my wariness of ever completing and launching this site. Still, I wanted my new site to absolutely ~*perfect*~, so I trudged forwards. It wasn’t until I showed this bulleted list to former colleagues that I snapped out of this mindset:

> "STOP IT!"

They yelled, while metaphorically slapping me across the face. They pulled up the following image and asked if I had seen it before.

<div class="width--1_2">
  <img src="{{ site.baseurl }}/img/blog/minimum-viable-product.jpg">
  <p class="caption">Image | <a href="http://blog.fastmonkeys.com/2014/06/18/minimum-viable-product-your-ultimate-guide-to-mvp-great-examples/" target="_blank">FastMonkeys</a></p>
</div>

I owe them infinite amounts of wine and cheese because that was a defining moment of clarity for me. I realized how inefficient my initial approach had been. From then on, I decided that my site redesign would no longer focus on the end-product but instead, the __process I took to get there__.


###Brief history lesson
Before we get started, here’s a bit of background. When it comes to coding, I am completely self-taught. At 15 years old, it pissed me off that I was not capable of customizing my Xanga and LiveJournal the way others did. And thus, began my journey into the world of HTML/CSS.

During that era, the process for designing a site was far different than it is today. The early 2000s was brimming with table layouts, image-maps, and single-pixel background images repeated along the y-axis. It was also a time where I often created pixel-perfect designs before ever going near code.

<div class="width--wide">
  <div class="width--1_2">
  <img src="{{ site.baseurl }}/img/blog/livejournal-lovehina.jpg">
  </div>
  <div class="width--1_2">
  <img src="{{ site.baseurl }}/img/blog/livejournal-gackt.jpg">
  </div>  
</div>

![OC fan site]({{ site.baseurl }}/img/blog/oc-fansite.jpg)

Ah, yes. Pixel fonts, scanlines, exorbitant brush usage, and iFrames. Yum. I hope you enjoyed those images because I had to dig through my archaic Photobucket to find them. Yes, _Photobucket_.

I used to have several themes for my LiveJournal alone. I changed my layouts as I got sick of them, which was too often. You could say this habit is the younger sibling of what I call, “__designer syndrome__.” Most of us have experienced designer syndrome: Creating a site for oneself, loving it for approximately 72 hours, and then hating it.

How do I design a site that’ll elude designer syndrome? How do I design for sustainability? Sustainability could mean systematic CSS that will make sense later, layouts that do not pigeon-hole your future content, and in general, as much flexibility as possible. How do I prioritize what parts to tackle first? These were some of the questions I asked myself before embarking on this personal project.

###Wireframing
I begin all projects in the sketchbook. A lot of people believe in a mobile-first approach when it comes to coding. I believe it needs to begin as early as the sketching phase.

<div class="width--wide">
  <img src="{{ site.baseurl }}/img/blog/site-redesign-wireframe.jpg" alt="site redesign wireframe pencil sketches">
</div>

I sketch potential site designs in a very specific way: three rectangles drawn parallel to each other, each increasing in width as they advance. Each represents a different device: mobile, tablet, desktop. When I sketch this way, it helps me visualize how to structure my content code-wise. It prepares me for how the positioning of my content will adjust as screen-width changes.

Additionally, sketching mobile-first forces me to prioritize my content. I’d never want my site visitors to think they are missing content on a smaller device because I treated mobile experience as an afterthought.

My sketches are often riddled with crazy notes written to myself. Typically, I try to prepare for the worst situations while asking lots of questions:

* What happens if your ‘Upcoming Speaking’ section has no speaking gigs coming up?
* Does it make sense to merge my gaming bio with my design? What structure makes more sense for site visitors and what they seek?
* What happens if I have too much or too little copy in certain sections?

I also try to consider file structure to make my life a little easier.

![file asset structure sketch]({{ site.baseurl }}/img/blog/image-structure-sketch.jpg)


###Converting to digital wireframes

Next, I converted my sketches to clean, digital wireframes. It was important to see if my sloppy layouts translated well onto a gridded canvas.

I heard tales of <a href="https://www.omnigroup.com/omnigraffle" target="_blank">OmniGraffle’s</a> wireframing abilities, so I had to give it a try. This conversion tidied my sketches and gave me a better idea of whether or not my layouts were actually effective. Thankfully, this led seamlessly into the next step of my process, prototyping.

<div class="width--wide">
  <img src="{{ site.baseurl }}/img/blog/site-redesign-omnigraffle.jpg" alt="site redesign omnigraffle wireframes">
  <p class="caption">Early wireframes of home page and a blog post.</p>
</div>

###Prototyping in browser

In the past, I have designed site mockups in Photoshop with the exact way I wanted it to function in mind. And then, when I tried to actually code it, I realized it wasn’t possible. That really _sucked_. This time around, I knew I had to make sure things worked in the browser prior to investing ample amounts of time into visual design.

I combed the internet for different frameworks and eventually found <a href="http://bourbon.io/" target="_blank">Bourbon</a>, a bundle of resources and tools for designers. <a href="http://neat.bourbon.io/" target="_blank">Neat</a> is their light-weight grid framework, perfect for small sites like mine. All it takes is one line of code to show gridded columns within a browser!

The integration of this tool along with my digital wireframes made protoyping layouts in browser such a smooth, simple process. Unfortunately, I forgot to take screenshots of me wrestling with responsive layouts. It’s okay, I spared your eyes of all the `border: 1px solid red;` I used to demarcate DIVs.


###Choosing a content management system

After past experiences, I knew I didn’t want or need Wordpress for my personal site. I wanted a light-weight and flexible CMS. Similar to what I did for frameworks, I looked up tons of recommended content management systems and bookmarked all of them.

Eventually, my tech lady friends sold me on <a href="http://jekyllrb.com/" target="_blank">Jekyll</a>, a flat-file CMS that works by digesting templates and content you’ve written and spitting all of it out into a final version, which you then upload.

I was hesitant to try Jekyll at first as it heavily relies on Terminal usage, which I had little experience in. It also requires you to learn a bit of <a href="https://docs.shopify.com/themes/liquid-documentation/basics" target="_blank">Liquid</a>, a templating language by Shopify. I immediately started looking up tutorials and to my surprise, there are lots! I took bits and pieces of each to form my own workflow. These two are a good starting point:

* <a href="http://cloudcannon.com/jekyll/2015/03/13/5-common-jekyll-traps.html" target="_blank">5 common Jekyll traps for beginners</a>
* <a href="https://github.com/jenmyers/jekyll-kickoff" target="_blank">Jekyll Kickoff</a>

By the end of the week, working with Jekyll became far more fun than daunting. Admittedly, there was a bit of a learning curve towards the beginning, but it gets easier once you move past it. The marriage of a stubborn personality and the Google search bar helped navigate me through the entire process of setting it up. And now, as you can see, I have a working site!

Trust me, it’s worth it. Jekyll’s endless possibilities actually make me _want_ to come back to my site to do more.


###Planning the CSS structure

Now that my site was functioning at a basic level in browser, it was time to address the elephant in the room: stylesheets. Like I said earlier, I wanted to build this site in a sustainable way. If I revisit my site in a few months, I want to be able to actually _understand_ my CSS. Picking up where I left off should not be an arduous task.

With that in mind, I set out to research different methodologies for breaking down Sass into partials, modules, and components. I also examined several proposed CSS naming conventions.

_TheSassway+ wrote a a great introductory article on <a href="http://thesassway.com/beginner/how-to-structure-a-sass-project" target="_blank">structuring Sass projects</a> that acted as a strong, basic foundation for me. I jumpstarted off these guidelines, but adjusted my structure accordingly as I wrote more and more of my own CSS.

Next, I decided that BEM and OOCSS were the best naming conventions for _me_. I definitely recommend taking a look at all of them before choosing for yourself.

__BEM__ stands for block, element, modifier. This naming convention is one of the many proposed CSS syntaxes out there. There are several <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/" target="_blank">articles</a> explaining how to implement this ruleset.

__OOCSS__ stands for object-oriented CSS and is another way of writing CSS. _TheSassWay_ wrote a digestible <a href="http://thesassway.com/intermediate/using-object-oriented-css-with-sass" target="_blank">piece</a> for beginners trying this out with Sass.


###Tackling visual design

Visual design as the last step, eh? This was not something I was accustomed to, yet it felt so relieving! The underlying foundation was in place, thus leaving styling as one of the final touches.

At long last, I decided to test out <a href="http://www.bohemiancoding.com/sketch/" target="_blank">Sketch</a>, the app the entire design world had been buzzing about for quite some time. Aside from a few quirky inconsistencies, Sketch helped speed up the design process quite a bit.

<div class="width--wide">
  <img src="{{ site.baseurl }}/img/blog/site-redesign-sketch.jpg" alt="site redesign sketch mockups">
  <p class="caption">Mockups of the home page in mobile and desktop exported from Sketch.</p>
</div>

I deliberately kept the visual design of my site quite simple. Without an an established brand or identity, I didn’t feel the need to add any extra embellishments. Knowing that colors and typefaces were easily adjustable with Sass, I wasn’t too concerned. Additionally, I kept things minimal to draw more attention to my work.

###Addressing problems

Finally! With a few tweaks, all the pieces came together to create my site as it is now. Of course, none of this could have happened without obstacles along the way:

* Htaccess file blocked fonts
* CodeKit and Jekyll do not  get along
* Jekyll used 100%+ CPU, needed event listener
* Wrestled Facebook’s object debugger for working meta tags

Honestly, despite how much errors make you want to rip your hair out, they are a wonderful learning experience. You’d be surprised how much I was forced to learn to fix these. Chances are that your issue is not something new and the answer is waiting for you to find online :).

###Upcoming Features

Congratulations, you’ve somehow made it to the bottom of this disjointed post. It is time to inform you that my site is actually __not done__, and that’s the _best_ part. This post covered the exploration of my initial process, but now it is time to __iterate__. My site as you see it now is just one version of itself. Here’s a redundant screenshot of my site that … you’re currently on!

![site responsive gif]({{ site.baseurl }}/img/blog/site-redesign-responsive.gif)

I’ve already started creating a future to-do list:

* Add gaming section
* Add different types of blog posts (gallery, etc.)
* Refine CSS
* Add blog tagging functionality
* Fine-tune typography

As I find pockets of time to make these changes, I’m sure I’ll discover some horribly written CSS or incorrectly sized images (I already have). Perhaps, new technologies will be out and I’ll have to switch a few things over (cough flexbox). Regardless of what it is, I’m excited to keep building my site out.

The good news is that it has been a few months since I finished and I still don’t hate it. :) Hoping that this wall-of-text was at least somewhat helpful to you.

<hr>

####Additional Basic Tools 

######Sublime
<a href="https://www.sublimetext.com/" target="_blank">Sublime</a> is a great text-editor. I can’t wait to memorize all the intricate keyboard shortcuts. Nuff said.

######Sass
Ever since I heard about Sass years ago, I had always wanted to utilize it. I experimented with it in making my <a href="http://lilchen.com/blog/insight-into-stream-overlay/" target="_blank">stream overlays</a>, but really put it to use for this site. _ABookApart_ has a great <a href="http://lilchen.com/blog/insight-into-stream-overlay/" target="_blank">introductory book</a> by Dan Cedarholm if you want to give it a go.

######Codekit
<a href="https://incident57.com/codekit/" target="_blank">CodeKit</a> is essentially a compiler and LiveReload crammed into one app, all with a GUI (Graphical User Interface)! As a Mac user who didn’t use Terminal much prior, it was quite useful.

Word of caution though, getting Jekyll to work seamlessly with CodeKit was quite a pain. Although, I know that the creator has heard this complaint and is working on it! With enough Googling, I also figured out a workflow that worked for me.