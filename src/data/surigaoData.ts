export interface Destination {
  id: string;
  index: string;
  name: string;
  municipality: string;
  barangay: string;
  fullLocation: string;
  coordinates: string;
  category: 'river-spring' | 'waterfall' | 'island-coastal';
  categoryLabel: string;
  tagline: string;
  briefDescription: string;
  extendedStory: string;
  majorAttractions: {
    title: string;
    detail: string;
  }[];
  recommendedActivities: {
    activity: string;
    duration: string;
    note: string;
  }[];
  bestTimeToVisit: {
    months: string;
    timeOfDay: string;
    weatherAdvisory: string;
  };
  practicalInfo: {
    entranceFeePhp: number;
    environmentalFeePhp: number;
    optionalAddOnLabel: string;
    optionalAddOnPhp: number;
    openingHours: string;
    travelTimeFromButuan: string;
    travelTimeFromDavao: string;
  };
  imageUrl: string;
  imageCaption: string;
  imageCredit: string;
}

export interface GatewayRoute {
  id: string;
  gatewayName: string;
  airportCode: string;
  recommendedFor: string;
  totalTravelTime: string;
  estimatedOneWayPhp: string;
  steps: {
    stepNumber: string;
    mode: string;
    route: string;
    duration: string;
    fareRange: string;
    details: string;
  }[];
}

export interface TransportMode {
  mode: string;
  coverage: string;
  fareEstimate: string;
  operatingWindow: string;
  travelerNote: string;
}

export interface AccommodationOption {
  name: string;
  location: string;
  tier: 'Budget' | 'Mid-Range' | 'Eco-Resort';
  ratePerNightPhp: number;
  rateRangeLabel: string;
  nearestDestination: string;
  highlights: string;
}

export interface SuggestedItinerary {
  id: string;
  title: string;
  durationLabel: string;
  focus: string;
  estimatedTotalPhp: string;
  days: {
    day: string;
    headline: string;
    schedule: string[];
  }[];
}

export interface CulturalItem {
  id: string;
  category: 'traditions' | 'products' | 'festivals' | 'dishes';
  categoryTitle: string;
  name: string;
  localTerm: string;
  origin: string;
  seasonOrContext: string;
  description: string;
  visitorExperience: string;
}

export interface TravelTipCategory {
  id: 'safety' | 'responsible' | 'environment' | 'culture';
  number: string;
  title: string;
  subtitle: string;
  keyPrinciple: string;
  reminders: {
    id: string;
    heading: string;
    explanation: string;
    actionablePledge: string;
  }[];
}

