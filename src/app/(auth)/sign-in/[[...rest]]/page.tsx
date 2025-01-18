import { SignIn } from "@clerk/nextjs"
import React from "react"

function page() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn />
    </div>
  )
}

export default page
