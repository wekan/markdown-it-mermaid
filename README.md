# Update Mermaid 8.5!

-   Support all mermaid diagrams
-   Support securityLevel options

# markdown-it-mermaid

Mermaid plugin for markdown-it. (Forked from iradb2000/markdown-it-mermaid)

This version uses a different syntax to support mermaid.  The syntax
uses the syntax highlighting notation by putting the word `mermaid`
directly after the opening marker.

## Installation

```
npm install @DatatracCorporation/markdown-it-mermaid
```

## Usage

```js
import markdownIt from "markdown-it";
import markdownItMermaid from "@DatatracCorporation/markdown-it-mermaid";
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
import MarkdownItKatex from '@DatatracCorporation/markdown-it-mermaid';

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

At this time, there are no unit tests since mermaid has to run in a browser (uses document
apis).  At some point in the future, we might go with a headless browser.

### Distribution

```
npm release && npm publish
```