export const HERO_IMAGE = '/src/assets/images/enchanted_river_hero_1792070632887.jpg';
export const CUISINE_IMAGE = '/src/assets/images/surigao_seafood_cuisine_1792070636683.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'hinatuan-enchanted-river',
    index: '01',
    name: 'Hinatuan Enchanted River',
    municipality: 'Hinatuan',
    barangay: 'Barangay Talisay',
    fullLocation: 'Brgy. Talisay, Hinatuan, Surigao del Sur, Caraga Region XIII',
    coordinates: '8.3879° N, 126.3550° E',
    category: 'river-spring',
    categoryLabel: 'Subterranean Spring River',
    tagline: 'A fathomless sapphire spring emerging silently from an underground cave network into the Philippine Sea.',
    briefDescription:
      'Tucked within a lush limestone rainforest in Barangay Talisay, the Hinatuan Enchanted River is a saltwater-freshwater spring river renowned for its luminous sapphire-and-aquamarine center. Local Surigaonon folklore holds that engkantos (woodland and water spirits) guard its crystalline chasm, which plunges over 80 meters into an underwater cave system.',
    extendedStory:
      'Despite being less than a kilometer from the Pacific shoreline of Hinatuan Bay, the river emerges crystal-clear from a deep subterranean karst cavern first explored by cave divers in 1999. To preserve the fragile limestone walls and aquatic habitat, swimming is now regulated within a designated downstream lagoon area while the main sapphire abyss remains a protected viewing sanctuary.',
    majorAttractions: [
      {
        title: 'The Sapphire Underwater Chasm',
        detail: 'An 80-meter-deep underwater cave opening whose mineral-rich waters shift from pale jade along the edges to electric royal blue at the center.'
      },
      {
        title: '12:00 Noon & 3:00 PM Hymn of Hinatuan Fish Feeding',
        detail: 'When the "Hymn of Hinatuan" plays over the sanctuary speakers, caretakers ring a bell and large schools of giant trevally, snapper, and bangus surge from the cavern depths.'
      },
      {
        title: 'Hinatuan Bay & Sibadan Fish Cage Excursion',
        detail: 'Just five minutes downstream by outrigger bangka, the river opens into calm coastal mangroves, Pangasinan White Island, and interactive marine sanctuaries.'
      }
    ],
    recommendedActivities: [
      {
        activity: 'Guided Viewing of the 12:00 NN Ritual Feeding',
        duration: '45 mins',
        note: 'Arrive by 11:15 AM to secure a spot along the main wooden viewing deck before the bell rings.'
      },
      {
        activity: 'Regulated Lagoon Swimming (Life Vest Mandatory)',
        duration: '1 hour slot',
        note: 'Swim in the refreshing brackish downstream zone; life jackets are provided on-site for conservation compliance.'
      },
      {
        activity: 'Hinatuan Bay River-to-Sea Boat Cruise',
        duration: '2.5 hours',
        note: 'Charter a registered bangka boat from the river dock to Tinago River, Sibadan Fish Cage, and Ponta Cave.'
      }
    ],
    bestTimeToVisit: {
      months: 'March to October (Dry & Calm Pacific Season)',
      timeOfDay: '8:30 AM to 12:30 PM (Peak sunbeams pierce the canopy between 9:30 AM and 11:30 AM)',
      weatherAdvisory: 'Avoid visiting immediately after heavy monsoon downpours, as mountain runoff can temporarily cloud the upper river.'
    },
    practicalInfo: {
      entranceFeePhp: 75,
      environmentalFeePhp: 20,
      optionalAddOnLabel: 'Hinatuan Bay Boat Charter (per boat, up to 6 pax)',
      optionalAddOnPhp: 1200,
      openingHours: '7:30 AM – 4:30 PM Daily (Last entry at 3:45 PM)',
      travelTimeFromButuan: '4.5 hours via Surigao–Davao Coastal Highway',
      travelTimeFromDavao: '5.5 hours via Monkayo–Bislig–Hinatuan Route'
    },
    imageUrl: '/src/assets/images/enchanted_river_hero_1792070632887.jpg',
    imageCaption: 'Morning sunbeams illuminating the deep sapphire chasm and wooden viewing deck of Hinatuan Enchanted River.',
    imageCredit: 'Karajaw Surigao Digital Visual Archive · Verified DOT Caraga Field Data'
  },
  {
    id: 'tinuy-an-falls',
    index: '02',
    name: 'Tinuy-an Falls',
    municipality: 'Bislig City',
    barangay: 'Barangay Burboanan',
    fullLocation: 'Brgy. Burboanan, Bislig City, Surigao del Sur, Caraga Region XIII',
    coordinates: '8.1725° N, 126.2281° E',
    category: 'waterfall',
    categoryLabel: 'Multi-Tiered Curtain Waterfall',
    tagline: 'A 95-meter-wide, three-tiered white water curtain framed by lowland dipterocarp rainforest and morning rainbows.',
    briefDescription:
      'Celebrated as the widest waterfall in the Philippines, Tinuy-an Falls stretches 95 meters across and cascades 55 meters down three distinct limestone tiers in Barangay Burboanan, Bislig City. Its name derives from the local Kamayo word "Tinuyo-an" (an intentional act), referencing historical legends of highland stewards liberating their valley.',
    extendedStory:
      'Fed by the pristine watershed of the Bislig protected forest, Tinuy-an Falls produces a fine tropical mist that reliably refracts morning sunlight into a full arc rainbow between 9:00 AM and 11:00 AM. Visitors can ride a traditional hand-pulled bamboo raft right up to the thundering main curtain or ascend a stone trail to the second and third tiers.',
    majorAttractions: [
      {
        title: '95-Meter Main Curtain & Rainbow Mist Zone',
        detail: 'The sweeping lower tier forms a deep emerald catch basin where a natural solar rainbow appears on clear mornings.'
      },
      {
        title: 'Traditional Bamboo Raft ("Gakit") Hydro-Massage',
        detail: 'Local community lifeguards guide sturdy bamboo rafts directly beneath the cascading curtain for an exhilarating natural water massage.'
      },
      {
        title: 'Second & Third Tier Natural Rock Pools',
        detail: 'Accessible via a guided staircase along the cliffside, the upper tiers offer calm rock pools and panoramic views over the Bislig canopy.'
      }
    ],
    recommendedActivities: [
      {
        activity: 'Bamboo Raft Ride Under the Main Waterfall Curtain',
        duration: '30 mins',
        note: 'Keep cameras in waterproof dry bags; life vests and local raft guides are required.'
      },
      {
        activity: 'Upper Tier Trek & Natural Basin Swimming',
        duration: '1.5 hours',
        note: 'Climb to the second deck for a closer look at the rock ledges and swim in the designated shallow natural pools.'
      },
      {
        activity: 'Morning Rainbow & Long-Exposure Photography',
        duration: '1 hour',
        note: 'Position along the wooden bridge or lower right boulder bank between 9:00 AM and 10:30 AM for optimal rainbow framing.'
      }
    ],
    bestTimeToVisit: {
      months: 'February to September (Balanced water volume and clear morning skies)',
      timeOfDay: '8:00 AM to 11:00 AM (Guaranteed rainbow window on sunny mornings)',
      weatherAdvisory: 'During peak northeast monsoon rains (December–January), water volume is dramatic and powerful, though bamboo raft operations may pause for safety.'
    },
    practicalInfo: {
      entranceFeePhp: 100,
      environmentalFeePhp: 25,
      optionalAddOnLabel: 'Bamboo Raft Ride + Local Guide Fee (group shared)',
      optionalAddOnPhp: 350,
      openingHours: '7:00 AM – 4:30 PM Daily',
      travelTimeFromButuan: '5 hours via San Francisco–Barobo–Bislig Road',
      travelTimeFromDavao: '4.5 hours via Trento–Cuevas–Bislig Highway'
    },
    imageUrl: '/src/assets/images/tinuyan_falls_card_1792070632651.jpg',
    imageCaption: 'The three-tiered white curtain of Tinuy-an Falls with a bamboo raft crossing the misty turquoise basin.',
    imageCredit: 'Karajaw Surigao Digital Visual Archive · Bislig City Tourism Reference'
  },
  {
    id: 'britania-group-of-islands',
    index: '03',
    name: 'Britania Group of Islands',
    municipality: 'San Agustin',
    barangay: 'Barangay Britania',
    fullLocation: 'Lianga Bay, Brgy. Britania, San Agustin, Surigao del Sur, Caraga Region XIII',
    coordinates: '8.6983° N, 126.2058° E',
    category: 'island-coastal',
    categoryLabel: 'Karst Island Archipelago',
    tagline: 'Twenty-four emerald limestone islets and shifting powdery white sandbars scattered across the calm waters of Lianga Bay.',
    briefDescription:
      'Located along the sheltered curve of Lianga Bay in San Agustin, the Britania Group of Islands comprises 24 mushroom-shaped karst islets, coral shoals, and blindingly white sandbars facing the Philippine Sea. Within a 15-minute boat ride from the mainland resorts, travelers can hop between four marquee islands: Boslon, Hagonoy, Naked Island, and Hiyor-Hiyoran.',
    extendedStory:
      'Unlike exposed Pacific coastlines, Lianga Bay acts as a natural marine amphitheater that keeps the aquamarine channels between the Britania islets calm for most of the year. Each island has a distinct character—from the completely treeless, wave-sculpted sandbar of Naked Island to the coconut-shaded shores of Hagonoy and the dramatic rock arches of Boslon Island.',
    majorAttractions: [
      {
        title: 'Naked Island (Panhulogan Sandbar)',
        detail: 'A pure, shifting crescent of fine white coral sand surrounded by 360-degree turquoise waters with zero vegetation—ideal for sunrise and low-tide walks.'
      },
      {
        title: 'Boslon Island & Twin Sandbar',
        detail: 'The largest of the main tour islands, featuring a historic seaside grotto, karst rock caves at low tide, and a long sandbar facing Twin Islets.'
      },
      {
        title: 'Hagonoy & Hiyor-Hiyoran Islands',
        detail: 'Verdant oval islands fringed by pandan and talisay trees where visitors can snorkel over shallow seagrass beds and enjoy fresh coconut water.'
      }
    ],
    recommendedActivities: [
      {
        activity: '4-Island Hopping Circuit (Naked, Boslon, Hagonoy, Hiyor-Hiyoran)',
        duration: '3.5 to 4 hours',
        note: 'Register at the Barangay Britania Tourism Center to get an assigned DOT-accredited outrigger boat.'
      },
      {
        activity: 'Shallow Reef Snorkeling & Sandbar Kayaking',
        duration: '1.5 hours',
        note: 'Bring reef-safe mineral sunblock and water shoes for exploring the limestone coves around Boslon Island.'
      },
      {
        activity: 'Coastal Sunset Viewing & Fresh Seafood Feast',
        duration: '2 hours',
        note: 'Return to mainland Britania beach by 4:30 PM for grilled tanigue and kinilaw overlooking the islands.'
      }
    ],
    bestTimeToVisit: {
      months: 'March to September (Calmest sea conditions in Lianga Bay)',
      timeOfDay: '6:30 AM to 11:30 AM (Low-to-mid tide reveals the widest sandbars at Naked and Boslon Islands)',
      weatherAdvisory: 'Check the daily tide table at San Agustin Tourism Desk; high tide submerges portions of Naked Island.'
    },
    practicalInfo: {
      entranceFeePhp: 50,
      environmentalFeePhp: 50,
      optionalAddOnLabel: 'Standard 4-Island Boat Charter (up to 6 pax)',
      optionalAddOnPhp: 1500,
      openingHours: '6:00 AM – 5:00 PM Daily (Island hopping departures until 2:30 PM)',
      travelTimeFromButuan: '3 hours via Prosperidad–Lianga–San Agustin Highway',
      travelTimeFromDavao: '6.5 hours via Bislig–Hinatuan–Barobo–San Agustin'
    },
    imageUrl: '/src/assets/images/britania_islands_card_1792070633932.jpg',
    imageCaption: 'Aerial view of a powdery white sandbar and lush limestone islets in the Britania Group of Islands, San Agustin.',
    imageCredit: 'Karajaw Surigao Digital Visual Archive · San Agustin LGU Tourism Data'
  },
  {
    id: 'laswitan-tide-pool-and-lagoon',
    index: '04',
    name: 'Laswitan Tide Pool and Lagoon',
    municipality: 'Cortes',
    barangay: 'Barangay Poblacion',
    fullLocation: 'Brgy. Poblacion, Cortes, Surigao del Sur, Caraga Region XIII',
    coordinates: '9.2684° N, 126.1952° E',
    category: 'island-coastal',
    categoryLabel: 'Oceanic Tidal Rock Lagoon',
    tagline: 'Where towering Pacific rollers crash over jagged volcanic limestone walls to create a salt-water splash waterfall.',
    briefDescription:
      'Located along the rugged Pacific coast of Cortes, just north of the provincial capital Tandag City, Laswitan is a rare geological wonder. Named after the Surigaonon word "laswit" (splashing water), a 20-foot barrier of dark jagged limestone rock intercepts roaring Pacific Ocean swells, sending plumes of white sea spray cascading into a tranquil emerald tidal lagoon below.',
    extendedStory:
      'Every time a powerful ocean swell strikes the outer rock wall during high tide, thousands of gallons of aerated seawater pour over the dark volcanic ridge like a reverse ocean waterfall. Inside the rock perimeter, the natural basin remains protected from the open undertow, allowing visitors to float in cool, crystal-clear saltwater while watching the dramatic spray overhead.',
    majorAttractions: [
      {
        title: 'The "Laswit" Pacific Wave Splash Curtain',
        detail: 'During high tide and moderate-to-strong Pacific swells, waves shoot up to 12 meters into the air before cascading down the black rock wall into the pool.'
      },
      {
        title: 'Three-Tiered Natural Tidal Rock Pools',
        detail: 'Separated by natural coral-limestone barriers, the pools range from a shallow children’s wading basin to a deep main lagoon with safety ropes.'
      },
      {
        title: 'Cortes Coastal Rock Viewdeck & Boardwalk',
        detail: 'An elevated concrete walkway along the cliff allows visitors and photographers to witness the raw power of the Philippine Trench coastline safely.'
      }
    ],
    recommendedActivities: [
      {
        activity: 'Tidal Lagoon Floating Under the Saltwater Cascade',
        duration: '1.5 hours',
        note: 'Hold onto the installed safety ropes near the splash zone while wearing a mandatory life jacket.'
      },
      {
        activity: 'High-Speed Wave Splash Photography',
        duration: '45 mins',
        note: 'Shoot at 1/1000s shutter speed or higher from the upper rock deck during incoming high tide.'
      },
      {
        activity: 'Cottage Picnic with Fresh Cortes Sea Urchin & Kinilaw',
        duration: '2 hours',
        note: 'Rent an open-air seaside cottage and sample freshly harvested suwaki (sea urchin) and grilled tuna from local stalls.'
      }
    ],
    bestTimeToVisit: {
      months: 'November to March for dramatic high-splash waves; April to August for calmer emerald lagoon swimming',
      timeOfDay: 'Check the Cortes daily High Tide schedule (Biggest wave splashes occur 1 hour before and after peak high tide)',
      weatherAdvisory: 'Never climb onto the outer seaward rock barrier; always follow the whistle signals of on-duty Cortes lifeguards.'
    },
    practicalInfo: {
      entranceFeePhp: 50,
      environmentalFeePhp: 20,
      optionalAddOnLabel: 'Life Vest Rental & Open Seaside Cottage',
      optionalAddOnPhp: 300,
      openingHours: '7:00 AM – 5:00 PM Daily',
      travelTimeFromButuan: '3.5 hours via Cantilan–Lanuza–Cortes Coastal Road',
      travelTimeFromDavao: '7.5 hours via Tandag–Cortes National Highway'
    },
    imageUrl: '/src/assets/images/laswitan_lagoon_card_1792070633696.jpg',
    imageCaption: 'Pacific Ocean swells crashing over the dark volcanic rock wall into the emerald tidal basin of Laswitan Lagoon in Cortes.',
    imageCredit: 'Karajaw Surigao Digital Visual Archive · Municipality of Cortes Tourism Office'
  },
  {
    id: 'libuacan-cold-spring',
    index: '05',
    name: 'Libuacan Cold Spring',
    municipality: 'Tagbina',
    barangay: 'Barangay Sta. Juana',
    fullLocation: 'Sitio Libuacan, Brgy. Sta. Juana, Tagbina, Surigao del Sur, Caraga Region XIII',
    coordinates: '8.4312° N, 126.1785° E',
    category: 'river-spring',
    categoryLabel: 'Rainforest Freshwater Cold Spring',
    tagline: 'An icy, glass-clear mountain spring basin shaded by ancient rainforest canopy and smooth river boulders in Tagbina.',
    briefDescription:
      'Hidden in the upland forest valley of Barangay Sta. Juana in Tagbina, Libuacan Cold Spring is Surigao del Sur’s premier freshwater sanctuary. Fed continuously by subterranean mountain aquifers filtering through karst bedrock, its water remains brisk, mirror-clear, and tinted a soothing jade-turquoise year-round.',
    extendedStory:
      'Unlike coastal lagoons, Libuacan Cold Spring offers a tranquil inland retreat where smooth river cobbles line the shallow margins and towering fern-draped trees filter the midday heat. Because the spring flows steadily downstream into a rocky creek, the water constantly renews itself without chemical treatment, maintaining exceptional underwater visibility.',
    majorAttractions: [
      {
        title: 'The Glass-Clear Jade Spring Basin',
        detail: 'A natural freshwater pool ranging from knee-deep pebble shallows to a 4-meter-deep emerald channel where submerged boulders are visible from the surface.'
      },
      {
        title: 'Upland Tagbina Rainforest Canopy & Fern Wall',
        detail: 'Surrounded by giant dipterocarp trees, wild orchids, and giant tree ferns that keep the ambient air cool even at noon.'
      },
      {
        title: 'Downstream Boulder Rapids & Eco-Park Cottages',
        detail: 'Natural stone terraces allow visitors to sit in the brisk flowing current while enjoying local Tagbina coffee and native delicacies.'
      }
    ],
    recommendedActivities: [
      {
        activity: 'Cold-Water Immersion & Underwater Freedive Photography',
        duration: '1.5 hours',
        note: 'Water temperature averages a refreshing 19°C–21°C; bring an underwater action camera for crystal-clear shots.'
      },
      {
        activity: 'Forest Bathing & Riverside Family Picnic',
        duration: '2 hours',
        note: 'Ideal afternoon stop after visiting Hinatuan Enchanted River or Tinuy-an Falls along the southern corridor.'
      },
      {
        activity: 'Tagbina Coffee & Local Cacao Tasting',
        duration: '45 mins',
        note: 'Tagbina is an agricultural hub of Surigao del Sur known for aromatic Robusta coffee and artisanal cacao.'
      }
    ],
    bestTimeToVisit: {
      months: 'Year-round (Especially refreshing during the warm summer months of March to June)',
      timeOfDay: '9:00 AM to 2:00 PM on weekdays for glass-like water clarity and quiet forest ambiance',
      weatherAdvisory: 'Avoid wearing oil-based lotions or sunblock before entering the spring to keep the natural aquifer pristine.'
    },
    practicalInfo: {
      entranceFeePhp: 50,
      environmentalFeePhp: 15,
      optionalAddOnLabel: 'Riverside Bamboo Cottage & Tube Float Rental',
      optionalAddOnPhp: 250,
      openingHours: '7:30 AM – 5:00 PM Daily',
      travelTimeFromButuan: '4 hours via San Francisco–Barobo–Tagbina Road',
      travelTimeFromDavao: '5 hours via Trento–Bislig–Tagbina Junction'
    },
    imageUrl: '/src/assets/images/libuacan_spring_card_1792070634195.jpg',
    imageCaption: 'Crystal-clear freshwater pool and smooth river boulders shaded by tropical rainforest at Libuacan Cold Spring in Tagbina.',
    imageCredit: 'Karajaw Surigao Digital Visual Archive · Municipality of Tagbina Tourism Office'
  }
];

