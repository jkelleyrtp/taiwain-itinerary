import { useState } from "react";

const days = [
  {
    day: 1,
    date: "Feb 23 (Mon)",
    location: "✈️ SFO → Taipei",
    theme: "Travel Day",
    emoji: "🛫",
    color: "#4A90D9",
    items: [
      { type: "travel", text: "Fly SFO → Taipei Taoyuan (TPE). ~12hr direct flight. Arrive Feb 24." },
      { type: "tip", text: "Pre-download: Google Maps offline Taiwan, get an eSIM (Airalo or KKday), load up EasyCard (Taiwan's transit card) at the airport." },
    ],
    iykyk: [],
  },
  {
    day: 2,
    date: "Feb 24 (Tue)",
    location: "Taipei",
    theme: "Landing & Night Market Magic",
    emoji: "🏮",
    color: "#E74C3C",
    items: [
      { type: "morning", text: "Arrive TPE ~early morning. Grab HSR or airport MRT to Taipei Main Station. Check into hotel (rec: Kimpton Da An or Hotel Proverbs Taipei for that aesthetic boutique vibe)." },
      { type: "afternoon", text: "Ease into it — walk Dadaocheng / Dihua Street. Post-Lunar New Year lantern decorations will still be up. Tea shops, vintage stores, gorgeous Baroque architecture. Very IG-worthy." },
      { type: "food", text: "🍜 Shilin Night Market — hit the underground food court for XXL chicken, stinky tofu, bubble tea OG style. Or Raohe Night Market for pepper pork buns (胡椒餅)." },
      { type: "vibe", text: "💫 Taipei 101 at night — the light show is gorgeous and you can see it from Elephant Mountain without going up." },
    ],
    iykyk: [
      "🎯 Skip Shilin, go to Ningxia Night Market instead — way smaller, mostly locals, and the food is better. Get the taro balls and the liu sha bao (molten salted egg yolk buns).",
      "🎯 On Dihua Street, duck into ASW Tea House for oolong flights in a restored 1920s building. The rooftop has a secret view of the old district.",
      "🎯 Elephant Mountain at SUNRISE (not sunset) — zero people, golden light, and you'll have the entire platform to yourselves. Set an alarm, trust the process.",
    ],
  },
  {
    day: 3,
    date: "Feb 25 (Wed)",
    location: "Taipei",
    theme: "Culture + Aesthetic Taipei",
    emoji: "🎨",
    color: "#9B59B6",
    items: [
      { type: "morning", text: "Chiang Kai-Shek Memorial Hall — catch the hourly changing of the guard ceremony (super precise, very cool). Liberty Square is a gorgeous photo spot." },
      { type: "afternoon", text: "Songshan Cultural & Creative Park — converted tobacco factory turned design hub. Then walk to Xinyi district for luxury shopping at Breeze Nan Shan or ATT 4 FUN." },
      { type: "food", text: "🥟 Din Tai Fung at Taipei 101 — yes it's tourist-y but the XLB here hits different at the OG. Book ahead or go at off-peak." },
      { type: "evening", text: "Taipei 101 Observatory (sunset timing!) — go up for golden hour views. Then head to Huashan 1914 Creative Park for evening craft cocktails at one of the bars." },
    ],
    iykyk: [
      "🎯 Maokong Gondola — take the Crystal Cabin (glass floor!) up to Taipei's tea mountain. Sip tieguanyin oolong at a teahouse overlooking tea fields, then hike the Silver Stream Waterfall trail to a hidden jungle temple. Locals go at night for city lights views. Way better than Taipei 101 observatory tbh.",
      "🎯 Shrimp fishing (釣蝦) — extremely random, extremely fun. Indoor pools where you catch live prawns and they grill them for you on the spot. Very local Taipei pastime. Try one near Shilin or Zhongshan.",
      "🎯 Zhongshan neighborhood > Xinyi for aesthetic shopping. The underground bookstreet, Fujin Tree 353 Cafe, and all the tiny Japanese-style boutiques are *chef's kiss*.",
    ],
  },
  {
    day: 4,
    date: "Feb 26 (Thu)",
    location: "Taipei → Jiufen → Shifen",
    theme: "Ghibli Vibes & Sky Lanterns",
    emoji: "🏮",
    color: "#F39C12",
    items: [
      { type: "morning", text: "Day trip to Jiufen Old Street — the town that inspired Spirited Away vibes. Narrow alley tea houses, taro balls, ocean views from the hillside. Go EARLY (before 10am) to beat crowds." },
      { type: "afternoon", text: "Shifen Waterfall — Taiwan's mini Niagara. Easy 20-min walk from the station. Then release a sky lantern on the Shifen Old Street railway tracks (write wishes together 🥹)." },
      { type: "food", text: "🍵 A-Mei Tea House in Jiufen — the iconic red-lantern teahouse. Sip oolong overlooking the mountains and sea." },
      { type: "tip", text: "Take the train on the Pingxi Line for the most scenic route between Shifen stops. Return to Taipei by evening." },
    ],
    iykyk: [
      "🎯 Wanggu Station (望古車站) — the 'secret station' on the Pingxi Line that almost nobody gets off at. Walk 15 min to Wanggu Waterfall — a silver ribbon cascade into an emerald pool, completely empty. Way more magical than Shifen Waterfall.",
      "🎯 Instead of (or after) Jiufen, detour to Jinguashi Gold Ecological Park and hike to Teapot Mountain (茶壺山). 1hr hike with 360° views of the coast, rugged mountains, and the Yin-Yang Sea below. Jiufen looks like Disneyland from up here.",
      "🎯 At Jiufen, skip the main alley and walk the Shuqi Road (豎崎路) steps DOWN. Way fewer tourists and leads to the old mining trails with ocean panoramas.",
    ],
  },
  {
    day: 5,
    date: "Feb 27 (Fri)",
    location: "Taipei → Beitou → Yangmingshan",
    theme: "Hot Springs & Volcano Hike",
    emoji: "♨️",
    color: "#1ABC9C",
    items: [
      { type: "morning", text: "Yangmingshan National Park — hike Qingtiangang (rolling grasslands, wild water buffalo!) or Xiaoyoukeng Trail (steaming volcanic fumaroles, sulfur vents). ~2-3hr hike." },
      { type: "afternoon", text: "Beitou Hot Springs — couple's private hot spring bath at Villa 32 or Grand View Resort. Splurge on a room with a private outdoor tub overlooking the valley." },
      { type: "food", text: "🍲 Hot pot dinner in Beitou — nothing beats soaking then eating hotpot. Try Man Dou Hotpot or a local spot." },
      { type: "vibe", text: "💫 Beitou Library — the most beautiful library in Taiwan, all wood and glass nestled in a park. Quick stop for content." },
    ],
    iykyk: [
      "🎯 Wulai (烏來) instead of Beitou — 40 min from Taipei by bus 849 from Xindian MRT. Indigenous Atayal village with a wild hot spring river, a waterfall you can take a mini train to, and way fewer tourists. The wild boar sausage stands here are insane.",
      "🎯 If you go to Wulai, do the Jiajiuliao Trail (加九寮步道) first — a river tracing trail where you literally walk through the river to hidden swimming holes. Bring water shoes. This is the local secret hiking spot.",
      "🎯 Yangmingshan Blue Spring (藍寶石泉) — a hidden sapphire-blue sulfur spring tucked in the mountain. Google Maps it, it's not well-signed. Stunning but requires a bit of trail navigation.",
    ],
  },
  {
    day: 6,
    date: "Feb 28 (Sat)",
    location: "Taipei → Hualien",
    theme: "East Coast Adventure Begins",
    emoji: "🚂",
    color: "#3498DB",
    items: [
      { type: "morning", text: "Take the scenic Puyuma/Tze-Chiang Express train to Hualien (~2.5hrs). Book in advance — it's Peace Memorial Day weekend so trains sell out!" },
      { type: "afternoon", text: "Qixingtan Beach (七星潭) — stunning crescent pebble beach with turquoise water backed by mountains. Rent bikes and ride along the coast. Skip stones together 🪨" },
      { type: "food", text: "🍖 Hualien night market — try Jianguo Night Market for aboriginal-influenced food: wild boar sausage, mochi (Hualien is famous for it), scallion pancakes." },
      { type: "evening", text: "Stay at a beachside B&B or splurge on Silks Place Taroko if you want luxury near the gorge." },
    ],
    iykyk: [
      "🎯 Dongao Bay (東澳灣) — if you can arrange transport, this 2km gravel beach in Yilan County is arguably Taiwan's most beautiful hidden beach. Lush mountains, crystal water, Jurassic Park vibes, and you might have it completely to yourselves.",
      "🎯 Hualien's Zhongshan Road has a lowkey amazing craft coffee scene. Try Caffe Fiore for single-origin Taiwanese beans roasted in-house. Also hit Guo Xing Fried Spring Rolls (郭榮市春捲) — a local hole-in-the-wall that's been making fresh spring rolls for decades.",
      "🎯 Book a SUP (stand-up paddleboard) tour at Qingshui Cliffs — paddling at the base of 1000m sea cliffs is a top-5 life experience. Companies like Hualien Outdoors run them weather-permitting.",
    ],
  },
  {
    day: 7,
    date: "Mar 1 (Sun)",
    location: "Taroko Gorge / Hualien",
    theme: "Marble Canyons & Coastal Cliffs",
    emoji: "🏔️",
    color: "#2C3E50",
    items: [
      { type: "morning", text: "Taroko Gorge day — book a guided tour (Island Life Taiwan is highly rated). Most famous trails are still closed post-2024 earthquake, but the drive-through canyon views, Tianxiang area, and Xiangde Temple are STUNNING." },
      { type: "afternoon", text: "Qingshui Cliffs — jaw-dropping 1000m sea cliffs along the coast highway. One of Taiwan's most dramatic viewpoints. The SUP/kayaking tours here are unreal if weather permits." },
      { type: "food", text: "🍜 Aboriginal-style set meal at a local restaurant recommended by your guide — wild mountain vegetables, bamboo rice, etc." },
      { type: "tip", text: "⚠️ Taroko access is limited — guided tours know the current road windows. Don't try to DIY the gorge drive without checking conditions." },
    ],
    iykyk: [
      "🎯 Since the famous Taroko trails are closed, ask your guide about the Sakul Trail (still open) — a forest hike to a lovely waterfall that most tourists don't know about.",
      "🎯 Mukumugi Valley — a secluded valley just 20km outside Hualien that's stunningly idyllic. Only real travelers know this exists. It's like a private Taroko without the crowds (or closures).",
      "🎯 For the adventurous boy: ask about canyoning/river tracing tours in Hualien. You literally climb through canyons, swim through gorges, and rappel down waterfalls. Companies like Hualien Outdoors run them. This is an S-tier experience.",
    ],
  },
  {
    day: 8,
    date: "Mar 2 (Mon)",
    location: "Hualien → Sun Moon Lake",
    theme: "Taiwan's Most Beautiful Lake",
    emoji: "🌊",
    color: "#16A085",
    items: [
      { type: "morning", text: "Train back west to Taichung (~3.5hrs via Taipei transfer or direct bus). Then bus/taxi to Sun Moon Lake (~1.5hrs)." },
      { type: "afternoon", text: "Rent bikes and ride the famous Sun Moon Lake cycling path — rated one of the best in the world. The section from Shuishe to Xiangshan is pure magic." },
      { type: "food", text: "🍵 Thao aboriginal tea egg at Ita Thao village + wild boar sausage. The little lakeside indigenous village is charming." },
      { type: "evening", text: "Stay lakeside — The Lalu (ultra-luxury) or Fleur de Chine for stunning lake views. Watch sunset from Ci'en Pagoda overlook." },
    ],
    iykyk: [
      "🎯 Rent an electric scooter (not bike) and take Highway 21 around the backside of the lake. There's a secret overlook about 2km past Xuanzang Temple with ZERO tourists that gives you the best panoramic view of the entire lake.",
      "🎯 Dawn SUP on Sun Moon Lake — some B&Bs and local outfitters offer 6am paddleboard sessions. The lake is dead calm, mist is rolling off the mountains, and it's just you two on the water. Absolutely unreal.",
      "🎯 Shuishe Dam Trail (水社大山步道) — if you want a challenging hike, this 5-6hr trail goes up to a peak overlooking ALL of Sun Moon Lake. Serious elevation gain but the views are god-tier.",
    ],
  },
  {
    day: 9,
    date: "Mar 3 (Tue)",
    location: "Sun Moon Lake → Taichung",
    theme: "Lantern Festival Day! 🏮",
    emoji: "🎆",
    color: "#E67E22",
    items: [
      { type: "morning", text: "Sunrise at Sun Moon Lake — rent a paddleboard or kayak for a sunrise session on the glassy lake. Misty mountains, zero crowds." },
      { type: "afternoon", text: "Head to Taichung. Hit up Rainbow Village (彩虹眷村) — an entire village painted by a 90+ year old veteran. Iconic. Then Miyahara Ice Cream — a Harry Potter-esque ice cream parlor in a restored eye clinic." },
      { type: "food", text: "🧋 Taichung is the BIRTHPLACE of bubble tea. Get OG boba at Chun Shui Tang (春水堂) — the shop that invented it." },
      { type: "evening", text: "🏮 LANTERN FESTIVAL! March 3 is the actual date. Taichung or nearby cities will have massive lantern displays. Expect fireworks, riddle lanterns, and huge crowds — it's one of Taiwan's most beautiful festivals." },
    ],
    iykyk: [
      "🎯 Skip Miyahara (pretty but mid ice cream tbh) and go to Shenkeng Stinky Tofu Street (深坑) — either on the way from Sun Moon Lake or as a Taichung day trip. The fermented tofu is a rite of passage. It smells like death but tastes incredible.",
      "🎯 Taichung's 2nd Market (第二市場) is where locals eat breakfast. Get the braised pork rice at 王家菜頭粿 or the sticky rice roll at Lao Lai. No tourists, just pure Taiwanese comfort food.",
      "🎯 Audit Village (審計新村) > Rainbow Village for content. It's a converted government dorm turned indie market with pop-up shops, matcha stands, and way more aesthetic photo spots. Rainbow Village is honestly a 10-minute stop max.",
    ],
  },
  {
    day: 10,
    date: "Mar 4 (Wed)",
    location: "Taichung → Kaohsiung",
    theme: "South Taiwan Sun & Street Art",
    emoji: "☀️",
    color: "#F1C40F",
    items: [
      { type: "morning", text: "HSR to Kaohsiung (~45 min from Taichung). Check into Hotel Indigo Kaohsiung or Wo Hotel for aesthetic stays." },
      { type: "afternoon", text: "Pier-2 Art Center — massive converted warehouse district with street art, installations, and indie shops. Then walk along the Love River." },
      { type: "food", text: "🦐 Liuhe Night Market — salt & pepper squid, papaya milk, coffin bread (棺材板). Kaohsiung food is more seafood-forward and less crowded than Taipei markets." },
      { type: "evening", text: "Dragon & Tiger Pagodas at Lotus Pond — enter through the dragon's mouth, exit the tiger's. Gorgeous at dusk. Fo Guang Shan monastery nearby may still have Festival of Light displays!" },
    ],
    iykyk: [
      "🎯 Moon World (月世界) — 30 min outside Kaohsiung. Barren, alien badlands that look like another planet. Almost no tourists know about this. The moonscape is completely different from anything else in Taiwan. Go at dusk for the most dramatic light.",
      "🎯 Qijin Island — take the 5-minute ferry (NT$40) from the city. Rent a tandem bike and ride the entire seafood-stall-lined strip. The Qijin Tunnel leads to a secret beach on the other side. Way more authentic than Pier-2.",
      "🎯 Yanpu (鹽埔) — a tiny fishing village south of Kaohsiung where you can eat sashimi so fresh the fish was swimming 30 minutes ago. Ask a local taxi driver to take you. No English menu, just point and eat.",
    ],
  },
  {
    day: 11,
    date: "Mar 5 (Thu)",
    location: "Kaohsiung → Hong Kong",
    theme: "Hello Hong Kong!",
    emoji: "🌃",
    color: "#8E44AD",
    items: [
      { type: "morning", text: "Fly Kaohsiung (KHH) → Hong Kong (HKG). ~1.5hr flight. Budget airlines like HK Express or Peach run this route cheap." },
      { type: "afternoon", text: "Check into hotel — rec: The Murray (splurge luxury), Hotel ICON (Tsim Sha Tsui views), or Tuve Hotel (minimalist boutique). Take the Peak Tram up to Victoria Peak for THE iconic HK skyline view." },
      { type: "food", text: "🍜 Tim Ho Wan — the world's cheapest Michelin star. BBQ pork buns are legendary. Multiple locations." },
      { type: "evening", text: "Symphony of Lights show from Tsim Sha Tsui waterfront promenade (8pm nightly). Then bar hop in Lan Kwai Fong or the cooler Sai Ying Pun neighborhood." },
    ],
    iykyk: [
      "🎯 Skip Victoria Peak Tram (insane line). Instead take the #15 bus from Central — same views, no wait, and it drops you at the top. Or better yet, hike up the Morning Trail from Central (45 min, shaded, gorgeous).",
      "🎯 Tai Ping Shan neighborhood (太平山) in Sheung Wan — one of the oldest Chinese settlements in HK. Tiny temples, incense-filled alleys, and almost zero tourists. Man Mo Temple here has those iconic spiral incense coils hanging from the ceiling.",
      "🎯 Skip Lan Kwai Fong (tourist trap). Go to Sai Ying Pun or Kennedy Town ('K-Town') for actual cool bars. Sai Wan Swimming Shed in Kennedy Town is a secret wooden pier with the best sunset views in all of HK.",
    ],
  },
  {
    day: 12,
    date: "Mar 6 (Fri)",
    location: "Hong Kong",
    theme: "Peak Hikes & Dim Sum Dreams",
    emoji: "🥾",
    color: "#27AE60",
    items: [
      { type: "morning", text: "Dragon's Back Trail — Hong Kong's most famous hike. ~2.5hrs, ocean views, ridge walking. Take the bus to the trailhead from Shau Kei Wan MTR." },
      { type: "afternoon", text: "After the hike, head to Stanley Market & Stanley Beach for lunch and browsing. Or hit up Repulse Bay Beach for that tropical-in-a-city vibe." },
      { type: "food", text: "🥟 Dim sum lunch at Maxim's Palace (City Hall) — classic cart-style dim sum in a banquet hall. Or go upscale at Duddell's for aesthetic dim sum." },
      { type: "evening", text: "Explore Central's Mid-Levels Escalator → Hollywood Road → Cat Street for antiques and street art. End at a rooftop bar like Sevva for skyline views." },
    ],
    iykyk: [
      "🎯 Sham Shui Po (深水埗) — the REAL Hong Kong. This working-class neighborhood has the best street food in the city (Wai Kee Noodle Cafe for pork liver noodles), retro electronics on Apliu Street, and YHA Mei Ho House — a preserved 1950s public housing block turned museum that shows how HK families actually lived.",
      "🎯 Lok Wah South Estate (樂華南邨) rooftop — the famous pastel-blue circular rooftop that went viral on IG. It's a 1980s public housing complex in Kwun Tong with surreal architecture and skyline views. Tricky to find but worth it.",
      "🎯 One Dim Sum (一點心) in Mong Kok > Tim Ho Wan. Locals will fight you on this. Same Michelin quality, shorter lines, and their siu mai is undefeated.",
    ],
  },
  {
    day: 13,
    date: "Mar 7 (Sat)",
    location: "Hong Kong → Shenzhen",
    theme: "Future City Day Trip",
    emoji: "🏙️",
    color: "#2980B9",
    items: [
      { type: "morning", text: "Take the MTR to Lo Wu or high-speed rail from West Kowloon to Futian (~15-20 min). Use the 240-hr visa-free transit (US citizens eligible since you're going HK→SZ→back to HK→SFO). Bring your passport + return flight info!" },
      { type: "afternoon", text: "Ping An Finance Centre observation deck (600m tall!). Then OCT Loft Creative Culture Park — Shenzhen's coolest art district with galleries, cafes, and street art." },
      { type: "food", text: "🥘 INSANE Chinese food for cheap — Haidilao hotpot (the robot-served one), or explore Dongmen Pedestrian Street for street food. Everything is 1/3 the price of HK." },
      { type: "evening", text: "Huaqiangbei Electronics Market — the world's biggest tech bazaar. Get custom phone cases, drones, weird gadgets. Then head back to HK by evening train." },
      { type: "tip", text: "⚠️ Download Alipay and link a foreign card before you go. China is almost entirely cashless. WeChat Pay also works for tourists now." },
    ],
    iykyk: [
      "🎯 Nantou Ancient City (南头古城) — a 1,700-year-old walled city HIDDEN inside modern Shenzhen. It's been revitalized with trendy cafes, art galleries, and indie shops while keeping the Ming Dynasty walls and temples. Think Bukchon Hanok Village in Seoul but Chinese. This is the real gem, way better than Window of the World.",
      "🎯 Coconut chicken hotpot (椰子鸡) is Shenzhen's signature dish that tourists never know about. It's a whole coconut broth with fresh chicken. Find one near Nantou or in Futian. Life-changing.",
      "🎯 Dafen Oil Painting Village (大芬油画村) — an entire village of painters who can reproduce any painting or create original art for crazy cheap. Get a custom portrait of you two painted in any style. Takes ~2hrs and costs like $15-30. Ultimate souvenir.",
      "🎯 TENZ Spa (汤泉生活) — the viral 24-hour all-inclusive Korean-style spa in Futian. Unlimited pools, saunas, food, robes, sleep pods. Like ¥200/person (~$28). Perfect way to end the Shenzhen day before heading back.",
    ],
  },
  {
    day: 14,
    date: "Mar 8 (Sun)",
    location: "Hong Kong",
    theme: "Island Vibes & Last Bites",
    emoji: "🏝️",
    color: "#E74C3C",
    items: [
      { type: "morning", text: "Ferry to Lamma Island (~30 min from Central Pier 4). Hike the Family Trail between Yung Shue Wan and Sok Kwu Wan — easy coastal walk with beach stops and zero cars on the island." },
      { type: "afternoon", text: "Seafood lunch at the rainbow-colored restaurants in Sok Kwu Wan — pick your fish from the tanks. Then ferry back." },
      { type: "food", text: "🍰 Afternoon tea at The Peninsula Hotel — the most iconic afternoon tea in Asia. Book ahead. Or for something more chill, try % Arabica in Star Street." },
      { type: "evening", text: "Temple Street Night Market for last-minute shopping. Or splurge on a farewell Michelin dinner — Yardbird (yakitori), Neighborhood (natural wine + small plates), or The Chairman (modern Cantonese, 1 Michelin star)." },
    ],
    iykyk: [
      "🎯 Peng Chau Island instead of (or in addition to) Lamma — even more off-grid. No cars, no chains, just murals, a tiny fishing village, and Leather Factory — a converted industrial building turned artist collective. Hike Finger Hill for panoramic views of Lantau. Locals describe it as 'Hong Kong before the rush.'",
      "🎯 On Lamma, skip the main trail — walk past Sok Kwu Wan to the abandoned old ferry pier on the eastern side. Local fishermen use it and it's become an unofficial sunset-watching spot with unobstructed Victoria Harbour views. Zero crowds.",
      "🎯 Tai Hang neighborhood — tucked between Causeway Bay and Tin Hau. Former fishing village with incredible hole-in-the-wall eats. Bing Kee Cha Dong (炳記茶檔) does the best no-frills minced pork noodles and authentic milk tea in HK. This is where actual HK aunties eat.",
      "🎯 For the farewell dinner: The Chairman is overrated (sorry). Go to Ho Lee Fook instead — a basement speakeasy-meets-Chinese-restaurant in Central. The roasted short rib and har gow are unmatched and the vibe is immaculate.",
    ],
  },
  {
    day: 15,
    date: "Mar 9-10 (Mon-Tue)",
    location: "Hong Kong → SFO ✈️",
    theme: "Heading Home",
    emoji: "🏠",
    color: "#95A5A6",
    items: [
      { type: "morning", text: "Last morning — Mong Kok for final egg waffles (雞蛋仔) and pineapple buns (菠蘿包) at a cha chaan teng. Classic HK breakfast." },
      { type: "afternoon", text: "Fly HKG → SFO. ~12hr flight. Arrive Mar 10 same day (time zone magic). Welcome home! 🎉" },
      { type: "tip", text: "Duty free tip: HKG airport has great deals on skincare (Sulwhasoo, SK-II) and liquor if you want to grab last-minute gifts." },
    ],
    iykyk: [
      "🎯 Last breakfast secret: skip Mong Kok tourist egg waffles. Go to Kam Wah Cafe (金華冰廳) in Mong Kok instead for the BEST pineapple bun with a slab of cold butter inside (菠蘿油). There will be a line of locals. That's how you know.",
      "🎯 If you have time before your flight, hit Cheung Chau Island for a quick 2-3hr morning trip — the traditional Cheung Chau bun is a Qing Dynasty-era snack you literally can't get anywhere else. Also the most charming fishing village vibes.",
    ],
  },
];

