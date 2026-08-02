import { featuredProduct } from '../data.js'

export default function Products() {
  const p = featuredProduct
  return (
    <section className="products" id="produits">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Produit vedette</p>
          <h2>{p.title}</h2>
        </div>
        <div className="bottle-decor" aria-hidden="true">
  <div className="bottle-3d">
    <div className="bottle-cap"></div>
    <div className="bottle-body"></div>
    <div className="bottle-shine"></div>
  </div>
</div>
        <div className="product-card">
          <img src={p.image} alt={`${p.title} ${p.brand}`} />
          <div className="product-info">
            <p className="eyebrow">{p.brand}</p>
            <h3>{p.subtitle}</h3>
            <p>{p.description}</p>
            <div className="price-tag">
              <span className="now">{p.priceNow}</span>
              <span className="was">{p.priceWas}</span>
            </div>
            <ul className="feature-list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
