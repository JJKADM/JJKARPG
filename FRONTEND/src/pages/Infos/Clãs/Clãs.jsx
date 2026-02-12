import Paginfo from "../../../components/Paginfo/Paginfo";

function Clas() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://i.pinimg.com/1200x/89/af/66/89af66606639712a8027d3d2ed7f69d7.jpg"
            backHref="/"
            title="Clãs"
            avatarImage="/fotinha.jpg"
            avatarAlt="Clãs"
            subtitle="Clãs do RPG"
            text={[
                <>
                    — Os <strong>Clãs</strong> são famílias descendente de um ancestral que, normalmente, são figuras
                    famosas e extremamente poderosas de suas épocas. Especula-se que a fundação de todo clã veio da
                    <strong>Era Heian</strong>, assim como ocorreu com a tríplice sanguínea que reina no mundo de
                    <strong>Jujutsu Kaisen</strong>, isto é: os clã <strong>Gojou</strong>, <strong>Kamo</strong> e <strong>Zenin</strong>,
                    que são descendentes da linhagem de <strong>Michizane Sugawara</strong>, <strong>Sutoku Tenno</strong> e
                    <strong>Tairo no Masakado</strong> respectivamente. Claro que, além dos três grandes clãs, há outros
                    como o clã <strong>Fujiwara</strong>, por exemplo, mas optamos por deixar somente os três grandes pois
                    eles são quem mais têm relevância e background dentro da história de <strong>Jujutsu Kaisen</strong> —
                    isto é, até o presente momento. Todos os clãs precisam de <strong>Teste</strong> e têm somente
                    3 (três) vagas no total. Para ser de um clã você não precisa ser, necessariamente, da “casa”
                    principal, sendo possível que você seja adotado ou simplesmente seja um descendente que se
                    afastou muito do núcleo original mas que ainda carrega a descendência ancestral. No mais,
                    você também pode criar seu próprio clã, tratando disso com um administrador que irá avaliar
                    a narrativa e a criatividade do clã em questão.
                </>
            ]}
            relatedTitle="Clãs disponíveis"
            relatedItems={[
                { title: "Gojou", href: "/infos/clas/gojou" },
                { title: "Kamo", href: "/infos/clas/kamo" },
                { title: "Zenin", href: "/infos/clas/zenin" },
            ]}
        />
    );
}

export default Clas;
