import { useState, useEffect } from "react";

const categories = [
  { id: "street", label: "Street Food", emoji: "🛒" },
  { id: "nightmarket", label: "Night Market", emoji: "🏮" },
  { id: "breakfast", label: "Breakfast", emoji: "🌅" },
  { id: "soup", label: "Soups & Noodles", emoji: "🍜" },
  { id: "regional", label: "Regional Specialties", emoji: "📍" },
  { id: "aboriginal", label: "Aboriginal Cuisine", emoji: "🏔️" },
  { id: "dessert", label: "Sweets & Desserts", emoji: "🍧" },
  { id: "drinks", label: "Drinks & Tea", emoji: "🧋" },
];

const dishes = [
  // Street Food
  { id: 1, name: "Braised Pork Rice", zh: "滷肉飯", cat: "street", difficulty: 1, desc: "Taiwan's soul food — minced pork belly simmered in soy and five-spice ladled over rice. Every shop does it differently.", where: "Everywhere, but Jin Feng (金峰) near CKS Memorial is legendary" },
  { id: 2, name: "Pepper Pork Bun", zh: "胡椒餅", cat: "street", difficulty: 1, desc: "Crispy clay-oven baked bun stuffed with peppery marinated pork and scallions. Crunchy outside, juicy inside.", where: "Raohe Night Market's entrance stall has the famous one" },
  { id: 3, name: "Scallion Pancake", zh: "蔥抓餅", cat: "street", difficulty: 1, desc: "Flaky, layered, crispy-chewy flatbread with scallions. Often topped with egg, cheese, or basil.", where: "Yongkang Street area, or any night market stall with a line" },
  { id: 4, name: "Gua Bao", zh: "刈包", cat: "street", difficulty: 1, desc: "The original 'Taiwanese hamburger' — steamed bun with braised pork belly, pickled mustard greens, cilantro, and peanut powder.", where: "Lan Jia Gua Bao at Gongguan Night Market" },
  { id: 5, name: "Taiwanese Popcorn Chicken", zh: "鹹酥雞", cat: "street", difficulty: 1, desc: "Bite-sized fried chicken tossed with Thai basil, garlic, and chili. The undisputed late-night snack king.", where: "Any night market — look for the longest line" },
  { id: 6, name: "Sticky Rice Sausage", zh: "大腸包小腸", cat: "street", difficulty: 2, desc: "A pork sausage stuffed inside a grilled glutinous rice 'sausage'. Taiwan's answer to the hot dog.", where: "Shilin Night Market or any major market" },
  { id: 7, name: "Iron Egg", zh: "鐵蛋", cat: "street", difficulty: 2, desc: "Eggs braised and air-dried repeatedly until they turn dark, chewy, and intensely savory. Tamsui's signature snack.", where: "Tamsui Old Street — A-Po Iron Egg (阿婆鐵蛋)" },

  // Night Market
  { id: 8, name: "Oyster Omelette", zh: "蚵仔煎", cat: "nightmarket", difficulty: 1, desc: "Plump oysters in a starchy egg batter with greens, drizzled in sweet-tangy sauce. The night market essential.", where: "Any night market — Ningxia and Raohe have great versions" },
  { id: 9, name: "XXL Fried Chicken Cutlet", zh: "大雞排", cat: "nightmarket", difficulty: 1, desc: "A piece of fried chicken literally bigger than your face. Crispy, juicy, seasoned with five-spice.", where: "Hot Star (豪大大) at Shilin Night Market started it all" },
  { id: 10, name: "Stinky Tofu (Fried)", zh: "炸臭豆腐", cat: "nightmarket", difficulty: 2, desc: "Fermented tofu deep-fried until golden crispy, served with pickled cabbage. Smells aggressive, tastes incredible.", where: "Dai's House of Stinky Tofu (戴記) at Shenkeng, or Raohe" },
  { id: 11, name: "Stinky Tofu (Braised)", zh: "麻辣臭豆腐", cat: "nightmarket", difficulty: 3, desc: "Soft, spongey tofu simmered in mala (numbing spicy) broth. The advanced level of stinky tofu.", where: "Night market stalls with red signage and chili-oil vats" },
  { id: 12, name: "Pork Blood Cake", zh: "豬血糕", cat: "nightmarket", difficulty: 3, desc: "Steamed pork blood and sticky rice on a stick, dipped in peanut powder and cilantro. Sounds weird, tastes amazing.", where: "Any night market — it's on a stick at most stalls" },
  { id: 13, name: "Coffin Bread", zh: "棺材板", cat: "nightmarket", difficulty: 2, desc: "Thick-cut fried toast hollowed out and filled with creamy seafood chowder. Tainan / Kaohsiung specialty.", where: "Kaohsiung Liuhe Night Market" },
  { id: 14, name: "Salt & Pepper Squid", zh: "鹽酥魷魚", cat: "nightmarket", difficulty: 1, desc: "Battered and fried squid with salt, pepper, and chili. Crunchy tentacles are the best part.", where: "Liuhe Night Market in Kaohsiung is known for this" },
  { id: 15, name: "Sweet Potato Balls", zh: "地瓜球", cat: "nightmarket", difficulty: 1, desc: "Puffy, hollow, golden fried balls of sweet potato dough. Impossibly addictive.", where: "Every night market has a stall — look for the wok action" },
  { id: 16, name: "Luwei / Braised Snack Platter", zh: "滷味", cat: "nightmarket", difficulty: 2, desc: "Pick your own tofu, meats, veggies, and noodles from a display — they braise it all together in spiced soy broth.", where: "Night markets and late-night street carts" },
  { id: 17, name: "Grilled Corn with Glaze", zh: "烤玉米", cat: "nightmarket", difficulty: 1, desc: "Corn grilled over charcoal and basted with a sweet soy-based glaze until caramelized and smoky.", where: "Look for the smoky charcoal grills at any major night market" },

  // Breakfast
  { id: 18, name: "Dan Bing", zh: "蛋餅", cat: "breakfast", difficulty: 1, desc: "Egg crepe — thin dough wrapper with egg, rolled up and sliced. The default Taiwanese breakfast. Get it with corn or cheese.", where: "Any breakfast shop (早餐店) — there's one on every block" },
  { id: 19, name: "Fan Tuan", zh: "飯糰", cat: "breakfast", difficulty: 2, desc: "Compressed sticky rice roll stuffed with you tiao (fried cruller), pork floss, pickled vegetables, and egg.", where: "Traditional breakfast shops — Fuhang Soy Milk (阜杭豆漿)" },
  { id: 20, name: "Shao Bing You Tiao", zh: "燒餅油條", cat: "breakfast", difficulty: 2, desc: "Flaky sesame flatbread wrapped around a golden fried cruller. Crispy meets crispy — perfect with warm soy milk.", where: "Fuhang Soy Milk or any traditional soy milk shop" },
  { id: 21, name: "Savory Soy Milk", zh: "鹹豆漿", cat: "breakfast", difficulty: 2, desc: "Warm soy milk curdled with vinegar, topped with dried shrimp, scallions, chili oil, and fried cruller bits. A hug in a bowl.", where: "Fuhang Soy Milk (arrive before 7am to skip the line)" },
  { id: 22, name: "Turnip Cake", zh: "蘿蔔糕", cat: "breakfast", difficulty: 2, desc: "Pan-fried squares of radish cake — crispy exterior, soft and savory inside. Dip in sweet chili sauce.", where: "Breakfast shops and dim sum spots" },

  // Soups & Noodles
  { id: 23, name: "Beef Noodle Soup", zh: "牛肉麵", cat: "soup", difficulty: 1, desc: "THE national dish. Braised beef chunks, chewy noodles, rich broth (red-braised or clear). Every shop is someone's favorite.", where: "Yong Kang Beef Noodle (永康牛肉麵) or Lin Dong Fang (林東芳)" },
  { id: 24, name: "Oyster Vermicelli", zh: "蚵仔麵線", cat: "soup", difficulty: 2, desc: "Thick, slippery vermicelli in a starchy, bonito-flavored broth with oysters and braised intestine.", where: "Ay-Chung Flour Rice Noodle (阿宗麵線) in Ximending" },
  { id: 25, name: "Milkfish Soup", zh: "虱目魚湯", cat: "soup", difficulty: 3, desc: "Delicate clear soup with tender milkfish belly. A southern Taiwan (Tainan) breakfast staple.", where: "Kaohsiung markets or any southern Taiwan breakfast spot" },
  { id: 26, name: "Sesame Oil Chicken Soup", zh: "麻油雞", cat: "soup", difficulty: 2, desc: "Rich, warming chicken soup cooked in toasted sesame oil with ginger and rice wine. Winter comfort food.", where: "Traditional restaurants, especially in colder months" },
  { id: 27, name: "Pig's Blood Soup", zh: "豬血湯", cat: "soup", difficulty: 3, desc: "Simple clear broth with cubes of silky pig blood pudding and pickled mustard greens. Milder than it sounds.", where: "Traditional noodle shops and night markets (usually NT$30-40)" },
  { id: 28, name: "Three Cup Chicken", zh: "三杯雞", cat: "soup", difficulty: 2, desc: "Chicken clay-pot braised with one cup each of soy sauce, sesame oil, and rice wine. Tons of basil and ginger.", where: "Traditional Taiwanese restaurants — ask for 三杯雞" },

  // Regional Specialties
  { id: 29, name: "Xiao Long Bao", zh: "小籠包", cat: "regional", difficulty: 1, desc: "Delicate soup dumplings with thin skin and hot broth inside. Taiwan perfected these.", where: "Din Tai Fung (鼎泰豐) at Taipei 101 or Yongkang St original" },
  { id: 30, name: "Sun Cake", zh: "太陽餅", cat: "regional", difficulty: 2, desc: "Flaky layered pastry with maltose filling. Taichung's signature souvenir.", where: "Taichung — Miyahara or any bakery on Ziyou Road" },
  { id: 31, name: "Pineapple Cake", zh: "鳳梨酥", cat: "regional", difficulty: 1, desc: "Buttery shortcrust pastry with tangy-sweet pineapple (or winter melon) filling. THE Taiwan souvenir.", where: "SunnyHills (微熱山丘) for the real-pineapple version" },
  { id: 32, name: "Hualien Mochi", zh: "花蓮麻糬", cat: "regional", difficulty: 2, desc: "Soft, chewy mochi with fillings like peanut, red bean, or sesame. Hualien is the mochi capital.", where: "Hualien Old Street — Zeng Ji Mochi (曾記麻糬)" },
  { id: 33, name: "Ah Gei", zh: "阿給", cat: "regional", difficulty: 3, desc: "Fried tofu pouch stuffed with glass noodles, sealed with fish paste, doused in chili sauce. Tamsui-only.", where: "Tamsui Old Street — the original Ah Gei shops" },
  { id: 34, name: "Peanut Ice Cream Roll", zh: "花生捲冰淇淋", cat: "regional", difficulty: 2, desc: "Fresh popiah skin, shaved peanut brittle, cilantro, and scoops of taro ice cream rolled up.", where: "Jiufen or night markets — find the shaving block stall" },
  { id: 35, name: "Taiwanese Pork Chop Rice", zh: "排骨便當", cat: "regional", difficulty: 1, desc: "Crispy-fried marinated pork chop over rice with braised egg, pickled vegetables, and greens. The bento king.", where: "Train station bento shops — Taiwan Railway bento (台鐵便當)" },
  { id: 36, name: "Tainan Dan Zai Noodles", zh: "擔仔麵", cat: "regional", difficulty: 3, desc: "Tiny bowl of thin noodles in a shrimp-pork broth topped with minced pork and a shrimp. Tainan's pride.", where: "Du Xiao Yue (度小月) — the original in Tainan or Taipei branch" },

  // Aboriginal Cuisine
  { id: 37, name: "Wild Boar Sausage", zh: "山豬肉香腸", cat: "aboriginal", difficulty: 2, desc: "Char-grilled sausage made from wild boar — gamey, smoky, often with millet or lemongrass.", where: "Hualien Dongdamen Night Market or Wulai village" },
  { id: 38, name: "Bamboo Rice", zh: "竹筒飯", cat: "aboriginal", difficulty: 3, desc: "Sticky rice with pork, mushrooms, and taro steamed inside a bamboo tube over fire. Earthy and smoky.", where: "Aboriginal villages — Wulai, Hualien, or Sun Moon Lake (Ita Thao)" },
  { id: 39, name: "Millet Wine", zh: "小米酒", cat: "aboriginal", difficulty: 3, desc: "Traditional fermented millet alcohol. Slightly sweet, slightly funky, deeply cultural.", where: "Aboriginal restaurants and markets in Hualien or Wulai" },
  { id: 40, name: "Roasted Mountain Vegetables", zh: "山地野菜", cat: "aboriginal", difficulty: 3, desc: "Wild ferns, water spinach, and mountain greens flash-fried with garlic. Simple and wonderful.", where: "Aboriginal set-meal restaurants near Taroko or Sun Moon Lake" },

  // Sweets & Desserts
  { id: 41, name: "Mango Shaved Ice", zh: "芒果冰", cat: "dessert", difficulty: 1, desc: "Mountain of shaved milk ice buried under fresh mango, mango sorbet, and condensed milk. Summer perfection.", where: "Ice Monster (冰館) or Smoothie House (思慕昔) on Yongkang St" },
  { id: 42, name: "Taro Balls", zh: "芋圓", cat: "dessert", difficulty: 1, desc: "Chewy balls of taro, sweet potato, and matcha in sweet soup or shaved ice. Jiufen's signature.", where: "A-Gan Yi-Yu (阿柑姨芋圓) at Jiufen — mountain view seats" },
  { id: 43, name: "Douhua", zh: "豆花", cat: "dessert", difficulty: 1, desc: "Silky soft tofu pudding in sweet ginger or sugar syrup with toppings — taro balls, peanuts, boba.", where: "Everywhere — look for 豆花 signs. Night markets have great ones" },
  { id: 44, name: "Aiyu Jelly", zh: "愛玉", cat: "dessert", difficulty: 2, desc: "Translucent jelly made from a fig seed, served with lime juice and honey. Refreshing and unique to Taiwan.", where: "Night markets and drink shops — get it with lemon" },
  { id: 45, name: "Wheel Cake", zh: "車輪餅", cat: "dessert", difficulty: 1, desc: "Crispy-shelled cake filled with red bean, custard, taro, or cream. Fresh off the griddle is essential.", where: "Street vendors everywhere — follow the sweet smell" },
  { id: 46, name: "Tangyuan", zh: "湯圓", cat: "dessert", difficulty: 2, desc: "Glutinous rice balls in sweet ginger soup — some filled with black sesame or peanut paste that oozes out.", where: "Ningxia Night Market or traditional dessert shops" },

  // Drinks & Tea
  { id: 47, name: "Bubble Tea (OG Boba)", zh: "珍珠奶茶", cat: "drinks", difficulty: 1, desc: "The drink Taiwan gave the world. Chewy tapioca pearls in milk tea. Get it at the source.", where: "Chun Shui Tang (春水堂) in Taichung — they invented it" },
  { id: 48, name: "Oolong Tea Flight", zh: "烏龍茶品", cat: "drinks", difficulty: 2, desc: "Sit down for a proper gongfu tea tasting — high mountain oolongs, roasted tieguanyin, aged varieties.", where: "Maokong tea houses or ASW Tea House on Dihua Street" },
  { id: 49, name: "Papaya Milk", zh: "木瓜牛奶", cat: "drinks", difficulty: 1, desc: "Fresh papaya blended with milk. Creamy, frothy, and outrageously good. A Kaohsiung staple.", where: "Kaohsiung Liuhe Night Market — any juice stand" },
  { id: 50, name: "Winter Melon Tea", zh: "冬瓜茶", cat: "drinks", difficulty: 1, desc: "Caramelized winter melon brewed into a sweet, smoky, amber tea. Served cold — super refreshing.", where: "Night market drink stalls or any traditional tea shop" },
];

