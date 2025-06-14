import Link  from 'next/link';
import React, { ReactNode } from 'react'
import Image from 'next/image'

const Rootlayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2" >
          <Image src="/logo.svg" alt="Hirely Logo" width={38} height={32} />
          <h2 className= "text-primary-100"> Hirely</h2>
          </Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout