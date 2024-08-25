"use client";

import { motion } from "framer-motion";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import book from '@/assets/images/book-cover.png'


import Js from '@/assets/icons/square-js.svg';
import Html from '@/assets/icons/html5.svg';
import Css from '@/assets/icons/css3.svg';
import ReactIm from '@/assets/icons/react.svg';
import Chrom from '@/assets/icons/chrome.svg';
import Github from '@/assets/icons/github.svg';

import mapImg from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png'
import CardHeader from "@/components/CardHeader";
import Toolboxs from "@/components/Toolboxs";
import { useRef } from "react";

const tools =[
  {
    title:'JavaScript',
    iconType:Js,
  },
  {
    title:'HTML5',
    iconType:Html,
  },
  {
    title:'CSS3',
    iconType:Css,
  },
  {
    title:'React',
    iconType:ReactIm,
  },
  {
    title:'Chrome',
    iconType:Chrom,
  },
  {
    title:'GitHub',
    iconType:Github,
  },
]

const hobbies=[
  {
    title:'Painting',
    emaoji:'🎨',
    left:'5%',
    top:'5%',
  },
  {
    title:'Photography',
    emaoji:'📷',
    left:'50%',
    top:'5%',
  },
  {
    title:'Hiking',
    emaoji:'👞',
    left:'35%',
    top:'40%',
  },
  {
    title:'Gaming',
    emaoji:'🎮',
    left:'10%',
    top:'35%',
  },
  
  {
    title:'Music',
    emaoji:'🎵',
    left:'70%',
    top:'45%',
  },
  {
    title:'Fitness',
    emaoji:'🏋️‍♀️',
    left:'5%',
    top:'65%',
  },
  {
    title:'Reading',
    emaoji:'📖',
    left:'45%',
    top:'70%',
  },
  ]

export const AboutSection = () => {
  const borderRef =useRef(null)
  return <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am,what I do, and what inspires me"/>

    
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      
      <CardHeader title="My Reads" description="Explore the books shaping my preseptions"/>
      <div className="w-40 mx-auto mt-8">

      <Image src={book} alt="Book cover"/>
      </div>
    </Card>


    <Card className="h-[320px] lg:px-0 p-0 md:col-span-3 lg:col-span-2">
      <CardHeader title="My Toolbox" className="px-12 md:pt-0 pt-6" description="Explore the technologies and tools I use to craft expetional digital experience"/>
      
      <Toolboxs tools={tools} className="mt-6" itemwrapper="animate-loopinf [animation-duration:30s]"/>
      <Toolboxs tools={tools} className="mt-6" itemwrapper="-translate-x-1/2 animate-revloop [animation-duration:15s]"/>
    </Card>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader title="Beyond the Code" description="Explore my intrests and hobbies beyond the digital relam" className="px-6 py-6"/>
      
      <div ref={borderRef} className="relative flex-1">
        {hobbies.map(hobbby=>(
        <motion.div drag dragConstraints={borderRef}  key={hobbby.title} style={{top:hobbby.top,left:hobbby.left}} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute">
            <span className="font-medium text-gray-950">{hobbby.title}</span>
            <span>{hobbby.emaoji}</span>
          </motion.div>
        ))}
      </div>
    </Card>

    <Card className="h-[320px] lg:col-span-1 md:p-0 p-0 relative md:col-span-2">
        <Image src={mapImg} alt="Map" className="h-full w-full object-left-top"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s] rounded-full"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
        <Image src={smileMemoji} alt="smiling"/>

        </div>
    </Card>
    </div>


    </div>
    </div>
  </div>
};
