import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function Loja() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Loja"
            avatarImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Loja"
            subtitle="Itens e recursos da loja"
            text={[lorem]}
            relatedItems={[
                { title: "Evolução" },
                { title: "Raças" },
                { title: "Clãs" },
            ]}
        />
    );
}

export default Loja;
