import { FiLink } from "react-icons/fi";
import "./home.css";

export default function Home() {
  return (
    <div className="conteiner-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Meu Link</h1>
        <span>Compartilhe seus links facilmente!</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input placeholder="Cole seu link aqui..." />
        </div>
        <button>Gerar Link</button>
      </div>
    </div>
  );
}
