# Update Mermaid 8.5!

-   New diagrams (classDiagram)
-   Support gitGraph, pie, stateDiagram and erDiagram (@nojaja)
-   Support securityLevel options

# markdown-it-mermaid

Mermaid plugin for markdown-it.(Forked)

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
mdi.render(`\`\`\`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``);
```

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
