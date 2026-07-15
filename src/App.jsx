import { useState } from 'react'
import Button from './components/button.jsx'
import card from './components/card.jsx'
import languages from './data/languages.js'
import './App.css'

function App() {
  const [active, setactive] = useState(null)

  return (
    <>
      {languages.map((lang)=>
      <Button 
      key={lang.id} 
      title={lang.title} 
      active={active===lang.id}
      onClick={()=>setactive(lang.id)}/>
      )}
    </>
  )
}

export default App;
