
# codemen-clipboard

Copy your content and store all previous copied content using local storage




## Installation

Install codemen-clipboard with npm

```bash
  npm install codemen-clipboard@latest
  or
  yarn add codemen-clipboard@latest
```
    
## Usage/Examples

```javascript
import { useCodemenClipboard } from "codemen-clipboard"

function App() {
  const { copy, copiedItem, copiedItems, clearAll, clearAllCopiedItems, clearCopiedItem } = useCodemenClipboard();


  return <>
          <button className="me-4" onClick={() => copy("HI there")}>COPY</button>
          <button className="me-4" onClick={() => clearAll()}>clearAll</button>
          <button className="me-4" onClick={() => clearAllCopiedItems()}>clearAllCopiedItems</button>
          <button className="me-4" onClick={() => clearCopiedItem()}>clearCopiedItem</button>
  </>
}
```


## 🚀 About Me
I'm Amit Sharma, a committed Full Stack Developer with a focus on JavaScript/TypeScript 💻 and the corresponding runtimes. I have a strong expertise in startups and have led the creation of applications from their birth utilising state-of-the-art online technology. By constantly experimenting with new technologies, I hope to improve the experiences of developers and end users. As a devoted fan of productivity, I'm dedicated to streamlining procedures and workflows to increase my efficacy as a developer.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://amit-sharma-dev.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amit-sharma-b32171143/)
[![github](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/amit__shaarma)


## Contributing

This is open source project.
[Code](https://github.com/iamamitshrma/codemen-clipboard)

