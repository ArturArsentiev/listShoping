export default function Controls() {
  return (
    <div className="controls">
      <input id="filter-input" type="text" placeholder="Фільтр товарів" />
      <select id="sort-select">
        <option value="asc">А-Я</option>
        <option value="desc">Я-А</option>
      </select>
    </div>
  );
}
