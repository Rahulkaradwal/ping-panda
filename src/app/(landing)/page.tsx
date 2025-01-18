import { Check } from "lucide-react"
import Heading from "../../components/heading"
import MaxWidthWrapper from "../../components/max-width-wrapper"
import { ShinyButton } from "../../components/shiny-button"
import HeadingSection from "@/components/landing/HeadingSection"
import DiscordSection from "@/components/landing/DiscordSection"
import BentoGridSection from "@/components/landing/BentoGridSection"

const Page = () => {
  return (
    <>
      <HeadingSection />
      <DiscordSection />
      <BentoGridSection />
      <section></section>
      <section></section>
    </>
  )
}

export default Page
