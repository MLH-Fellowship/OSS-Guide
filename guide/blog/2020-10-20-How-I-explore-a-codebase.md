---
slug: hello-world
title: How I Explore a Codebase
author: Parth Parikh
author_title: Co-Maintainer of OSS Guide
author_url: https://github.com/pncnmnp
author_image_url: https://pncnmnp.github.io/me.jpg
---

If this was four years back, the explanation would have been quite straightforward - use `print` functions everywhere! While `print` calls should still not be discarded in its entirety, there are many useful things I have learned, which has significantly improved my exploring speed.

To start,  I like goofing around with the repository before contributing to it or even exploring it. I usually install the repository using the steps provided in `README` and start implementing the examples provided in it. Once I am familiar with the implementation part, I would try and fill any holes left - like broadly learning about the *how* part of the implementation. For example, while exploring BentoML, I had to spend some time learning what an ML deployment framework does, scanning their entire documentation and observing the features it had, what was their source of inspiration (Clipper), and a basic understanding of Docker and Heroku.

After this,  I start exploring the issues. When I find an interesting issue to contribute to, I note down what I think the issue is suggesting and my version of its solution.  Furthermore, it is around this phase that I build the code from source. When exploring a large codebase for the fix/feature, I like to heavily document my actions. Usually, there is a text-editor/word-document fired up for me to take my notes. [Here is the one, I am sharing with Kishore for BentoML](https://docs.google.com/document/d/1A68MRDKcHaIOEjNU_1c2pZ6krvbBIWlp7I6CemGfyEc). As you can observe, there is not a clear structure in the docs file, however, Kishore and I can read it, which is what matters. Ideally, you want to include the following 3 things - what are you exploring, steps taken while exploring with major results displayed, and doubts/confusions. I usually take these doubts to the maintainer or my co-contributor.

Using a debugger has certainly helped me with the above process. These days, I pick up a function call from a file pertaining to my fix, (usually the one I have a hunch is going to contribute greatly to my fix) and open an interpreter (usually I work in Python). I then import relevant libraries for that function call and other functions/libraries/classes required for that call. Then I run a debugger in the interpreter, something like this - `pdb.run(“<function-call-to-debug>”)`. I then step through the code, observe function/file jumps, and note them down. This is usually more than sufficient for me to understand the underlying structure.

If I come across a non-native/non-standard/really-unfamiliar library while running a debugger, I briefly read about that library, note it in docs, then read about the method/class/ used, and note that too. I like to write my confusions in **bold**, and *take them on a crazy ride of google-fu*. If sometimes I have confusion regarding certain parameters, I backtrack till I find their origin. However, I have recently learned about *data breakpoints* and have been meaning to try it out.

Remember to understand what the core code is (pertinent to your fix/feature), and to skip the rest. Many times I ask a question from what I believe is my core code - maybe regarding a call or statements - and then note it down, and find answers using the above method. I like to use Github’s search tool for searching in open-source repositories, and have recently found it helpful to start exploring test cases as well. Can’t believe it took me this long!

So, this is how I usually explore codebases I am working on. If I remember anything interesting to add here, I most certainly will. Happy Exploring!
