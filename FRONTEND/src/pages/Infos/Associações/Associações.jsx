import Paginfo from "../../../components/Paginfo/Paginfo";


function Associacoes() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://i.pinimg.com/1200x/81/f3/b1/81f3b1cc12915046b9701ecedfb96aff.jpg"
            backHref="/"
            title="Associações"
            avatarImage="https://i.pinimg.com/1200x/c8/98/b1/c898b1d70e5a3baee64b9974519b013a.jpg"
            avatarAlt="Associações"
            subtitle="Associações do RPG"
            text={["As Associações no mundo de Jujutsu Kaisen são grupo que seus personagens podem ou não estar envolvidos. Escolhendo um grupo, você deverá seguir as regras e o objetivo daquele grupo, ajudando o coletivo da mesma forma que o coletivo ajuda o indivíduo. Inicialmente, teremos somente 3 (três) associações, contudo, é possível que você crie uma associação própria com seu personagem e seus aliados ou, simplesmente, não participe de nenhuma associação, definindo os passos de seu personagem através de sua própria mentalidade. Tudo pode ser feito, claro, conforme acordado entre você e os administradores, então não deixe-se prender apenas aos que está listado aqui!"]}
            relatedTitle="Associações"
            relatedItems={[
                {
                    title: "Escola Superior Técnica de Jujutsu de Kyoto",
                    href: "/infos/associacoes/kyoto",
                    imageSrc: "/kyoto2.jpeg",
                },
                {
                    title: "Escola Superior Técnica de Jujutsu de Tokyo",
                    href: "/infos/associacoes/tokyo",
                    imageSrc: "/tokyo2.jpeg",
                },
                {
                    title: "Clube de Luta Gachinko",
                    imageSrc: "/luta2.jpeg",
                    href: "/infos/associacoes/outsiders",
                },
            ]}
        />
    );
}

export default Associacoes;