export const GATEWAY_ROUTES: GatewayRoute[] = [
  {
    id: 'butuan-bxu',
    gatewayName: 'Via Butuan Airport (Bancasi)',
    airportCode: 'BXU',
    recommendedFor: 'Best overall gateway for visiting Britania Islands, Hinatuan Enchanted River, Libuacan Cold Spring, and Tinuy-an Falls',
    totalTravelTime: '3 to 5 hours by land',
    estimatedOneWayPhp: 'PHP 450 – PHP 750 (Land Transfer)',
    steps: [
      {
        stepNumber: '01',
        mode: 'Domestic Flight (Manila / Cebu to BXU)',
        route: 'MNL or CEB → Butuan Airport (BXU)',
        duration: '1 hr 45 mins (MNL) / 55 mins (CEB)',
        fareRange: 'PHP 2,400 – PHP 4,800',
        details: 'Daily morning and afternoon flights operated by Philippine Airlines and Cebu Pacific.'
      },
      {
        stepNumber: '02',
        mode: 'Tricycle or Multicab Transfer',
        route: 'Butuan Airport → Robinson’s Place / Langihan Bus Terminal',
        duration: '15 – 20 mins',
        fareRange: 'PHP 30 – PHP 100',
        details: 'Board a yellow airport multicab or tricycle heading straight to the southbound bus terminal.'
      },
      {
        stepNumber: '03',
        mode: 'Bachelor Express Bus or UV Express Van',
        route: 'Butuan → San Agustin (Britania) / Hinatuan / Bislig (Mangagoy)',
        duration: '3 hrs (San Agustin) · 4.5 hrs (Hinatuan) · 5 hrs (Bislig)',
        fareRange: 'PHP 380 – PHP 620',
        details: 'Take Bachelor Express buses bound for Mangagoy (Bislig) or Tandag via the scenic Surigao–Davao Coastal Highway.'
      }
    ]
  },
  {
    id: 'davao-dvo',
    gatewayName: 'Via Davao International Airport',
    airportCode: 'DVO',
    recommendedFor: 'Most convenient southern entry point starting at Tinuy-an Falls (Bislig), Libuacan Cold Spring, and Hinatuan',
    totalTravelTime: '4.5 to 6 hours by land',
    estimatedOneWayPhp: 'PHP 550 – PHP 850 (Land Transfer)',
    steps: [
      {
        stepNumber: '01',
        mode: 'Direct Flight (Manila / Cebu / Clark / Iloilo to DVO)',
        route: 'Major Hub → Francisco Bangoy International Airport (DVO)',
        duration: '1 hr 50 mins (MNL)',
        fareRange: 'PHP 2,200 – PHP 4,500',
        details: 'Wide selection of daily flights making it budget-friendly for groups.'
      },
      {
        stepNumber: '02',
        mode: 'Taxi or Airport Shuttle Bus',
        route: 'DVO Airport → Davao City Overland Transport Terminal (Ecoland)',
        duration: '25 – 35 mins',
        fareRange: 'PHP 180 – PHP 250',
        details: 'Metered taxis are readily available outside the arrival hall.'
      },
      {
        stepNumber: '03',
        mode: 'Air-Conditioned Bus to Mangagoy (Bislig City)',
        route: 'Davao Ecoland Terminal → Trento → Mangagoy Bus Terminal (Bislig)',
        duration: '4.5 – 5 hours',
        fareRange: 'PHP 520 – PHP 680',
        details: 'Buses depart every hour from 3:00 AM to 6:00 PM; Mangagoy is the base camp for Tinuy-an Falls and Hinatuan.'
      }
    ]
  },
  {
    id: 'surigao-tandag',
    gatewayName: 'Via Surigao (SUG) or Tandag (TDG)',
    airportCode: 'SUG / TDG',
    recommendedFor: 'Fastest access to Northern Surigao del Sur: Laswitan Tide Pool & Lagoon (Cortes) and Tandag City',
    totalTravelTime: '30 mins (from TDG) or 3.5 hrs (from SUG)',
    estimatedOneWayPhp: 'PHP 150 – PHP 480 (Land Transfer)',
    steps: [
      {
        stepNumber: '01',
        mode: 'Regional Turboprop Flight (Cebu to Tandag or Surigao)',
        route: 'CEB → Tandag Airport (TDG) or Surigao Airport (SUG)',
        duration: '55 mins',
        fareRange: 'PHP 2,800 – PHP 5,200',
        details: 'Direct regional flights land right in Tandag City (capital of Surigao del Sur) or Surigao City.'
      },
      {
        stepNumber: '02',
        mode: 'Coastal Bus or Tricycle Transfer to Cortes',
        route: 'Tandag City → Barangay Poblacion, Cortes (Laswitan Lagoon)',
        duration: '25 – 35 mins north of Tandag',
        fareRange: 'PHP 80 – PHP 250',
        details: 'Laswitan Lagoon sits just 20 kilometers north of Tandag City along a paved coastal road.'
      },
      {
        stepNumber: '03',
        mode: 'Southbound Highway Connection',
        route: 'Cortes → Tandag → San Agustin (Britania) → Hinatuan',
        duration: '1.5 hrs to Britania · 3 hrs to Hinatuan',
        fareRange: 'PHP 220 – PHP 450',
        details: 'Allows a seamless north-to-south coastal road trip across all 5 featured destinations.'
      }
    ]
  }
];

