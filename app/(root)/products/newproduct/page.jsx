//compoments
import ProductFormNew from "@/app/components/ProductFormNew";
import { defaultValues } from "@/app/models/ProductFormSchema ";
import { CategoriesModel } from "@/app/models/categoriesSchema";
import { getSchemaFields } from "@/app/actions/server";

export default async function NewProduct() {
  const cat = await getSchemaFields();
  // console.log(cat);

  return (
    <div>
      <h1 className="text-jimOrange text-4xl"></h1>
      <ProductFormNew
        defaultValues={defaultValues}
        createMode={true}
        viewMode={false}
        editMode={false}
        categories={cat}
      />
    </div>
  );
}
