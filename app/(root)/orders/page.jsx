import React from "react";

function Page() {
  const orders = [
    { id: 1, customer: "John Doe", product: "Widget", quantity: 2 },
    { id: 2, customer: "Jane Smith", product: "Gizmo", quantity: 1 },
    { id: 3, customer: "Bob Johnson", product: "Thingamajig", quantity: 3 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Page;
