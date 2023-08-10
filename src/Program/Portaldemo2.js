import React from 'react'
import ReactDom from 'react-dom' 

function Portaldemo2() {
  return ReactDom.createPortal (
    <div>
        Portal Demo2
    </div>,
    document.getElementById('second')
  )
}

export default Portaldemo2