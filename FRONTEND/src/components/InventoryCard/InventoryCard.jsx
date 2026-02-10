import { useEffect, useRef, useState } from 'react'
import './InventoryCard.css'

function InventoryCard({ title, description, imageSrc }) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)
  const cardRef = useRef(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      const modalEl = modalRef.current
      const cardEl = cardRef.current
      if (!modalEl || !cardEl) return

      const target = event.target
      if (modalEl.contains(target) || cardEl.contains(target)) {
        return
      }

      closeModal()
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div className="inventory-card" ref={cardRef}>
      <button className="inventory-card__button" type="button" onClick={openModal}>
        <div className="inventory-card__image">
          {imageSrc ? <img src={imageSrc} alt={title} /> : <span>foto</span>}
        </div>
        <h3 className="inventory-card__title">{title}</h3>
      </button>

      {isOpen && (
        <div className="inventory-card__overlay" role="dialog" aria-modal="true">
          <div className="inventory-card__modal" ref={modalRef}>
            <button className="inventory-card__close" type="button" onClick={closeModal}>
              ×
            </button>
            <div className="inventory-card__modal-image">
              {imageSrc ? <img src={imageSrc} alt={title} /> : <span>foto</span>}
            </div>
            <h3 className="inventory-card__modal-title">{title}</h3>
            <p className="inventory-card__modal-description">{description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default InventoryCard
