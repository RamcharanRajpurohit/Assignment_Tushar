'use client';
import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Main from "@/components/Main";
import VoiceGeneratorUI from "@/components/Tabs";
export default function Home() {

  return (<>
  <Header/>
  <HeroSection/>
 <Main/>
 <VoiceGeneratorUI/>
  </>);
}
