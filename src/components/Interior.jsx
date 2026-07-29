export default function Interior() {
  return (
    <section className="interior" id="interieur">
      <div className="wrap">
        <div className="section-head interior-head">
          <p className="eyebrow">L'univers Selima</p>
          <h2>"Une parenthèse de calme, loin du quotidien"</h2>
          <p className="interior-text">
            Passer la porte de Selima Beauty & Spa, c'est laisser le bruit
            dehors. Lumière chaleureuse, matières nobles, parfums doux — chaque
            détail de notre institut a été pensé pour vous offrir une véritable
            parenthèse de sérénité, entre élégance et bien-être absolu.
          </p>
        </div>

        <div className="interior-grid">
          <div className="interior-item large">
            <img src="/assets/interieur-2.jpg" alt="Salon Selima Beauty & Spa - espace coiffure" />
          </div>
          <div className="interior-item">
            <img src="/assets/interieur-1.jpg" alt="Ambiance chaleureuse du salon" />
          </div>
          <div className="interior-item">
            <img src="/assets/interieur-5.jpg" alt="Enseigne dorée Selima Beauty & Spa" />
          </div>
          <div className="interior-item wide">
            <img src="/assets/interieur-3.jpg" alt="Espace coiffure élégant" />
          </div>
        </div>
      </div>
    </section>
  )
}
