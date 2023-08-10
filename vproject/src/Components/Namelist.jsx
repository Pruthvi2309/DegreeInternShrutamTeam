import React from 'react'

function Namelist() {
    const names=['Manager','Tech Lead','Senior Software Developer','Junior Software Developer']
  return (
    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2>
    </div>
  )
}

export default Namelist