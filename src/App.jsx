import { useState } from 'react'
import Button from './components/button.jsx'
import Card from './components/card.jsx'
import languages from './data/languages.js'
import './App.css'

function App() {
  const [active, setactive] = useState(null);

  const selectedLanguage = languages.find(
    (lang) => lang.id === active
  );

  return (
    <>
      {languages.map((lang) => (
        <Button
          key={lang.id}
          title={lang.title}
          active={active === lang.id}
          onClick={() => setactive(lang.id)}
        />
      ))}

      {selectedLanguage && (
        <Card
          title={selectedLanguage.title}
          content={selectedLanguage.description}
        />
      )}
    </>
  );
}

export default App;
