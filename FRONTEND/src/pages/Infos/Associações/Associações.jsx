import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function Associacoes() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Associações"
            avatarImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Associações"
            subtitle="Associações do RPG"
            text={[lorem]}
            relatedItems={[
                { title: "Raças" },
                { title: "Clãs" },
                { title: "Estilos de Luta" },
            ]}
        />
    );
}

export default Associacoes;
