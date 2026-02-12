import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Cardhome from '../../components/Cardhome/Cardhome'

function Home() {
  const infoCards = [
    
    {
      title: 'Associações',
      imageSrc:
        'https://i.pinimg.com/736x/47/12/6b/47126b8b270e17f2da22850d65192564.jpg',
      href: '/infos/associacoes',
    },

    {
      title: 'Estilos de luta',
      imageSrc:
        'https://i.pinimg.com/1200x/4e/4d/48/4e4d4878a13892c6a30839351eea8fc8.jpg',
      href: '/infos/estilos',
    },

    {
      title: 'Clãs',
      imageSrc:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop',
      href: '/infos/clas',
    },

    {
      title: 'Raças',
      imageSrc:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
      href: '/infos/racas',
    },
    {
      title: 'Sistemas',
      imageSrc:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop',
      href: '/infos/estilos',
    },
    {
      title: 'Hospedeiro Sukuna',
      imageSrc:
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=400&auto=format&fit=crop',
      href: '/hospedeiro',
    },
    {
      title: 'Loja',
      imageSrc:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop',
      href: '/loja',
    },
    {
      title: 'Lorem Ipsum',
      imageSrc:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=400&auto=format&fit=crop',
      href: '/infos/lorem-1',
    },
    {
      title: 'Lorem Ipsum',
      imageSrc:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop',
      href: '/infos/lorem-2',
    },
  ]

  return (
    <div className="home">
      <Navbar />

      <main className="home__main">
        <section className="home__panel home__panel--left">
          <h2 className="home__panel-title">Minhas Disciplinas</h2>
          <div className="home__panel-list">
            <button className="home__panel-item">Sistema monetário</button>
            <button className="home__panel-item">Sistema de evolução</button>
            <button className="home__panel-item">Como jogar</button>
            <button className="home__panel-item">Sobre o RPG</button>
          </div>
        </section>

        <section className="home__panel home__panel--right">
          <h2 className="home__panel-title">Notícias</h2>
          <div className="home__news">
            <button className="home__news-item">Notícia 1</button>
            <button className="home__news-item">Notícia 2</button>
            <button className="home__news-item">Notícia 3</button>
            
          </div>
        </section>
      </main>
      <section className="home__info">
        <h2 className="home__info-title">Informativos</h2>
        <div className="home__info-grid">
          {infoCards.map((card) => (
            <Cardhome
              key={card.title}
              title={card.title}
              imageSrc={card.imageSrc}
              alt="foto"
              href={card.href}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
