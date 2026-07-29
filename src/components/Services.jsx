import { serviceGroups } from '../data.js'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Nos offres exclusives</p>
          <h2>Services & tarifs</h2>
        </div>

        {serviceGroups.map((group) => (
          <div className="service-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <div className="service-item" key={item.name}>
                <span className="service-name">{item.name}</span>
                <span className="service-leader"></span>
                <span className="service-price">
                  {item.price}<sup>DT</sup>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