export const TRANSPORT_MODES: TransportMode[] = [
  {
    mode: 'Bachelor Express Air-Conditioned Bus',
    coverage: 'Inter-town spine connecting Cortes, Tandag, San Agustin, Tagbina, Hinatuan, and Bislig City',
    fareEstimate: 'PHP 80 – PHP 620 depending on distance',
    operatingWindow: '3:00 AM – 8:00 PM daily departures',
    travelerNote: 'Drop off at Salvacion Junction for Britania Islands or Hinatuan Bus Terminal for Enchanted River.'
  },
  {
    mode: 'UV Express Passenger Vans',
    coverage: 'Express point-to-point routes between Butuan, San Francisco (Agusan), Barobo, Hinatuan, and Mangagoy',
    fareEstimate: 'PHP 120 – PHP 550 per passenger',
    operatingWindow: '5:00 AM – 6:00 PM (Departs when full)',
    travelerNote: 'Saves 30–45 minutes over regular buses; can be chartered privately for groups of 8–10 travelers.'
  },
  {
    mode: 'Bao-Bao (Covered Tricycle) & Habal-Habal',
    coverage: 'Last-mile access from town terminals to Enchanted River (12 km), Tinuy-an Falls (18 km), and Libuacan Spring',
    fareEstimate: 'PHP 300 – PHP 600 round-trip charter with waiting time',
    operatingWindow: '6:00 AM – 6:00 PM',
    travelerNote: 'Always agree on the round-trip tariff (verified on municipal tourism tarpaulins) before departing.'
  },
  {
    mode: 'DOT-Registered Outrigger Bangka Boats',
    coverage: 'Britania 4-Island Hopping (San Agustin) and Hinatuan Bay River-to-Sea Cruise',
    fareEstimate: 'PHP 1,200 – PHP 1,500 per boat (good for up to 6 guests)',
    operatingWindow: '6:00 AM – 4:00 PM (Subject to Coast Guard weather clearance)',
    travelerNote: 'Book directly at the Barangay Tourism Dispatch Desk—never through unaccredited roadside touts.'
  }
];

