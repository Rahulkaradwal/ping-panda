import CreateEventCategoryModal from "@/components/create-event-category-modal"
import { DashboardPageContent } from "@/components/dashboard/dashboard-page-content"
import { DashboardPage } from "@/components/dashboard/dashboard-page"
import { PaymentSuccessModal } from "@/components/payment-success-modal"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { createCheckoutSession } from "@/lib/stripe"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import React from "react"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = async ({ searchParams }: PageProps) => {
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

  const intent = searchParams.intent

  if (intent === "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    })

    if (session.url) redirect(session.url)
  }

  const success = searchParams.success

  return (
    <>
      {success ? <PaymentSuccessModal /> : null}

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
        <DashboardPageContent />
      </DashboardPage>
    </>
  )
}

export default Page
