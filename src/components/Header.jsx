import { contact } from '../data.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="brandmark">
        <img src="/assets/logo.jpg" alt="Selima Beauty & Spa" />
      </div>
      <nav>
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">L'Institut</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#produits">Produits</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href={contact.whatsappHref} className="btn btn-solid btn-small">Réserver</a>
    </header>
  )
}