export const ACCOMMODATION_OPTIONS: AccommodationOption[] = [
  {
    name: 'La Entrada Resort & Restaurant',
    location: 'Brgy. Britania, San Agustin',
    tier: 'Eco-Resort',
    ratePerNightPhp: 3200,
    rateRangeLabel: 'PHP 2,800 – PHP 4,200 / night',
    nearestDestination: 'Britania Group of Islands (Direct beachfront jump-off)',
    highlights: 'Beachfront cabanas facing Boslon and Naked Islands, in-house seafood restaurant, and private boat dispatch.'
  },
  {
    name: 'Casa de Babano Pension & Eco-Lodge',
    location: 'Mangagoy, Bislig City',
    tier: 'Mid-Range',
    ratePerNightPhp: 1800,
    rateRangeLabel: 'PHP 1,500 – PHP 2,400 / night',
    nearestDestination: 'Tinuy-an Falls & Hinatuan Enchanted River',
    highlights: 'Central town location near Mangagoy Terminal, air-conditioned family rooms, and arranged habal-habal/van tours.'
  },
  {
    name: 'Rock Island Resort & Cliffside Cottages',
    location: 'Hinatuan Bay, Hinatuan',
    tier: 'Mid-Range',
    ratePerNightPhp: 2100,
    rateRangeLabel: 'PHP 1,800 – PHP 2,800 / night',
    nearestDestination: 'Hinatuan Enchanted River (10 mins by boat/road)',
    highlights: 'Perched on limestone rocks over emerald waters with fresh catch-of-the-day dining and stilt cottages.'
  },
  {
    name: 'Tandag Coastal Travellers Inn',
    location: 'Tandag City / Cortes Boundary',
    tier: 'Budget',
    ratePerNightPhp: 950,
    rateRangeLabel: 'PHP 850 – PHP 1,300 / night',
    nearestDestination: 'Laswitan Tide Pool & Lagoon (20 mins north)',
    highlights: 'Clean, budget-friendly rooms ideal for backpackers and student groups exploring northern Surigao del Sur.'
  }
];

