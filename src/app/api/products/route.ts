import { NextResponse } from "next/server"

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      price: 99.99,
      imageUrl: "/images/product.jpg?height=200&width=200",
      description: "Immersive sound with noise-cancelling technology.",
    },
    {
      id: "2",
      name: "Smartwatch Pro",
      price: 199.99,
      imageUrl: "/images/product.jpg?height=200&width=200",
      description: "Track your fitness and stay connected on the go.",
    },
    {
      id: "3",
      name: "Portable Bluetooth Speaker",
      price: 49.99,
      imageUrl: "/images/product.jpg?height=200&width=200",
      description: "Compact design with powerful, clear audio.",
    },
    {
      id: "4",
      name: "Ergonomic Office Chair",
      price: 249.99,
      imageUrl: "/images/product.jpg?height=200&width=200",
      description: "Designed for comfort  support during  work hours.",
    },
    {
      id: "5",
      name: "4K UHD Monitor",
      price: 349.99,
      imageUrl: "/images/product.jpg?height=200&width=200",
      description: "Stunning visuals for work and entertainment.",
    },
  ]

  return NextResponse.json(products)
}
