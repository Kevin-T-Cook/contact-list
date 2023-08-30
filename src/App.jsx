import { useEffect, useState } from 'react'
import './App.css'
import ContactList from './components/contactList'
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (<SelectedContact />) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
  )
}

export default App
