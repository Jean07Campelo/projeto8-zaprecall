import './style.css';

export default function Footer({cards, status, icons}) {

  return <div className="footer">
    {icons.length}/{cards.length} CONCLUÍDOS
    <div className='icons'>{icons}</div>
    </div>;
}
