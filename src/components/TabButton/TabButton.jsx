export default function TabButton({ children, onSelect }) {
  console.log('tab button executed')
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
