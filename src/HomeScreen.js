export default function HomeScreen() {
  const img = "../assets/logo.png";
  const description = "Logo ZapRecall,um raio amarelo com contorno vermelho";

  return (
    <>
      <img src={img} alt={description}></img>

      <h1>ZapRecall</h1>

      <button>Iniciar Recall!</button>
      
    </>
  );
}
