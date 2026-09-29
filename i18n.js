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
    "Online-Betreuung": "Online coaching",
    "Mit oder ohne Wettkampf": "With or without competing",
    "Fundiert": "Grounded in science",
    "Flexibel": "Flexible",
    "Langfristig": "Long-term",
    "Leistungen": "Services",
    "Was du bekommst": "What you get",
    "Umgang mit Druck, Rückschlägen und Wettkampfnervosität.": "Dealing with pressure, setbacks and meet-day nerves.",
    "Raw, BVDK, −93 kg. Alle Ergebnisse auf": "Raw, BVDK, −93 kg. All results on",
    "Zwei Tarife": "Two plans",
    "Gleiche Leistungen in beiden Tarifen. Kein Umsatzsteuerausweis gemäß § 19 UStG.": "Same services in both plans. No VAT shown under § 19 UStG (German small-business rule).",
    "DESC:Wissenschaftlich fundiertes Online Powerlifting Coaching für Wettkampfathlet:innen und Einsteiger:innen. Individuell, flexibel, ohne Mindestvertragslaufzeit.": "DESC:Science-based online powerlifting coaching for competitive athletes and beginners. Individual, flexible, no minimum contract term.",
    "DESC:Fotos von Powerlifting-Wettkämpfen, Podien und Backstage-Momenten mit Leon Trillmich und seinen Athlet:innen.": "DESC:Photos from powerlifting meets, podiums and backstage moments with Leon Trillmich and his athletes.",
    "Wissenschaftlich fundiertes Online-Coaching für Powerlifter:innen. Für Wettkampfathlet:innen und für alle, die langfristig stärker werden wollen.": "Science-based online coaching for powerlifters. For competitive athletes and for anyone who wants to get stronger in the long term.",
    "Dein Ziel bestimmt den Plan.": "Your goal shapes the plan.",
    "Du willst zur Landes- oder Deutschen Meisterschaft, ein neues Total knacken oder deine erste Quali holen. Ich begleite dich mit periodisierter Vorbereitung, Peaking auf deinen Termin und Betreuung am Wettkampftag.": "You want to compete at state or national championships, hit a new total or get your first qualification. I support you with periodized prep, peaking for your meet date and support on meet day.",
    "Du willst Kniebeuge, Bankdrücken und Kreuzheben sauber lernen und stärker werden, ohne auf einen Wettkampf hinzuarbeiten. Wir bauen die Technik von Grund auf auf und steigern die Belastung so, dass du gesund bleibst.": "You want to learn the squat, bench press and deadlift properly and get stronger without working toward a meet. We build your technique from the ground up and increase the load in a way that keeps you healthy.",
    "Wissenschaftlich fundiert, aber nie starr": "Science-based, but never rigid",
    "Ich richte Volumen, Intensität und Belastungssteuerung an aktueller Evidenz aus und erkläre dir, warum ich etwas so plane.": "I base volume, intensity and load management on current evidence and explain why I program things the way I do.",
    "Job, Stress, Schlaf oder ein Zwicken: Ich passe deinen Plan jede Woche an dein Feedback an.": "Work, stress, sleep or a minor niggle: I adjust your plan every week based on your feedback.",
    "Ich denke in Saisons und Jahren. Ziel ist stetiger Fortschritt bei guter Gesundheit und eine Zusammenarbeit, die über einzelne Wettkämpfe hinausgeht.": "I think in seasons and years. The goal is steady progress in good health and a collaboration that goes beyond individual meets.",
    "Wir klären deine Ausgangslage, deine Verletzungshistorie und deine Ziele. Das ist die Basis für deinen Plan.": "We clarify your starting point, your injury history and your goals. That's the basis for your plan.",
    "Dein Plan wird jede Woche an dein Feedback und deinen Alltag angepasst. Du bekommst ihn in Google Sheets.": "Your plan is adjusted every week to your feedback and daily life. You get it in Google Sheets.",
    "Du erreichst mich direkt per WhatsApp, bei Fragen zu Training und Vorbereitung.": "You can reach me directly via WhatsApp for questions about training and preparation.",
    "Du schickst mir Videos, ich analysiere sie wöchentlich und gebe dir konkrete Cues zur Verbesserung.": "You send me videos, I analyze them weekly and give you concrete cues for improvement.",
    "Grundlegende Ernährungsberatung, passend zu Training und Gewichtsklasse.": "Basic nutrition guidance, matched to your training and weight class.",
    "Von der Bewerbung bis zum ersten Trainingsblock.": "From application to your first training block.",
    "Du füllst ein kurzes Formular aus und erzählst mir von deinen Zielen.": "You fill in a short form and tell me about your goals.",
    "Wir sprechen über deine Ausgangslage und deine Ziele und schauen, ob wir zusammenpassen.": "We talk about your starting point and your goals and see whether we're a good fit.",
    "Du bekommst deinen individuellen Plan für den ersten Block.": "You get your individual plan for the first block.",
    "Du trainierst und schickst Videos, ich analysiere und wir justieren nach.": "You train and send videos, I analyze them and we fine-tune.",
    "Sport begleitet mich seit meiner Kindheit. Um mich in den Teenagerjahren im Basketball auf das nächste Level zu bringen, habe ich den Kraftsport für mich entdeckt. Zunächst standen Athletik und performance-orientiertes Training im Vordergrund, nach ein paar Jahren bin ich beim Kraftdreikampf gelandet.": "Sport has been part of my life since childhood. To take my basketball to the next level as a teenager, I discovered strength training. At first the focus was on athleticism and performance-oriented training; after a few years I ended up in powerlifting.",
    "Im Studium der Sportwissenschaften, durch Fortbildungen und die Arbeit in verschiedenen Fitnessstudios und Sportvereinen habe ich theoretische Grundlagen und Praxiserfahrung gesammelt, die ich heute im Coaching weitergebe.": "Through my sport science degree, further education and work in various gyms and sports clubs I've gained theoretical foundations and practical experience that I now pass on in my coaching.",
    "„Meine Kniebeuge konnte ich von 145 kg beim ersten Wettkampf auf 185 kg bei der letzten Deutschen Meisterschaft steigern; meine Bank von 77,5 kg auf 100 kg […]. Leon hat genau das richtige Gespür dafür, wann man einen zusätzlichen Push braucht und wann es sinnvoll ist, einen Gang zurückzuschalten.“": "“I raised my squat from 145 kg at my first meet to 185 kg at the last German Nationals, and my bench from 77.5 kg to 100 kg […]. Leon has exactly the right instinct for when you need an extra push and when it makes sense to back off a gear.”",
    "„Während der Wettkampfvorbereitung war Leon äußerst zuverlässig, immer erreichbar und flexibel. Selbst spontane Anpassungen waren für ihn kein Problem.“": "“During meet prep Leon was extremely reliable, always reachable and flexible. Even spontaneous adjustments were no problem for him.”",
    "Wettkampftage, Podien und Backstage-Momente mit meinen Athlet:innen.": "Meet days, podiums and backstage moments with my athletes.",
    "Keine Mindestvertragslaufzeit. Du bleibst, solange es dir etwas bringt.": "No minimum contract term. You stay as long as it's worth it to you.",
    "Für Wettkampfathlet:innen, Einsteiger:innen und Kraftsportler:innen.": "For competitive athletes, beginners and strength athletes.",
    "Ermäßigter Preis für Athlet:innen in den Sub-Junior- und Junior-Klassen.": "Reduced price for athletes in the sub-junior and junior classes.",
    "Nein. Ich betreue Wettkampfathlet:innen genauso wie Einsteiger:innen ohne Wettkampfambitionen. Dein Ziel bestimmt die Planung.": "No. I coach competitive athletes just as I coach beginners with no competition ambitions. Your goal shapes the programming.",
    "Alles online: Dein Training läuft über Google Sheets, wir schreiben per WhatsApp, und du schickst mir regelmäßig Videos für die Technikanalyse.": "Everything is online: your training runs through Google Sheets, we message via WhatsApp, and you regularly send me videos for technique analysis.",
    "Kein Problem. Wir bauen die Technik in Kniebeuge, Bankdrücken und Kreuzheben gemeinsam auf und steigern die Belastung Schritt für Schritt.": "No problem. We build your technique in the squat, bench press and deadlift together and increase the load step by step.",
    "Ich analysiere deine Videos wöchentlich und gebe dir konkrete Technik-Cues.": "I analyze your videos every week and give you concrete technique cues.",
    "Nein, es gibt keine Mindestvertragslaufzeit. Ich möchte, dass du bleibst, weil es dir etwas bringt.": "No, there is no minimum contract term. I want you to stay because it's worth it to you.",
    "Erzähl mir in wenigen Minuten, wo du stehst und wo du hinwillst.": "Tell me in a few minutes where you are and where you want to go.",
    "Wettkämpfe, Backstage, Podien mit meinen Athlet:innen. Alle Fotos werden mit Einverständnis der Abgebildeten gezeigt.": "Meets, backstage, podiums with my athletes. All photos are shown with the consent of the people pictured.",
    "„Ich habe vor allem gelernt, dass Powerlifting nicht nur heißt, jede Woche mehr Gewicht zu bewegen, sondern dass Fortschritt ein Prozess ist, der aus Nachhaltigkeit und langfristiger Perspektive entsteht.“": "“Above all I learned that powerlifting isn't just about moving more weight every week, but that progress is a process built on sustainability and a long-term perspective.”",
    "„Auch die nächsten drei Wettkämpfe habe ich mit Leon zusammen gemacht, und wir konnten gemeinsam mein Total um weitere 75 kg […] steigern.“": "“I also did the next three meets with Leon, and together we raised my total by another 75 kg […].”",
    "Ich stehe selbst regelmäßig auf der Plattform und kenne das Regelwerk auch als Kampfrichter. Am Coaching macht mir am meisten Spaß, Menschen auf ihrer Reise zu begleiten und wachsen zu sehen, im Sport und außerhalb. Besonders gern arbeite ich mit Nachwuchsathlet:innen. Meine Wettkampferfahrung und das, was ich im Studium gelernt habe, gebe ich dabei gern weiter.": "I compete regularly myself and know the rulebook as a referee too. What I enjoy most about coaching is accompanying people on their journey and watching them grow, in sport and beyond. I particularly like working with young athletes. I'm happy to pass on my competition experience and what I learned in my studies.",
    "Ich coache auf Augenhöhe, als Miteinander und nicht nach dem Motto „Ich sage dir, wo es langgeht“. Mir ist wichtig, dass du dich selbstwirksam erlebst. Deshalb fördere ich deine Autonomie und deine Kompetenz, damit du verstehst, was du tust und warum.": "I coach as equals, as a partnership and not along the lines of “I'll tell you where to go”. It matters to me that you experience yourself as effective. That's why I support your autonomy and competence, so you understand what you're doing and why.",
    "Ich lebe und trainiere in Köln, im KSC Powergym oder im Oldschool Trainingslager. Dort stehe ich mit Vereinsmitgliedern von Kraftsport Colonia unter der Stange, die längst gute Freunde geworden sind. Wenn ich nicht gerade trainiere, findest du mich mit einem guten Kaffee in der Hand, bei einer Pizza oder bei irgendeiner Sportart, für die ich mich gerade begeistere.": "I live and train in Cologne, at KSC Powergym or at the Oldschool Trainingslager. There I train under the bar with members of my club Kraftsport Colonia, who have long since become good friends. When I'm not training, you'll find me with a good coffee in hand, over a pizza, or into whatever sport I'm currently excited about."
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
