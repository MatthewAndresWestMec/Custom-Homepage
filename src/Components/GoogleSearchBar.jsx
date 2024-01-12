import React from 'react'
import {useState} from 'react'
// import '../search.css'
const GoogleSearchBar = () => {
    const [search, setSearch] = useState("")//stores the search query
    const handleSubmit = (e) =>{
        e.preventDefault()//prevents rerender / refresh
        window.open(`http://www.google.com/search?q=${search}`, "_blank"); // creates a new window with query string
    }
  return (
    <>
    <form onSubmit={handleSubmit} className="form">
                <div className="form-control">
                    <input type="text" name='search' id='search' onChange={(e)=> setSearch(e.target.value)} />
                </div>
                <button type='submit'>Search</button>
            </form>
    </>
  )
}

export default GoogleSearchBar