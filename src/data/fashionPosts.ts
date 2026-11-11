import { BlogPost } from '../types/blog';

export const FASHION_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'architecture-of-fluidity-monumental-draping-bespoke-wool',
    title: 'The Architecture of Fluidity: Monograph on Gold Draping and Midnight Tailoring',
    subtitle: 'A comparative exploration of kinetic pleating in women’s couture alongside the structured restraint of bespoke double-breasted eveningwear.',
    category: 'Couture Dialogue',
    gender: 'both',
    issue: 'Monograph N° 48 · Autumn / Winter',
    date: 'October 24, 2026',
    readTime: '7 min read',
    curator: {
      name: 'Hélène de Saint-Germain',
      role: 'Senior Sartorial Editor & Historian',
      location: 'Paris Atelier',
    },
    heroImage: '/src/assets/images/hero_fashion_editorial_1794395354558.jpg',
    imageAlt: 'High-fashion editorial in a neoclassical salon with a woman in pleated champagne gown and a man in a midnight bespoke tuxedo',
    imageCaption: 'Fig. 1 — Neoclassical marble grand salon. Dialogue between undulating champagne micro-pleats and razor-sharp midnight barathea wool.',
    excerpt: 'Modern couture is no longer divided by ornamentation and severity. In this seasonal survey, we examine how monumental folds and architectural lapels co-exist in shared rhythmic harmony.',
    content: {
      openingDropCap:
        'When observing the masterworks of Parisian haute couture, one discovers that the garment is first and foremost an encounter with gravity. The champagne-gold faille gown demonstrated here rejects rigid boning in favor of continuous, fan-like radial sunburst pleating that expands with every step, creating a kinetic aura reminiscent of Grecian classical statuary while remaining fiercely modern.',
      bodySection1:
        'Beside this undulating golden volume stands the counterweight of twentieth-century sartorial tailoring: a midnight-blue double-breasted tuxedo cut from 340g English barathea wool. Notice the sweeping peak lapels faced in matte grosgrain rather than high-gloss satin, offering an understated depth under gallery chandeliers. The armholes are cut exceptionally high, allowing the gentleman effortless range of motion without disturbing the chest canvassing or break across the trouser creases.',
      pullQuote:
        'True sartorial elegance is never about decorative excess; it is the tension between what the fabric yields and what the tailoring commands.',
      pullQuoteAuthor: 'Atelier Archive Journal, Vol. XII',
      bodySection2:
        'What unites both silhouettes is their refusal to compromise on pure material expression. The gown requires over 38 meters of unbroken, pre-pleated metallic-shot silk gauze, hand-folded in Lyon’s oldest textile mills. Meanwhile, the bespoke jacket features a hand-padded horsehair chest piece that molds directly to the wearer’s anatomy over decades of wear. Together, they establish a new baseline for ceremonial dressing where masculinity and femininity converse through architectural equilibrium.',
      curatorVerdict:
        'An absolute masterclass in dual-harmony styling. Pair sculptural evening gowns with restrained, deep-toned sartorial tailoring to create monumental presence without visual competition.',
    },
    anatomyHotspots: [
      {
        id: 'spot-1',
        x: 74,
        y: 28,
        title: 'Radial Sunburst Pleating',
        description: 'Micro-folded accordion silk pleats engineered to fan out three-dimensionally during movement, anchored by a deep plunging neckline.',
      },
      {
        id: 'spot-2',
        x: 72,
        y: 42,
        title: 'Cinched Waist Drapery',
        description: 'Gathered gathers held by hammered gold cuff bands, distributing tension evenly across the hip perimeter.',
      },
      {
        id: 'spot-3',
        x: 57,
        y: 28,
        title: 'Matte Grosgrain Peak Lapel',
        description: 'Hand-shaped wide peak lapel with slight belly curvature, creating a broad masculine chest line without excessive shoulder padding.',
      },
      {
        id: 'spot-4',
        x: 55,
        y: 65,
        title: 'Continuous High-Rise Crease',
        description: 'Double reverse pleats flowing seamlessly into a clean, un-cuffed trouser break that rests gently over polished black oxford leather.',
      },
    ],
    fabricSpecs: {
      composition: 'Metallic Lurex-Shot Silk Faille (Dress) / 100% Super 150s Barathea Wool (Suit)',
      origin: 'Lyon, France & Huddersfield, Yorkshire',
      silhouette: 'Monumental Fluted Column / Architectural Bespoke DB',
      weight: '110 gsm (Silk) / 340 gsm (Wool)',
      drapeFactor: 'Exceptional Kinetic Flow & Structured Architectural Hold',
    },
    colorPalette: [
      { name: 'Champagne Gold', hex: '#D7B67B', role: 'Primary Gown Luster' },
      { name: 'Midnight Blue', hex: '#1C2434', role: 'Suit Barathea Ground' },
      { name: 'Parchment Marble', hex: '#EAE5DB', role: 'Atmospheric Context' },
      { name: 'Deep Obsidian', hex: '#0F1115', role: 'Grosgrain Facing' },
    ],
    tags: ['Haute Couture', 'Menswear Tuxedo', 'Radial Pleats', 'Paris Fashion Week', 'Barathea Wool'],
    likesCount: 342,
    featured: true,
    comments: [
      {
        id: 'c1',
        author: 'Julian Thorne',
        role: 'Savile Row Pattern Cutter',
        date: '2 days ago',
        content: 'The low stance on the double-breasted 4x1 button configuration is remarkably well balanced against the voluminous wing pleats of the gown. Flawless proportion.',
        likes: 28,
      },
      {
        id: 'c2',
        author: 'Vivienne Moreau',
        role: 'Costume Historian',
        date: '1 day ago',
        content: 'The Fortuny-inspired micro pleating caught in mid-air motion proves that timeless drapery never relies on transient trends. Stunning work.',
        likes: 19,
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'emerald-sculpture-architectural-ballgown-silk-faille',
    title: 'The Emerald Sculpture: Reviving Mid-Century Volume in Heavy Silk Faille',
    subtitle: 'A dissection of asymmetric folds, off-the-shoulder corsetry, and the sculptural weight of deep forest jewel tones.',
    category: 'Womenswear',
    gender: 'women',
    issue: 'Dispatch N° 49 · Winter Collection',
    date: 'November 2, 2026',
    readTime: '6 min read',
    curator: {
      name: 'Camille Laurent',
      role: 'Atelier Archive Director',
      location: 'Milan Studio',
    },
    heroImage: '/src/assets/images/women_emerald_couture_gown_1794395355159.jpg',
    imageAlt: 'Sculptural emerald green couture ballgown with off-shoulder pleated corsetry in limestone gallery',
    imageCaption: 'Fig. 2 — Hand-draped silk faille in verdigris emerald. The structured hip peplum mimics botanical petal layering.',
    excerpt: 'Rejecting insubstantial sheer fabrics, this monumental emerald gown harnesses the crisp, papery tension of heavy silk faille to carve space with breathtaking authority.',
    content: {
      openingDropCap:
        'In an era dominated by fleeting diaphanous tulle and printed synthetics, encountering true heavyweight silk faille is a sensory revelation. The weave, distinguished by its pronounced horizontal crosswise ribs, possesses an innate structural memory. It does not simply drape over the feminine form—it sculpts space around it, standing out in crisp, majestic facets that catch the limestone sidelight with gemstone depth.',
      bodySection1:
        'The bodice features an asymmetric portrait collar that gently frames the clavicle before cascading into diagonal pleating across the ribcage. Notice how the internal boning remains completely invisible from the exterior, engineered using cotton coutil and spiral steel supports that redistribute the 6-kilogram skirt weight directly onto the anatomical pelvic crest rather than dragging down the shoulders.',
      pullQuote:
        'A great ballgown must feel like an architectural pavilion you can live and dance within—protective, poetic, and utterly commanding.',
      pullQuoteAuthor: 'Cristóbal Balenciaga Monograph',
      bodySection2:
        'The skirt’s multi-tiered architectural draping references early 1950s haute couture while introducing contemporary functional pockets hidden within the deep folds. The green hue—a bespoke dye bath blending lapis lazuli and malachite undertones—shifts from intense forest green under direct sunlight to near-black petroleum in dim ballroom candlelight.',
      curatorVerdict:
        'The quintessential modern gala silhouette. Style with sculpted brushed-gold earrings and minimal hair styling to let the neckline and voluminous hip architecture remain the sole protagonist.',
    },
    anatomyHotspots: [
      {
        id: 'spot-1',
        x: 48,
        y: 35,
        title: 'Cross-Pleated Bodice Wrap',
        description: 'Diagonal bias bands hand-stitched over an internal corset structure to elongate the torso and support the off-shoulder sleeves.',
      },
      {
        id: 'spot-2',
        x: 45,
        y: 52,
        title: 'Sculptural Cascading Peplum',
        description: 'Asymmetric gathered silk layers held with horsehair braid hem stays to maintain structural airiness without heavy crinoline.',
      },
      {
        id: 'spot-3',
        x: 62,
        y: 78,
        title: 'Floor-Sweeping Sweep Train',
        description: 'Full circular hem cut with generous godets, creating natural organic folds when stationary or during movement.',
      },
    ],
    fabricSpecs: {
      composition: '100% Heavyweight Silk Faille (Double-Woven)',
      origin: 'Como, Italy',
      silhouette: 'Architectural Ballgown with Portrait Decolletage',
      weight: '260 gsm',
      drapeFactor: 'Rigid Crisp Hand with Sculptural Papery Bounce',
    },
    colorPalette: [
      { name: 'Imperial Emerald', hex: '#165B33', role: 'Main Ballgown Field' },
      { name: 'Limestone Ochre', hex: '#DDD0BA', role: 'Architectural Backdrop' },
      { name: 'Deep Malachite', hex: '#0B3B24', role: 'Crease Shadow' },
      { name: 'Brushed Brass', hex: '#C29B4D', role: 'Accent Jewelry' },
    ],
    tags: ['Ballgown', 'Silk Faille', 'Couture Corsetry', 'Emerald Green', 'Mid-Century Revival'],
    likesCount: 289,
    featured: false,
    comments: [
      {
        id: 'c3',
        author: 'Sora Takahashi',
        role: 'Textile Chemist',
        date: '3 days ago',
        content: 'The rib density of this Como faille is exceptional. You can see how the fabric holds sharp origami-like planes while catching luminous highlights.',
        likes: 14,
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'monolithic-overcoat-british-herringbone-modern-proportion',
    title: 'The Monolithic Overcoat: Subverting British Herringbone for Modern Proportion',
    subtitle: 'How oversized double-breasted tailoring, drop shoulder construction, and charcoal melange wool define the new quiet luxury standard.',
    category: 'Menswear',
    gender: 'men',
    issue: 'Dispatch N° 47 · Sartorial Edition',
    date: 'October 16, 2026',
    readTime: '5 min read',
    curator: {
      name: 'Arthur Pendelton',
      role: 'Menswear Tailoring Columnist',
      location: 'London Mayfair',
    },
    heroImage: '/src/assets/images/men_tailored_cashmere_suit_1794395356640.jpg',
    imageAlt: 'Sartorial menswear portrait of a man in charcoal herringbone double-breasted overcoat and tailored pleated trousers',
    imageCaption: 'Fig. 3 — Brutalist concrete setting. Charcoal herringbone cashmere-blend overcoat with unpadded soft shoulders and double-pleated trousers.',
    excerpt: 'The stiff, armor-like corporate overcoat is officially obsolete. Enter the monolithic drape: relaxed, soft-shouldered, and cut with generous sweep for effortless urban elegance.',
    content: {
      openingDropCap:
        'Over the last five decades, men’s tailoring swing wildly between vacuum-tight silhouettes and sloppy disarray. Today’s most sophisticated designers have discovered the sublime middle ground: tailored garments with generous volume, unpadded shoulders, and fluid drape that moves with athletic grace while commanding the space of a neoclassical column.',
      bodySection1:
        'Constructed from 480-gram double-faced Scottish cashmere and virgin lambswool, this double-breasted overcoat avoids the stiff canvas chest shields of military greatcoats. Instead, a floating lightweight camel-hair canvas is hand-basted inside, allowing the substantial herringbone fabric to fall naturally straight down the torso without puckering.',
      pullQuote:
        'When tailoring respects the natural slouch and gait of the human body, an overcoat ceases to be formal costume and becomes second skin.',
      pullQuoteAuthor: 'The Sartorial Ledger',
      bodySection2:
        'Underneath, the trousers mirror this thoughtful approach to volume. Cut with twin forward pleats and a 4cm extended Hollywood waistband, they sit comfortably high on the natural waistline. The cuffless hem breaks cleanly with just half an inch of ripple over handcrafted calfskin Chelsea boots, establishing an elongated, vertical silhouette that elongates the leg line.',
      curatorVerdict:
        'The definitive blueprint for cold-weather refinement. Layer over a fine-gauge charcoal cashmere turtleneck and carry a structured bridle-leather holdall for flawless understated power.',
    },
    anatomyHotspots: [
      {
        id: 'spot-1',
        x: 52,
        y: 28,
        title: 'Spalla Camicia (Shirt Shoulder)',
        description: 'Neapolitan style unpadded shoulder with subtle shirring that contours naturally to the collarbone without robotic square pads.',
      },
      {
        id: 'spot-2',
        x: 48,
        y: 44,
        title: 'Double-Breasted 6x2 Fastening',
        description: 'Generous chest overlap with genuine horn buttons, cut slightly longer in the body to create a continuous protective line.',
      },
      {
        id: 'spot-3',
        x: 54,
        y: 60,
        title: 'Forward Double Pleats',
        description: 'Traditional English forward pleats that open outward when sitting or striding, granting complete ease through the thighs.',
      },
      {
        id: 'spot-4',
        x: 48,
        y: 90,
        title: 'Clean Boot Break',
        description: 'A disciplined straight-cut hem hovering precisely above the boot instep, maintaining visual cleanliness in urban weather.',
      },
    ],
    fabricSpecs: {
      composition: '80% Virgin Lambswool, 20% Mongolian Cashmere',
      origin: 'Hawick, Scottish Borders',
      silhouette: 'Relaxed Monolithic Double-Breasted Silhouette',
      weight: '480 gsm Overcoat / 320 gsm Trouser Flannel',
      drapeFactor: 'Dense Melange Warmth with Fluid Linear Drape',
    },
    colorPalette: [
      { name: 'Charcoal Melange', hex: '#373A3E', role: 'Herringbone Primary' },
      { name: 'Slate Concrete', hex: '#6D7278', role: 'Architectural Ground' },
      { name: 'Burgundy Cordovan', hex: '#4A1D24', role: 'Leather Footwear Accent' },
      { name: 'Soft Ash', hex: '#B2B5B9', role: 'Tweed Fleck Highlight' },
    ],
    tags: ['Menswear', 'Bespoke Overcoat', 'Herringbone Tweed', 'Quiet Luxury', 'Double Breasted'],
    likesCount: 412,
    featured: false,
    comments: [
      {
        id: 'c4',
        author: 'Marcus Vance',
        role: 'Savile Row Bespoke Client',
        date: '4 days ago',
        content: 'The high rise combined with the double forward pleats is exactly how classical trouser drape was meant to look. Rare to see modern brands execute this so faithfully.',
        likes: 31,
      },
    ],
  },
  {
    id: 'post-4',
    slug: 'poetics-bias-cut-unconstructed-silk-evening-slip',
    title: 'The Poetics of the Bias Cut: Fluid Silk Crepe and the Unconstructed Evening Slip',
    subtitle: 'From Madeleine Vionnet to contemporary minimal couture: why diagonal weave alignment remains the pinnacle of sensual minimalism.',
    category: 'Womenswear',
    gender: 'women',
    issue: 'Dispatch N° 46 · Eveningwear Monograph',
    date: 'October 8, 2026',
    readTime: '6 min read',
    curator: {
      name: 'Geneviève Alarie',
      role: 'Haute Couture Archive Specialist',
      location: 'Geneva Salon',
    },
    heroImage: '/src/assets/images/women_minimalist_silk_slip_1794395356796.jpg',
    imageAlt: 'Editorial fashion portrait of a woman in oyster white bias-cut silk dress with draped back by classical marble pedestal',
    imageCaption: 'Fig. 4 — Sunlit neoclassical gallery. Bias-cut heavyweight silk crepe marocain falling in uninterrupted liquid curves.',
    excerpt: 'By rotating the fabric 45 degrees, the woven grid transforms from rigid grid into elastic liquid. This oyster gown embodies the zenith of weightless red-carpet restraint.',
    content: {
      openingDropCap:
        'Few inventions in dressmaking match the revolutionary genius of the bias cut. When silk crepe is cut at a 45-degree angle to the warp and weft, the fibers surrender their static resistance, unlocking an inherent mechanical stretch without a single strand of elastane. The gown hugs the hollow of the spine, expands across the hips, and spirals around the ankles like poured cream.',
      bodySection1:
        'In this custom atelier creation, the back decolletage plunges into a deep cowl drape that puddles gently above the sacrum. Notice the subtle, hand-rolled raw-edge finishing at the hemline that prevents stiff bulk, allowing the skirt to ripple with liquid cadence. It is a dress devoid of external hardware: no zippers, no hooks, simply slipped over the head like silk water.',
      pullQuote:
        'When a woman dresses in bias-cut silk, she is not wearing a garment; the garment is dancing with her heartbeat.',
      pullQuoteAuthor: 'Madeleine Vionnet, Notes on Dress, 1932',
      bodySection2:
        'Under neutral daylight, the oyster-white shade displays delicate undertones of pearl, alabaster, and warm milk. Paired with a singular sculpted gold cuff and understated low bun, the silhouette stands as a testament to the fact that maximum elegance often requires the most extreme structural subtraction.',
      curatorVerdict:
        'Sublime evening purity. Keep jewelry strictly sculptural and architectural—avoiding busy stones—to preserve the unbroken liquid fluidity of the silhouette.',
    },
    anatomyHotspots: [
      {
        id: 'spot-1',
        x: 52,
        y: 38,
        title: 'Deep Low Cowl Draping',
        description: 'Fluid silk fold cut on true 45-degree diagonal bias, naturally pooling down the spine with zero horizontal seams.',
      },
      {
        id: 'spot-2',
        x: 48,
        y: 62,
        title: 'Seamless Bias Hip Contouring',
        description: 'Self-adjusting diagonal tension hugs curves naturally while providing complete breathing room and walking comfort.',
      },
      {
        id: 'spot-3',
        x: 55,
        y: 88,
        title: 'Hand-Rolled Puddle Hem',
        description: 'Delicate hand-rolled baby hem that trails subtly into an effortless puddle train around the feet.',
      },
    ],
    fabricSpecs: {
      composition: '100% Mulberry Silk Crepe Marocain (42mm)',
      origin: 'Hangzhou & Finished in Lyon',
      silhouette: 'Unconstructed Bias-Cut Column with Cowl Back',
      weight: '180 gsm',
      drapeFactor: 'Maximum Liquid Elasticity & Weightless Cling',
    },
    colorPalette: [
      { name: 'Oyster Milk', hex: '#FAF6EF', role: 'Silk Field' },
      { name: 'Warm Alabaster', hex: '#EBE4D5', role: 'Shadow Reflection' },
      { name: 'Antique Marble', hex: '#C7BDAB', role: 'Gallery Context' },
      { name: 'Warm Gold Leaf', hex: '#D4AF37', role: 'Jewelry Specular' },
    ],
    tags: ['Bias Cut', 'Silk Crepe', 'Evening Slip', 'Minimalism', 'Cowl Neck'],
    likesCount: 520,
    featured: false,
    comments: [
      {
        id: 'c5',
        author: 'Elena Rostova',
        role: 'Bridal & Evening Couturier',
        date: '5 days ago',
        content: 'Working with 42mm crepe on the true bias is terrifying because any deviation causes spiraling. The precision of this drape is breathtaking.',
        likes: 38,
      },
    ],
  },
  {
    id: 'post-5',
    slug: 'draped-tunic-menswear-emancipation-from-rigid-seams',
    title: 'The Draped Tunic: Menswear’s Emancipation from Rigid Seams',
    subtitle: 'Exploring how raw silk, band collars, and relaxed volume are breaking the tyranny of the stiff corporate button-down.',
    category: 'Menswear',
    gender: 'men',
    issue: 'Dispatch N° 45 · Fluidity & Form',
    date: 'September 29, 2026',
    readTime: '5 min read',
    curator: {
      name: 'Kenzo Moriyama',
      role: 'Kyoto Design Fellow & Sartorial Critic',
      location: 'Kyoto / Paris',
    },
    heroImage: '/src/assets/images/men_avantgarde_draped_tunic_1794395357423.jpg',
    imageAlt: 'Editorial menswear portrait of a man in bone-white raw silk draped tunic shirt and relaxed wide-leg wool trousers',
    imageCaption: 'Fig. 5 — Wabi-sabi clay plaster interior. Raw noil silk tunic shirt with half-placket closure, paired with pleated wool trousers.',
    excerpt: 'Rejecting starched collars and suffocating cuffs, this raw silk tunic brings meditative calmness to contemporary male dressing, rooted in architectural simplicity.',
    content: {
      openingDropCap:
        'The Western business shirt was born out of uniform standardization, prioritizing rigid symmetry and starched discipline. But the modern urban man increasingly seeks clothing that breathes with his intellect. Here, a hand-spun raw noil silk tunic embraces slight slubs, soft dropped armholes, and an open stand collar that rests comfortably against the collarbones.',
      bodySection1:
        'The tunic’s bone-white texture possesses a matte, chalky hand reminiscent of handmade washi paper. Because raw silk contains natural sericin proteins, it regulates body temperature across seasons—cool during humid summer afternoons and gently insulating when autumn winds stir.',
      pullQuote:
        'To wear clothes that do not constrain your movements is the first step toward thinking thoughts that are not bound by convention.',
      pullQuoteAuthor: 'Yohji Yamamoto Atelier Notes',
      bodySection2:
        'Paired with generous charcoal tropical wool trousers that pool slightly over bare feet or leather slip-ons, the outfit balances tactile warmth with intellectual rigor. It is dress intended for deep work, artistic contemplation, and slow travel, capturing the aesthetic spirit of twentieth-century modernist architects in their private sanctuaries.',
      curatorVerdict:
        'Wear untucked with rolled sleeves and high-waisted fluid trousers. Embrace the natural wrinkles of raw silk—perfection here lies in relaxed wabi-sabi imperfection.',
    },
    anatomyHotspots: [
      {
        id: 'spot-1',
        x: 52,
        y: 35,
        title: 'Minimalist Band Placket',
        description: 'Clean Mandarin band collar with hidden mother-of-pearl buttons, designed to rest open without losing its architectural line.',
      },
      {
        id: 'spot-2',
        x: 45,
        y: 42,
        title: 'Textured Noil Silk Slub',
        description: 'Unbleached spun silk yarn retaining subtle organic imperfections, creating rich tactile micro-shadows under natural light.',
      },
      {
        id: 'spot-3',
        x: 55,
        y: 65,
        title: 'Relaxed Wide-Leg Wool Flannel',
        description: 'High-waisted trousers cut with 26-inch hem circumferences for rhythmic movement and timeless relaxed composure.',
      },
    ],
    fabricSpecs: {
      composition: '100% Raw Noil Silk (Tunic) / 100% Tropical Merino Wool (Trousers)',
      origin: 'Kyoto Handloom & Biella, Italy',
      silhouette: 'Fluid Japanese Architectural Relaxed Fit',
      weight: '190 gsm (Silk) / 280 gsm (Wool)',
      drapeFactor: 'Matte Organic Texture with Soft Breathable Fall',
    },
    colorPalette: [
      { name: 'Bone White', hex: '#F4EFE6', role: 'Raw Silk Tunic' },
      { name: 'Deep Graphite', hex: '#424549', role: 'Merino Trousers' },
      { name: 'Oatmeal Clay', hex: '#D2C5B4', role: 'Plaster Wall Ground' },
      { name: 'Black Onyx', hex: '#1A1A1A', role: 'Leather Loafers' },
    ],
    tags: ['Menswear', 'Raw Silk', 'Minimalist Tunic', 'Wabi Sabi', 'Fluid Tailoring'],
    likesCount: 388,
    featured: false,
    comments: [
      {
        id: 'c6',
        author: 'Daisuke Endo',
        role: 'Architect & Collector',
        date: '6 days ago',
        content: 'This captures the exact balance between traditional Japanese workwear and European sartorial drapery. Refreshingly honest and tactile.',
        likes: 22,
      },
    ],
  },
];
