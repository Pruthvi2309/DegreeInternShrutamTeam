import React from 'react'
import { Greek1 } from './Greek1'

export const Greek2 = props => {
    const{Name,Age,Hobby} = props
  return (
    <div>
         <h2>
             Hii My Name is {Name} , My Age is {Age} , and My Hobby is {Hobby};
         </h2>
    </div>
  )
}
