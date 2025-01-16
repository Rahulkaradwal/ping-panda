import { cn } from "@/utils"
import React, { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}
function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-light text-zinc-8000",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
