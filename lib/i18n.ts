export type Locale = "hr" | "en" | "de";

export const locales: Locale[] = ["hr", "en", "de"];

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}

import type { CarouselImageId } from "@/lib/carousel";

export const JOB_POSITIONS = [
  "team",
  "excavator",
  "driverC",
  "paving",
  "construction",
  "helper",
  "electrician",
] as const;

export type JobPosition = (typeof JOB_POSITIONS)[number];

export function isJobPosition(v: string): v is JobPosition {
  return (JOB_POSITIONS as readonly string[]).includes(v);
}

export type JobRole = {
  title: string;
  location?: string;
  desc?: string;
  tasks?: string[];
};

export type JobPayItem = {
  value: string;
  label: string;
};

export type JobListing = {
  id: string;
  featured?: boolean;
  badge?: string;
  title: string;
  slogan?: string;
  callouts?: string[];
  positionsLabel: string;
  positions: string;
  locationLabel: string;
  location: string;
  startLabel: string;
  start: string;
  intro: string;
  payHeading?: string;
  payItems?: JobPayItem[];
  openHeading: string;
  roles: JobRole[];
  tasksHeading?: string;
  tasks?: string[];
  expectHeading?: string;
  expect?: string[];
  offerHeading: string;
  offer: string[];
  preference?: string;
  photoAlts?: [string, string, string];
};

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  domain: string;
  company: string;
  slogan: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  addressLines: [string, string, string];
  oibValue: string;
  langLabel: string;
  langHr: string;
  langEn: string;
  langDe: string;
  nav: {
    home: string;
    about: string;
    gallery: string;
    job: string;
    apply: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
    ctaApply: string;
    ctaLearn: string;
  };
  about: {
    heading: string;
    lead: string;
    p1: string;
    p2: string;
    areas: [string, string, string];
    specialization: string;
    servicesHeading: string;
    services: string[];
    imageAlts: {
      values1: string;
      values2: string;
    };
  };
  gallery: {
    heading: string;
    lead: string;
    prev: string;
    next: string;
    imageAlts: Record<CarouselImageId, string>;
  };
  job: {
    heading: string;
    listings: JobListing[];
    cta: string;
    tagline: string;
    imageAlt: string;
  };
  apply: {
    heading: string;
    subheading: string;
    firstName: string;
    lastName: string;
    phone: string;
    position: string;
    positionPlaceholder: string;
    positions: Record<JobPosition, string>;
    note: string;
    notePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    call: string;
    write: string;
    required: string;
  };
  contact: {
    heading: string;
    emailLabel: string;
    phoneLabel: string;
    facebookLabel: string;
    addressLabel: string;
    oibLabel: string;
    rights: string;
  };
};

