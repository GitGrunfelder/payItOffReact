import React from 'react'
import Intro from './components/Intro'
import Info from './components/Info'

import Expenses from './components/Expenses'
import Results from './components/Results'
import InfoBox from './components/InfoBox'

function App() {

  return (
    <div className="App">
      <Intro />
      <Info />
      {/* <Expenses /> */}
      <Results />
      {/* <InfoBox 
        
      /> */}
    </div>
  )
}

export default App
