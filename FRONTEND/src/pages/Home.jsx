import './Home.css'
import Navbar from '../components/Navbar'

function Home() {
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
    </div>
  )
}

export default Home
