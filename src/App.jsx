import { useEffect } from "react";
import Test from "./components/Test";
import { juanes, juanImages } from './data/juanes'

const App = () => {
  
  useEffect(() => {
    const url = new URL(window.location.href)
    const param = url.searchParams.get('juan') || ''
    const juan = juanes.find(juan => param === juan.name)
    
    if (!juan) {
      return
    }

    document.title = `Test de personaliJuan - Soy ${juan.name}`
    const titles = [
      document.head.children.namedItem('twitter:title'),
      document.head.querySelector('[property="og:title"]')
    ]
    titles.forEach(d => d.content = document.title)
    const descriptions = [
      document.head.children.namedItem('description'),
      document.head.children.namedItem('twitter:description'),
      document.head.querySelector('[property="og:description"]')
    ]
    descriptions.forEach(d => d.content = juan.description)
    
    const images = [
      document.head.children.namedItem('twitter:image'),
      document.head.querySelector('[property="og:image"]')
    ]
    images.forEach(d => d.content = juanImages(`./${juan.image}`))
    

  }, [])

  return (
    <div className="bg-rose-800 h-full flex items-center justify-center"><Test /></div>
  )
}

export default App;
