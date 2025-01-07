This example imports packages through ESM CDN:

    import OpenAI from 'https://esm.sh/openai'; 

To install the [openai](https://www.npmjs.com/package/openai) package locally, use npm:

    npm install openai 

#### Additional Packages  

The code uses the following packages to convert markdown to HTML: 

- [`unified`](https://unifiedjs.com/)
- `remark-parse`
- `remark-rehype`
- `rehype-stringify`

Use npm or CDN to install these packages. They can also be installed locally for customized builds.

    <!-- tab: npm -->npm install unified, remark-parse remark-rehype rehype-stringify  

    <!-- tab: ESM CDN -->import { unified } from 'https://esm.sh/unified@11?bundle';  
    import remarkParse from 'https://esm.sh/remark-parse@11?bundle';  
    import remarkRehype from 'https://esm.sh/remark-rehype@11?bundle';  
    import rehypeStringify from 'https://esm.sh/rehype-stringify@10?bundle';  