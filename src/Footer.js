export default function Footer({cards, status, icons}) {

  return <div className="footer">
    {icons.length}/{cards.length} CONCLUÍDOS
    {icons}
    </div>;
}
