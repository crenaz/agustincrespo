---
layout: '../../layouts/BlogPost.astro'
title: 'Command Line Interfaces'
summary:
  'Here is my attempt to list all the CLIs that I have come across.'
pubDate: '2022-11-14'
image: '/images/pic02.jpg'
---

Most of the interpreted languages have CLIs but they are technically REPLs. But tools like Wrangler for CloudFlare and gh for GitHub. 

Here's how variable types should be declared in typescript:

```ts
class Add {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  Display() {
    console.log(this.x);
    console.log(this.y);
    console.log(`Sum: ${this.x + this.y}`);
  }
}
let add = new Add(2, 3);
add.Display();
```

CLI tool for p5 sketches:  "p5 Manager"


##Start Nginx services

```
sudo service nginx start

sudo service nginx status

sudo service nginx restart

sudo service nginx stop
```