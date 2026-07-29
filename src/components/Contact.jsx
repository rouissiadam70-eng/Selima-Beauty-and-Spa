import { contact } from '../data.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Nous trouver</p>
          <h2>Réservez votre rendez-vous</h2>

          <div className="contact-line">
            <div className="ic">☎</div>
            <div>
              <b>Téléphone / WhatsApp</b>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </div>
          </div>
          <div className="contact-line">
            <div className="ic">⚲</div>
            <div>
              <b>Adresse</b>
              <span>{contact.address}</span>
            </div>
          </div>
          <div className="contact-line">
            <div className="ic">✉</div>
            <div>
              <b>Réseaux sociaux</b>
              <span>Suivez nos offres et actualités</span>
            </div>
          </div>

          <div className="social-row">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" className="social-btn">Facebook</a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            src={contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Selima Beauty & Spa"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
