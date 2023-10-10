//compoments
import ProductFormNew from "@/app/components/ProductFormNew";
import {defaultValues} from "@/app/models/ProductFormSchema ";

export default function NewPrduct() {   return (
  <div>
    <h1 className="text-jimOrange text-4xl"></h1>

      <ProductFormNew defaultValues={...defaultValues} viewMode={false} />

  
   
  </div>
);
} 