const hr: Messages = {
  metaTitle:
    "BARAKA GLOBAL SYSTEMS — Gotove ekipe, Stuttgart | Optička infrastruktura",
  metaDescription:
    "Tražimo gotove ekipe za optičku infrastrukturu u Stuttgartu od 01.10.2026. Također: bageristi i građevinski radnici (Mannheim, Dortmund) te industrijski električari (Švedska i Njemačka).",
  ogTitle: "Gotove ekipe — Stuttgart | Baraka Global Systems",
  domain: "barakags.hr",
  company: "BARAKA GLOBAL SYSTEMS",
  slogan: "Pouzdan partner. Jaka mreža. Bolja budućnost.",
  phone: "+385991648800",
  phoneDisplay: "+385 99 164 88 00",
  email: "info@barakags.hr",
  addressLines: ["Stjepana Radića 42A", "22000 Šibenik", "Hrvatska"],
  oibValue: "36398218292",
  langLabel: "Jezik",
  langHr: "Hrvatski",
  langEn: "English",
  langDe: "Deutsch",
  nav: {
    home: "Početna",
    about: "O nama",
    gallery: "Naši radovi",
    job: "Oglas",
    apply: "Prijava",
    contact: "Kontakt",
  },
  hero: {
    title: "Tražimo gotove ekipe za optičku infrastrukturu — Stuttgart",
    subtitle:
      "Stabilan posao i dobra zarada. Početak 01.10.2026. u Stuttgartu, Njemačka. Ostale pozicije: bageristi i građevinski radnici (Mannheim, Dortmund) te industrijski električari (Švedska i Njemačka).",
    highlight: "17 €/m za cijelu ekipu · 70–120 m/dan · ~3.800–5.000 €/mj.",
    ctaApply: "Prijavi se",
    ctaLearn: "Oglas Stuttgart",
  },
  about: {
    heading: "O nama",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems je hrvatska tvrtka specijalizirana za industrijsku montažu, elektroinstalacije te građevinske i infrastrukturne radove. Radove izvodimo vlastitim timovima na terenu.",
    p2: "Trenutačni fokus našeg poslovanja su projekti u Njemačkoj, gdje proširujemo tim i tražimo motivirane te kvalificirane radnike koji će raditi izravno s nama. Nudimo stabilan posao, konkurentne uvjete i potpunu podršku tijekom rada i integracije na projektu.",
    areas: [
      "Industrijska montaža",
      "Elektro instalacije",
      "Građevinski i infrastrukturni radovi",
    ],
    specialization: "Specijalizirani za EU projekte i terenske radove",
    servicesHeading: "Izvodimo",
    services: [
      "Industrijsku montažu",
      "Elektroinstalacijske radove",
      "Polaganje optičkih i energetskih kabela",
      "Građevinske i infrastrukturne radove",
      "Radove na energetskim sustavima",
      "Montažu metalnih konstrukcija",
      "Upravljanje i organizaciju projekata",
    ],
    imageAlts: {
      values1:
        "Sastavljanje i montaža, preciznost i kvaliteta, timski rad — Baraka Global Systems",
      values2:
        "Montaža i povezivanje, moderna tehnologija, zajedno smo jači — Baraka Global Systems",
    },
  },
  gallery: {
    heading: "Naši radovi",
    lead: "Pogled na terenske projekte, industrijsku montažu, elektroinstalacije i infrastrukturne radove koje izvodimo u Hrvatskoj i EU.",
    prev: "Prethodna slika",
    next: "Sljedeća slika",
    imageAlts: {
      slide01: "Tim na industrijskom projektu — Baraka Global Systems",
      slide02: "Industrijska montaža strojeva u proizvodnom pogonu",
      slide03: "Pregled i montaža industrijskih cjevovoda",
      slide04: "Terenski radovi na energetskom projektu",
      slide05: "Teška montaža industrijskih konstrukcija dizalicom",
      slide06: "Polaganje kabela bagerom s kablovodom",
      slide07: "Elektroinstalacije — montaža industrijskih ormara",
      slide08: "Projekt na terenu — energetska infrastruktura",
      slide09: "Radovi na energetskom sustavu — industrijski objekt",
      slide10: "Iskop rovova za polaganje optičkih i energetskih kabela",
      slide11: "Polaganje energetskih kabela u rovu — Njemačka",
      slide12: "Sanacija i popravak kolovoza",
      slide13: "Polaganje kabela u urbanom području",
      slide14: "Rezanje rova za optičku infrastrukturu",
      slide15: "Građevinski radovi — asfaltiranje ceste",
    },
  },
  job: {
    heading: "Otvorene pozicije",
    listings: [
      {
        id: "stuttgart",
        featured: true,
        badge: "Gotove ekipe · Stuttgart",
        title: "Tražimo gotove ekipe za optičku infrastrukturu",
        slogan: "Gradimo povezanu budućnost!",
        callouts: [
          "Stabilan posao i dobra zarada",
          "Tanke cijevi za optiku",
        ],
        positionsLabel: "Sastav ekipe",
        positions:
          "1 bagerist • 1 vozač C • 3 radnika kocke/flaste • 2–3 pomoćna radnika",
        locationLabel: "Lokacija",
        location: "Stuttgart, Njemačka",
        startLabel: "Početak rada",
        start: "01.10.2026.",
        intro:
          "Baraka Global Systems traži gotove ekipe (7–8 ljudi) za radove na optičkoj infrastrukturi u Stuttgartu. Prednost imaju uigrane ekipe koje se već poznaju.",
        payHeading: "Plaća i zarada",
        payItems: [
          {
            value: "17 €",
            label: "po dužnom metru za cijelu ekipu",
          },
          {
            value: "70–120 m",
            label: "dnevno trenutno izvode ekipe (ovisno o trasi)",
          },
          {
            value: "3.800–5.000 €",
            label:
              "procijenjena mjesečna zarada po osobi (dijeli se prema dogovoru ekipe)",
          },
        ],
        openHeading: "Sastav ekipe (7–8 ljudi)",
        roles: [
          {
            title: "1 Bagerist",
            location: "Stuttgart",
            desc: "Strojni iskop mini bagerom na trasi optičke infrastrukture.",
          },
          {
            title: "1 Vozač C kategorije",
            location: "Stuttgart",
            desc: "Prijevoz i logistika ekipe te opreme.",
          },
          {
            title: "3 radnika za postavljanje kocki / flasti",
            location: "Stuttgart",
            desc: "Skidanje i vraćanje postojećih betonskih kocki / flasti.",
          },
          {
            title: "2–3 pomoćna radnika",
            location: "Stuttgart",
            desc: "Pomoć ekipe na trasi, rovu i završnom uređenju.",
          },
        ],
        tasksHeading: "Opis posla",
        tasks: [
          "Skidanje postojećih betonskih kocki / flasti.",
          "Strojni iskop mini bagerom (širina cca 45 cm, dubina do 60 cm).",
          "Polaganje optičkih mikrocijevi (najčešće 1–3 cijevi).",
          "Zatrpavanje rova.",
          "Vraćanje kocki / flasti u prvobitno stanje.",
        ],
        offerHeading: "Što osiguravamo",
        offer: [
          "Prijava i ugovor u hrvatskoj tvrtki.",
          "Smještaj.",
          "Prijevoz.",
          "Svi strojevi, vozila i alat za rad.",
        ],
        preference:
          "Tražimo uigrane ekipe koje se već poznaju.",
        photoAlts: [
          "Iskop rova za optičku infrastrukturu",
          "Polaganje tankih cijevi za optiku",
          "Priprema trase za mikrocijevi",
        ],
      },
      {
        id: "construction",
        title: "BARAKA GLOBAL SYSTEMS d.o.o. ZAPOŠLJAVA",
        positionsLabel: "Pozicije",
        positions:
          "Bageristi • Građevinski radnici • Pomoćni građevinski radnici",
        locationLabel: "Lokacija",
        location: "Mannheim i Dortmund, Njemačka",
        startLabel: "Početak rada",
        start: "Po dogovoru",
        intro:
          "Baraka Global Systems d.o.o. traži radnike za izgradnju optičke infrastrukture na projektima u Mannheimu i Dortmundu.",
        openHeading: "Otvorena radna mjesta",
        roles: [
          {
            title: "Bageristi za rad na izgradnji optičke infrastrukture",
            location: "Mannheim i Dortmund",
            tasks: [
              "Iskop kanala za polaganje optičke infrastrukture.",
              "Širina kanala 45 cm, dubina do 50 cm.",
              "Upravljanje mini bagerima i drugom građevinskom mehanizacijom.",
              "Suradnja s monterima i građevinskim timom.",
              "Rad prema projektnoj dokumentaciji i sigurnosnim pravilima.",
            ],
          },
          {
            title: "Građevinski radnici za optičke projekte",
            location: "Mannheim i Dortmund",
            tasks: [
              "Skidanje betonskih ploča i opločnika.",
              "Ručni iskop i priprema trase.",
              "Polaganje zaštitnih cijevi i optičkih kabela.",
              "Vraćanje betonskih ploča i opločnika u prvobitno stanje.",
              "Završno uređenje površina nakon izvedenih radova.",
            ],
          },
          {
            title:
              "Pomoćni građevinski radnici za betonske ploče i opločnike",
            location: "Mannheim i Dortmund",
            tasks: [
              "Pomoć pri skidanju i vraćanju betonskih ploča i opločnika.",
              "Priprema gradilišta i radne trase.",
              "Pomoć pri polaganju zaštitnih cijevi i optičkih instalacija.",
              "Održavanje urednosti i sigurnosti gradilišta.",
              "Ostali pomoćni građevinski poslovi prema uputama voditelja gradilišta.",
            ],
          },
        ],
        expectHeading: "Od kandidata očekujemo",
        expect: [
          "Iskustvo na građevinskim ili infrastrukturnim radovima je prednost.",
          "Odgovornost, samostalnost i timski rad.",
          "Vozačka dozvola B kategorije je prednost.",
          "Spremnost za rad u Njemačkoj.",
        ],
        offerHeading: "Nudimo",
        offer: [
          "Dugoročan i siguran posao.",
          "Redovita i stimulativna primanja.",
          "Organiziran smještaj.",
          "Prijevoz do gradilišta.",
          "Osiguranu radnu opremu.",
          "Mogućnost stalnog zaposlenja i profesionalnog napredovanja.",
        ],
      },
      {
        id: "electrician",
        title: "Tražimo industrijske električare — Švedska / Njemačka",
        positionsLabel: "Pozicije",
        positions: "Industrijski električari / Elektromonteri",
        locationLabel: "Lokacija",
        location: "Švedska i Njemačka",
        startLabel: "Početak rada",
        start: "Po dogovoru",
        intro:
          "Baraka Global Systems d.o.o. zbog novih projekata i proširenja poslovanja zapošljava industrijske električare i elektromontere.",
        openHeading: "Opis posla",
        roles: [
          {
            title: "Industrijski električari / Elektromonteri",
            location: "Švedska i Njemačka",
            tasks: [
              "Rad u automobilskoj industriji.",
              "Industrijske elektroinstalacije.",
              "Montaža i spajanje elektroormara.",
              "Elektroinstalacije strojeva i proizvodnih linija.",
              "Polaganje i spajanje energetskih i signalnih kabela.",
              "Montaža kabelskih trasa.",
              "Rad prema elektro-shemama i tehničkoj dokumentaciji.",
              "Instalacija senzora, motora i industrijske opreme.",
              "Održavanje industrijskih postrojenja.",
            ],
          },
        ],
        expectHeading: "Od kandidata očekujemo",
        expect: [
          "Iskustvo u industrijskim elektroinstalacijama ili srodnim poslovima.",
          "Odgovornost, samostalnost i timski rad.",
          "Spremnost za rad u Švedskoj i Njemačkoj.",
        ],
        offerHeading: "Nudimo",
        offer: [
          "Dugoročan i siguran posao.",
          "Redovna i konkurentna primanja.",
          "Organiziran i plaćen smještaj.",
          "Organiziran prijevoz.",
          "Urednu prijavu i potrebnu dokumentaciju.",
          "Rad na ozbiljnim industrijskim projektima.",
          "Mogućnost dugoročne suradnje i napredovanja.",
        ],
        preference:
          "Prednost imaju kandidati s iskustvom u autoindustriji, industrijskim postrojenjima i automatiziranim proizvodnim linijama.",
      },
    ],
    cta: "Prijavi se na oglas",
    tagline: "Gradimo povezanu budućnost!",
    imageAlt:
      "Baraka Global Systems — rad na terenu, optička infrastruktura, tim na projektu u Njemačkoj",
  },
  apply: {
    heading: "Prijava",
    subheading:
      "Ispunite kratku formu — javit ćemo vam se u najkraćem roku. Traje manje od minute.",
    firstName: "Ime",
    lastName: "Prezime",
    phone: "Broj mobitela",
    position: "Pozicija",
    positionPlaceholder: "Odaberite poziciju",
    positions: {
      team: "Gotova ekipa (Stuttgart)",
      excavator: "Bagerist",
      driverC: "Vozač C kategorije",
      paving: "Radnik za postavljanje kocki / flasti",
      construction: "Građevinski radnik",
      helper: "Pomoćni građevinski radnik",
      electrician: "Industrijski električar / Elektromonter",
    },
    note: "Kratka napomena (opcionalno)",
    notePlaceholder: "Iskustvo, dostupnost, dodatne informacije…",
    submit: "Pošalji prijavu",
    submitting: "Slanje…",
    success:
      "Hvala! Vaša prijava je zaprimljena. Kontaktirat ćemo vas uskoro.",
    error: "Prijava nije poslana. Pokušajte ponovno ili nas nazovite.",
    call: "Nazovite",
    write: "Pišite nam",
    required: "Obavezno polje",
  },
  contact: {
    heading: "Kontakt",
    emailLabel: "E-pošta",
    phoneLabel: "Telefon",
    facebookLabel: "Facebook",
    addressLabel: "Adresa",
    oibLabel: "OIB",
    rights: "Sva prava pridržana.",
  },
};

