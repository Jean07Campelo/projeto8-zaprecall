import './style.css';

export default function Option({ status, setStatus, icons, setIcons, cards }) {
  return (
    <div className='options'>
      <buttom className='not-remember'
        onClick={() => {
          setStatus([...status, "não_lembrou"]);
          setIcons([...icons, <ion-icon name="close-circle" className='not-remember-icon'></ion-icon>])
        }}
      >
        Não Lembrei
      </buttom>
      <buttom className='almost'
        onClick={() => {
          setStatus([...status, "quase_não_lembrou"]);
          setIcons([...icons, <ion-icon name="help-circle" className='almost-icon'></ion-icon>])
        }}
      >
        Quase não lembrei
      </buttom>
      <buttom className='zap'
        onClick={() => {
          setStatus([...status, "zap"]);
          setIcons([...icons, <ion-icon name="checkmark-circle" className='zap-icon'></ion-icon>])
        }}
      >
        Zap!
      </buttom>
    </div>
  );
}
