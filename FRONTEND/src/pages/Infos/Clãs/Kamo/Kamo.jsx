import Paginfo from "../../../../components/Paginfo/Paginfo";

function Kamo() {
    return (
        <Paginfo
            showNavbar={true}
            heroImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
            backHref="/infos/clas"
            title="Clã Kamo"
            avatarImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
            avatarAlt="Clã Kamo"
            subtitle="Clãs do RPG"
            text={[
                <>
                    — Necessário <strong>Teste</strong>.
                </>,
                <>
                    • A linhagem <strong>Kamo</strong> é, assim como os <strong>Gojou</strong> e os <strong>Zenin’s</strong>, a tríplice
                    sanguínea sagradas que reinam em coexistência no universo de <strong>Jujutsu Kaisen</strong>, sendo linhagens
                    diretas dos <strong>Três Grandes Espíritos Vingativos</strong> do Japão. Infelizmente, na obra a gente não
                    tem uma informação sobre quem é o grande ancestral Kamo, porém, dando uma breve pesquisada,
                    conseguimos encontrar aquele que mais parece se encaixar nesse quesito: o grande imperador
                    <strong>Sutoku Tenno</strong>, escolhido, até o presente momento em que não há mais informações, para ser o
                    ancestral e o criador de toda essa linhagem abençoada. Então, como descendentes de um antigo líder
                    do Japão, o <strong>Clã Kamo</strong> é aquele que mais se apega nas tradições e no conservadorismo oriental,
                    o que torna <strong>Noritoshi Kamo</strong> a sua maior vergonha e ironia. Para aqueles que não sabem,
                    <strong>Noritoshi Kamo</strong> é considerado o feiticeiro mais cruel e bárbaro da história, uma figura arcaica
                    cuja vergonha reflete nos dias atuais. Oficialmente, Noritoshi foi o responsável pelos experimentos
                    que resultaram na mistura de <strong>Humanos</strong> e <strong>Maldições</strong> quando uma mulher mostrou-se capaz de
                    unir essas duas <strong>Raças</strong> em seu útero. Porém, como bem sabemos, tudo isso aconteceu pelas mãos de
                    <strong>Kenjaku</strong>, mas não sabemos se o primeiro contato entre Kenjaku e Noritoshi surgiu a partir daí,
                    ainda mantendo sua fama de feiticeiro mais cruel, ou se Kenjaku sempre esteve em seu corpo e essa
                    alcunha é, na verdade, dele. Enfim, a família Kamo tem como <strong>Técnica Inata</strong> herdada a
                    <strong>Manipulação de Sangue</strong>, e a sua liderança costuma ser decidida através de seu portador, ou seja:
                    aquele que tem essa habilidade é, naturalmente, líder do clã. Infelizmente, com a balança de poder
                    sendo alterada e não existindo mais essa questão hereditária, fica mais difícil decidir quem será
                    o monarca, sendo decidido através do julgamento dos anciões do clã, levando em consideração a
                    força, o respeito e os ideais da pessoa. No mais, bonificação, quem seguir por essa linhagem terá
                    uma bonificação equivalente a cento (100) pontos para distribuir entre os <strong>Atributos</strong> e terão
                    acesso antecipado às <strong>Técnicas</strong>, exigindo menos <strong>Nível</strong> do personagem.
                </>
            ]}
            showRelated={false}
            relatedItems={[]}
        />
    );
}

export default Kamo;
