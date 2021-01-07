# Update Mermaid 8.6!

-   New diagrams (classDiagram)
-   Support All grpahs (Thx @DatatracCorporation, @nojaja)
-   Support securityLevel options
-   Use stable id for mermaid(@DatatracCorporation)

more details : http://knsv.github.io/mermaid/#/README?id=new-diagrams-in-84

# ✔Migrate v3.x to v4.x
Change the token (like grpah TD, sequenceDiagram or something) to "mermaid"!
```js
- mdi.render(`\'\'\'graph TD
+ mdi.render(`\'\'\'mermaid
+  graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``);
```

# markdown-it-mermaid

Mermaid plugin for markdown-it.(Forked)

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


### Customize mermaid

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
  }
  ...or any options
})
```

## Development

### Test

At this time, there are no unit tests since mermaid has to run in a
browser (uses document apis).  At some point in the future, we might go
with a headless browser.

### Distribution

```
npm version <newver> && npm publish
```

## Alternative packages
- https://github.com/DatatracCorporation/markdown-it-mermaid
  - (Recommend) Supports title and more rich funcs!
