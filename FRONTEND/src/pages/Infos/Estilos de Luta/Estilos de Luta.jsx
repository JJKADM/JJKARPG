import Paginfo from "../../../components/Paginfo/Paginfo";

function EstilosDeLuta() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://i.pinimg.com/1200x/09/22/bc/0922bcdf53e3199dfc097fe15aa46dca.jpg"
            backHref="/"
            title="Estilos de Luta"
            avatarImage="https://i.pinimg.com/736x/b7/10/63/b710632c0ed92aa02c7c94ee1901f456.jpg"
            avatarAlt="Estilos de Luta"
            subtitle="Estilos de luta do RPG"
            text="Apesar de Jujutsu Kaisen não ser o tipo de obra que apresenta muitas formas de lutar, baseando-se no que já existe e sem dar muitas explicações ou margens para criatividade aflorar, é essencial diferenciar aqueles personagens que preferem combates corporais e aqueles que preferem o manuseio de armas amaldiçoadas para combater um inimigo, sendo necessário escolher apenas 1 (uma) forma de combate a menos que, claro, você possua a Restrição Celestial. Dessa forma, você terá uma área clara de aptidão, vantagem e desvantagem, quesitos essenciais para um RPG onde o combate será algo tão constante como em Jujutsu Kaisen Absolute. No mais, é permitido tentar criar e inovar um Estilo de Luta com a única condição de ser algo realmente criativo e não seja algo confundível."
            relatedItems={[
                {
                    title: "Esgrima",
                    href: "/infos/estilos/esgrima",
                    imageSrc: "https://i.pinimg.com/736x/05/a3/13/05a313c1cc3be3fe07cbd6c5da69a62f.jpg",
                },
                {
                    title: "Punho Divergente",
                    href: "/infos/estilos/punho-divergente",
                    imageSrc: "https://i.pinimg.com/1200x/51/0d/8b/510d8b9b8a883a63d5ace6996c3793dd.jpg",
                },
            ]}
        />
    );
}

export default EstilosDeLuta;
