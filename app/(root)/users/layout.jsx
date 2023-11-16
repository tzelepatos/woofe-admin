import "@/app/globals.css";

export default function LayoutUsers({ children, modal }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
