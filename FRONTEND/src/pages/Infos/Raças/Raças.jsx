import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function Racas() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Raças"
            avatarImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Raças"
            subtitle="Raças do RPG"
            text={[lorem]}
            relatedItems={[
                { title: "Evolução" },
                { title: "Clãs" },
                { title: "Estilos de Luta" },
            ]}
        />
    );
}

export default Racas;