const en: Messages = {
  metaTitle:
    "BARAKA GLOBAL SYSTEMS — Complete teams, Stuttgart | Optical infrastructure",
  metaDescription:
    "We are hiring complete teams for optical infrastructure in Stuttgart from 01.10.2026. Also open: excavator operators and construction workers (Mannheim, Dortmund) and industrial electricians (Sweden and Germany).",
  ogTitle: "Complete teams — Stuttgart | Baraka Global Systems",
  domain: "barakags.hr",
  company: "BARAKA GLOBAL SYSTEMS",
  slogan: "Reliable partner. Strong network. Better future.",
  phone: "+385991648800",
  phoneDisplay: "+385 99 164 88 00",
  email: "info@barakags.hr",
  addressLines: ["Stjepana Radića 42A", "22000 Šibenik", "Croatia"],
  oibValue: "36398218292",
  langLabel: "Language",
  langHr: "Hrvatski",
  langEn: "English",
  langDe: "Deutsch",
  nav: {
    home: "Home",
    about: "About",
    gallery: "Our work",
    job: "Vacancies",
    apply: "Apply",
    contact: "Contact",
  },
  hero: {
    title: "We're hiring complete teams for optical infrastructure — Stuttgart",
    subtitle:
      "Stable work and good earnings. Start 01.10.2026 in Stuttgart, Germany. Other roles: excavator operators and construction workers (Mannheim, Dortmund) plus industrial electricians (Sweden and Germany).",
    highlight: "€17/m for the whole team · 70–120 m/day · ~€3,800–€5,000 / month",
    ctaApply: "Apply now",
    ctaLearn: "Stuttgart offer",
  },
  about: {
    heading: "About us",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems is a Croatian company specialised in industrial assembly, electrical installations, and construction and infrastructure works. We perform the work with our own field teams.",
    p2: "Our current focus is on projects in Germany, where we are expanding our team and looking for motivated, qualified workers to join us directly. We offer stable employment, competitive conditions, and full support throughout work and integration on the project.",
    areas: [
      "Industrial assembly",
      "Electrical installations",
      "Construction and infrastructure works",
    ],
    specialization: "Specialised in EU projects and field work",
    servicesHeading: "What we deliver",
    services: [
      "Industrial assembly",
      "Electrical installation work",
      "Laying of optical and power cables",
      "Construction and infrastructure works",
      "Energy system works",
      "Metal structure assembly",
      "Project management and organisation",
    ],
    imageAlts: {
      values1:
        "Assembly and mounting, precision and quality, teamwork — Baraka Global Systems",
      values2:
        "Installation and connection, modern technology, stronger together — Baraka Global Systems",
    },
  },
  gallery: {
    heading: "Our work",
    lead: "A look at field projects, industrial assembly, electrical installations and infrastructure works we deliver in Croatia and the EU.",
    prev: "Previous image",
    next: "Next image",
    imageAlts: {
      slide01: "Team on an industrial project — Baraka Global Systems",
      slide02: "Industrial assembly of machinery in a production hall",
      slide03: "Inspection and assembly of industrial piping",
      slide04: "Field work on an energy project",
      slide05: "Heavy industrial assembly with a mobile crane",
      slide06: "Cable laying with excavator and cable plough",
      slide07: "Electrical installations — assembly of industrial panels",
      slide08: "On-site project — energy infrastructure",
      slide09: "Energy system works at an industrial facility",
      slide10: "Trenching for optical and power cable installation",
      slide11: "Power cable laying in a trench — Germany",
      slide12: "Road surface repair and restoration",
      slide13: "Cable laying in an urban area",
      slide14: "Trench cutting for optical infrastructure",
      slide15: "Construction works — road asphalt paving",
    },
  },
  job: {
    heading: "Open positions",
    listings: [
      {
        id: "stuttgart",
        featured: true,
        badge: "Complete teams · Stuttgart",
        title: "We're looking for complete teams for optical infrastructure",
        slogan: "Building a connected future!",
        callouts: ["Stable work and good earnings", "Thin pipes for fiber optics"],
        positionsLabel: "Team composition",
        positions:
          "1 excavator operator • 1 category C driver • 3 paving/slab workers • 2–3 assistants",
        locationLabel: "Location",
        location: "Stuttgart, Germany",
        startLabel: "Start date",
        start: "01.10.2026",
        intro:
          "Baraka Global Systems is hiring complete teams (7–8 people) for optical infrastructure works in Stuttgart. Preference is given to coordinated teams who already know each other.",
        payHeading: "Pay and earnings",
        payItems: [
          {
            value: "€17",
            label: "per linear meter for the whole team",
          },
          {
            value: "70–120 m",
            label: "per day teams currently complete (depending on the route)",
          },
          {
            value: "€3,800–€5,000",
            label:
              "estimated individual monthly pay (split by team agreement)",
          },
        ],
        openHeading: "Team composition (7–8 people)",
        roles: [
          {
            title: "1 Excavator operator",
            location: "Stuttgart",
            desc: "Mini excavator trenching on the optical infrastructure route.",
          },
          {
            title: "1 Category C driver",
            location: "Stuttgart",
            desc: "Transport and logistics for the team and equipment.",
          },
          {
            title: "3 workers for paving stones / slabs",
            location: "Stuttgart",
            desc: "Removing and restoring existing paving stones / slabs.",
          },
          {
            title: "2–3 assistant workers",
            location: "Stuttgart",
            desc: "Supporting the team on the route, trench and finishing work.",
          },
        ],
        tasksHeading: "Job description",
        tasks: [
          "Remove existing paving stones / slabs.",
          "Mini excavator trench (about 45 cm wide, up to 60 cm deep).",
          "Lay optical micro-cables / micro-ducts (usually 1–3).",
          "Backfill the trench.",
          "Restore paving stones / slabs to their original condition.",
        ],
        offerHeading: "What we provide",
        offer: [
          "Registration and contract via the Croatian company.",
          "Accommodation.",
          "Transport.",
          "All machinery, vehicles and tools for the work.",
        ],
        preference:
          "We are looking for coordinated teams who already know each other.",
        photoAlts: [
          "Trenching for optical infrastructure",
          "Laying thin pipes for fiber optics",
          "Route preparation for micro-ducts",
        ],
      },
      {
        id: "construction",
        title: "BARAKA GLOBAL SYSTEMS d.o.o. IS HIRING",
        positionsLabel: "Positions",
        positions:
          "Excavator operators • Construction workers • Construction assistants",
        locationLabel: "Location",
        location: "Mannheim and Dortmund, Germany",
        startLabel: "Start date",
        start: "By agreement",
        intro:
          "Baraka Global Systems d.o.o. is hiring workers for optical infrastructure construction projects in Mannheim and Dortmund.",
        openHeading: "Open roles",
        roles: [
          {
            title: "Excavator operators for optical infrastructure construction",
            location: "Mannheim and Dortmund",
            tasks: [
              "Trench excavation for laying optical infrastructure.",
              "Trench width 45 cm, depth up to 50 cm.",
              "Operating mini excavators and other construction machinery.",
              "Cooperation with installers and the construction team.",
              "Work according to project documentation and safety rules.",
            ],
          },
          {
            title: "Construction workers for optical projects",
            location: "Mannheim and Dortmund",
            tasks: [
              "Removing concrete slabs and paving stones.",
              "Manual excavation and route preparation.",
              "Laying protective ducts and optical cables.",
              "Restoring concrete slabs and paving to original condition.",
              "Final surface finishing after completed works.",
            ],
          },
          {
            title: "Construction assistants for concrete slabs and paving",
            location: "Mannheim and Dortmund",
            tasks: [
              "Assisting with removing and reinstalling concrete slabs and paving.",
              "Site and work route preparation.",
              "Assisting with laying protective ducts and optical installations.",
              "Maintaining site orderliness and safety.",
              "Other auxiliary construction tasks as directed by the site manager.",
            ],
          },
        ],
        expectHeading: "What we expect",
        expect: [
          "Experience in construction or infrastructure work is an advantage.",
          "Responsibility, independence and teamwork.",
          "Category B driving licence is an advantage.",
          "Willingness to work in Germany.",
        ],
        offerHeading: "What we offer",
        offer: [
          "Long-term, secure employment.",
          "Regular and competitive pay.",
          "Organised accommodation.",
          "Transport to the construction site.",
          "Work equipment provided.",
          "Opportunity for permanent employment and career development.",
        ],
      },
      {
        id: "electrician",
        title: "Hiring industrial electricians — Sweden / Germany",
        positionsLabel: "Positions",
        positions: "Industrial electricians / Electrical installers",
        locationLabel: "Location",
        location: "Sweden and Germany",
        startLabel: "Start date",
        start: "By agreement",
        intro:
          "Baraka Global Systems d.o.o. is hiring industrial electricians and electrical installers due to new projects and business expansion.",
        openHeading: "Job description",
        roles: [
          {
            title: "Industrial electricians / Electrical installers",
            location: "Sweden and Germany",
            tasks: [
              "Work in the automotive industry.",
              "Industrial electrical installations.",
              "Assembly and connection of electrical cabinets.",
              "Electrical installations for machines and production lines.",
              "Laying and connecting power and signal cables.",
              "Installation of cable trays and routes.",
              "Work according to electrical schematics and technical documentation.",
              "Installation of sensors, motors and industrial equipment.",
              "Maintenance of industrial plants.",
            ],
          },
        ],
        expectHeading: "What we expect",
        expect: [
          "Experience in industrial electrical installations or related work.",
          "Responsibility, independence and teamwork.",
          "Willingness to work in Sweden and Germany.",
        ],
        offerHeading: "What we offer",
        offer: [
          "Long-term, secure employment.",
          "Regular and competitive pay.",
          "Organised and paid accommodation.",
          "Organised transport.",
          "Proper registration and required documentation.",
          "Work on serious industrial projects.",
          "Opportunity for long-term cooperation and career development.",
        ],
        preference:
          "Candidates with experience in the automotive industry, industrial plants and automated production lines are preferred.",
      },
    ],
    cta: "Apply for this job",
    tagline: "Building a connected future!",
    imageAlt:
      "Baraka Global Systems — field work, optical infrastructure, team on a project in Germany",
  },
  apply: {
    heading: "Application",
    subheading:
      "Fill in the short form — we will get back to you shortly. Takes less than a minute.",
    firstName: "First name",
    lastName: "Last name",
    phone: "Mobile number",
    position: "Position",
    positionPlaceholder: "Select a position",
    positions: {
      team: "Complete team (Stuttgart)",
      excavator: "Excavator operator",
      driverC: "Category C driver",
      paving: "Paving / slab worker",
      construction: "Construction worker",
      helper: "Construction assistant",
      electrician: "Industrial electrician / Electrical installer",
    },
    note: "Short note (optional)",
    notePlaceholder: "Experience, availability, additional info…",
    submit: "Submit application",
    submitting: "Sending…",
    success: "Thank you! Your application has been received. We will contact you soon.",
    error: "Application could not be sent. Please try again or call us.",
    call: "Call us",
    write: "Email us",
    required: "Required field",
  },
  contact: {
    heading: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    facebookLabel: "Facebook",
    addressLabel: "Address",
    oibLabel: "Company ID (OIB)",
    rights: "All rights reserved.",
  },
};

