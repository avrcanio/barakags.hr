export type Locale = "hr" | "en" | "de";

export const locales: Locale[] = ["hr", "en", "de"];

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}

export type JobPosition = "excavator" | "fiber" | "helper";

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
    job: string;
    apply: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaApply: string;
    ctaLearn: string;
  };
  about: {
    heading: string;
    lead: string;
    p1: string;
    p2: string;
    imageAlts: {
      values1: string;
      values2: string;
    };
  };
  job: {
    heading: string;
    title: string;
    positionsLabel: string;
    positions: string;
    locationLabel: string;
    location: string;
    startLabel: string;
    start: string;
    intro: string;
    intro2: string;
    openHeading: string;
    roles: { title: string; desc: string }[];
    tasksHeading: string;
    tasks: string[];
    expectHeading: string;
    expect: string[];
    offerHeading: string;
    offer: string[];
    cta: string;
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
    addressLabel: string;
    oibLabel: string;
    rights: string;
  };
};

const hr: Messages = {
  metaTitle: "BARAKA GLOBAL SYSTEMS — Poslovi u Njemačkoj",
  metaDescription:
    "Hrvatska agencija za zapošljavanje. Rad na projektima optičke infrastrukture u Njemačkoj — bageristi, monteri, pomoćni radnici. Osiguran smještaj.",
  ogTitle: "Posao u Njemačkoj — Baraka Global Systems",
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
    job: "Oglas",
    apply: "Prijava",
    contact: "Kontakt",
  },
  hero: {
    title: "Vaš most do sigurnog posla i pouzdanih radnika",
    subtitle:
      "Specijalizirana hrvatska agencija za zapošljavanje u zemlji i inozemstvu. Trenutačni fokus: stabilni poslovi u Njemačkoj.",
    ctaApply: "Prijavi se",
    ctaLearn: "Saznaj više",
  },
  about: {
    heading: "O nama",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems je specijalizirana hrvatska agencija za zapošljavanje i posredovanje pri zapošljavanju u zemlji i inozemstvu. Naš cilj je jednostavan: povezati motivirane i kvalificirane radnike s provjerenim poslodavcima.",
    p2: "Trenutačni fokus našeg poslovanja je na tržištu Njemačke, gdje u suradnji s vodećim partnerima osiguravamo stabilne poslove, konkurentne uvjete i potpunu podršku za radnike tijekom cijelog procesa integracije. Bilo da ste radnik koji traži novu priliku ili tvrtka koja treba pouzdan tim, Baraka Global Systems je vaš siguran oslonac.",
    imageAlts: {
      values1:
        "Sastavljanje i montaža, preciznost i kvaliteta, timski rad — Baraka Global Systems",
      values2:
        "Montaža i povezivanje, moderna tehnologija, zajedno smo jači — Baraka Global Systems",
    },
  },
  job: {
    heading: "Otvorene pozicije",
    title: "Rad na projektima u Njemačkoj",
    positionsLabel: "Pozicije",
    positions: "Bageristi • Monteri optičkih mreža • Pomoćni radnici (m/ž/d)",
    locationLabel: "Lokacija",
    location: "Njemačka",
    startLabel: "Početak rada",
    start: "Hitno / Po dogovoru",
    intro:
      "Zbog kontinuiranog rasta, povećanog obujma posla i širenja dugoročnih projekata u Njemačkoj, Baraka Global Systems traži veći broj motiviranih djelatnika za rad na izgradnji i implementaciji moderne optičke infrastrukture.",
    intro2:
      "Tražimo ozbiljne, odgovorne i timski orijentirane ljude koji žele stabilnu karijeru i rad u profesionalnom okruženju.",
    openHeading: "Otvorena radna mjesta",
    roles: [
      {
        title: "Bagerist / Rukovatelj građevinskim strojevima",
        desc: "Strojni iskop, priprema rovova i rad na terenu uz modernu mehanizaciju.",
      },
      {
        title: "Monter optičkih mreža i kabela",
        desc: "Polaganje, spajanje i terminiranje optičke infrastrukture.",
      },
      {
        title: "Pomoćni radnik",
        desc: "Polaganje kabela, građevinski i opći terenski radovi uz tim.",
      },
    ],
    tasksHeading: "Opis poslova",
    tasks: [
      "Strojni iskop i priprema rovova za polaganje telekomunikacijske mreže.",
      "Polaganje, razvlačenje i uvlačenje optičkih i energetskih kabela.",
      "Spajanje, terminiranje i montaža napredne optičke infrastrukture.",
      "Pomoćni građevinski, zemljani i opći terenski radovi.",
      "Sanacija i vraćanje terena u prvobitno stanje nakon završetka radova.",
      "Strogo pridržavanje zaštite na radu i internih standarda kvalitete.",
    ],
    expectHeading: "Što očekujemo",
    expect: [
      "Poželjno (ali ne i uvjet) iskustvo na građevinskim, monterskim ili sličnim terenskim poslovima.",
      "Visoka razina odgovornosti, točnosti i ozbiljnosti u pristupu radu.",
      "Spremnost na timski rad i rad na terenu u Njemačkoj.",
      "Vozačka dozvola B kategorije (prednost, ali nije eliminacijski faktor).",
      "Poznavanje njemačkog jezika je prednost, ali nije uvjet za prijavu.",
    ],
    offerHeading: "Što nudimo",
    offer: [
      "Dugoročan i siguran posao na stabilnim projektima u Njemačkoj.",
      "Iznadprosječna i redovita primanja u skladu s iskustvom i pozicijom.",
      "Potpuno organiziran i plaćen smještaj blizu mjesta rada.",
      "Osigurana radna odjeća, zaštitna oprema i moderni strojevi.",
      "Brz i jednostavan proces početka rada (administrativni koraci).",
      "Profesionalno, korektno i podržavajuće radno okruženje.",
      "Mogućnost profesionalnog napredovanja kroz dugoročnu suradnju.",
    ],
    cta: "Prijavi se na oglas",
    imageAlt:
      "Baraka Global Systems — rad na terenu, montaža optike, tim na projektu u Njemačkoj",
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
      excavator: "Bagerist / Rukovatelj strojeva",
      fiber: "Monter optičkih mreža",
      helper: "Pomoćni radnik",
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
    addressLabel: "Adresa",
    oibLabel: "OIB",
    rights: "Sva prava pridržana.",
  },
};

