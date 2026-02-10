import './LojaCard.css'

function LojaCard({ title, price, imageSrc, onClick }) {
  return (
    <article className="loja-card">
      <button className="loja-card__button" type="button" onClick={onClick}>
        <div className="loja-card__image">
          {imageSrc ? <img src={imageSrc} alt={title} /> : <span>foto</span>}
        </div>
        <h3 className="loja-card__title">{title}</h3>
        <p className="loja-card__price">{price}</p>
      </button>
    </article>
  )
}

export default LojaCard
