Mermaid plugin for markdown-it.(Forked)

## 0.4.4
-   Update [Mermaid-js](https://mermaid-js.github.io/mermaid/#/) 8.13.0

## Installation

```
npm install @liradb2000/markdown-it-mermaid
```

## Usage

```js
import markdownIt from "markdown-it";
import markdownItMermaid from "@liradb2000/markdown-it-mermaid";
const mdi = markdownIt();
mdi.use(markdownItMermaid);
mdi.render(`~~~mermaid
  graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
~~~`);
```

The word `mermaid` after the fence code block opening indicates that the
rest of the fenced block should be passed to mermaid for processing.
This example used the `~~~` fence marker since the multi-line string
in javascript is the same character,
but either `~~~` or ` ``` ` works.

## Customize mermaid

```js
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from '@liradb2000/markdown-it-mermaid';

var md = MarkdownIt({
        html: false,
        linkify: true,
        typographer: true,
        breaks: true,
        xhtmlOut: false,
    });

md.use(MarkdownItMermaid,{
  startOnLoad: false,
  securityLevel: true,
  theme: "default",
  flowchart:{
    htmlLabels: false,
    useMaxWidth: true,
  },
  dictionary:{
    token: "mermaid",
    graph:"graph",
    sequenceDiagram: "sequenceDiagram",
  }
  ...or any options
})
```

### Dictionary option (New ver. 0.4.3)

````
```mermaid (<- token)
graph TD (<- Replacable)
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
```
````

-   Example  
If you setup like below,
```javascript
md.use(MarkdownItMermaid,{
  ...,
  dictionary:{
    token: "diagram",
    gra:"graph",
    seq:"sequenceDiagram",
    seqDiagram: "sequenceDiagram",
  }
  ...or any options
})
```

you can use like
````
```diagram
gra TD 
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
```

or

```diagram
seq
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
```

or

```diagram
seqDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
```

````

## ✔Migrate v0.3.x to v0.4.x

Change the token (like grpah TD, sequenceDiagram or something) to "mermaid"!

```js
- mdi.render(`\`\`\`graph TD
+ mdi.render(`\`\`\`mermaid
+  graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``);
```

## Alternative packages

-   https://github.com/DatatracCorporation/markdown-it-mermaid
    -   (Recommend) Supports title and more rich funcs!

## Thanks to

@DatatracCorporation
@nojaja
