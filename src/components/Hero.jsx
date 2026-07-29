import { contact } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow hero-eyebrow">Institut de Beauté & Spa — Raoued</p>
          <h1>
            Révélez votre <em>beauté</em>,<br />
            sublimez votre confiance
          </h1>
          <p className="lede">
            Chez Selima Beauty & Spa, chaque soin est pensé comme un moment
            suspendu — visage, cheveux, mains et pieds, entre expertise
            professionnelle et douceur du geste.
          </p>
          <div className="cta-row">
            <a href={contact.phoneHref} className="btn btn-solid">Prendre rendez-vous</a>
            <a href="#services" className="btn btn-outline">Voir nos soins</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/soin-visage.jpg" alt="Soin visage chez Selima Beauty & Spa" />
          <div className="hero-tag">
            <b>{contact.phone}</b>
            Réservez votre rendez-vous dès maintenant
          </div>
        </div>
      </div>
    </section>
  )
}
