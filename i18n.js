/* DE/EN toggle. German is the source text in the HTML; this file swaps in English.
   To change an English text, edit the value on the right. Keys must match the German text exactly. */
(function () {
  var EN = {
    "Stärker werden.": "Get stronger.",
    "Auf lange Sicht.": "For the long run.",
    "Aktiv": "Active",
    "Wettkämpfer (BVDK)": "Competitor (BVDK)",
    "Wettkämpfe seit 2022": "Meets since 2022",
    "Mein Ansatz": "My approach",
    "Wettkampferfahrung": "Competition experience",
    "Aktiv auf der Plattform": "Active on the platform",
    "Standard": "Standard",
    "pro Monat": "per month",
    "Sub-Junior:innen & Junior:innen": "Sub-juniors & juniors",
    "Gibt es eine Mindestvertragslaufzeit?": "Is there a minimum contract term?",
    "180 €": "€180",
    "150 €": "€150",
    "Coaching": "Coaching",
    "Ablauf": "Process",
    "Stimmen": "Testimonials",
    "Über mich": "About me",
    "Album": "Album",
    "FAQ": "FAQ",
    "Jetzt bewerben": "Apply now",
    "Online Powerlifting Coaching": "Online Powerlifting Coaching",
    "Mehr erfahren": "Learn more",
    "Sportwissenschaften": "Sport Science",
    "Für wen": "Who it's for",
    "Wettkampfathlet:innen": "Competitive athletes",
    "Einsteiger:innen & Kraftsportler:innen": "Beginners & strength athletes",
    "Anamnese & Zielbesprechung": "Intake & goal setting",
    "Wöchentliche Trainingsplanung": "Weekly programming",
    "Engmaschiger Kontakt": "Close contact",
    "Videofeedback": "Video feedback",
    "Ernährungsberatung": "Nutrition guidance",
    "Sportpsychologische Betreuung": "Sport psychology support",
    "So startest du": "How to get started",
    "Bewerben": "Apply",
    "Kennenlernen": "Getting to know each other",
    "Planung": "Planning",
    "Training & Feedback": "Training & feedback",
    "Das sagen meine Athlet:innen": "What my athletes say",
    "„Ich konnte dann also nach 12 Wochen Vorbereitung auf der Landesmeisterschaft NRW […] meine Werte von vor der Vorbereitung um 50 kg steigern.“": "“After 12 weeks of preparation, at the NRW State Championships I was able to improve my numbers from before the prep by 50 kg.”",
    "BVDK Powerlifter Jr. −83 kg": "BVDK powerlifter, junior −83 kg",
    "„Was Leon als Coach für mich besonders macht, ist die Kombination aus fachlicher Expertise, individueller Betreuung und einem echten Verständnis für die Person hinter dem/der Athlet:in.“": "“What makes Leon special as a coach for me is the combination of professional expertise, individual support and a genuine understanding of the person behind the athlete.”",
    "Powerlifterin · sechs gemeinsame Wettkämpfe": "Powerlifter · six meets together",
    "„Leons individuell angepasstes Trainingsprogramm und seine offene Kommunikation haben mir geholfen, massive Fortschritte in kurzer Zeit zu machen, ohne dabei meine körperliche Gesundheit zu beeinträchtigen.“": "“Leon's individually tailored training program and his open communication helped me make massive progress in a short time without compromising my physical health.”",
    "Powerlifter, 83 kg": "Powerlifter, 83 kg",
    "„Besonders beeindruckt hat mich seine professionelle und wissenschaftlich fundierte Herangehensweise, die er konsequent in das Training eingebracht hat.“": "“I was especially impressed by his professional, science-based approach, which he consistently brought into the training.”",
    "BVDK Powerlifterin −84 kg": "BVDK powerlifter −84 kg",
    "Auf der Plattform und daneben": "On the platform and beyond",
    "Alle Fotos ansehen": "View all photos",
    "Hi, ich bin Leon": "Hi, I'm Leon",
    "B.A. Sportwissenschaften": "B.A. Sport Science",
    "Schwerpunkt Psychologie und Bewegung": "Focus: psychology and movement",
    "M.A. Prävention, Rehabilitation & Gesundheitsmanagement": "M.A. Prevention, Rehabilitation & Health Management",
    "Deutsche Sporthochschule Köln · in Arbeit": "German Sport University Cologne · in progress",
    "Athletiktrainer-Lizenz": "Athletic trainer license",
    "Ernährungsberater-Lizenz": "Nutrition consultant license",
    "Fitnesstrainer-A-Lizenz": "Fitness trainer A license",
    "Kampfrichter-Landeslizenz": "State-level referee license",
    "Bundesverband Deutscher Kraftdreikämpfer (BVDK)": "German Powerlifting Federation (BVDK)",
    "Datum": "Date",
    "Wettkampf": "Meet",
    "KB": "SQ",
    "BD": "BP",
    "KH": "DL",
    "03.10.2025": "Oct 3, 2025",
    "07.06.2025": "Jun 7, 2025",
    "23.11.2024": "Nov 23, 2024",
    "17.11.2023": "Nov 17, 2023",
    "21.10.2023": "Oct 21, 2023",
    "LM NRW KDK Aktive": "NRW State Championships, Open",
    "Stadtmeisterschaft Gütersloh": "Gütersloh City Championships",
    "DM Classic Jugend/Junioren": "German Nationals, Classic Youth/Juniors",
    "LM NRW Jugend/Junioren": "NRW State Championships, Youth/Juniors",
    "252,5": "252.5",
    "177,5": "177.5",
    "446,42": "446.42",
    "242,5": "242.5",
    "167,5": "167.5",
    "426,51": "426.51",
    "237,5": "237.5",
    "162,5": "162.5",
    "247,5": "247.5",
    "647,5": "647.5",
    "412,40": "412.40",
    "157,5": "157.5",
    "395,09": "395.09",
    "232,5": "232.5",
    "607,5": "607.5",
    "387,02": "387.02",
    "Preise": "Pricing",
    "Häufige Fragen": "Frequently asked questions",
    "Muss ich Wettkämpfe machen?": "Do I have to compete?",
    "Wie läuft das Coaching ab?": "How does the coaching work?",
    "Ich habe noch nie Powerlifting gemacht – ist das okay?": "I've never done powerlifting – is that okay?",
    "Wie schnell bekomme ich Feedback zu meinen Videos?": "How quickly will I get feedback on my videos?",
    "Bereit?": "Ready?",
    "Lass uns loslegen": "Let's get started",
    "Oder schreib mir auf": "Or message me on",
    "Impressum": "Legal notice",
    "Datenschutz": "Privacy",
    "Zur Startseite": "Back to home",
    "Momente von der Plattform": "Moments from the platform",
    "ALT:Leon, Coach bei Real Gym Shady Coaching, hält den Zeigefinger vor den Mund": "ALT:Leon, coach at Real Gym Shady Coaching, holding a finger to his lips",
    "ALT:Athlet:innen und Coach Leon beim Wettkampf": "ALT:Athletes and coach Leon at a meet",
    "ALT:Leon beim Powerlifting-Wettkampf": "ALT:Leon at a powerlifting meet",
    "TITLE:Album – Wettkampf-Fotos | Real Gym Shady Coaching": "Album – Meet photos | Real Gym Shady Coaching",
    "TITLE:Impressum – Real Gym Shady Coaching": "Legal notice – Real Gym Shady Coaching",
    "TITLE:Datenschutz – Real Gym Shady Coaching": "Privacy policy – Real Gym Shady Coaching",
    "Wissenschaftlich fundiertes Online-Coaching für Powerlifter:innen – mit und ohne Wettkampf.": "Science-based online coaching for powerlifters – with or without competing.",
    "Online-Betreuung": "Online coaching",
    "Mit oder ohne Wettkampf": "With or without competing",
    "Periodisierte Vorbereitung, Peaking und Betreuung am Wettkampftag.": "Periodized prep, peaking and support on meet day.",
    "Saubere Technik in Kniebeuge, Bankdrücken und Kreuzheben – ohne Wettkampfambitionen.": "Clean technique in the squat, bench press and deadlift – no competition ambitions needed.",
    "Wissenschaftlich fundiert, nie starr": "Science-based, never rigid",
    "Fundiert": "Grounded in science",
    "Trainingsplanung auf Basis aktueller Sport- und Trainingswissenschaft.": "Programming based on current sport and exercise science.",
    "Flexibel": "Flexible",
    "Dein Plan passt sich jede Woche an Alltag, Stress und Tagesform an.": "Your plan adapts every week to your daily life, stress and how you feel.",
    "Langfristig": "Long-term",
    "Ich denke in Saisons und Jahren, nicht in Wochen.": "I think in seasons and years, not weeks.",
    "Leistungen": "Services",
    "Was du bekommst": "What you get",
    "Ausgangslage, Verletzungshistorie und Ziele.": "Starting point, injury history and goals.",
    "Angepasst an dein Feedback, umgesetzt in Google Sheets.": "Adjusted to your feedback, delivered in Google Sheets.",
    "Direkt per WhatsApp.": "Directly via WhatsApp.",
    "Wöchentliche Technikanalyse mit konkreten Cues.": "Weekly technique analysis with concrete cues.",
    "Grundlagen, abgestimmt auf Training und Gewichtsklasse.": "The basics, matched to your training and weight class.",
    "Umgang mit Druck, Rückschlägen und Wettkampfnervosität.": "Dealing with pressure, setbacks and meet-day nerves.",
    "Du füllst ein kurzes Formular aus.": "You fill in a short form.",
    "Wir klären deine Ziele und ob es passt.": "We clarify your goals and whether it's a fit.",
    "Du bekommst deinen individuellen Plan.": "You get your individual plan.",
    "Du trainierst, schickst Videos, wir justieren nach.": "You train, send videos, we fine-tune.",
    "Sport gehört zu meinem Leben, seit ich Kind bin. Über Basketball kam ich zum Krafttraining und später zum Kraftdreikampf.": "Sport has been part of my life since I was a kid. Basketball led me to strength training, and later to powerlifting.",
    "Ich stehe selbst regelmäßig auf der Plattform und kenne das Regelwerk auch als Kampfrichter.": "I compete regularly myself and know the rulebook as a referee too.",
    "Raw, BVDK, −93 kg. Alle Ergebnisse auf": "Raw, BVDK, −93 kg. All results on",
    "„Meine Kniebeuge konnte ich von 145 kg beim ersten Wettkampf auf 185 kg bei der letzten Deutschen Meisterschaft steigern; meine Bank von 77,5 kg auf 100 kg.“": "“I raised my squat from 145 kg at my first meet to 185 kg at the last German Nationals, and my bench from 77.5 kg to 100 kg.”",
    "„Ich habe vor allem gelernt, dass Powerlifting nicht nur heißt, jede Woche mehr Gewicht zu bewegen, sondern dass Fortschritt ein Prozess ist, der aus Nachhaltigkeit und langfristiger Perspektive entsteht.“": "“Above all I learned that powerlifting isn't just about moving more weight every week, but that progress is a process built on sustainability and a long-term perspective.”",
    "„Selbst spontane Anpassungen waren für ihn kein Problem.“": "“Even spontaneous adjustments were no problem for him.”",
    "„Auch die nächsten drei Wettkämpfe habe ich mit Leon zusammen gemacht, und wir konnten gemeinsam mein Total um weitere 75 kg […] steigern.“": "“I also did the next three meets with Leon, and together we raised my total by another 75 kg […].”",
    "Wettkampftage, Podien, Backstage.": "Meet days, podiums, backstage.",
    "Zwei Tarife": "Two plans",
    "Keine Mindestvertragslaufzeit.": "No minimum contract term.",
    "Für alle Athlet:innen.": "For all athletes.",
    "Ermäßigt für die Sub-Junior- und Junior-Klassen.": "Reduced for the sub-junior and junior classes.",
    "Gleiche Leistungen in beiden Tarifen. Kein Umsatzsteuerausweis gemäß § 19 UStG.": "Same services in both plans. No VAT shown under § 19 UStG (German small-business rule).",
    "Nein. Dein Ziel bestimmt den Plan.": "No. Your goal shapes the plan.",
    "Komplett online: Training in Google Sheets, Austausch per WhatsApp, Technikanalyse per Video.": "Fully online: training in Google Sheets, communication via WhatsApp, technique analysis via video.",
    "Ja. Wir bauen die Technik gemeinsam auf.": "Yes. We build your technique together.",
    "Ich analysiere deine Videos wöchentlich.": "I analyze your videos every week.",
    "Nein. Du bleibst, solange es dir etwas bringt.": "No. You stay as long as it's worth it to you.",
    "Die Bewerbung dauert wenige Minuten.": "The application takes a few minutes.",
    "Wettkämpfe, Backstage, Podien. Alle Fotos mit Einverständnis der Abgebildeten.": "Meets, backstage, podiums. All photos shown with the consent of the people pictured.",
    "DESC:Wissenschaftlich fundiertes Online Powerlifting Coaching für Wettkampfathlet:innen und Einsteiger:innen. Individuell, flexibel, ohne Mindestvertragslaufzeit.": "DESC:Science-based online powerlifting coaching for competitive athletes and beginners. Individual, flexible, no minimum contract term.",
    "DESC:Fotos von Powerlifting-Wettkämpfen, Podien und Backstage-Momenten mit Leon Trillmich und seinen Athlet:innen.": "DESC:Photos from powerlifting meets, podiums and backstage moments with Leon Trillmich and his athletes."
  };

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem('lang', v); } catch (e) {} }

  var items = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var p = n.parentNode.nodeName;
      return (p === 'SCRIPT' || p === 'STYLE' || !norm(n.nodeValue)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  var n;
  while ((n = walker.nextNode())) {
    var key = norm(n.nodeValue), en = EN[key];
    if (en === undefined) continue;
    var m = n.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
    items.push({ set: function (node, de, txt) { return function (l) { node.nodeValue = l === 'en' ? txt : de; }; }(n, n.nodeValue, m[1] + en + m[2]) });
  }
  Array.prototype.forEach.call(document.querySelectorAll('img[alt]'), function (img) {
    var de = img.getAttribute('alt'), en = EN['ALT:' + de];
    if (en) items.push({ set: function (l) { img.setAttribute('alt', l === 'en' ? en.slice(4) : de); } });
  });
  var deTitle = document.title, enTitle = EN['TITLE:' + deTitle];
  if (enTitle) items.push({ set: function (l) { document.title = l === 'en' ? enTitle : deTitle; } });
  var meta = document.querySelector('meta[name="description"]');
  if (meta) {
    var deDesc = meta.getAttribute('content'), enDesc = EN['DESC:' + deDesc];
    if (enDesc) items.push({ set: function (l) { meta.setAttribute('content', l === 'en' ? enDesc.slice(5) : deDesc); } });
  }

  var btn = document.querySelector('button.lang');
  function apply(l) {
    items.forEach(function (it) { it.set(l); });
    document.documentElement.lang = l;
    if (btn) {
      btn.textContent = l === 'en' ? 'DE' : 'EN';
      btn.setAttribute('aria-label', l === 'en' ? 'Auf Deutsch umstellen' : 'Switch to English');
    }
  }
  var cur = get() === 'en' ? 'en' : 'de';
  if (cur === 'en') apply('en'); else if (btn) apply('de');
  if (btn) btn.addEventListener('click', function () { cur = cur === 'en' ? 'de' : 'en'; set(cur); apply(cur); });
})();
