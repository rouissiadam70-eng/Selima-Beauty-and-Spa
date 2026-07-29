export default function About() {
  return (
    <section className="about" id="apropos">
      <div className="wrap about-grid">
        <div className="about-figure">
          <img src="/assets/soin-visage.jpg" alt="Institut Selima Beauty & Spa" />
          <div className="ring"></div>
        </div>
        <div className="about-text">
          <p className="eyebrow">Votre beauté, notre passion</p>
          <div className="divider"></div>
          <p>
            Situé à Raoued, sur la route principale vers El Ghazella, Selima
            Beauty & Spa est un institut pensé pour prendre soin de vous dans
            son ensemble : visage, cheveux, mains et pieds.
          </p>
          <p>
            Notre équipe professionnelle et attentive vous accueille avec des
            produits de qualité et des résultats garantis, dans une ambiance
            élégante et apaisante — parce que votre beauté mérite un vrai
            moment pour elle.
          </p>
          <div className="stat-row">
            <div className="stat"><b>10+</b><span>Soins & prestations</span></div>
            <div className="stat"><b>100%</b><span>Produits de qualité</span></div>
            <div className="stat"><b>★★★★★</b><span>Résultats garantis</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
