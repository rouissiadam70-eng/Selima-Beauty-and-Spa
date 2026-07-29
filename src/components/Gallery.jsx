import { whyChooseUs } from '../data.js'

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">L'expérience Selima</p>
          <h2>Un moment rien qu'à vous</h2>
        </div>
        <div className="gallery-strip">
          <div className="gallery-main">
            <img src="/assets/soin-visage.jpg" alt="Soin visage — Instant Glow, Soin Expert, Rituel Prestige" />
            <div className="gallery-caption">
              <p className="eyebrow">Soin visage</p>
              <h3>Instant Glow · Soin Expert · Rituel Prestige</h3>
            </div>
          </div>
          <div className="gallery-side">
            <div className="promise">
              <h4>Pourquoi nous choisir</h4>
              <ul>
                {whyChooseUs.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
