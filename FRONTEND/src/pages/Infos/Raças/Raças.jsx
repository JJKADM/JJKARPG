import Paginfo from "../../../components/Paginfo/Paginfo";


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
            text={[
                "As Raças em Jujutsu Kaisen são espécimes de criaturas capazes de controlar e manipular Energia Amaldiçoada, que é a principal forma de energia e uso para combate que existe na obra. Além disso, são raças inteligentes na obra e capazes de executar raciocínios longínquos, por mais que seus meios de nascimento sejam alternativos.",
                "Raças disponíveis:",
                "• Humanos",
                "• Cadáver Amaldiçoado (09 Vagas)",
                "• Fetos Amaldiçoados: Pintura da Morte (09 Vagas)",
                "• Maldições.",
            ]}
            relatedTitle="Raças disponíveis"
            relatedItems={[
                { title: "Humanos", href: "/infos/racas/humanos" },
                { title: "Cadáver Amaldiçoado", href: "/infos/racas/cadaver" },
                { title: "Fetos Amaldiçoados: Pintura da Morte", href: "/infos/racas/fetos" },
                { title: "Maldições", href: "/infos/racas/maldicoes" },
            ]}
        />
    );
}

export default Racas;
