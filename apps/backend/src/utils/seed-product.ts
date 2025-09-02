import mongoose from 'mongoose'
import { faker } from '@faker-js/faker'
import { createProductSchema } from '@/api/v1/products/products.schema'
import { ProductModel } from '@/api/v1/products/products.model'
import Category from '@/api/v1/categories/categories.model'

async function main() {
  await mongoose.connect('mongodb://localhost:27017/tda-merch')

  await Category.init()
  await ProductModel.init()

  await Category.collection.drop().catch(() => {})
  await ProductModel.collection.drop().catch(() => {})

  const categoryNames = [
    'Electronics',
    'Clothing',
    'Books',
    'Home',
    'Accessories',
  ]

  const categories = await Category.insertMany(
    categoryNames.map((name) => ({
      name,
      description: faker.commerce.department(),
    })),
  )

  const categoryIds = categories.map((c) => c.id.toString())

  const generateImages = (count: number) =>
    Array.from(
      { length: count },
      () => `https://picsum.photos/seed/${faker.string.uuid()}/640/480`,
    )

  function generateProduct() {
    return createProductSchema.parse({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 999 })),
      sku: faker.string.alphanumeric(10),
      stock: faker.number.int({ min: 0, max: 500 }),
      category_id: faker.helpers.arrayElement(categoryIds),
      images: generateImages(faker.number.int({ min: 2, max: 5 })),
      brand: faker.company.name(),
      weight: parseFloat(faker.number.float({ min: 0.5, max: 10 }).toFixed(2)),
      dimensions: {
        width: parseFloat(faker.number.float({ min: 5, max: 100 }).toFixed(2)),
        height: parseFloat(faker.number.float({ min: 5, max: 100 }).toFixed(2)),
        depth: parseFloat(faker.number.float({ min: 5, max: 100 }).toFixed(2)),
      },
    })
  }

  const productCount = 50
  const products = Array.from({ length: productCount }, generateProduct)

  await ProductModel.insertMany(products)

  console.log(`✅ Seeded ${productCount} products with images`)

  await mongoose.disconnect()
}

main().catch((err) => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
