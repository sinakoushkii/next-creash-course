import React from 'react'
import '../../app/globals.css'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h2 className='text-2xl'>main-navbar</h2>
        {children}
        <h2 className='text-2xl'>main-footer</h2>
    </div>
  )
}

export default layout