//components
import { TableProduct } from "app/components/TableProduct";
import axios from "axios";

export default async function Products({ params }) {
  // Call the fetchProducts function

  return (
    <main>
      <TableProduct params={params} />
    </main>
  );
}
