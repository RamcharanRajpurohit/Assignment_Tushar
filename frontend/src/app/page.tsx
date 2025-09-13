'use client';
import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import VoiceGeneratorUI from "@/components/Main";
export default function Home() {

  return (<>
  <Header/>
  <HeroSection/>
 <VoiceGeneratorUI/>
  </>);
}
