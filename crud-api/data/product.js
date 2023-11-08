const products = [
    {
        id: 1,
        name: "Angler's Delight Vest",
        cato: 'clothes',
        sale: true,
        price: 129.99,
        description: "The Angler's Delight Vest is a versatile fishing garment featuring multiple pockets and compartments, allowing you to carry your tackle, tools, and personal belongings with ease. Made from lightweight, quick-drying fabric, this vest offers breathability and freedom of movement, making it a perfect choice for long fishing trips.",
        image: "https://www.shipsltd.co.jp/img/goods/114730191/2S/114730191_68_02.jpg"
    },
    {
        id: 2,
        name: "AquaShield Pro Waders",
        cato: 'clothes',
        sale: false,
        price: 199.99,
        description: "The AquaShield Pro Waders are designed to keep you dry and comfortable during your fishing adventures. These waders are made from durable, waterproof material that protects you from water splashes and ensures you stay warm in colder conditions. With adjustable suspenders and built-in gravel guards, these waders provide a secure fit and prevent debris from entering your boots.",
        image: "https://aquazfishing.com/cdn/shop/files/AquazConvertiblewaderBR-J-205S-V04_9c05f383-9854-4d35-882d-5f100317207a_1024x1024@2x.jpg?v=1684197626"
    },
    {
        id: 3,
        name: "SunBlocker Performance Shirt",
        cato: 'clothes',
        sale: true,
        price: 189.99,
        description: "The SunBlocker Performance Shirt is a must-have for sunny fishing days. Constructed with UPF (Ultraviolet Protection Factor) fabric, this shirt offers excellent sun protection, shielding your skin from harmful UV rays. Its moisture-wicking properties keep you cool and dry, while the lightweight design allows unrestricted movement, ensuring a comfortable fishing experience.",
        image: "https://m.media-amazon.com/images/I/81NaC6PkTUL._AC_UY780_.jpg"
    },
    {
        id: 4,
        name: "ReelFlex Fishing Pants",
        cato: 'clothes',
        sale: false,
        price: 129.99,
        description: "The ReelFlex Fishing Pants are designed for maximum flexibility and durability. Made from a stretchy, moisture-wicking fabric, these pants provide excellent range of motion and keep you dry throughout your fishing outing. They feature reinforced knees and abrasion-resistant panels, making them suitable for rugged terrains and protecting you from scrapes and scratches.",
        image: "https://cdn.expertvoice.com/io/client/mfg/blackdiamond/images/product/src/sc.400.400.bf/JLA2_015_Black_M_StormLineStretchRainPants.jpg"
    },
    {
        id: 5,
        name: "BreezeBlocker Fishing Jacket",
        cato: 'clothes',
        sale: true,
        price: 399.99,
        description: "The BreezeBlocker Fishing Jacket is ideal for windy and unpredictable weather conditions. This jacket is made from windproof and water-resistant material, keeping you protected from the elements. It features a breathable mesh lining and adjustable cuffs, allowing you to regulate your body temperature. With multiple pockets for storage and a detachable hood, this jacket offers both functionality and versatility.",
        image: "https://www.tradeinn.com/f/14017/140178769/fox-rage-lw-wind-blocker-jacket.jpg"
    },
    {
        id: 6,
        name: "QuickDry Angler's Hat",
        cato: 'clothes',
        sale: false,
        price: 689.99,
        description: "The QuickDry Angler's Hat is a practical accessory for any angler. Made from fast-drying and lightweight fabric, this hat shields your face and neck from the sun while providing excellent ventilation. Its wide brim offers additional protection against rain and glare, ensuring optimal visibility. The adjustable chin strap keeps the hat secure during windy conditions and when casting your line.",
        image: "https://anglerscoffee.com/cdn/shop/products/TANHATANGLED.png?v=1678299097"
    },
    
    {
        id: 7,
        name: "StealthCast Pro Series ",
        cato: 'fishing-rods',
        sale: true,
        price: 689.99,
        description: "The StealthCast Pro Series fishing rod is a high-performance rod designed for precision casting and exceptional sensitivity. It features a lightweight graphite blank that offers excellent strength and responsiveness. With its ergonomic handle and advanced reel seat, this rod provides a comfortable grip and optimal control, making it ideal for both freshwater and saltwater fishing.",
        image: "https://tailwatershop.com/cdn/shop/products/Stealth-productimage_grande.png?v=1579941258"
    },
    {
        id: 8,
        name: "TitanFlex Tournament Edition",
        cato: 'fishing-rods',
        sale: false,
        price: 399.99,
        description: "The TitanFlex Tournament Edition fishing rod is engineered for competitive anglers seeking superior performance and durability. Constructed with a blend of carbon fiber and fiberglass, this rod offers a perfect balance of strength and flexibility. It features high-quality guides and a sensitive tip, allowing for accurate casts and improved bite detection.",
        image: "https://eatmytackle.com/cdn/shop/products/5_7d376c88-b654-4e56-a12d-eb5d5d8a451d_1024x.jpg?v=1568226071"
    },
    {
        id: 9,
        name: "ProAngler Elite Series",
        cato: 'fishing-rods',
        sale: true,
        price: 129.99,
        description: "The ProAngler Elite Series fishing rod is a professional-grade rod designed for serious anglers. With its high-modulus carbon fiber construction, this rod provides exceptional sensitivity and responsiveness. It features a fast-action tip and reinforced guides for increased casting distance and improved line control. Whether you're targeting bass, trout, or other game fish, this rod delivers top-notch performance.",
        image: "https://www.tackletour.com/images22/picicast22abuproseries10.jpg"
    },
    {
        id: 10,
        name: "Voyager Travel Rod",
        cato: 'fishing-rods',
        sale: false,
        price: 199.99,
        description: "The Voyager Travel Rod is a versatile fishing rod designed for anglers on the go. Its compact and collapsible design makes it easy to transport and store, making it ideal for travel or backpacking adventures. Despite its portable size, this rod doesn't compromise on performance. It features a durable composite blank and quality components, ensuring reliable performance wherever your fishing journey takes you.",
        image: "https://m.media-amazon.com/images/I/51thJ4og1sL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 11,
        name: "PowerStrike Big Game Rod",
        cato: 'fishing-rods',
        sale: true,
        price: 189.99,
        description: "The PowerStrike Big Game Rod is built to handle the toughest and largest fish species. This heavy-duty rod is constructed with a sturdy fiberglass blank and reinforced aluminum reel seat, providing the strength and durability needed for big game fishing. It features oversized guides and a powerful backbone, allowing you to cast heavy lures and battle trophy-sized fish with confidence.",
        image: "https://m.media-amazon.com/images/I/41Ci1d2IFVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 12,
        name: "UltraLight Featherweight Rod",
        cato: 'fishing-rods',
        sale: false,
        price: 129.99,
        description: "The UltraLight Featherweight Rod is designed for finesse fishing and targeting small to medium-sized fish. Built with a lightweight graphite blank, this rod offers exceptional sensitivity and maneuverability. Its ultra-sensitive tip ensures you can detect even the subtlest bites, while its flexible action allows for accurate casting and effortless control. Whether you're fishing for panfish or trout, this rod provides a delightful angling experience.",
        image: "https://m.media-amazon.com/images/I/613HYgnOS5L._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 13,
        name: "Dry Fly",
        cato: 'fishing-bait',
        sale: true,
        price: 399.99,
        description: "Dry flies are designed to imitate adult insects that float on the water's surface. They are typically made with buoyant materials like feathers and foam to keep them afloat. Dry flies are used when fish are actively feeding on insects on the water's surface, such as during a hatch. They mimic insects like mayflies, caddisflies, and stoneflies.",
        image: "https://flyfishingoutfitters.com.au/cdn/shop/products/mg_3307_250x250_crop_center.jpg?v=1572952060"
    },
    {
        id: 14,
        name: "Nymph",
        cato: 'fishing-bait',
        sale: false,
        price: 689.99,
        description: "Nymph flies are designed to imitate the aquatic nymph stage of insects, which are underwater and provide a crucial food source for fish. They are typically tied with materials like feathers, fur, and beads to imitate the shape and movement of nymphs. Nymph flies are fished below the water's surface using techniques like nymphing or drift fishing.",
        image: "https://fishingtackledirect.ie/wp-content/uploads/2020/02/Fishing-Rods.jpg"
    },
    
    {
        id: 15,
        name: "Streamer ",
        cato: 'fishing-bait',
        sale: true,
        price: 689.99,
        description: "Streamer flies are larger, more impressionistic patterns designed to imitate baitfish, leeches, and other larger aquatic creatures. They are usually tied with materials like feathers, fur, and flashy synthetics to create lifelike movement in the water. Streamer flies are often fished by stripping or retrieving them through the water to mimic the motion of prey.",
        image: "https://flyfishingoutfitters.com.au/cdn/shop/products/ScreenShot2022-08-10at12.42.49pm_250x250_crop_center.png?v=1660106613"
    },
    {
        id: 16,
        name: "Woolly Bugger",
        cato: 'fishing-bait',
        sale: false,
        price: 399.99,
        description: "The Woolly Bugger is a versatile and popular streamer fly. It typically features a marabou tail, a wrapped body made of chenille or dubbing, and a hackle collar. The Woolly Bugger can imitate various nymphs, leeches, and small baitfish. It is often used in both freshwater and saltwater environments and is effective for species like trout, bass, and panfish.",
        image: "https://www.flyfishusaimages.com/Shared/Images/Product/Bugger/black-bugger-opt.jpg"
    },
    {
        id: 17,
        name: "Emerger",
        cato: 'fishing-bait',
        sale: true,
        price: 129.99,
        description: "Emerger flies imitate the transitional stage between a nymph and an adult insect as it emerges from the water's surface. They are tied to float just beneath the surface film, creating a vulnerable and realistic presentation. Emerger flies are effective during insect hatches when fish are actively feeding on emerging insects.",
        image: "https://cdn.troutline.ro/media/catalog/product/cache/1/image/2394dd99e62f621886a73396468afa35/t/r/troutline-tactical-emerger-e1-troutline_shop_3.jpg"
    },
    {
        id: 18,
        name: "Terrestrial",
        cato: 'fishing-bait',
        sale: false,
        price: 199.99,
        description: "Terrestrial flies imitate non-aquatic insects that fall or land on the water from nearby vegetation. They imitate insects like ants, beetles, grasshoppers, and crickets. Terrestrial flies are typically fished during the warmer months when these insects are prevalent near water bodies. They can be fished on the surface or slightly submerged.",
        image: "https://flyfishingoutfitters.com.au/cdn/shop/products/mg_3295_250x250_crop_center.jpg?v=1572952877"
    },
    {
        id: 19,
        name: "Monofilament Line",
        cato: 'fishing-line',
        sale: true,
        price: 189.99,
        description: "Monofilament line is made from a single strand of nylon or other polymers. It is known for its versatility and affordability. Monofilament lines have good knot strength, are relatively easy to handle, and offer decent abrasion resistance. They are suitable for a wide range of fishing applications, including freshwater and saltwater fishing.",
        image: "https://m.media-amazon.com/images/I/71zR72c9GvL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 20,
        name: "Fluorocarbon Line",
        cato: 'fishing-line',
        sale: false,
        price: 129.99,
        description: "Fluorocarbon line is made from a dense polymer material that is nearly invisible underwater. It has a refractive index similar to water, making it less visible to fish. Fluorocarbon lines also have excellent abrasion resistance and are less prone to UV damage compared to monofilament lines. They are commonly used for techniques requiring stealth, such as finesse fishing and clear water conditions.",
        image: "https://m.media-amazon.com/images/I/71ls4a4YhfL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 21,
        name: "Braided Line",
        cato: 'fishing-line',
        sale: true,
        price: 399.99,
        description: "Braided line is made by weaving several strands of synthetic fibers, such as Spectra or Dyneema, into a single line. It has a small diameter-to-strength ratio, offering high strength and minimal stretch. Braided lines are highly sensitive, have excellent casting distance, and provide good hook-setting power. They are commonly used for heavy-duty fishing applications like trolling, deep-sea fishing, and targeting large fish species.",
        image: "https://m.media-amazon.com/images/I/81CxnTthd6S._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 22,
        name: "Fly Line",
        cato: 'fishing-line',
        sale: false,
        price: 689.99,
        description: "Fly line is specifically designed for fly fishing, where the weight of the line is used to cast lightweight flies. It is typically made of a PVC or polyurethane coating over a braided or monofilament core. Fly lines come in various tapers and weights to match different fishing conditions and target species. They are crucial for delivering delicate presentations and accurate casts in fly fishing.",
        image: "https://m.media-amazon.com/images/I/61gerfWikhL._AC_UF1000,1000_QL80_.jpg"
    },
    
    {
        id: 23,
        name: "Leadcore Line ",
        cato: 'fishing-line',
        sale: true,
        price: 689.99,
        description: "Leadcore line consists of a nylon or Dacron sheath with a lead core running through its center. It is primarily used in trolling applications, especially for deep-water fishing. The leadcore adds weight, allowing the line to sink to desired depths while trolling. Leadcore lines are commonly color-coded to indicate different lengths or depths, making it easier for anglers to target specific fish zones.",
        image: "https://m.media-amazon.com/images/I/912DCNscxjL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 24,
        name: "Ice Fishing Line",
        cato: 'fishing-line',
        sale: false,
        price: 399.99,
        description: "Ice fishing line is specifically designed to withstand the cold temperatures and unique conditions of ice fishing. It is typically low-stretch and highly sensitive to detect subtle bites in frigid waters. Ice fishing lines are available in monofilament, fluorocarbon, and braided options, with varying test strengths suitable for different ice fishing techniques and target species.",
        image: "https://m.media-amazon.com/images/I/61fORhsQZTL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 25,
        name: "Wire Line",
        cato: 'fishing-line',
        sale: true,
        price: 399.99,
        description: "Wire line is a specialized fishing line made of braided stainless steel or other metal alloys. It is commonly used in saltwater trolling or deep-sea fishing to target large and powerful fish species like musky, pike, and offshore game fish. Wire lines are incredibly strong and offer high abrasion resistance. They are ideal for fishing in areas with sharp structures or toothy predators that can easily cut through other catos of fishing lines. Wire lines are typically paired with sturdy leaders and require specific reels designed to handle their unique characteristics.",
        image: "https://m.media-amazon.com/images/I/61M-pIvMzcL._AC_UF1000,1000_QL80_.jpg"
    },
]

module.exports = {
  products
};