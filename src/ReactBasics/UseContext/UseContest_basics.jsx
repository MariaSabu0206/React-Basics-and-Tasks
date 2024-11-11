import React, { createContext, useState } from 'react'
import StatusTableTask from '../StatusTableTask';
import FormBackgrndTask from '../../FormBackgrndTask';

const sampleContext = createContext();
function UseContest_basics() {
  const [value, setvalue] = useState(25)
  const [string, setstring] = useState("Maria Sabu")
  return (
    <div>
      <sampleContext.Provider value={{value, string}}>
        <StatusTableTask />
        <FormBackgrndTask />
      </sampleContext.Provider>

    </div>
  )
}

export default UseContest_basics
export {sampleContext}