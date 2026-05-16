window.EcloireProducts = [
  {
    id: "aurora-band",
    name: "Aurora Band",
    price: 1280,
    summary: "Sculpted 18k band with a soft brushed finish.",
    description:
      "A quiet statement in 18k yellow gold. The Aurora band is hand-finished with a directional brush that catches light like silk. Designed to stack or wear alone.",
    metal: "18k yellow gold",
    stones: "None",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: "lyra-pendant",
    name: "Lyra Pendant",
    price: 890,
    summary: "Diamond-accent pendant on a fine cable chain.",
    description:
      "The Lyra pendant pairs a refined silhouette with responsibly sourced round brilliant accents. Suspended from an adjustable fine cable chain for everyday wear.",
    metal: "14k gold",
    stones: "Natural diamonds, 0.06 ct tw (approx.)",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: "nocturne-hoops",
    name: "Nocturne Hoops",
    price: 1450,
    summary: "Medium-weight hoops with knife-edge profile.",
    description:
      "Nocturne hoops balance weight and comfort: a knife-edge exterior reflects candlelight, while the interior is softly polished for all-day wear.",
    metal: "18k yellow gold",
    stones: "None",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    id: "solstice-ring",
    name: "Solstice Ring",
    price: 2100,
    summary: "Low-profile ring with a warm champagne focal stone.",
    description:
      "Solstice celebrates tone-on-tone warmth: a low bezel holds a champagne-colored focal stone so the piece sits close to the finger, ideal for active hands.",
    metal: "18k yellow gold",
    stones: "Center stone and accent details as specified at purchase",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80",
  },
];

window.getProductById = function (id) {
  for (var i = 0; i < window.EcloireProducts.length; i++) {
    if (window.EcloireProducts[i].id === id) return window.EcloireProducts[i];
  }
  return undefined;
};
