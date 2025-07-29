import React from 'react'
import Hero from '@/components/hero'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MoveUpRight,
  LineChartIcon as ChartLine,
  Wrench,
  Layers2,
  ShieldHalf,
  Square,
  Sun,
  type LucideIcon,
} 

from "lucide-react"
 const iconMap: { [key: string]: LucideIcon } = {
  ChartLine: ChartLine,
  Wrench: Wrench,
  Layers2: Layers2,
  ShieldHalf: ShieldHalf,
  Square: Square,
  Sun: Sun,
}


 const cards = [
    {
      title: "Performance Monitoring",
      description: "Track and analyze your application's performance with real-time metrics.",
      dynamicIconName: "ChartLine",
    },
    {
      title: "Tooling & Utilities",
      description: "Essential tools and utilities to streamline your development workflow.",
      dynamicIconName: "Wrench",
    },
    {
      title: "Layered Architecture",
      description: "Design robust and scalable systems with a clear, layered architecture.",
      dynamicIconName: "Layers2",
    },
    {
      title: "Security & Protection",
      description: "Implement strong security measures to protect your data and users.",
      dynamicIconName: "ShieldHalf",
    },
    {
      title: "Component Library",
      description: "A collection of reusable UI components for rapid development.",
      dynamicIconName: "Square",
    },
    {
      title: "Theme Customization",
      description: "Easily switch between light and dark modes or create custom themes.",
      dynamicIconName: "Sun",
    },
  ]


export default function page() {
  return (
    <div>
    <Hero/>
    <div className="flex items-center justify-center p-10 bg-cyan-900 ">
      <div className="w-full mt-3">
        <div className='  flex flex-col items-center justify-center'>
        <h1 className="text-5xl font-semibold w-full max-w-2xl text-center   flex   items-center justify-center   text-white  ">Efficient and integrated manufacturing services</h1>
        <p className=" text-90 mt-4 w-full   justify-center items-center  text-center text-white ">simplify operations with our efficient, quality focused services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 ">
          {cards.map((card, index) => {
            const DynamicIcon = iconMap[card.dynamicIconName] 

            return (
              <Card key={index} className=" bg-cyan-800/50 backdrop-blur-md border-0 shadow-md hover:shadow-lg transition-shadow duration-300 ">
                <CardHeader>
                  <div className="flex items-start justify-between mb-8">
                    {DynamicIcon && ( 
                      <DynamicIcon className="h-8 w-8 text-white mr-4" />
                    )}
                    
                    <MoveUpRight className="h-5 w-5 text-white ml-4" /> {/* Static icon */}
                  </div>
                  <div className=' mt-3'>
                  <CardTitle className="text-xl font-semibold text-white">{card.title}</CardTitle>
                  <CardDescription className="text-white leading-relaxed">{card.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
    </div>
    

    
  )
}