export const SUGGESTED_ITINERARIES: SuggestedItinerary[] = [
  {
    id: '3d2n-complete-loop',
    title: 'The Complete 5-Destination Surigao del Sur Expedition',
    durationLabel: '3 Days / 2 Nights',
    focus: 'Covers all 5 featured destinations from North to South along the Pacific Corridor',
    estimatedTotalPhp: 'PHP 5,400 – PHP 7,800 per person (Group of 4)',
    days: [
      {
        day: 'Day 01',
        headline: 'Northern & Central Coast: Laswitan Tidal Lagoon & Britania Islands',
        schedule: [
          '07:30 AM — Arrive at Laswitan Tide Pool & Lagoon (Cortes) timed with morning high tide wave splashes.',
          '11:30 AM — Travel south via Tandag to Barangay Britania, San Agustin; seaside lunch of Kinilaw and grilled reef fish.',
          '01:30 PM — Charter outrigger boat for the 4-Island Hopping tour (Naked Island, Boslon, Hagonoy, Hiyor-Hiyoran).',
          '05:30 PM — Sunset dinner and overnight stay along Britania Beachfront.'
        ]
      },
      {
        day: 'Day 02',
        headline: 'Enchanted Waters & Rainforest Springs: Hinatuan & Tagbina',
        schedule: [
          '08:00 AM — Depart San Agustin for Barangay Talisay, Hinatuan.',
          '10:00 AM — Swim in the regulated downstream lagoon and photograph sunbeams over the Hinatuan Enchanted River.',
          '12:00 NN — Witness the iconic "Hymn of Hinatuan" bell ringing and underwater cavern fish feeding ritual.',
          '02:30 PM — Proceed inland to Libuacan Cold Spring in Tagbina for an afternoon freshwater forest swim; overnight in Bislig City.'
        ]
      },
      {
        day: 'Day 03',
        headline: 'The Curtain of Mist: Tinuy-an Falls & Local Heritage Markets',
        schedule: [
          '07:30 AM — Early departure from Mangagoy to Barangay Burboanan, Bislig City.',
          '08:30 AM — Experience Tinuy-an Falls: ride the bamboo gakit raft into the waterfall mist and capture the 9:30 AM rainbow.',
          '11:00 AM — Trek to the 2nd and 3rd waterfall tiers for panoramic rainforest views.',
          '01:30 PM — Shop for Sayongsong, Caraga cacao tablea, and woven tikog crafts before airport transfer to Butuan or Davao.'
        ]
      }
    ]
  },
  {
    id: '2d1n-southern-gems',
    title: 'Weekend Southern Sanctuary Circuit (Bislig · Hinatuan · Tagbina)',
    durationLabel: '2 Days / 1 Night',
    focus: 'Ideal for weekend travelers focusing on rivers, cold springs, and waterfalls',
    estimatedTotalPhp: 'PHP 3,600 – PHP 5,200 per person (Group of 4)',
    days: [
      {
        day: 'Day 01',
        headline: 'Tinuy-an Falls Rainbow & Bislig Bay Sunset',
        schedule: [
          '08:30 AM — Arrive in Bislig City and head directly to Tinuy-an Falls for morning rainbow viewing and bamboo rafting.',
          '01:00 PM — Lunch at Bislig Baywalk featuring steamed mud crabs and sinugbang bangus.',
          '03:00 PM — Afternoon dip at Libuacan Cold Spring in nearby Tagbina; return to Bislig or Hinatuan for overnight.'
        ]
      },
      {
        day: 'Day 02',
        headline: 'Hinatuan Enchanted River & Bay Island Cruise',
        schedule: [
          '09:00 AM — Early arrival at Hinatuan Enchanted River Eco-Park for clear morning photography.',
          '12:00 NN — Watch the noon fish feeding ceremony at the sapphire abyss.',
          '01:15 PM — Board a river-to-sea bangka cruise to Sibadan Fish Cage and Pangasinan White Island before evening bus home.'
        ]
      }
    ]
  }
];

