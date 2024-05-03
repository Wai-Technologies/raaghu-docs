---
sidebar_position: 1
---

# Criar uma Página

Adicione arquivos **Markdown ou React** à pasta `src/pages` para criar uma **página independente**:
- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Crie sua primeira página React.

Crie um arquivo em `src/pages/my-react-page.js`:
```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

Uma nova página agora está disponível em http://localhost:3000/my-react-page.

## Crie sua primeira página em Markdown

Crie um arquivo em `src/pages/my-markdown-page.md`:
```mdx title="src/pages/my-markdown-page.md"
# 
Minha página Markdown

Esta é uma página em Markdown
```
Uma nova página agora está disponível em [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).