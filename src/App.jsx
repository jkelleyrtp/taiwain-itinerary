import { useState, useEffect } from 'react'
import TravelItinerary from './Itinerary'
import FoodHunt from './FoodHunt'

const pages = [
  { id: "itinerary", label: "Itinerary", emoji: "🗓️" },
  { id: "food", label: "Food Hunt", emoji: "🍜" },
];

function getPage() {
  return window.location.hash.replace("#", "") || "itinerary";
}

function Nav({ current }) {
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: "rgba(15,15,26,0.92)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      justifyContent: "center",
      gap: 4,
      padding: "8px 16px",
      paddingBottom: "max(8px, env(safe-area-inset-bottom))",
    }}>
      {pages.map((p) => {
        const isActive = p.id === current;
        const isHover = p.id === hovered;
        return (
          <a
            key={p.id}
            href={`#${p.id}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1,
              maxWidth: 160,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "8px 12px",
              borderRadius: 12,
              textDecoration: "none",
              background: isActive ? "rgba(243,156,18,0.12)" : isHover ? "rgba(255,255,255,0.04)" : "transparent",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: 20 }}>{p.emoji}</span>
            <span style={{
              fontSize: 11,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? "#f39c12" : "#777",
              fontFamily: "'Outfit', sans-serif",
            }}>
              {p.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      {page === "food" ? <FoodHunt /> : <TravelItinerary />}
      <Nav current={page} />
    </>
  );
}

export default App
