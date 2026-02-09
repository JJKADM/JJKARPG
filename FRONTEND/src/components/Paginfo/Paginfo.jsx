import React from "react";
import Navbar from "../Navbar/Navbar";
import Cardhome from "../Cardhome/Cardhome";
import "./Paginfo.css";

function Paginfo({
    title = "Título da página",
    heroImage = "",
    avatarImage = "",
    avatarAlt = "foto",
    subtitle = "Subtítulo",
    text = "Texto curto de exemplo para descrever a página.",
    relatedTitle = "Veja também",
    relatedItems = [],
    backLabel = "Voltar",
    backHref = "#",
    showNavbar = true,
}) {
    const paragraphs = Array.isArray(text) ? text : [text];

    return (
        <div className="paginfo">
            {showNavbar ? <Navbar /> : null}

            <section
                className="paginfo__hero"
                style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
            >
                <a className="paginfo__back" href={backHref}>
                    {backLabel}
                </a>
                <div className="paginfo__hero-content">
                    <h1 className="paginfo__title">{title}</h1>
                    <div className="paginfo__avatar">
                        {avatarImage ? (
                            <img src={avatarImage} alt={avatarAlt} />
                        ) : (
                            <span>{avatarAlt}</span>
                        )}
                    </div>
                </div>
            </section>

            <section className="paginfo__content">
                <h2 className="paginfo__subtitle">{subtitle}</h2>
                <div className="paginfo__text">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </section>

            <section className="paginfo__related">
                <h3 className="paginfo__related-title">{relatedTitle}</h3>
                <div className="paginfo__related-row">
                    <button className="paginfo__arrow" aria-label="Voltar lista">
                        &lt;
                    </button>
                    <div className="paginfo__cards">
                        {(relatedItems.length ? relatedItems : [{ title: "Raças" }, { title: "Raças" }]).map(
                            (item, index) => (
                                <Cardhome
                                    key={`${item.title}-${index}`}
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                    alt={item.alt || "foto"}
                                    href={item.href || "#"}
                                />
                            )
                        )}
                    </div>
                    <button className="paginfo__arrow" aria-label="Avançar lista">
                        &gt;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Paginfo;
