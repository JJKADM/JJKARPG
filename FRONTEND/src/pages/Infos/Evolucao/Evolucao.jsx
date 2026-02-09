import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function Evolucao() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPZHzgCTd3zFQjv7OOzx-sq6yNvXECm_7uw&s"
            backHref="/"
            title="Evolução"
            avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPZHzgCTd3zFQjv7OOzx-sq6yNvXECm_7uw&s"
            avatarAlt="Evolução"
            subtitle="Sistema de evolução do RPG"
            text={[lorem]}
            relatedItems={[
                { title: "Raças" },
                { title: "Classes" },
                { title: "Equipamentos" },
            ]}
        />
    );
}

export default Evolucao;