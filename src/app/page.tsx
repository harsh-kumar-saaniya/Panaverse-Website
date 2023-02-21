"use client";
import Header from "@/Component/Header/Header";
import TopContainer from "@/Component/Topcontainer/TopContainer";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
        <TopContainer />
      </Box>
    </>
  )
}
