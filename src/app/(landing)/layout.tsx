import React, { ReactNode } from "react"
import { Navbar } from "../../components/navbar"

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
