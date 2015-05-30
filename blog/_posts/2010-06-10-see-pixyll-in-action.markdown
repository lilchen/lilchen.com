---
layout:     post
title:      Pixyll in Action
date:       2010-06-10 12:31:19
summary:    See what the different elements looks like. Your markdown has never looked better. I promise.
thumbnail:   /blog/gmoney_smash_fest.jpg
date:        2013-10-17 12:31:19
tags:        testing
featured:    false
condensed:   true
subcategories: [testing]

published: false

---

<blockquote>
  <p>
    Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  </p>
  <p>
    Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  </p>
  <footer><cite title="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</cite></footer>
</blockquote>


There is a significant amount of subtle, yet precisely calibrated, styling to ensure
that your content is emphasized while still looking aesthetically pleasing.

<div class="video__container">
  <iframe src="https://www.youtube.com/embed/orOa-yRL4NI" frameborder="0" allowfullscreen></iframe>
</div>

All links are easy to [locate and discern](#), yet don't detract from the harmony
of a paragraph. The _same_ goes for italics and __bold__ elements. Even the the strikeout
works if <del>for some reason you need to update your post</del>. For consistency's sake,
<ins>The same goes for insertions</ins>, of course.

<div class="twitter__container">
  <blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr">Remember that talk I gave? :] It&#39;s here: Why empathy is integral to sexism in gaming convos➝ <a href="http://t.co/kDbGSH8UrB">http://t.co/kDbGSH8UrB</a> <a href="http://t.co/GKWVZf1g47">pic.twitter.com/GKWVZf1g47</a></p>&mdash; Lil | Milktea (@_lilchen) <a href="https://twitter.com/_lilchen/status/603241749260140544">May 26, 2015</a></blockquote>
</div>

### Code, with syntax highlighting

Code blocks use the [solarized](http://ethanschoonover.com/solarized) theme. Both the light and
dark versions are included, so you can swap them out easily. _Solarized Dark_ is the default.

{% highlight ruby %}
class Awesome < ActiveRecord::Base
  include EvenMoreAwesome

  validates_presence_of :something
  validates :email, email_format: true

  def initialize(email, name = nil)
    self.email = email
    self.name = name
  end
end
{% endhighlight %}

# Headings!

They're responsive, and well-proportioned (in `padding`, `line-height`, `margin`, and `font-size`).
They also heavily rely on the awesome utility, [BASSCSS](http://www.basscss.com/).

##### They draw the perfect amount of attention

This allows your content to have the proper informational and contextual hierarchy. Yay.

### There are lists, too

  * Apples
  * Oranges
  * Potatoes
  * Milk

  1. Mow the lawn
  2. Feed the dog
  3. Dance

### Images look great, too

![desk](https://cloud.githubusercontent.com/assets/1424573/3378137/abac6d7c-fbe6-11e3-8e09-55745b6a8176.png)


### There are also pretty colors

Also the result of [BASSCSS](http://www.basscss.com/), you can <span class="bg-dark-gray white">highlight</span> certain components
of a <span class="red">post</span> <span class="mid-gray">with</span> <span class="green">CSS</span> <span class="orange">classes</span>.

I don't recommend using blue, though. It looks like a <span class="blue">link</span>.

### Stylish blockquotes included

You can use the markdown quote syntax, `>` for simple quotes.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta mauris.

However, you need to inject html if you'd like a citation footer. I will be working on a way to
hopefully sidestep this inconvenience.

<blockquote>
  <p>
    Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  </p>
  <footer><cite title="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</cite></footer>
</blockquote>

### There's more being added all the time

Checkout the [Github repository](https://github.com/johnotander/pixyll) to request,
or add, features.

Happy writing.