const en: Messages = {
  metaTitle: "BARAKA GLOBAL SYSTEMS — Jobs in Germany",
  metaDescription:
    "Croatian recruitment agency. Work on optical infrastructure projects in Germany — excavator operators, fiber installers, assistants. Accommodation provided.",
  ogTitle: "Jobs in Germany — Baraka Global Systems",
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
    job: "Vacancies",
    apply: "Apply",
    contact: "Contact",
  },
  hero: {
    title: "Your bridge to secure jobs and reliable workers",
    subtitle:
      "Specialised Croatian recruitment agency at home and abroad. Current focus: stable positions in Germany.",
    ctaApply: "Apply now",
    ctaLearn: "Learn more",
  },
  about: {
    heading: "About us",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems is a specialised Croatian employment and recruitment agency operating domestically and internationally. Our goal is simple: to connect motivated, qualified workers with verified employers.",
    p2: "Our current business focus is the German market, where we work with leading partners to provide stable jobs, competitive conditions, and full support for workers throughout the integration process. Whether you are looking for a new opportunity or need a reliable team, Baraka Global Systems is your trusted partner.",
    imageAlts: {
      values1:
        "Assembly and mounting, precision and quality, teamwork — Baraka Global Systems",
      values2:
        "Installation and connection, modern technology, stronger together — Baraka Global Systems",
    },
  },
  job: {
    heading: "Open positions",
    title: "Work on projects in Germany",
    positionsLabel: "Positions",
    positions: "Excavator operators • Fiber network installers • Assistants (m/f/d)",
    locationLabel: "Location",
    location: "Germany",
    startLabel: "Start date",
    start: "Immediate / By agreement",
    intro:
      "Due to continued growth, increased workload, and expansion of long-term projects in Germany, Baraka Global Systems is hiring motivated professionals for the construction and implementation of modern optical infrastructure.",
    intro2:
      "We are looking for serious, responsible, team-oriented people who want a stable career in a professional environment.",
    openHeading: "Open roles",
    roles: [
      {
        title: "Excavator operator / Plant operator",
        desc: "Mechanical excavation, trench preparation, and on-site work with modern machinery.",
      },
      {
        title: "Fiber network and cable installer",
        desc: "Laying, splicing, and terminating optical infrastructure.",
      },
      {
        title: "Assistant worker",
        desc: "Cable laying, construction and general field work as part of the team.",
      },
    ],
    tasksHeading: "Job description",
    tasks: [
      "Mechanical excavation and trench preparation for telecommunications networks.",
      "Laying, pulling, and blowing optical and power cables.",
      "Splicing, terminating, and installing advanced optical infrastructure.",
      "Auxiliary construction, earthworks, and general field tasks.",
      "Site restoration after completion of works.",
      "Strict adherence to health & safety and internal quality standards.",
    ],
    expectHeading: "What we expect",
    expect: [
      "Experience in construction, installation, or similar field work is preferred but not required.",
      "High level of responsibility, accuracy, and professionalism.",
      "Willingness to work in a team and on site in Germany.",
      "Category B driving licence is an advantage but not mandatory.",
      "German language skills are an advantage; not required to apply.",
    ],
    offerHeading: "What we offer",
    offer: [
      "Long-term, secure employment on stable projects in Germany.",
      "Above-average, regular pay according to experience and role.",
      "Fully organised and paid accommodation near the workplace.",
      "Work clothing, protective equipment, and modern machinery provided.",
      "Fast, straightforward onboarding (administrative support).",
      "Professional, fair, and supportive working environment.",
      "Opportunity for career development through long-term cooperation.",
    ],
    cta: "Apply for this job",
    imageAlt:
      "Baraka Global Systems — field work, fiber installation, team on a project in Germany",
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
      excavator: "Excavator operator",
      fiber: "Fiber network installer",
      helper: "Assistant worker",
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
    addressLabel: "Address",
    oibLabel: "Company ID (OIB)",
    rights: "All rights reserved.",
  },
};

