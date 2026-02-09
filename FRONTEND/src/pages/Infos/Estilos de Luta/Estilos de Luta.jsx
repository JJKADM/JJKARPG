import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function EstilosDeLuta() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Estilos de Luta"
            avatarImage="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Estilos de Luta"
            subtitle="Estilos de luta do RPG"
            text={[lorem]}
            relatedItems={[
                { title: "Raças" },
                { title: "Clãs" },
                { title: "Associações" },
            ]}
        />
    );
}

export default EstilosDeLuta;
