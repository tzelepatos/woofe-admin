import ProductFormNew from "/app/components/ProductFormNew.jsx";
import { getSchemaFields, fetchGroomingModelById } from "@/app/actions/server";

export default async function EditPage({ params }) {
  const idUrl = params.id;

  const categories = getSchemaFields();
  const data = fetchGroomingModelById(idUrl);

  const [product, cat] = await Promise.all([data, categories]);
  // console.log("product", product);

  return (
    <div>
      <h1 className="text-jimOrange text-2xl"></h1>
      {product && (
        <ProductFormNew
          defaultValues={product.groomingModel}
          createMode={false}
          viewMode={false}
          editMode={true}
          categories={cat}
        />
      )}
    </div>
  );
}
