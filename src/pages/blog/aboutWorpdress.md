---
layout: "../../layouts/BlogPost.astro"
title: "Thoughts about Wordpress"
summary: "I have thoughts on Wordpress"
pubDate: "2022-11-22"
image: "https://source.unsplash.com/random/800x500?1"
---

Seriously, I have go back to school for Software Engineering and the one of the best places in NYC for this is *a very famous school* (NAME REDACTED).  They have over ten years of experience shaping and building tech talent since 2012, which incidentally, is the year I moved to the city, myself.  So, you know whenever you are shopping for a product or a service, you do your due diligence, right?  Well, you can imagine my surprise when looking through their homepage's source code and I find this: 

 <link rel="mask-icon" href="https://aVeryFamousSchool.com/wp-content/themes/famous-school/assets/images/favicons/safari-pinned-tab.svg" color="#00b3e6">

 See right there, after the top level domain? They are using [wordpress!](https://wordpress.org/) Now, I sure do wish that I could be the better man and say that I don't have anything against wordpress, but I do.

 If you insist on still using [PHP](https://phplang.org/) in this year of 2022 going on 23, why not use [CakePHP](https://cakephp.org/), [Laravel](https://laravel.com/) or [Magento](https://www.magento.com)? (Magento being the only one I've actually worked with.)  So again, why [PHP](https://phplang.org/) and not [Ruby](https://www.ruby-lang.org/en/), [Python](https://www.python.org/), [Rust](https://www.rust-lang.org/) or [Go](https://go.dev/)?  I don't blame them for not using [Haskell](https://www.haskell.org/) or [Erlang](https://www.erlang.org/) as those are truly difficult languages to casually pick up.  And of course, the obvious elephant in the room is the entire Javascript ecosystem(not just React-based stuff). Working with things like [Vue](https://vuejs.org/), [Solid](https://www.solidjs.com/) and  [Vite](https://vitejs.dev/) is just so much better, and if you can't replace [React](https://reactjs.org/) because something breaks, just use [Preact](https://preactjs.com/) instead.  It ships about 3kb instead of like 70kb.  They could have literally chosen any of the 50 frameworks that I've listed [here](). 
 The old adage that "if it aint broke, don't fix it" shouldn't apply to high performance industries.  In motorsports and in healthcare, teams usually 
look to leverage the best technology in order to gain the best result for all those involved.  I know that in banking and manufacturing they often have old legacy systems still running but other areas of finance are cutting edge (predictive modeling not crypto).  
Then again, I shant be to quick to mis-judge.  Wordpress can be rock solid if done correctly.  But only if you follow [best practices](https://github.com/dale-c-anderson/hardened-wordpress) applied to a hardened docker image like this [one](https://hub.docker.com/r/rapidfort/wordpress) deployed in a [kubernetes cluster](https://github.com/riotkit-org/wordpress-hardened).