import './ItemLojaPage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import ItemLoja from '../../components/ItemLoja/ItemLoja'

function ItemLojaPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const item = state || {
    title: 'Produto',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
    price: 'R$ 0,00',
    stock: 0,
    imageSrc: '',
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="item-loja-page">
      <Navbar />
      <main className="item-loja-page__main">
        <ItemLoja
          title={item.title}
          description={item.description}
          price={item.price}
          stock={item.stock}
          imageSrc={item.imageSrc}
          onBack={handleBack}
        />
      </main>
    </div>
  )
}

export default ItemLojaPage
