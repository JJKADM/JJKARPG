import Paginfo from '../../../../components/Paginfo/Paginfo'

function Kyoto() {
  return (
    <Paginfo
      showNavbar={true}
      heroImage="/kyoto1.jpeg"
      backHref="/infos/associacoes"
      title="Escola Superior Técnica de Jujutsu de Kyoto. "
      avatarImage="/kyoto2.jpeg"
      avatarAlt="Kyoto"
      subtitle=" “quanta criatividade pra criar nome de lugar ein”
"
      showRelated={false}
      text={[
        <>
          A Escola Superior Técnica de Jujutsu de Kyoto é, nada mais e nada menos, do que a instituição irmã da <strong>Escola Superior Técnica de Jujutsu de Tokyo</strong>,
          como o próprio nome diz, oras. Dito isso, recomendo que também leia o texto de Tokyo, servindo ambos os textos como um complemento um do outro, apesar de eu repetir
          algumas informações essenciais aqui.
        </>,
        <>
          Ambas as escolas foram criadas pela mestre <strong>Tengen</strong> numa tentativa de estruturar o mundo de <strong>Jujutsu Kaisen</strong>, muito provavelmente na mesma época
          em que ela ergueu as <strong>Barreiras</strong> que impede a saída da <strong>Energia Amaldiçoada</strong> do Japão, tornando a terra do Sol nascente como o epicentro de todo o poder.
        </>,
        <>
          Como o próprio nome diz, a instituição funciona como uma base de ensino e treinamento para aqueles que desejam aprender jujutsu e desejam trabalhar com isso, focando
          sua atenção para jovens que ainda estão no colegial e que despertam interesse à escola. Assim como sua companheira fraterna, a escola fica aos arredores misteriosos de
          Kyoto, localizada entre os cumes dos montes famosos do local e com sua localização omissa para os estranhos e curiosos por causa de barreiras erguidas que camuflam o
          local, sendo possível chegar nesses locais somente caso saiba a localização exata, não sendo possível adentrar o território “sem querer”.
        </>,
        <>
          Dentro do território é possível perceber a sua total independência em relação às outras instituições, havendo seus próprios dormitórios, seu próprio campo de
          treinamento, enfermaria, necrotério, campos para a prática de esportes, entre muitos outros. Basicamente, tudo o que um feiticeiro precisa para viver está lá, sendo
          possível dormir, comer, aprender e se recuperar por lá sem custo algum.
        </>,
        <>
          Você sempre começará como um aluno e, independente da sua idade, passará por todo um processo educacional parecido com o colegial tradicional, intercalando suas aulas
          convencionais com a sua aula de jujutsu. Começando como <strong>Aluno do 1º ano</strong>, você irá avançar a cada 2 (dois) meses, portanto, no seu terceiro mês no RPG você será
          considerado aluno do 2º ano e por assim vai até completar os 3 (três) anos fundamentais. Após isso, será registrado como <strong>Feiticeiro Especializado</strong> e após 2 (dois)
          meses, poderá se candidatar para <strong>Professor</strong> caso haja necessidade – considerando que há somente 3 (três) professores simultaneamente, um para cada turma.
        </>,
        <>
          E, novamente, caso haja necessidade de um <strong>Diretor</strong>, a decisão será feita através de uma votação entre os membros de todos os <strong>Clãs</strong> da seguinte forma: cada clã
          deverá formar uma lista de 3 (três) opções e apresentá-as. Quando todas as opções forem apresentadas, será aberta uma enquete para que seja escolhido o próximo diretor,
          com todos os clãs participando novamente. Caso nomeado como diretor, você não poderá sair mais para fazer <strong>Autonarradas</strong> e terá poder para designar missões de{' '}
          <strong>Grau Especial</strong>. Narrativamente, é um cargo de alta importância que será sempre levada em consideração nas narrações e nas <strong>Tramas</strong>.
        </>,
        <>
          No mais, por Kyoto ser a terra sagrada do jujutsu e pelo seu histórico de alunos, a escola de Kyoto é conhecida por ser a escola dos “engomadinhos”, principalmente por
          parte dos fãs que não perdoam nada. Aqueles que são dessa <strong>Associação</strong> podem entrar em confronto com as <strong>Maldições</strong> e abaixo estará o salário semanal de cada posição
          hierárquica.
        </>,
        '• Aluno do 1º Ano: ¥ 120.000',
        '• Aluno do 2º Ano: ¥ 200.000',
        '• Aluno do 3º Ano: ¥ 400.000',
        '• Feiticeiro Especializado: ¥ 800.000',
        '• Professor: ¥ 1.500.000',
        '• Diretor: ¥ 5.000.000',
      ]}
      relatedItems={[]}
    />
  )
}

export default Kyoto
