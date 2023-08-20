import React from 'react'

export const Greet = props => {
    const {name,age,heroname} = props
  return (
    <div>
        <h2>
            Hi my name is: {name}, my age is: {age} my heroname is: {heroname}
        </h2>
    </div>
  )
}
