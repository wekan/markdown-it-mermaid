# !Important
### Strongly recommend using Dompurify or any library that has escape Scripts Func.  
 https://www.npmjs.com/advisories/751  


# markdown-it-mermaid

Mermaid plugin for markdown-it.(Forked)


## Installation

```
yarn install @liradb2000/markdown-it-mermaid
```


## Usage

```js
import markdownIt from 'markdown-it'
import markdownItMermaid from 'markdown-it-mermaid'
const mdi = markdownIt()
mdi.use(markdownItMermaid)
mdi.render(`\`\`\`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``)
```

### Customize mermaid

```js
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from '@liradb2000/markdown-it-katex';

var md = MarkdownIt({
        html: false,
        linkify: true,
        typographer: true,
        breaks: true,
        xhtmlOut: false,
    });
    
md.use(MarkdownItMermaid,{
  startOnLoad: false,
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



