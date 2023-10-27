export default function Categories({ params }) {
  console.log("params", params);
  return (
    <div>
      <h1>Categories Page</h1>
      <p>params: {JSON.stringify(params)}</p>
    </div>
  );
}