const typeIcons = {
  morning: "🌅",
  afternoon: "🌤️",
  evening: "🌙",
  food: "🍽️",
  vibe: "✨",
  tip: "💡",
  travel: "🚀",
};

const typeLabels = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  food: "Must-Eat",
  vibe: "Vibe Check",
  tip: "Pro Tip",
  travel: "Travel",
};

export default function TravelItinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [showIykyk, setShowIykyk] = useState(false);

  const currentDay = days.find((d) => d.day === activeDay);

  return (
    <div style={{
      fontFamily: "'Outfit', 'DM Sans', sans-serif",
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
      padding: "0",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, rgba(15,15,26,0.95) 0%, rgba(15,15,26,0.7) 100%)",
        backdropFilter: "blur(20px)",
        padding: "24px 20px 16px",
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
            color: "#f39c12",
            marginBottom: 6,
            fontWeight: 500,
          }}>
            15-Day Adventure
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #f8f8ff 0%, #b8b8d0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}>
            Taiwan → Hong Kong → Shenzhen
          </h1>
          <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
            Feb 23 — Mar 10, 2026 &nbsp;·&nbsp; SFO roundtrip
          </div>
        </div>
      </div>

      {/* Day selector - horizontal scroll */}
      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "16px 20px",
        display: "flex",
        gap: 8,
        background: "rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        {days.map((d) => {
          const isActive = d.day === activeDay;
          const isHovered = d.day === hoveredDay;
          return (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              onMouseEnter={() => setHoveredDay(d.day)}
              onMouseLeave={() => setHoveredDay(null)}
              style={{
                flexShrink: 0,
                border: isActive ? `2px solid ${d.color}` : "2px solid transparent",
                background: isActive
                  ? `linear-gradient(135deg, ${d.color}22, ${d.color}11)`
                  : isHovered
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.03)",
                borderRadius: 14,
                padding: "10px 14px",
                cursor: "pointer",
                color: isActive ? "#fff" : "#999",
                transition: "all 0.2s ease",
                minWidth: 70,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 2 }}>{d.emoji}</div>
              <div style={{
                fontSize: 11,
                fontWeight: isActive ? 700 : 500,
                letterSpacing: 0.5,
              }}>
                Day {d.day}
              </div>
              <div style={{
                fontSize: 9,
                color: isActive ? `${d.color}` : "#666",
                marginTop: 2,
                fontWeight: 500,
              }}>
                {d.location.split("→").pop().split("/").pop().trim().slice(0, 8)}
              </div>
            </button>
          );
        })}
      </div>

      {/* Day Content */}
      {currentDay && (
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "24px 20px 100px",
        }}>
          {/* Day header card */}
          <div style={{
            background: `linear-gradient(135deg, ${currentDay.color}18, ${currentDay.color}08)`,
            border: `1px solid ${currentDay.color}30`,
            borderRadius: 20,
            padding: "24px",
            marginBottom: 24,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 36 }}>{currentDay.emoji}</span>
              <div>
                <div style={{
                  fontSize: 12,
                  color: currentDay.color,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}>
                  {currentDay.date}
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  margin: 0,
                  color: "#f0f0f8",
                  lineHeight: 1.3,
                }}>
                  {currentDay.theme}
                </h2>
              </div>
            </div>
            <div style={{
              fontSize: 13,
              color: "#aaa",
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 4,
            }}>
              <span style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: currentDay.color,
              }}/>
              {currentDay.location}
            </div>
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {currentDay.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: item.type === "tip"
                    ? "rgba(241,196,15,0.06)"
                    : item.type === "food"
                    ? "rgba(231,76,60,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: item.type === "tip"
                    ? "1px solid rgba(241,196,15,0.15)"
                    : item.type === "food"
                    ? "1px solid rgba(231,76,60,0.12)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: "16px 18px",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}>
                  <span style={{ fontSize: 16 }}>{typeIcons[item.type]}</span>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: item.type === "food" ? "#e74c3c" : item.type === "tip" ? "#f1c40f" : currentDay.color,
                  }}>
                    {typeLabels[item.type]}
                  </span>
                </div>
                <div style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#ccc",
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* IYKYK Section */}
          {currentDay.iykyk && currentDay.iykyk.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <button
                onClick={() => setShowIykyk(!showIykyk)}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: 16,
                  border: "1px solid rgba(168,85,247,0.3)",
                  background: showIykyk
                    ? "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1))"
                    : "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.04))",
                  color: "#e8e8f0",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                }}
              >
                <span>
                  <span style={{ marginRight: 8 }}>🤫</span>
                  IYKYK — Hidden Gems & Local Secrets
                  <span style={{
                    marginLeft: 8,
                    fontSize: 11,
                    padding: "2px 8px",
                    borderRadius: 20,
                    background: "rgba(168,85,247,0.25)",
                    color: "#c084fc",
                  }}>
                    {currentDay.iykyk.length}
                  </span>
                </span>
                <span style={{
                  transform: showIykyk ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  fontSize: 18,
                }}>
                  ▾
                </span>
              </button>

              {showIykyk && (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 10,
                }}>
                  {currentDay.iykyk.map((tip, i) => (
                    <div
                      key={i}
                      style={{
                        background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.04))",
                        border: "1px solid rgba(168,85,247,0.2)",
                        borderRadius: 14,
                        padding: "14px 16px",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#d4b8ff",
                      }}
                    >
                      {tip}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Nav buttons */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 32,
            gap: 12,
          }}>
            <button
              onClick={() => { setActiveDay(Math.max(1, activeDay - 1)); setShowIykyk(false); }}
              disabled={activeDay === 1}
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                background: activeDay === 1 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                color: activeDay === 1 ? "#555" : "#bbb",
                cursor: activeDay === 1 ? "default" : "pointer",
                fontSize: 13,
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              ← Previous Day
            </button>
            <button
              onClick={() => { setActiveDay(Math.min(15, activeDay + 1)); setShowIykyk(false); }}
              disabled={activeDay === 15}
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: 14,
                border: `1px solid ${currentDay.color}40`,
                background: activeDay === 15 ? "rgba(255,255,255,0.02)" : `linear-gradient(135deg, ${currentDay.color}20, ${currentDay.color}10)`,
                color: activeDay === 15 ? "#555" : "#eee",
                cursor: activeDay === 15 ? "default" : "pointer",
                fontSize: 13,
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              Next Day →
            </button>
          </div>

          {/* Budget Breakdown */}
          {activeDay === 15 && (
            <div style={{
              marginTop: 32,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 24,
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                margin: "0 0 16px 0",
                color: "#f0f0f8",
              }}>
                💰 Rough Budget Estimate (2 ppl)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["✈️ Flights (SFO↔HKG/TPE + KHH→HKG)", "$1,800–2,400"],
                  ["🏨 Hotels (14 nights, mix of boutique & splurge)", "$2,500–4,000"],
                  ["🚄 Trains & Transport (HSR, MRT, buses)", "$300–500"],
                  ["🍜 Food (night markets + nice dinners)", "$800–1,200"],
                  ["🎟️ Activities & Tours", "$400–700"],
                  ["🛍️ Shopping & Misc", "$500+"],
                ].map(([label, cost], i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    fontSize: 13,
                  }}>
                    <span style={{ color: "#aaa" }}>{label}</span>
                    <span style={{ color: "#f39c12", fontWeight: 600 }}>{cost}</span>
                  </div>
                ))}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0 0",
                  fontSize: 15,
                  fontWeight: 700,
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                  marginTop: 4,
                }}>
                  <span>Total Estimate</span>
                  <span style={{ color: "#f39c12" }}>$6,300–$9,300</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
