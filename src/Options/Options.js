import './style.css';

export default function Option({ status, setStatus, icons, setIcons }) {
  return (
    <div className='options'>
      <buttom className='not-remember'
        onClick={() => {
          setStatus([...status, "não_lembrou"]);
          setIcons([...icons, <ion-icon name="close-circle"></ion-icon>])
        }}
      >
        Não Lembrei
      </buttom>
      <buttom className='almost'
        onClick={() => {
          setStatus([...status, "quase_não_lembrou"]);
          setIcons([...icons, <ion-icon name="help-circle"></ion-icon>])
        }}
      >
        Quase não lembrei
      </buttom>
      <buttom className='zap'
        onClick={() => {
          setStatus([...status, "zap"]);
          setIcons([...icons, <ion-icon name="checkmark-circle"></ion-icon>])
        }}
      >
        Zap!
      </buttom>
    </div>
  );
}
