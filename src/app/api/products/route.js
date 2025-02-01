import { getProducts, addProduct, updateProduct, deleteProduct } from '../../../../models/Product' ;

export async function GET() {
  try {
    const products = await getProducts();
    return Response.json(products); // Devuelve un JSON
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 }); // Devuelve un JSON incluso en errores
  }
}

export async function POST(request) {
  const product = await request.json();
  await addProduct(product);
  return Response.json({ message: 'Producto agregado' });
}

export async function PUT(request) {
  const { id, ...updates } = await request.json();
  await updateProduct(id, updates);
  return Response.json({ message: 'Producto actualizado' });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await deleteProduct(id);
  return Response.json({ message: 'Producto eliminado' });
}