const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: "leedoyub-7224c",
});

const db = admin.firestore();

const works = [
  { title: "shower thought", medium: "oil, acrylic on cotton", size: "20.2 × 30 cm", year: 2025, description: "" },
  { title: "shower thought", medium: "oil on jersey", size: "20 × 30 cm", year: 2025, description: "" },
  { title: "shower thought", medium: "oil on cotton, cotton on wooden frame", size: "17 × 23 cm", year: 2025, description: "" },
  { title: "Exit", medium: "dust, rug, ceramic cup ×2, casted aluminium, haint blue, nail, wood, shadow on blade-embedded wooden pallet", size: "79.5 × 97.5 × 11 cm", year: 2025, description: "" },
  { title: "Lot #10", medium: "old wool blanket, jersey, casted aluminium, painted steel", size: "40 × 35 × 65 cm", year: 2025, description: "" },
  { title: "Sword fern", medium: "oil on canvas, artist frame", size: "55 × 38 cm", year: 2025, description: "" },
  { title: "Room (dirt!)", medium: "oil, acrylic, conte on cotton", size: "80 × 117 cm", year: 2024, description: "" },
  { title: "Room: It smells of pistachio", medium: "acrylic, conte on cotton", size: "105 × 87 cm", year: 2024, description: "" },
  { title: "Man: It stands", medium: "acrylic on cotton", size: "72.5 × 91 cm", year: 2024, description: "" },
  { title: "namesake", medium: "acrylic, conte on cotton", size: "52.5 × 40 cm", year: 2024, description: "" },
  { title: "Rug/Book/Head", medium: "velvet, jesmonite, oil paint, resin, glue, wall", size: "25.5 × 22 × 6.5 cm", year: 2023, description: "" },
  { title: "Rug/Book/Head", medium: "velvet, jesmonite, resin, glue, wall", size: "25.5 × 19 × 9 cm", year: 2023, description: "" },
  { title: "Wonky Chair", medium: "wood, screw, bitumen", size: "—", year: 2023, description: "" },
  { title: "Lunch Time", medium: "ceramic, clay, wood, resin, acrylic, rope, coke, desert boots", size: "—", year: 2022, description: "" },
];

async function seed() {
  // Delete all existing documents
  const snapshot = await db.collection("works").get();
  if (!snapshot.empty) {
    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    console.log(`Deleted ${snapshot.size} existing document(s).`);
  }

  // Insert new documents
  const batch = db.batch();
  works.forEach((work) => {
    const ref = db.collection("works").doc();
    batch.set(ref, work);
  });
  await batch.commit();
  console.log(`Inserted ${works.length} works.`);
}

seed().catch((err) => { console.error(err); process.exit(1); });
