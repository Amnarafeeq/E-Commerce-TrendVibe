import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html>
        <body lang='en'>
            {children}
        </body>
    </html>
  )
}

export default RootLayout