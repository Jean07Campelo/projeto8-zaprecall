export default function Option({ status, setStatus }) {
  return (
    <>
      <buttom
        onClick={() => {
          setStatus([...status, "não_lembrou"]);
        }}
      >
        Não Lembrei
      </buttom>
      <buttom
        onClick={() => {
          setStatus([...status, "quase_não_lembrou"]);
        }}
      >
        Quase não lembrei
      </buttom>
      <buttom
        onClick={() => {
          setStatus([...status, "zap"]);
        }}
      >
        Zap!
      </buttom>
    </>
  );
}
