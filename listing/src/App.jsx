import { useState } from 'react'
import './App.css'
import data from './db/data.json'
import Listing from './components/Listing'

function App() {

  return (
    <div className='App'>
      <Listing data={data} />
    </div>
  );
}

export default App
