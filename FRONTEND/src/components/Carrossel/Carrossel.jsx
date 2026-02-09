import React, { useEffect, useMemo, useState } from "react";
import Cardhome from "../Cardhome/Cardhome";
import "./Carrossel.css";

function Carrossel({
	title = "Veja também",
	items = [],
	visibleCount = 2,
	mobileVisibleCount = 1,
	mobileBreakpoint = 720,
}) {
	const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleCount);
	const safeVisibleCount = Math.max(1, currentVisibleCount);
	const [startIndex, setStartIndex] = useState(0);
	const [isAnimatingNext, setIsAnimatingNext] = useState(false);
	const [isAnimatingPrev, setIsAnimatingPrev] = useState(false);
	const animationDuration = 240;

	const normalizedItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
	const canScroll = normalizedItems.length > safeVisibleCount;

	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) {
			return;
		}

		const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

		const updateCount = () => {
			setCurrentVisibleCount(mediaQuery.matches ? mobileVisibleCount : visibleCount);
		};

		updateCount();
		mediaQuery.addEventListener("change", updateCount);

		return () => {
			mediaQuery.removeEventListener("change", updateCount);
		};
	}, [mobileBreakpoint, mobileVisibleCount, visibleCount]);

	const visibleItems = useMemo(() => {
		if (!normalizedItems.length) {
			return [];
		}

		const result = [];
		for (let i = 0; i < safeVisibleCount; i += 1) {
			const index = (startIndex + i) % normalizedItems.length;
			result.push(normalizedItems[index]);
		}
		return result;
	}, [normalizedItems, safeVisibleCount, startIndex]);

	const handlePrev = () => {
		if (!canScroll) return;
		setIsAnimatingPrev(true);
		setStartIndex((current) =>
			(current - 1 + normalizedItems.length) % normalizedItems.length
		);
		window.setTimeout(() => {
			setIsAnimatingPrev(false);
		}, animationDuration);
	};

	const handleNext = () => {
		if (!canScroll) return;
		setIsAnimatingNext(true);
		setStartIndex((current) => (current + 1) % normalizedItems.length);
		window.setTimeout(() => {
			setIsAnimatingNext(false);
		}, animationDuration);
	};

	return (
		<div className="carrossel">
			<h3 className="carrossel__title">{title}</h3>
			<div className="carrossel__row">
				<button
					className="carrossel__arrow"
					type="button"
					onClick={handlePrev}
					aria-label="Voltar lista"
					disabled={!canScroll}
				>
					&lt;
				</button>
				<div
					className={`carrossel__cards${isAnimatingNext ? " carrossel__cards--next" : ""}${
						isAnimatingPrev ? " carrossel__cards--prev" : ""
					}`}
				>
					{visibleItems.map((item, index) => (
						<Cardhome
							key={`${item.title || "item"}-${index}`}
							title={item.title}
							imageSrc={item.imageSrc}
							alt={item.alt || "foto"}
							href={item.href || "#"}
						/>
					))}
				</div>
				<button
					className="carrossel__arrow"
					type="button"
					onClick={handleNext}
					aria-label="Avançar lista"
					disabled={!canScroll}
				>
					&gt;
				</button>
			</div>
		</div>
	);
}

export default Carrossel;
