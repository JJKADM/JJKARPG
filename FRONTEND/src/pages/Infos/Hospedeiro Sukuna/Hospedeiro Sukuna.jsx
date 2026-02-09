import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function HospedeiroSukuna() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Hospedeiro Sukuna"
            avatarImage="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Hospedeiro Sukuna"
            subtitle="O hospedeiro de Sukuna"
            text={[lorem]}
            relatedItems={[
                { title: "Clãs" },
                { title: "Estilos de Luta" },
                { title: "Associações" },
            ]}
        />
    );
}

export default HospedeiroSukuna;
