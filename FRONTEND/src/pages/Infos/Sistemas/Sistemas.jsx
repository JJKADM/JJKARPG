import Paginfo from "../../../components/Paginfo/Paginfo";

function Sistemas() {
	return (
		<Paginfo
			showNavbar={true}
			heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
			backHref="/"
			title="Sistemas"
			avatarImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop"
			avatarAlt="Sistemas"
			subtitle="Informações do RPG"
			text={[<>Em breve.</>]}
			showRelated={false}
			relatedItems={[]}
		/>
	);
}

export default Sistemas;
