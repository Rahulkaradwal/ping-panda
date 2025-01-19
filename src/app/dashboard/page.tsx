import CreateEventCategoryModal from "@/components/create-event-category-modal"
import { DashboardPageContent } from "@/components/dashboard/dashboard-page-content"
import { DashboardPage } from "@/components/dashboard/dashoard-page"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
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
    <DashboardPage
      cta={
        <CreateEventCategoryModal>
          <Button className="w-full sm:w-fit">
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventCategoryModal>
      }
      title="Dashboard"
    >
      {<DashboardPageContent />}
    </DashboardPage>
  )
}

export default page
