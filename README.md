# Update Mermaid 8.4!

-   New diagrams (classDiagram)
-   Support gitGraph
-   Support securityLevel options

more details : http://knsv.github.io/mermaid/#/README?id=new-diagrams-in-84

# markdown-it-mermaid

Mermaid plugin for markdown-it.(Forked)

## Installation

```
yarn install @liradb2000/markdown-it-mermaid
```

## Usage

```js
import markdownIt from "markdown-it";
import markdownItMermaid from "@liradb2000/markdown-it-mermaid";
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

### Build

```
yarn build:watch
```

### Test

```
yarn test
```

### Distribution

```
yarn release && npm publish
```
