import { FiLink, FiArrowLeft, FiTrash } from "react-icons/fi";
import "./links.css";

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <FiArrowLeft size={38} color="#FFF" />
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF" />
          https://sujeitoprogramador.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF" />
          https://sujeitoprogramador.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
