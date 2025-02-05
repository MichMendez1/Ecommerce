import clientPromise from '../lib/mongodb';
import { ObjectId } from 'mongodb';

// Obtener todos los productos
export async function getProducts() {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').find({}).toArray();
}

// Agregar un nuevo producto
export async function addProduct(product) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').insertOne(product);
}

// Actualizar un producto existente
export async function updateProduct(id, updates) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );
}

// Eliminar un producto
export async function deleteProduct(id) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').deleteOne({ _id: new ObjectId(id) });
}