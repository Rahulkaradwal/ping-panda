import { cn } from "@/utils"
import React from "react"

interface MaxWidthWrapperProps {
  children: React.ReactNode
  className?: string
}

function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
