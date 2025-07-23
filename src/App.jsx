import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [blog, setBlog] = useState([])

  function fetchBlog(){
    return fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
    .then(res => res.json())
    .then(data => {
      return console.log(data), setBlog(data);
    })
  }

  useEffect(()=>{
    fetchBlog()}
    ,[]
  )

  return (
    <>
      
    </>
  )
}

export default App


// Oggi creeremo il nostro primo form multifield
// per inviare dati in POST ad un’API.

// Dovremo creare una nuova app React che contenga un 
// form per creare un nuovo post all’interno di un blog.

// I dati che il form dovrà inviare sono i seguenti:
// author (string) - L’autore del post
// title (string) - Il titolo del post
// body (string) - Il testo del post
// public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)


// L’endpoint a cui effettuare la chiamata POST 

// Bonus
// aggiungere e gestire un alert per dare agli utenti un feedback sull’invio del form