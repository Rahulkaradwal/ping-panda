"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

function NotFound() {
  const router = useRouter()

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <div className="flex justify-center w-full">
        <Image
          src="/brand-asset-wave.png"
          width={200}
          height={200}
          alt="No categories"
          className="size-48 -mt-24"
        />
      </div>

      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        Page Not Found{" "}
      </h1>

      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        The page you are looking for does not exist.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant="outline"
          className="flex items-center space-x-2 w-full sm:w-auto"
          onClick={() => router.back()}
        >
          <span className="size-5">🚀</span>
          <span>Go Back</span>
        </Button>
      </div>
    </Card>
  )
}

export default NotFound
