import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h2>main-navbar</h2>
        {children}
        <h2>main-footer</h2>
    </div>
  )
}

export default layout