const difficultyLabels = { 1: "Easy Find", 2: "Worth the Hunt", 3: "Deep Cut" };
const difficultyColors = { 1: "#2ecc71", 2: "#f39c12", 3: "#e74c3c" };

const STORAGE_KEY = "taiwan-food-hunt-checked";

function loadChecked() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export default function FoodHunt() {
  const [checked, setChecked] = useState(loadChecked);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCat, setHoveredCat] = useState(null);
  const [expandedDish, setExpandedDish] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = (id) => {
    setChecked((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = Date.now();
      return next;
    });
  };

  const filtered = activeCategory === "all" ? dishes : dishes.filter((d) => d.cat === activeCategory);
  const totalChecked = dishes.filter((d) => checked[d.id]).length;
  const filteredChecked = filtered.filter((d) => checked[d.id]).length;
  const pct = Math.round((totalChecked / dishes.length) * 100);

  return (
    <div style={{
      fontFamily: "'Outfit', 'DM Sans', sans-serif",
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, rgba(15,15,26,0.95) 0%, rgba(15,15,26,0.7) 100%)",
        backdropFilter: "blur(20px)",
        padding: "24px 20px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e74c3c",
            marginBottom: 6,
            fontWeight: 500,
          }}>
            Taiwan Food Challenge
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 26,
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #f8f8ff 0%, #b8b8d0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}>
            The 50-Dish Scavenger Hunt
          </h1>
          <div style={{ fontSize: 13, color: "#888", marginTop: 6 }}>
            How many can you check off?
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 16 }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 13, color: "#aaa" }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#f39c12" }}>{totalChecked}</span>
                <span style={{ color: "#666" }}> / {dishes.length}</span>
              </span>
              <span style={{
                fontSize: 12,
                color: pct === 100 ? "#2ecc71" : "#888",
                fontWeight: pct === 100 ? 700 : 400,
              }}>
                {pct === 100 ? "You did it! 🎉" : `${pct}% complete`}
              </span>
            </div>
            <div style={{
              height: 6,
              borderRadius: 3,
              background: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: 3,
                background: pct === 100
                  ? "linear-gradient(90deg, #2ecc71, #27ae60)"
                  : "linear-gradient(90deg, #f39c12, #e74c3c)",
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "14px 20px",
        display: "flex",
        gap: 8,
        background: "rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        {[{ id: "all", label: "All Dishes", emoji: "🍽️" }, ...categories].map((cat) => {
          const isActive = cat.id === activeCategory;
          const isHovered = cat.id === hoveredCat;
          const catCount = cat.id === "all" ? dishes.length : dishes.filter((d) => d.cat === cat.id).length;
          const catChecked = cat.id === "all" ? totalChecked : dishes.filter((d) => d.cat === cat.id && checked[d.id]).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={() => setHoveredCat(cat.id)}
              onMouseLeave={() => setHoveredCat(null)}
              style={{
                flexShrink: 0,
                border: isActive ? "2px solid #f39c12" : "2px solid transparent",
                background: isActive
                  ? "rgba(243,156,18,0.12)"
                  : isHovered
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.03)",
                borderRadius: 14,
                padding: "8px 14px",
                cursor: "pointer",
                color: isActive ? "#fff" : "#999",
                transition: "all 0.2s ease",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: 16 }}>{cat.emoji}</span>
              <div style={{
                fontSize: 11,
                fontWeight: isActive ? 700 : 500,
                marginTop: 2,
              }}>
                {cat.label}
              </div>
              <div style={{
                fontSize: 9,
                color: catChecked === catCount ? "#2ecc71" : "#666",
                marginTop: 2,
              }}>
                {catChecked}/{catCount}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dish list */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 20px 120px" }}>
        <div style={{
          fontSize: 12,
          color: "#666",
          marginBottom: 16,
        }}>
          {filteredChecked === filtered.length && filtered.length > 0
            ? `All ${filtered.length} dishes checked! ✨`
            : `${filtered.length - filteredChecked} remaining`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((dish) => {
            const isChecked = !!checked[dish.id];
            const isExpanded = expandedDish === dish.id;
            return (
              <div
                key={dish.id}
                style={{
                  background: isChecked
                    ? "rgba(46,204,113,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: isChecked
                    ? "1px solid rgba(46,204,113,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    cursor: "pointer",
                  }}
                  onClick={() => setExpandedDish(isExpanded ? null : dish.id)}
                >
                  {/* Checkbox */}
                  <div
                    onClick={(e) => { e.stopPropagation(); toggle(dish.id); }}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      border: isChecked ? "2px solid #2ecc71" : "2px solid rgba(255,255,255,0.15)",
                      background: isChecked ? "rgba(46,204,113,0.2)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                      fontSize: 14,
                    }}
                  >
                    {isChecked && "✓"}
                  </div>

                  {/* Dish info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                    }}>
                      <span style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: isChecked ? "#2ecc71" : "#e8e8f0",
                        textDecoration: isChecked ? "line-through" : "none",
                        textDecorationColor: "rgba(46,204,113,0.4)",
                      }}>
                        {dish.name}
                      </span>
                      <span style={{ fontSize: 13, color: "#888" }}>
                        {dish.zh}
                      </span>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 4,
                    }}>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        padding: "2px 8px",
                        borderRadius: 20,
                        background: `${difficultyColors[dish.difficulty]}18`,
                        color: difficultyColors[dish.difficulty],
                        textTransform: "uppercase",
                      }}>
                        {difficultyLabels[dish.difficulty]}
                      </span>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <span style={{
                    fontSize: 14,
                    color: "#555",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}>
                    ▾
                  </span>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div style={{
                    padding: "0 16px 16px",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    paddingTop: 14,
                  }}>
                    <p style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#bbb",
                      margin: "0 0 10px 0",
                    }}>
                      {dish.desc}
                    </p>
                    <div style={{
                      fontSize: 12,
                      color: "#f39c12",
                      background: "rgba(243,156,18,0.08)",
                      border: "1px solid rgba(243,156,18,0.15)",
                      borderRadius: 10,
                      padding: "10px 12px",
                      lineHeight: 1.6,
                    }}>
                      📍 {dish.where}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
