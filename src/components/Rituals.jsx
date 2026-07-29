export default function Rituals() {
  return (
    <section className="rituals" id="rituels">
      <div className="wrap">
        <div className="section-head interior-head">
          <p className="eyebrow">Manucure & Rituels</p>
          <h2>Le détail fait toute la différence</h2>
          <p className="interior-text">
            Chaque manucure est réalisée avec précision et douceur, dans une
            ambiance sensorielle pensée pour vos moments de détente : fleurs
            séchées, camomille et agrumes accompagnent nos rituels beauté pour
            une expérience complète, du geste au parfum.
          </p>
        </div>

        <div className="interior-grid rituals-grid">
          <div className="interior-item large">
            <img src="/assets/manucure-3.jpg" alt="Rituel beauté aux ingrédients naturels - Selima Beauty & Spa" />
          </div>
          <div className="interior-item">
            <img src="/assets/manucure-1.jpg" alt="Manucure rose - Selima Beauty & Spa" />
          </div>
          <div className="interior-item">
            <img src="/assets/manucure-4.jpg" alt="Manucure française élégante" />
          </div>
          <div className="interior-item wide">
            <img src="/assets/manucure-2.jpg" alt="Manucure dorée et rituel de soin" />
          </div>
        </div>
      </div>
    </section>
  )
}
