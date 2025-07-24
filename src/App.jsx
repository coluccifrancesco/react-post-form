import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    title:'', 
    author:'', 
    postBody:'', 
    public:0, 
    draft:0,
  })

  function handleFormData(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  // Log blog
  // function fetchBlog(){
  //   return fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
  //   .then(res => res.json())
  //   .then(data => {
  //     return console.log(data), setBlog(data);
  //   })
  // }

  // useEffect(()=>{
  //   fetchBlog()}
  //   ,[]
  // )

  // npminiamo la funzione 'handleSubmit' per convenzione; 
  // le funzioni che gesticono gli eventi 'on-evento' si chiamano 'handle-evento'
  function handleSubmit(e){
    e.preventDefault();
    alert('You just posted!');
  };



  // e.target.value
  
  // e = event object: oggetto contenente info relative all'evento verificato
  
  // .target = proprietà di 'e' che punta all'elemento DOM che lo ha scatenato (es. input)
  //    console.log(e.target);        ->  L'elemento input stesso
  //    console.log(e.type);          ->  "change" o "input"
  //    console.log(e.timeStamp);     ->  Timestamp dell'evento
  
  // .value = proprietà di <input /> contenente il testo presente nel campo al momento di 'e'
  //    console.log(e.target.name);          -> L'attributo 'name' dell'input
  //    console.log(e.target.id);            -> L'attributo 'id' dell'input
  //    console.log(e.target.type);          -> "text", "email", "password", etc.
  //    console.log(e.target.placeholder);   -> Il testo placeholder
  //    console.log(e.target.disabled);      -> true/false se è disabilitato
  //    console.log(e.target.checked);       -> Per checkbox/radio (true/false)
  //    console.log(e.target.selectedIndex); -> Per select (indice opzione selezionata)




  return (
    <>
      <div className='container my-5'>
        
        {/* // I dati che il form dovrà inviare sono i seguenti:
        // title (string) - Il titolo del post
        // author (string) - L’autore del post
        // body (string) - Il testo del post
        // public (boolean) - Se il post deve essere pubblico (true) o una bozza (false) */}
       
       <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Title</label>
            <input type="text" className="form-control" id="postTitle" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="postAuthor" className="form-label">Author</label>
            <input type="text" className="form-control" id="postAuthor" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="postBody" className="form-label">Your thoughts go here</label>
            <textarea className="form-control" id="postBody" rows="3"></textarea>
          </div>
          
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
            <label className="form-check-label" htmlFor="checkDefault">
              Public
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
            <label className="form-check-label" htmlFor="checkChecked">
              Draft (A'bozza)
            </label>
          </div>

          <button type="submit" className="mt-3 btn btn-primary">Post it!</button>
        </form>
      
      </div>
    </>
  )
}

export default App

// L’endpoint a cui effettuare la chiamata POST: https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts

// Bonus
// aggiungere e gestire un alert per dare agli utenti un feedback sull’invio del form