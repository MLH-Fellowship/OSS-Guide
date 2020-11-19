---
id: doc1
title: General Guide
sidebar_label: Style Guide
slug: /
---

> **Joker while teaching programming:**  Real programmers don't comment their code. If it was hard to write, it should be hard to understand.  
> **Alfred Pennyworth to Bruce:** Some men aren't looking for anything logical, like software maintenance. They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn.

## Choosing a Project

Your pod leader and mentor(s) will send you lists of repositories and outlines of projects you can work on. Investigate those repositories and the associated issues. Most likely, the repositories are already forked in the MLH-Fellowship organization on GitHub, and project boards have been associated with those forks:
![Project Board](./assets/getting-started.png)

The project boards are a great place to start looking for issues.

If your chosen repository has not yet been forked or enriched with a project board, contact the relevant mentor, because they need to step up their game.

Alternatively, you might have a very clear vision about repositories you want to work on or work you’d like to do. Proactivity is encouraged! Make sure you open issues and discussion on GitHub in order to signal your intentions.

## Getting Started with a Repository

Exploring a new repository can certainly be a daunting task. There are many angles which come at play - familiarity with the languages, understanding of the tools or frameworks used, how components integrate with each other, what paradigm is used by the developers, etc. The points mentioned in this section will present you with approaches to make this journey smooth.

### Use it

As mentioned across various [discussion threads](https://news.ycombinator.com/item?id=16299125), the best way to get familiar with any open-source project is to use it. Begin with a very simple idea relevant to the project you are going to contribute to. Then, turn that idea into reality primarily using that open-source project. Throughout the process make sure to learn about the project’s dependencies, features, and important components/classes. Try integrating as many features as you can - remember - your first goal is to explore the breadth of this project.

If the above process takes you on a back-foot, analyze *why?* Is it because of some tool, language, framework, or something else? Once the *why* part is inspected, observe how the project is using that technology and read the documentation for the same. If documentation gets dense, jump to the tutorial or watch relevant video presentations by the authors/maintainers. If confusion persists, approach the contributors on the project’s discussion platform (Github discussion, Slack, Discord, etc).

Lastly, the primary purpose of MLH-Fellowship’s *kickoff hackathon* is to make the fellows extensively use the open-source project they are going to contribute to throughout their fellowship. So make good use of this opportunity.

### Check out the earliest commits

> Always do the hard part first. If the hard part is impossible, why waste time on the easy part? Once the hard part is done, you're home free.  
> Always do the easy part first. What you think at first is the easy part often turns out to be the hard part. Once the easy part is done, you can concentrate all your efforts on the hard part.  
> \- *A. Schapira*

Initial commits usually carry with them the entire gist of the project. By analyzing them, you can gain perspective about the initial goals of that repository.
[Here is the first commit](https://github.com/bentoml/BentoML/tree/09f4bb198f55498a46461f89bba3293a70d69373) made by BentoML maintainers on April 2, 2019. The `README` explains the three goals BentoML aims at solving - streamlining deployment workflows, major frameworks support, and devops practices built into it. This coupled with `/examples`, `/bentoml/artifacts`, and `handlers` forms a major part of their core component. Moreover, by their [48th commit](https://github.com/bentoml/BentoML/tree/5aa380fbde98f696c1b1fe1b7f514ae07368c663), they had greatly improved their documentation.

### Test Cases, Specifications, and Building from Source

> Reading test code tends to be more approachable than application code, likely because programmers don’t write tests in a hurry at 8PM  
> \- [arandr](https://arandr.github.io/2015/01/17/how-i-learned-to-stop-worrying-and-debug-other-peoples-code.html)

Transitioning from this section to *planning* can certainly be challenging. To make this switch easy, building the code from source, reading test cases, and understanding specifications can be incredibly helpful.

Testing is argued to be one of the best forms of documentation. It usually gives an idea of how authors expect things to work. Browsing the tests as example references is a great way to understand any project. If you are planning to write tests for the open-source project, MIT: 6.005 has a great [introduction to testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/index.html). Remember - tests are there to give you the confidence to refactor and change things freely.

If you do not already have the project cloned and running locally, ensure that this is completed before the *planning* phase. Follow the installation instructions (usually in `DEVELOPMENT.md`) on the project in order to get it running. This step is usually considered complete when you can run the test suite of the project and have all (or most) of the tests pass.

Exploring specifications is another concrete step to understand a large codebase. For example, *Runc* (a CLI tool for spawning and running containers) has documented a [`SPEC.md`](https://github.com/opencontainers/runc/blob/master/libcontainer/SPEC.md) for its `libcontainer` component - containing detailed configurations for filesystem, runtime and init process, security, etc.

### Use tools to aid in understanding

It is often useful to get a broad high-level picture of where’s what in the code, and this is where something like a UML diagram helps. Many projects include these high level architecture diagrams in their documentation, so make sure to check out if such diagrams are available.

This is because they are the most concise representation of the entire project and a good one can tell you a lot about how information is flowing across the codebase.

Your project does not have a UML diagram? Fear not, since tools exist to make combing through large codebases easier. One such tool is pyreverse, which can generate a UML class diagram of the codebase you give it automatically.

You can also get an idea of which functions are being called and in what sequence they are being called using call graphs. They are a visual representation of runtime function execution. For example -

```python
class WhatNumber:
    def __init__(self):
        self.odd_counter = 0
    def check(self, number):
        if number%2==1:
            self.odd(number)
        elif number%2==0:
            self.even(number)
    def odd(self, number):
        print("{} is odd".format(number))
        self.odd_counter += 1
    def even(self, number):
        print("{} is even".format(number))

if __name__ == "__main__":
    obj = WhatNumber()
    obj.check(2)
    obj.check(1)
```

![Call-graph of the WhatNumber code](./assets/whatnumber.png)

The call graph may also contain other useful augmenting information, such as the time spent on each function call.

### Git Log trick

As mentioned in this [Hacker News thread](https://news.ycombinator.com/item?id=16299125), you can use version control to identify the most commonly edited files in any open-source codebase. These are usually the files that are doing all the work (80/20 rule) and you likely need to know of them.

The command for the same is -

```bash
# For top 10 most edited files
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# For top 50 most edited files with file_name/directory_name containing the word - <NAME>
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -50 | grep “<NAME>”
```
