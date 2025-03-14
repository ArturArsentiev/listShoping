export default function Product({ product, update }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={product.checked}
        onChange={(event) => {
          update({ ...product, checked: event.target.checked });
        }}
      />
      {product.name}
    </li>
  );
}
