import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <>
   <p>dashboard-nav</p>
   {children}
   <p>dashboard-footer</p>
   </>
  )
}

export default layout