const de: Messages = {
  metaTitle:
    "BARAKA GLOBAL SYSTEMS — Eingespielte Teams, Stuttgart | Glasfaserinfrastruktur",
  metaDescription:
    "Wir suchen eingespielte Teams für Glasfaserinfrastruktur in Stuttgart ab 01.10.2026. Außerdem: Baggerfahrer und Bauarbeiter (Mannheim, Dortmund) sowie Industrieelektriker (Schweden und Deutschland).",
  ogTitle: "Eingespielte Teams — Stuttgart | Baraka Global Systems",
  domain: "barakags.hr",
  company: "BARAKA GLOBAL SYSTEMS",
  slogan: "Zuverlässiger Partner. Starkes Netz. Bessere Zukunft.",
  phone: "+385991648800",
  phoneDisplay: "+385 99 164 88 00",
  email: "info@barakags.hr",
  addressLines: ["Stjepana Radića 42A", "22000 Šibenik", "Kroatien"],
  oibValue: "36398218292",
  langLabel: "Sprache",
  langHr: "Hrvatski",
  langEn: "English",
  langDe: "Deutsch",
  nav: {
    home: "Start",
    about: "Über uns",
    gallery: "Unsere Arbeiten",
    job: "Stellen",
    apply: "Bewerbung",
    contact: "Kontakt",
  },
  hero: {
    title:
      "Wir suchen eingespielte Teams für Glasfaserinfrastruktur — Stuttgart",
    subtitle:
      "Stabile Arbeit und gutes Einkommen. Beginn 01.10.2026 in Stuttgart, Deutschland. Weitere Stellen: Baggerfahrer und Bauarbeiter (Mannheim, Dortmund) sowie Industrieelektriker (Schweden und Deutschland).",
    highlight:
      "17 €/m für das gesamte Team · 70–120 m/Tag · ca. 3.800–5.000 €/Monat",
    ctaApply: "Jetzt bewerben",
    ctaLearn: "Angebot Stuttgart",
  },
  about: {
    heading: "Über uns",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems ist ein kroatisches Unternehmen, spezialisiert auf Industriemontage, Elektroinstallationen sowie Bau- und Infrastrukturarbeiten. Die Arbeiten führen wir mit eigenen Teams vor Ort aus.",
    p2: "Unser aktueller Schwerpunkt sind Projekte in Deutschland, wo wir unser Team erweitern und motivierte, qualifizierte Mitarbeiter suchen, die direkt mit uns arbeiten. Wir bieten sichere Beschäftigung, wettbewerbsfähige Bedingungen und vollständige Unterstützung während der Arbeit und Integration im Projekt.",
    areas: [
      "Industriemontage",
      "Elektroinstallationen",
      "Bau- und Infrastrukturarbeiten",
    ],
    specialization: "Spezialisiert auf EU-Projekte und Arbeiten vor Ort",
    servicesHeading: "Unser Leistungsspektrum",
    services: [
      "Industriemontage",
      "Elektroinstallationsarbeiten",
      "Verlegung von Glasfaser- und Energiekabeln",
      "Bau- und Infrastrukturarbeiten",
      "Arbeiten an Energiesystemen",
      "Montage von Metallkonstruktionen",
      "Projektleitung und -organisation",
    ],
    imageAlts: {
      values1:
        "Montage und Zusammenbau, Präzision und Qualität, Teamarbeit — Baraka Global Systems",
      values2:
        "Montage und Anschluss, moderne Technologie, gemeinsam stärker — Baraka Global Systems",
    },
  },
  gallery: {
    heading: "Unsere Arbeiten",
    lead: "Einblicke in Projekte vor Ort, Industriemontage, Elektroinstallationen und Infrastrukturarbeiten in Kroatien und der EU.",
    prev: "Vorheriges Bild",
    next: "Nächstes Bild",
    imageAlts: {
      slide01: "Team bei einem Industrieprojekt — Baraka Global Systems",
      slide02: "Industriemontage von Maschinen in der Produktionshalle",
      slide03: "Prüfung und Montage industrieller Rohrleitungen",
      slide04: "Arbeiten vor Ort an einem Energieprojekt",
      slide05: "Schwere Industriemontage mit Autokran",
      slide06: "Kabelverlegung mit Bagger und Kabelpflug",
      slide07: "Elektroinstallationen — Montage industrieller Schaltschränke",
      slide08: "Projekt vor Ort — Energieinfrastruktur",
      slide09: "Arbeiten an Energiesystemen in einer Industrieanlage",
      slide10: "Grabenaushub für Glasfaser- und Energiekabel",
      slide11: "Verlegung von Energiekabeln im Graben — Deutschland",
      slide12: "Sanierung und Ausbesserung der Fahrbahn",
      slide13: "Kabelverlegung in einem städtischen Gebiet",
      slide14: "Grabenschnitt für Glasfaserinfrastruktur",
      slide15: "Bauarbeiten — Asphaltierung einer Straße",
    },
  },
  job: {
    heading: "Offene Stellen",
    listings: [
      {
        id: "stuttgart",
        featured: true,
        badge: "Eingespielte Teams · Stuttgart",
        title: "Wir suchen eingespielte Teams für Glasfaserinfrastruktur",
        slogan: "Wir bauen eine vernetzte Zukunft!",
        callouts: [
          "Stabile Arbeit und gutes Einkommen",
          "Dünne Rohre für Glasfaser",
        ],
        positionsLabel: "Teamzusammensetzung",
        positions:
          "1 Baggerfahrer • 1 Fahrer Klasse C • 3 Pflaster-/Plattenleger • 2–3 Hilfskräfte",
        locationLabel: "Standort",
        location: "Stuttgart, Deutschland",
        startLabel: "Arbeitsbeginn",
        start: "01.10.2026",
        intro:
          "Baraka Global Systems sucht eingespielte Teams (7–8 Personen) für Glasfaserinfrastruktur in Stuttgart. Bevorzugt werden Teams, die sich bereits kennen.",
        payHeading: "Vergütung",
        payItems: [
          {
            value: "17 €",
            label: "pro laufendem Meter für das gesamte Team",
          },
          {
            value: "70–120 m",
            label: "leisten Teams derzeit pro Tag (abhängig von der Trasse)",
          },
          {
            value: "3.800–5.000 €",
            label:
              "geschätztes individuelles Monatseinkommen (Aufteilung nach Teamvereinbarung)",
          },
        ],
        openHeading: "Teamzusammensetzung (7–8 Personen)",
        roles: [
          {
            title: "1 Baggerfahrer",
            location: "Stuttgart",
            desc: "Aushub mit Minibagger auf der Glasfasertrasse.",
          },
          {
            title: "1 Fahrer Klasse C",
            location: "Stuttgart",
            desc: "Transport und Logistik für Team und Ausrüstung.",
          },
          {
            title: "3 Arbeiter für Pflaster / Platten",
            location: "Stuttgart",
            desc: "Entfernen und Wiederherstellen vorhandener Pflastersteine / Platten.",
          },
          {
            title: "2–3 Hilfskräfte",
            location: "Stuttgart",
            desc: "Unterstützung des Teams an Trasse, Graben und bei der Fertigstellung.",
          },
        ],
        tasksHeading: "Tätigkeitsbeschreibung",
        tasks: [
          "Entfernen vorhandener Pflastersteine / Platten.",
          "Aushub mit Minibagger (ca. 45 cm breit, bis 60 cm tief).",
          "Verlegen von Glasfaser-Mikrorohren (meist 1–3 Rohre).",
          "Verfüllen des Grabens.",
          "Wiederherstellung von Pflaster / Platten im Originalzustand.",
        ],
        offerHeading: "Was wir stellen",
        offer: [
          "Anmeldung und Vertrag über das kroatische Unternehmen.",
          "Unterkunft.",
          "Transport.",
          "Alle Maschinen, Fahrzeuge und Werkzeuge für die Arbeit.",
        ],
        preference:
          "Wir suchen eingespielte Teams, die sich bereits kennen.",
        photoAlts: [
          "Grabenaushub für Glasfaserinfrastruktur",
          "Verlegen dünner Rohre für Glasfaser",
          "Trassenvorbereitung für Mikrorohre",
        ],
      },
      {
        id: "construction",
        title: "BARAKA GLOBAL SYSTEMS d.o.o. STELLT EIN",
        positionsLabel: "Positionen",
        positions: "Baggerfahrer • Bauarbeiter • Bauhilfskräfte",
        locationLabel: "Standort",
        location: "Mannheim und Dortmund, Deutschland",
        startLabel: "Arbeitsbeginn",
        start: "Nach Vereinbarung",
        intro:
          "Baraka Global Systems d.o.o. sucht Mitarbeiter für den Bau von Glasfaserinfrastruktur in Mannheim und Dortmund.",
        openHeading: "Offene Arbeitsplätze",
        roles: [
          {
            title: "Baggerfahrer für den Bau von Glasfaserinfrastruktur",
            location: "Mannheim und Dortmund",
            tasks: [
              "Grabenaushub für die Verlegung von Glasfaserinfrastruktur.",
              "Grabenbreite 45 cm, Tiefe bis 50 cm.",
              "Bedienung von Minibaggern und anderer Baumaschinen.",
              "Zusammenarbeit mit Monteuren und dem Bauteam.",
              "Arbeit gemäß Projektdokumentation und Sicherheitsvorschriften.",
            ],
          },
          {
            title: "Bauarbeiter für Glasfaserprojekte",
            location: "Mannheim und Dortmund",
            tasks: [
              "Entfernen von Betonplatten und Pflastersteinen.",
              "Handaushub und Trassenvorbereitung.",
              "Verlegen von Schutzrohren und Glasfaserkabeln.",
              "Wiederherstellung von Betonplatten und Pflaster im Originalzustand.",
              "Endgültige Oberflächenbearbeitung nach Abschluss der Arbeiten.",
            ],
          },
          {
            title: "Bauhilfskräfte für Betonplatten und Pflaster",
            location: "Mannheim und Dortmund",
            tasks: [
              "Unterstützung beim Entfernen und Wiedereinbau von Betonplatten und Pflaster.",
              "Vorbereitung der Baustelle und Arbeitsstrecke.",
              "Unterstützung bei der Verlegung von Schutzrohren und Glasfaserinstallationen.",
              "Erhalt von Ordnung und Sicherheit auf der Baustelle.",
              "Weitere Hilfsarbeiten im Bau nach Anweisung des Bauleiters.",
            ],
          },
        ],
        expectHeading: "Was wir erwarten",
        expect: [
          "Erfahrung im Bau oder in der Infrastruktur ist von Vorteil.",
          "Verantwortung, Selbstständigkeit und Teamarbeit.",
          "Führerschein Klasse B ist von Vorteil.",
          "Bereitschaft zur Arbeit in Deutschland.",
        ],
        offerHeading: "Was wir bieten",
        offer: [
          "Langfristige, sichere Beschäftigung.",
          "Regelmäßige und attraktive Vergütung.",
          "Organisierte Unterkunft.",
          "Transport zur Baustelle.",
          "Arbeitsausrüstung gestellt.",
          "Möglichkeit zur Festanstellung und beruflichen Entwicklung.",
        ],
      },
      {
        id: "electrician",
        title: "Industrieelektriker / Elektromonteure – Schweden / Deutschland",
        positionsLabel: "Positionen",
        positions: "Industrieelektriker / Elektromonteure",
        locationLabel: "Standort",
        location: "Schweden und Deutschland",
        startLabel: "Arbeitsbeginn",
        start: "Nach Vereinbarung",
        intro:
          "Baraka Global Systems d.o.o. stellt aufgrund neuer Projekte und der Geschäftserweiterung Industrieelektriker und Elektromonteure ein.",
        openHeading: "Tätigkeitsbeschreibung",
        roles: [
          {
            title: "Industrieelektriker / Elektromonteure",
            location: "Schweden und Deutschland",
            tasks: [
              "Arbeit in der Automobilindustrie.",
              "Industrielle Elektroinstallationen.",
              "Montage und Anschluss von Schaltschränken.",
              "Elektroinstallationen an Maschinen und Produktionslinien.",
              "Verlegen und Anschließen von Energie- und Signalkabeln.",
              "Montage von Kabeltrassen.",
              "Arbeit nach Elektroschaltplänen und technischer Dokumentation.",
              "Installation von Sensoren, Motoren und Industrieausrüstung.",
              "Wartung industrieller Anlagen.",
            ],
          },
        ],
        expectHeading: "Was wir erwarten",
        expect: [
          "Erfahrung in industriellen Elektroinstallationen oder verwandten Tätigkeiten.",
          "Verantwortung, Selbstständigkeit und Teamarbeit.",
          "Bereitschaft zur Arbeit in Schweden und Deutschland.",
        ],
        offerHeading: "Was wir bieten",
        offer: [
          "Langfristige, sichere Beschäftigung.",
          "Regelmäßige und wettbewerbsfähige Vergütung.",
          "Organisierte und bezahlte Unterkunft.",
          "Organisierten Transport.",
          "Ordnungsgemäße Anmeldung und erforderliche Dokumentation.",
          "Arbeit an seriösen Industrieprojekten.",
          "Möglichkeit zur langfristigen Zusammenarbeit und Weiterentwicklung.",
        ],
        preference:
          "Bevorzugt werden Kandidaten mit Erfahrung in der Automobilindustrie, in Industrieanlagen und an automatisierten Produktionslinien.",
      },
    ],
    cta: "Für diese Stelle bewerben",
    tagline: "Wir bauen eine vernetzte Zukunft!",
    imageAlt:
      "Baraka Global Systems — Arbeit vor Ort, Glasfaserinfrastruktur, Team bei einem Projekt in Deutschland",
  },
  apply: {
    heading: "Bewerbung",
    subheading:
      "Füllen Sie das kurze Formular aus — wir melden uns in Kürze. Dauert weniger als eine Minute.",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Handynummer",
    position: "Position",
    positionPlaceholder: "Position wählen",
    positions: {
      team: "Eingespieltes Team (Stuttgart)",
      excavator: "Baggerfahrer",
      driverC: "Fahrer Klasse C",
      paving: "Arbeiter für Pflaster / Platten",
      construction: "Bauarbeiter",
      helper: "Bauhilfskraft",
      electrician: "Industrieelektriker / Elektromonteur",
    },
    note: "Kurze Notiz (optional)",
    notePlaceholder: "Erfahrung, Verfügbarkeit, weitere Infos…",
    submit: "Bewerbung senden",
    submitting: "Wird gesendet…",
    success:
      "Vielen Dank! Ihre Bewerbung wurde erhalten. Wir melden uns in Kürze.",
    error:
      "Bewerbung konnte nicht gesendet werden. Bitte erneut versuchen oder anrufen.",
    call: "Anrufen",
    write: "E-Mail schreiben",
    required: "Pflichtfeld",
  },
  contact: {
    heading: "Kontakt",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    facebookLabel: "Facebook",
    addressLabel: "Adresse",
    oibLabel: "Unternehmens-ID (OIB)",
    rights: "Alle Rechte vorbehalten.",
  },
};

export const messages: Record<Locale, Messages> = { hr, en, de };

export function getMessages(locale: string): Messages {
  if (isLocale(locale)) return messages[locale];
  return messages.hr;
}
