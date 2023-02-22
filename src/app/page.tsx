"use client";
import Cta from "@/Component/cta/Cta";
import Features from "@/Component/features/Features";
import Header from "@/Component/Header/Header";
import Highlights from "@/Component/highlights/Highlights";
import TopContainer from "@/Component/Topcontainer/TopContainer";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
        <TopContainer />
        <Features />
        <Cta />
        <Highlights />
      </Box>

    </>
  )
}
