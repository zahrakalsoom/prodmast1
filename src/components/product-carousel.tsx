"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  description: string
}

export function ProductCarousel() {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: Product[] = await response.json()
        setProducts(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading products...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-64 text-red-500">Error: {error}</div>
  }
  return (
     
        <div className="flex flex-col items-center justify-center p-10 bg-white ">
        <div className='  flex flex-col items-center justify-center w-full mt-3'>
        <h1 className="text-5xl font-semibold w-full max-w-2xl text-center   flex   items-center justify-center   text-cyan-900  ">Our Latest Products</h1>
        <p className=" text-90 mt-4 w-full   justify-center items-center  text-center text-cyan-900 "> Check out our innovative products designed to meet your needs.</p>
        </div>
       <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-10 bg-cyan-800/50 backdrop-blur-md"
      >
        <CarouselContent className="ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex flex-col h-full">
                  <CardHeader className="flex-shrink-0">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between p-4">
                    <div>
                      <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 mb-3">{product.description}</CardDescription>
                    </div>
                    <CardFooter className="flex justify-between items-center p-0 pt-2">
                      <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    
    </div>
    
  )
}
