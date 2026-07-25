import { FaWhatsapp } from "react-icons/fa";
import "./Float.css";

export default function Float() {
  return (
    <a
      href="https://wa.me/2349134109658?text=Hi%20Promise!%20I%20found%20your%20portfolio%20and%20I'd%20love%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
    >
      <FaWhatsapp />
    </a>
  );
}
