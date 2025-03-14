import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const URI = "mongodb://localhost:27017/";

async function getProductsCollection() {
  const client = await MongoClient.connect(URI);
  const db = client.db("local");
  const productCollection = db.collection("products");
  return productCollection;
}

export async function GET() {
  const productCollection = await getProductsCollection();
  const products = await productCollection.find({}).toArray();
  return NextResponse.json(products);
}

export async function POST(request) {
  const productsCollection = await getProductsCollection();
  const productName = await request.json();

  const lastProduct = await productsCollection
    .find({})
    .sort({ id: -1 })
    .limit(1)
    .next();
  const newId = lastProduct && lastProduct.id ? lastProduct.id + 1 : 1;
  const newProduct = {
    id: newId,
    name: productName,
    checked: false,
  };
  await productsCollection.insertOne(newProduct);
  return NextResponse.json(newProduct);
}

export async function PUT(request) {
  const productsCollection = await getProductsCollection();
  const product = await request.json();
  productsCollection.updateOne(
    { id: product.id },
    { $set: { name: product.name, checked: product.checked } }
  );

  return NextResponse.json({ message: "Продукт оновлено" });
}