export const CULTURE_AND_CUISINE: CulturalItem[] = [
  {
    id: 'karajaw-hospitality',
    category: 'traditions',
    categoryTitle: 'Filipino Traditions',
    name: 'Karajaw Hospitality & Bayanihan Stewardship',
    localTerm: '"Marajaw na Karajaw" (Warmest Surigaonon Welcome)',
    origin: 'Surigao del Sur Coastal & Upland Communities',
    seasonOrContext: 'Practiced daily across community-managed eco-parks',
    description:
      'In the Surigaonon and Kamayo languages, "Marajaw" means good, beautiful, and generous. Across Surigao del Sur, tourism sites like Enchanted River, Tinuy-an Falls, and Laswitan are operated through community cooperatives where former fisherfolk and foresters serve as lifeguards, raft guides, and ecological guardians.',
    visitorExperience:
      'Greet locals with "Marajaw na buntag" (Good morning) and experience community-led eco-briefings that blend indigenous folklore of engkantos (nature spirits) with modern marine science.'
  },
  {
    id: 'kamayo-manobo-heritage',
    category: 'traditions',
    categoryTitle: 'Filipino Traditions',
    name: 'Kamayo & Manobo Ancestral Forest Reverence',
    localTerm: 'Panagtamod sa Kinaiyahan (Respect for Sacred Waters)',
    origin: 'Bislig, Hinatuan, Tagbina & San Agustin',
    seasonOrContext: 'Living indigenous tradition of Eastern Mindanao',
    description:
      'The indigenous Manobo and native Kamayo peoples of southern Surigao del Sur regard deep springs, waterfalls, and karst headwaters as sacred sanctuaries. Traditional oral histories explain why locals respected the fathomless depths of Hinatuan River long before scuba divers mapped its underwater caverns.',
    visitorExperience:
      'Observe quiet respect around spring headwaters and listen to elder storytellers in Bislig and Hinatuan share the legends behind Tinuy-an and the Enchanted River.'
  },
  {
    id: 'tikog-pandan-weaving',
    category: 'products',
    categoryTitle: 'Local Products',
    name: 'Handwoven Tikog & Romblon/Pandan Mats and Bags',
    localTerm: 'Banig ug Bayong sa Surigao',
    origin: 'Hinatuan, Barobo & San Agustin Women’s Weavers Associations',
    seasonOrContext: 'Available year-round at Eco-Park Pasalubong Centers',
    description:
      'Skilled women artisans harvest wild tikog reed grass and coastal pandan leaves, sun-drying and dyeing the strands with natural pigments to weave geometric sleeping mats (banig), market totes, and sun hats featuring Pacific wave motifs.',
    visitorExperience:
      'Purchase directly from the women’s cooperative stalls outside Hinatuan Enchanted River and Britania Tourism Center—100% of proceeds stay with local weaving households.'
  },
  {
    id: 'tagbina-cacao-coffee',
    category: 'products',
    categoryTitle: 'Local Products',
    name: 'Upland Tagbina Cacao Tablea & Wild Rainforest Honey',
    localTerm: 'Sikwate Tablea & Dugos sa Lasang',
    origin: 'Tagbina & Bislig Upland Farms',
    seasonOrContext: 'Peak harvest March to September',
    description:
      'Grown in the mineral-rich volcanic foothills surrounding Libuacan Cold Spring, Tagbina’s stone-ground pure cacao tablea and wild stingless-bee forest honey are prized across Caraga for their rich, floral aroma and zero-additive purity.',
    visitorExperience:
      'Enjoy a steaming cup of traditional sikwate (hot chocolate) paired with sticky rice suman after a cold swim at Libuacan.'
  },
  {
    id: 'sirong-festival',
    category: 'festivals',
    categoryTitle: 'Festivals',
    name: 'Sirong Festival',
    localTerm: 'Historic Ritual Dance of Coastal Resilience',
    origin: 'Cantilan & Northern Surigao del Sur',
    seasonOrContext: 'Celebrated annually every August 14–15',
    description:
      'One of Caraga’s most celebrated cultural festivals, Sirong dramatizes the historical defense and eventual peaceful coexistence of early coastal settlers and indigenous groups through intricate war-and-peace street choreography accompanied by rhythmic bamboo and agong percussion.',
    visitorExperience:
      'Watch contingent dancers dressed in hand-embroidered indigenous attire and brass bells perform synchronized street dances across town plazas.'
  },
  {
    id: 'karawasan-kaliguan-festivals',
    category: 'festivals',
    categoryTitle: 'Festivals',
    name: 'Karawasan Festival (Bislig) & Kaliguan Festival (Cagwait)',
    localTerm: 'Celebration of Waterfalls, Forests & Pacific Shores',
    origin: 'Bislig City (September) & Coastal Surigao del Sur (June)',
    seasonOrContext: 'June 24 (Kaliguan) · Mid-September (Karawasan)',
    description:
      'Karawasan (from the Kamayo word "karawas," a dynamic movement) honors Bislig’s Manobo heritage and natural wonders like Tinuy-an Falls, while Kaliguan celebrates the Feast of St. John the Baptist with coastal regattas, sand sculpture competitions, and beachside music.',
    visitorExperience:
      'Plan a June or September trip to witness vibrant float parades, agro-industrial trade fairs, and coastal culinary showdowns.'
  },
  {
    id: 'surigaonon-kinilaw',
    category: 'dishes',
    categoryTitle: 'Famous Filipino Dishes',
    name: 'Kinilaw na Tanigue with Tabon-Tabon & Coconut Vinegar',
    localTerm: 'Kinilaw sa Surigao (Traditional Raw Fish Ceviche)',
    origin: 'Coastal Municipalities of Cortes, San Agustin & Hinatuan',
    seasonOrContext: 'Served fresh daily from morning catch',
    description:
      'Mindanao is the birthplace of Philippine kinilaw. Surigao del Sur’s signature version uses line-caught Spanish mackerel (tanigue) or yellowfin tuna cubes cured briefly in aged coconut vinegar (sukang tuba), calamansi, ginger, red shallots, bird’s eye chili, and the grated pulp of the endemic tabon-tabon fruit, which removes any fishiness and adds a subtle nutty finish.',
    visitorExperience:
      'Order fresh kinilaw right at the seaside cottages of Laswitan Lagoon or Britania Beach within hours of the boats landing.'
  },
  {
    id: 'sayongsong-and-seafood',
    category: 'dishes',
    categoryTitle: 'Famous Filipino Dishes',
    name: 'Sayongsong & Sinugbang Gangis / Mud Crab Feast',
    localTerm: 'Sayongsong (Banana-Leaf Rice Cone) & Sinugba',
    origin: 'Surigao Delicacy Heritage & Hinatuan Mangrove Estuaries',
    seasonOrContext: 'Morning markets & beachfront paluto restaurants',
    description:
      'Sayongsong is Surigao’s iconic kakanin: a velvety blend of toasted glutinous rice, regular rice, roasted peanuts, coconut milk, calamansi juice, and brown sugar steamed inside cone-shaped banana leaf wrappers. It is traditionally enjoyed after a coastal feast of charcoal-grilled gangis (reef surgeonfish) and giant Hinatuan mangrove mud crabs (alimango).',
    visitorExperience:
      'Buy warm bundles of Sayongsong at town markets for PHP 50–100 as road-trip snacks between destinations.'
  }
];