const de: Messages = {
  metaTitle: "BARAKA GLOBAL SYSTEMS — Jobs in Deutschland",
  metaDescription:
    "Kroatische Personalagentur. Arbeit an Glasfaser-Infrastrukturprojekten in Deutschland — Baggerfahrer, Monteure, Helfer. Unterkunft organisiert.",
  ogTitle: "Job in Deutschland — Baraka Global Systems",
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
    job: "Stellen",
    apply: "Bewerbung",
    contact: "Kontakt",
  },
  hero: {
    title: "Ihre Brücke zu sicheren Jobs und zuverlässigen Mitarbeitern",
    subtitle:
      "Spezialisierte kroatische Personalagentur im In- und Ausland. Aktueller Fokus: stabile Arbeitsplätze in Deutschland.",
    ctaApply: "Jetzt bewerben",
    ctaLearn: "Mehr erfahren",
  },
  about: {
    heading: "Über uns",
    lead: "Baraka Global Systems",
    p1: "Baraka Global Systems ist eine spezialisierte kroatische Agentur für Arbeitsvermittlung und Personalvermittlung im In- und Ausland. Unser Ziel ist einfach: motivierte, qualifizierte Arbeitskräfte mit geprüften Arbeitgebern zu verbinden.",
    p2: "Unser aktueller Geschäftsschwerpunkt liegt auf dem deutschen Markt, wo wir mit führenden Partnern stabile Arbeitsplätze, wettbewerbsfähige Bedingungen und vollständige Unterstützung für Arbeitnehmer während des gesamten Integrationsprozesses bieten. Ob Sie eine neue Chance suchen oder ein zuverlässiges Team benötigen — Baraka Global Systems ist Ihr sicherer Partner.",
    imageAlts: {
      values1:
        "Montage und Zusammenbau, Präzision und Qualität, Teamarbeit — Baraka Global Systems",
      values2:
        "Montage und Anschluss, moderne Technologie, gemeinsam stärker — Baraka Global Systems",
    },
  },
  job: {
    heading: "Offene Stellen",
    title: "Arbeit an Projekten in Deutschland",
    positionsLabel: "Positionen",
    positions:
      "Baggerfahrer • Glasfasernetz-Monteure • Hilfskräfte (m/w/d)",
    locationLabel: "Standort",
    location: "Deutschland",
    startLabel: "Arbeitsbeginn",
    start: "Sofort / Nach Vereinbarung",
    intro:
      "Aufgrund des kontinuierlichen Wachstums, erhöhten Arbeitsvolumens und der Ausweitung langfristiger Projekte in Deutschland sucht Baraka Global Systems motivierte Fachkräfte für den Bau und die Implementierung moderner Glasfaserinfrastruktur.",
    intro2:
      "Wir suchen ernsthafte, verantwortungsvolle und teamorientierte Menschen, die eine stabile Karriere in einem professionellen Umfeld anstreben.",
    openHeading: "Offene Arbeitsplätze",
    roles: [
      {
        title: "Baggerfahrer / Maschinenführer",
        desc: "Mechanischer Aushub, Grabenvorbereitung und Arbeit vor Ort mit moderner Technik.",
      },
      {
        title: "Monteur für Glasfasernetze und Kabel",
        desc: "Verlegen, Spleißen und Anschließen der optischen Infrastruktur.",
      },
      {
        title: "Hilfsarbeiter",
        desc: "Kabelverlegung, Bau- und allgemeine Feldarbeiten im Team.",
      },
    ],
    tasksHeading: "Tätigkeitsbeschreibung",
    tasks: [
      "Mechanischer Aushub und Grabenvorbereitung für Telekommunikationsnetze.",
      "Verlegen, Ziehen und Einblasen von Glasfaser- und Energiekabeln.",
      "Spleißen, Anschließen und Montage fortschrittlicher optischer Infrastruktur.",
      "Hilfsarbeiten im Bau, Erdarbeiten und allgemeine Feldarbeiten.",
      "Wiederherstellung des Geländes nach Abschluss der Arbeiten.",
      "Strikte Einhaltung von Arbeitsschutz und internen Qualitätsstandards.",
    ],
    expectHeading: "Was wir erwarten",
    expect: [
      "Erfahrung im Bau, bei Montage- oder ähnlichen Feldarbeiten ist erwünscht, aber keine Voraussetzung.",
      "Hohes Maß an Verantwortung, Genauigkeit und Professionalität.",
      "Bereitschaft zur Teamarbeit und zum Einsatz vor Ort in Deutschland.",
      "Führerschein Klasse B ist von Vorteil, aber nicht zwingend.",
      "Deutschkenntnisse sind von Vorteil; für die Bewerbung nicht erforderlich.",
    ],
    offerHeading: "Was wir bieten",
    offer: [
      "Langfristige, sichere Beschäftigung an stabilen Projekten in Deutschland.",
      "Überdurchschnittliche, regelmäßige Vergütung je nach Erfahrung und Position.",
      "Vollständig organisierte und bezahlte Unterkunft in der Nähe des Arbeitsplatzes.",
      "Arbeitskleidung, Schutzausrüstung und moderne Maschinen.",
      "Schneller, unkomplizierter Einstieg (administrative Unterstützung).",
      "Professionelles, faires und unterstützendes Arbeitsumfeld.",
      "Möglichkeit zur beruflichen Entwicklung durch langfristige Zusammenarbeit.",
    ],
    cta: "Für diese Stelle bewerben",
    imageAlt:
      "Baraka Global Systems — Arbeit vor Ort, Glasfasermontage, Team bei einem Projekt in Deutschland",
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
      excavator: "Baggerfahrer / Maschinenführer",
      fiber: "Glasfasernetz-Monteur",
      helper: "Hilfsarbeiter",
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
