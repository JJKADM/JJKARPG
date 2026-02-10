import './ItemLoja.css'

function ItemLoja({ title, description, price, stock, imageSrc, onBack }) {
  return (
    <section className="item-loja">
      <div className="item-loja__media">
        {imageSrc ? <img src={imageSrc} alt={title} /> : <span>foto</span>}
      </div>
      <div className="item-loja__content">
        <button className="item-loja__back" type="button" onClick={onBack}>
          Voltar &lt;
        </button>
        <h1 className="item-loja__title">{title}</h1>
        <div className="item-loja__meta">
          <span className="item-loja__price">{price}</span>
          <span className="item-loja__stock">{stock} em estoque</span>
        </div>
        <button className="item-loja__buy" type="button">
          Comprar
        </button>
        <p className="item-loja__description">{description}</p>
      </div>
    </section>
  )
}

export default ItemLoja