export const TRAVEL_TIPS: TravelTipCategory[] = [
  {
    id: 'safety',
    number: '01',
    title: 'Visitor Safety & Water Protocols',
    subtitle: 'Practical precautions for deep karst springs, Pacific tide pools, and multi-tiered waterfalls',
    keyPrinciple: 'Always respect the natural hydrodynamics of the Pacific coast and subterranean springs.',
    reminders: [
      {
        id: 'safety-vest',
        heading: 'Mandatory Life Vest Compliance',
        explanation:
          'Life jackets are strictly required by municipal ordinance when swimming in Hinatuan Enchanted River, Laswitan Lagoon, and riding the bamboo raft at Tinuy-an Falls—even for experienced swimmers.',
        actionablePledge: 'I will wear a properly fastened life vest in all designated river, waterfall, and tidal lagoon zones.'
      },
      {
        id: 'safety-tide',
        heading: 'Monitor Pacific Swell & High-Tide Windows at Laswitan',
        explanation:
          'Laswitan’s wave splashes are powered by open Pacific swells. Never step onto the outer wet black volcanic ridge where rogue waves break, and immediately heed lifeguard whistle signals.',
        actionablePledge: 'I will stay inside the roped tidal basin at Laswitan and follow Cortes lifeguard advisories.'
      },
      {
        id: 'safety-cash',
        heading: 'Carry Sufficient Cash & Waterproof Dry Bags',
        explanation:
          'ATMs are concentrated in Tandag City, Mangagoy (Bislig), and Hinatuan town proper. Eco-parks in Barangay Talisay, Burboanan, and Sta. Juana accept cash only for entrance and boat fees.',
        actionablePledge: 'I will prepare small PHP denominations for rural tourism desks and protect electronics in waterproof dry bags.'
      }
    ]
  },
  {
    id: 'responsible',
    number: '02',
    title: 'Responsible Community Tourism',
    subtitle: 'Ensuring tourism revenue directly uplifts Surigao del Sur’s local families and cooperatives',
    keyPrinciple: 'Travel in a way that strengthens community livelihoods and respects visitor capacity limits.',
    reminders: [
      {
        id: 'resp-guides',
        heading: 'Book Only Through Official Barangay & LGU Tourism Desks',
        explanation:
          'Each destination operates a transparent rotation system for boatmen, bamboo raft guides, and habal-habal drivers so every registered local household earns fairly.',
        actionablePledge: 'I will register at official LGU tourism centers and pay standard tariff rates to local guides.'
      },
      {
        id: 'resp-time',
        heading: 'Observe Scheduled Swimming Slots & Capacity Caps',
        explanation:
          'To prevent overcrowding at Hinatuan Enchanted River and Tinuy-an Falls, caretakers enforce hourly swimming rotations and clear the water during the 12:00 NN fish feeding.',
        actionablePledge: 'I will exit the water promptly when caretakers ring the conservation bell.'
      }
    ]
  },
  {
    id: 'environment',
    number: '03',
    title: 'Environmental Protection & Reef Care',
    subtitle: 'Safeguarding fragile subterranean aquifers, rainforest watersheds, and coral sandbars',
    keyPrinciple: 'Leave zero chemical or plastic footprint in Surigao del Sur’s interconnected water systems.',
    reminders: [
      {
        id: 'env-sunscreen',
        heading: 'Rinse Off Chemical Sunblock Before Entering Springs',
        explanation:
          'Hinatuan Enchanted River and Libuacan Cold Spring are closed-loop karst aquifers. Oxybenzone and heavy lotions harm cave-dwelling fish and cloud crystal-clear spring water.',
        actionablePledge: 'I will shower before entering freshwater springs and use only reef-safe mineral sun protection.'
      },
      {
        id: 'env-plastic',
        heading: 'Strict "Pack It In, Pack It Out" on Britania Islands',
        explanation:
          'Naked Island, Boslon, and Hagonoy have no municipal landfills. Single-use plastic bottles, food wrappers, and styrofoam are prohibited on the sandbars.',
        actionablePledge: 'I will bring a reusable insulated water flask and carry all trash back to the mainland.'
      }
    ]
  },
  {
    id: 'culture',
    number: '04',
    title: 'Respect for Local Culture & Heritage',
    subtitle: 'Honoring Surigaonon, Kamayo, and Manobo customs across Caraga Region XIII',
    keyPrinciple: 'Approach every town not merely as a photo backdrop, but as a living cultural home.',
    reminders: [
      {
        id: 'cult-sacred',
        heading: 'Respect Sacred Quiet Zones & Folklore Sanctuaries',
        explanation:
          'Avoid loud portable speakers, shouting, or throwing coins/objects into the main sapphire abyss of Enchanted River and the upper tiers of Tinuy-an Falls.',
        actionablePledge: 'I will keep noise low in forest sanctuaries and never toss objects or food into natural springs.'
      },
      {
        id: 'cult-local',
        heading: 'Support Authentic Artisans & Learn Local Greetings',
        explanation:
          'A simple "Marajaw na buntag" (Good morning) or "Salamat karajaw" (Thank you very much) builds instant warmth with Surigaonon hosts, weavers, and fisherfolk.',
        actionablePledge: 'I will greet local hosts respectfully and buy authentic crafts directly from community makers.'
      }
    ]
  }
];

export const PRESENTATION_NOTES = {
  courseTitle: 'MIDTERM – LIVING IN THE IT ERA (Performance Task 1)',
  projectTitle: 'Philippine Tourism Website Project: "Discover the Philippines Through Digital Travel"',
  institution: 'Metro Dumaguete College — College of Arts and Education',
  points: [
    {
      number: '01',
      title: 'Concept and Target Audience',
      summary:
        'Designed as "Karajaw Surigao," an authoritative digital tourism organization portal promoting Surigao del Sur (Caraga Region XIII) to domestic Filipino travelers, international eco-tourists, backpackers, and student educational groups seeking nature-first travel.'
    },
    {
      number: '02',
      title: 'Destinations Selected (5 Surigao del Sur Icons)',
      summary:
        'Features a complete hydro-geological diversity loop: (1) Hinatuan Enchanted River, (2) Tinuy-an Falls in Bislig, (3) Britania Group of Islands in San Agustin, (4) Laswitan Tide Pool & Lagoon in Cortes, and (5) Libuacan Cold Spring in Tagbina.'
    },
    {
      number: '03',
      title: 'Interactive Website Features',
      summary:
        'Includes a Category Filter & Deep-Dive Destination Modal, Custom Trip Itinerary Builder, Multi-Gateway Route Selector (Butuan/Davao/Tandag), Real-Time PHP Budget Calculator, Interactive Responsible Traveler Pledge Checklist, and Validated Visitor Inquiry Form.'
    },
    {
      number: '04',
      title: 'Design Choices & Visual Identity',
      summary:
        'Built with an editorial travel magazine aesthetic pairing Fraunces serif display typography with Plus Jakarta Sans prose and JetBrains Mono tabular figures on a warm sand canvas (#FAF8F5) with deep enchanted sapphire-teal accents.'
    },
    {
      number: '05',
      title: 'How the Website Helps Tourists',
      summary:
        'Solves real planning friction in Eastern Mindanao by consolidating accurate entrance fees, tide/rainbow timing windows, step-by-step bus transfers, cultural etiquette, and itemized trip budgeting in one accessible platform.'
    },
    {
      number: '06',
      title: 'Group Collaboration & Academic Attribution',
      summary:
        'Structured collaboratively across 6 specialized roles (Home & Brand Direction, Destination Research, Logistics & Budget Modeling, Cultural & Culinary Curation, Eco-Safety Guidelines, and UX/Inquiry Systems) with full source citations.'
    }
  ],
  references: [
    'Department of Tourism (DOT) Caraga Region XIII — Official Provincial Tourism Inventory: Surigao del Sur Eco-Tourism Sites.',
    'Provincial Tourism Office of Surigao del Sur (Tandag City) — Municipal Tariff, Environmental Fee, and Accredited Boat Dispatch Guidelines.',
    'Local Government Unit of Hinatuan — Hinatuan Enchanted River Underwater Cave Conservation & Noon Feeding Protocol.',
    'Bislig City Tourism Information Center — Tinuy-an Falls Protected Landscape & Barangay Burboanan Community Guides.',
    'Municipality of San Agustin & Cortes Tourism Advisories — Lianga Bay (Britania Islands) and Laswitan Tidal Safety Bulletins.',
    'Visual Documentation — Custom bespoke high-resolution editorial visuals generated and curated for the Karajaw Surigao Digital Travel Project.'
  ]
};
