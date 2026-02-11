import React from "react";
import Navbar from "../Navbar/Navbar";
import Carrossel from "../Carrossel/Carrossel";
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
    showRelated = true,
    backLabel = "Voltar",
    backHref = "#",
    showNavbar = true,
}) {
    const paragraphs = Array.isArray(text) ? text : [text];
    const contentBlocks = [];
    let listBuffer = [];

    const flushList = () => {
        if (listBuffer.length) {
            contentBlocks.push({ type: "list", items: listBuffer });
            listBuffer = [];
        }
    };

    paragraphs.forEach((paragraph) => {
        if (typeof paragraph === "string" && paragraph.trim().startsWith("• ")) {
            listBuffer.push(paragraph.trim().replace(/^•\s*/, ""));
            return;
        }

        flushList();
        contentBlocks.push({ type: "paragraph", text: paragraph });
    });

    flushList();

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
                    {contentBlocks.map((block, index) =>
                        block.type === "list" ? (
                            <ul key={`list-${index}`} className="paginfo__list">
                                {block.items.map((item, itemIndex) => (
                                    <li key={`${index}-${itemIndex}`}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p key={`p-${index}`}>{block.text}</p>
                        )
                    )}
                </div>
            </section>

            {showRelated ? (
                <section className="paginfo__related">
                    <Carrossel
                        title={relatedTitle}
                        items={relatedItems.length ? relatedItems : [{ title: "Raças" }, { title: "Raças" }]}
                    />
                </section>
            ) : null}
        </div>
    );
}

export default Paginfo;
