export default function InstaVideo() {
  return (
    <section className="insta-video" id="video">
      <div className="wrap">
        <div className="section-head interior-head" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          <p className="eyebrow">En images</p>
          <h2>Découvrez notre institut</h2>
        </div>
        <div className="insta-embed-wrap">
          <iframe
            src="https://www.instagram.com/p/DV_cy9EjAOI/embed"
            title="Vidéo Selima Beauty & Spa"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}