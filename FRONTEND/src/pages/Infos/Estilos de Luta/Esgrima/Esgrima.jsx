import Paginfo from "../../../../components/Paginfo/Paginfo";

function Esgrima() {
	return (
		<Paginfo
			showNavbar={true}
			heroImage="https://i.pinimg.com/1200x/d3/8f/5b/d38f5bdf80f587c3904efef95cd1249c.jpg"
			backHref="/infos/estilos"
			title="Esgrima"
			avatarImage="https://i.pinimg.com/736x/c3/6a/f6/c36af6b1159e778d3f41ea300e1885c8.jpg"
			avatarAlt="Esgrima"
			subtitle="“usem espadas enferrujadas e vocês terão buff de tétano”"
			text={[
				<>
					Inversamente paralelo ao <strong>Punho Divergente</strong>, a <strong>Esgrima</strong> também surgiu
					como um <strong>Estilo de Luta</strong> que engloba toda e qualquer técnica que, pasmem,
					envolve combates a média distância cujo principal elemento são as <strong>Armas Amaldiçoadas</strong>,
					isto é, armas que já contém <strong>Energia Amaldiçoada</strong> e são capazes de exorcizar as
					<strong>Maldições</strong>. Na obra, a esgrima é muito bem representada por personagens como
					<strong>Kasumi Miwa</strong> e <strong>Yuta Okkotsu</strong>, que são personagens cuja forma principal de
					combate envolve o uso de lâminas para atingir e dilacerar o inimigo, não tendo um corpo
					naturalmente poderoso para combates corporais.
				</>,
				<>
					Compreendendo isso, entendemos o ponto principal: aqueles que optarem por seguir esse
					caminho terão que, necessariamente, lutar com proficiência com armamento a média distância.
					Novamente, como <strong>Jujutsu Kaisen</strong> é uma obra que, infelizmente, apresenta muita coisa e
					desenvolve poucas em relação ao volume que tem, é demonstrado lutadores que são capazes e que
					têm uma enorme proficiência com armas que não são de longa distância e tampouco perfurantes,
					apresentando uma capacidade híbrida de lidar com lâminas e com armamentos contundentes.
				</>,
				<>
					Portanto, assim como o <strong>Punho Divergente</strong> engloba todo e qualquer estilo de luta físico,
					a <strong>Esgrima</strong>, por mais “incomum” seja, também envolve toda prática de combate envolvendo o
					princípio do uso das armas amaldiçoadas. Partindo para a parte técnica, aqueles que escolherem
					esse estilo de luta têm direito a começar com 1 (uma) arma amaldiçoada de sua preferência e de
					<strong>Grau 4</strong>, ou seja: uma arma cuja única capacidade inata é a energia amaldiçoada para
					exorcizar maldições. O usuário, claro, será capaz de envolver seu armamento na própria energia
					amaldiçoada, aumentando os <strong>Atributos</strong> da arma e sendo capaz até de efetuar o <strong>Kokusen</strong>.
					A bonificação é equivalente a 100 (cem) pontos para distribuir entre <strong>Velocidade</strong> e
					<strong>Percepção</strong>.
				</>
			]}
			showRelated={false}
			relatedItems={[]}
		/>
	);
}

export default Esgrima;
