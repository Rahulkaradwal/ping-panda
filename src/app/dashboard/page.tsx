import { DashboardPageContent } from "@/components/dashboard/dashboard-page-content"
import { DashboardPage } from "@/components/dashboard/dashoard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"

async function page() {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    return redirect("/welcome")
  }

  return (
    <DashboardPage title="Dashboard">{<DashboardPageContent />}</DashboardPage>
  )
}

export default page
