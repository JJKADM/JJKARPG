import Paginfo from "../../../components/Paginfo/Paginfo";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);

function LoremIpsum() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop"
            backHref="/"
            title="Lorem Ipsum"
            avatarImage="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Lorem Ipsum"
            subtitle="Lorem ipsum do RPG"
            text={[lorem]}
            relatedItems={[
                { title: "Evolução" },
                { title: "Raças" },
                { title: "Clãs" },
            ]}
        />
    );
}

export default LoremIpsum;
