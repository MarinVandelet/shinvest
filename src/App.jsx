import { useEffect, useMemo, useState } from "react";
import {
  CircleDollarSign,
  CheckCircle2,
  Gavel,
  Layers,
  LockKeyhole,
  Mic2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserCog,
  Wallet,
  WandSparkles,
} from "lucide-react";

const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

const navItems = [
  { label: "Contribution", icon: Layers },
  { label: "Abonnements", icon: Wallet },
  { label: "Whitelists", icon: ShieldCheck },
];
const sliderImages = [assetPath("slide1.webp"), assetPath("slide2.webp"), assetPath("slide3.webp")];
const sliderCaptions = [
  {
    badge: "Slide 1",
    title: "Permissions",
    subtitle: "Accede directement au catalogue des permissions",
    target: "Contribution",
  },
  {
    badge: "Slide 2",
    title: "Abonnements",
    subtitle: "Consulte les offres abonnement et packs premium",
    target: "Abonnements",
  },
  {
    badge: "Slide 3",
    title: "Whitelists",
    subtitle: "Voir la section whitelist et les acces WL",
    target: "Whitelists",
  },
];

const subscriptionPlans = [
  {
    name: "OPAL INVEST",
    tier: "LIMITED, BOT = BOT+",
    monthlyPrice: 499.99,
    banner: assetPath("OPALBANNER.png"),
    accent: "#6fc2ff",
    benefits: [
      "SYS Fabulous BOT + suppression des dogs/typeuse",
      "Appel exclusif (voc 15 min avec les fondateurs)",
      "Upgrade role perso au dessus de Ryu",
      "Couleur degradee role perso",
      "WL clic droit +12 (TO/MUTE/MOVE)",
      "WL +ban limite x2 (30 min)",
      "Giveaway journalier +",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
    ],
    commands: [
      "/wet",
      "/gift (5/jour)",
      "/rerank (5/jour)",
      "/protect-salon",
      "/protect-role",
      "/affichage",
      "/aide",
    ],
  },
  {
    name: "RUBY INVEST",
    tier: "LIMITED, CROWN+",
    monthlyPrice: 199.99,
    banner: assetPath("RUBYBANNER.png"),
    accent: "#ff6c96",
    benefits: [
      "Appel exclusif (voc 10 min avec les fondateurs)",
      "Upgrade role perso au dessus des Gestions",
      "Couleur degradee role perso",
      "WL clic droit +10 (TO/MUTE/MOVE)",
      "WL +ban limite x2 (30 min)",
      "Giveaway journalier +",
      "Flex UHQ (role deco superieur & holographique)",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
    ],
    commands: [
      "/gift (4/jour)",
      "/rerank (4/jour)",
      "/protect-salon",
      "/protect-role",
      "/affichage",
      "/aide",
    ],
  },
  {
    name: "DIAMOND INVEST",
    tier: "ROYAL+",
    monthlyPrice: 99.99,
    banner: assetPath("DIAMSBANNER.png"),
    accent: "#ab7bff",
    benefits: [
      "Appel exclusif (voc 5 min avec les fondateurs)",
      "Upgrade role perso au dessus de Legende",
      "WL +ban limite x2 (30 min)",
      "Couleur degradee role perso (5 predefinis)",
      "WL clic droit +6 (TO/MUTE/MOVE)",
      "Flex UHQ",
      "Limite augmentee +2 (dog-add)",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
    ],
    commands: [
      "/protect-salon",
      "/rerank",
      "/gift (3/jour)",
      "/protect-role",
      "/affichage",
      "/aide",
    ],
  },
  {
    name: "PLATINUM INVEST",
    tier: "CORE",
    monthlyPrice: 59.99,
    banner: assetPath("DIAMONDBANNER.png"),
    accent: "#5ee8ff",
    benefits: [
      "Couleur degradee role perso (3 predefinis)",
      "Owner Fabulous BOT",
      "Limite augmentee +1 (dog-add)",
      "WL clic droit +3 (TO/MUTE/MOVE)",
      "Flex UHQ",
      "Giveaway journalier +",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
    ],
    commands: ["/protect-role", "/gift (2/jour)", "/rerank (2/jour)", "/affichage", "/aide"],
  },
  {
    name: "GOLD INVEST",
    tier: "STANDARD+",
    monthlyPrice: 39.99,
    banner: assetPath("GOLDBANNER.png"),
    accent: "#ffbe40",
    benefits: [
      "WL clic droit +2 (TO/MUTE/MOVE)",
      "Flex UHQ",
      "Giveaway journalier +",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
    ],
    commands: ["/affichage", "/rerank (2/jour)", "/gift (2/jour)", "/aide"],
  },
  {
    name: "SILVER INVEST",
    tier: "ENTRY",
    monthlyPrice: 19.99,
    banner: assetPath("SILVERBANNER.png"),
    accent: "#c5d0db",
    benefits: [
      "Flex UHQ",
      "Giveaway journalier +",
      "Role @Acces 👑 (chat-owner, vocaux owner, reunions owner)",
      "WL clic droit +1 (TO/MUTE/MOVE)",
    ],
    commands: ["/aide", "/rerank (2/jour)", "/gift (1/jour)"],
  },
];

const whitelistGroups = [
  {
    id: "fabulous",
    title: "Fabulous Pack",
    subtitle: "Actions directes et version systeme (niveau superieur).",
    icon: WandSparkles,
    accent: "#c786ff",
    items: [
      {
        name: "OWNER FABULOUS",
        price: 125,
        hook: "Pack d'action pour dog-add, wakeup, snap et typeu.",
        commands: [
          { name: "/dog-add", desc: "met la cible en laisse (blocage pseudo en vocal public)" },
          { name: "/wakeup", desc: "reveil + spam mp pour attirer l'attention" },
          { name: "/snap", desc: "spam mp pour obtenir un snap" },
          { name: "/tipeu", desc: "rename en Z et lock du pseudo cible" },
        ],
        note: "Usage responsable requis, evite le harcelement.",
      },
      {
        name: "SYS FABULOUS",
        price: 325,
        requirement: "Owner requis",
        hook: "Version systeme avec suppression des laisses/fistons/typeus.",
        commands: [
          { name: "/fiston", desc: "rename Z (rename=ban), si la cible rename elle est ban" },
        ],
      },
    ],
  },
  {
    id: "vocal",
    title: "Controle Vocal",
    subtitle: "Gestion des vocaux prives, movement et moderation voice.",
    icon: Mic2,
    accent: "#5ecbff",
    items: [
      {
        name: "PACK WL VOCAL",
        price: 150,
        hook: "Mute clic droit, move et deco WL.",
      },
      {
        name: "OWNER VOICEMASTER",
        price: 200,
        hook: "Privatise un vocal et gere les acces.",
        commands: [
          { name: "=pv", desc: "rend un vocal prive ou le repasse public" },
          { name: "=acces", desc: "donne acces a un membre dans un vocal prive" },
          { name: "=all", desc: "donne acces a tous les membres deja presents" },
          { name: "=mv", desc: "upgrade commande pour acces vocal prive et pv" },
          { name: "=mp", desc: "permet de DM un membre" },
          { name: "=join", desc: "rejoint certains vocaux pv (categorie privee)" },
          { name: "=wl", desc: "donne la WL a quelqu'un ou affiche la WL" },
          { name: "=pvlist", desc: "affiche la liste des salons pv" },
        ],
      },
      {
        name: "SYS VOICEMASTER",
        price: 300,
        requirement: "Owner requis",
        hook: "Domine les vocaux: menotte, follow, move global.",
        commands: [
          { name: "=menotte", desc: "menotte quelqu'un (1 max)" },
          { name: "=wlmv", desc: "autorise un user a te mv" },
          { name: "=vmall", desc: "move tout le salon vers un vocal cible" },
          { name: "=follow", desc: "permet de suivre quelqu'un" },
        ],
      },
      {
        name: "VOCAL PERSO",
        price: 150,
        monthly: 30,
        requirement: "@CROWN minimum",
        hook: "Salon vocal perso editable (nom + permissions).",
      },
    ],
  },
  {
    id: "roles",
    title: "Gestion Roles",
    subtitle: "Ajout de roles et gestion des rangs selon niveau d'acces.",
    icon: UserCog,
    accent: "#7cf4a7",
    items: [
      {
        name: "WL ROLE",
        price: 150,
        requirement: "@CROWN minimum",
        hook: "Ajoute des perms sans limite BOT PROTECT.",
        unlocks: ["2 etoiles", "co-owner", "gestions", "+pic", "og friende"],
      },
      {
        name: "OWNER ROLE",
        price: 200,
        requirement: "WL requis",
        hook: "Ajout de roles owner et roles persos fonda.",
        unlocks: ["owner", "⚒️", "💷", "🔆", "roles perso fonda"],
      },
      {
        name: "SYS ROLE",
        price: 250,
        requirement: "Owner requis",
        hook: "Version systeme pour palette complete de roles.",
        unlocks: ["☘", "❄️", "flocon", "TOUCHE = BL"],
      },
      {
        name: "ROLE PERSO",
        price: 150,
        monthly: 30,
        requirement: "@CROWN minimum",
        hook: "Personnalise nom, badge et couleur du role.",
      },
    ],
  },
  {
    id: "justice",
    title: "Moderation & Justice",
    subtitle: "Actions sensibles: BLR, blacklist, unbanall et controle staff.",
    icon: Gavel,
    accent: "#ff7a7a",
    items: [
      {
        name: "OWNER GESTION",
        price: 150,
        hook: "BLR un staff en abus avec /blr.",
        commands: [
          { name: "/blr", desc: "retire temporairement le rank staff cible" },
          { name: "/unblr", desc: "gracie et restaure l'acces si necessaire" },
        ],
      },
      {
        name: "SYS GESTION",
        price: 200,
        requirement: "Owner requis",
        hook: "BLR ultime et commandes de suivi owner.",
        commands: [
          { name: ".ow", desc: "owner tools/listing et derank en cas d'abus" },
        ],
      },
      {
        name: "PERM BLACKLIST",
        price: 225,
        hook: "Blacklist serveur avec unban reserve owner.",
        commands: [
          { name: "&unbl", desc: "seul un owner peut deban une cible blacklist" },
        ],
        note: "Perm tres puissante, a utiliser avec retenue.",
      },
      {
        name: "SYS JUGE",
        price: 600,
        hook: "Capacite supreme de jugement et securite protect-user.",
        commands: [
          { name: "+unbanall", desc: "clear complet de la liste des bannis (cooldown)" },
          { name: "/protect-user", desc: "protège contre les bans hors sys+ (univers)" },
        ],
      },
    ],
  },
];

const baseOffers = [
  {
    title: "Kami",
    role: "@co-owner",
    perm: "Perm 2",
    price: "20 €",
    emoji: "🌀",
    contributors: 305,
    starterPack: true,
    commands: [
      "find, vc, stats, snipe, member, user",
      "tempmute, warn, unmute, delsanction",
    ],
    perms: ["Gerer les messages (discussion)"],
  },
  {
    title: "Ryu",
    role: "@owner",
    perm: "Perm 3",
    price: "45 €",
    emoji: "🐲",
    contributors: 139,
    commands: [
      "ban (jugement), pic, mv",
      "tempmute, warn, unmute, delsanction",
      "rank, derank, rankup (Perm I -> Perm III)",
    ],
    perms: ["Gerer les pseudos"],
  },
  {
    title: "Samui",
    role: "@💷",
    perm: "Perm 3",
    price: "90 €",
    emoji: "🌊",
    bestSeller: true,
    contributors: 147,
    commands: [],
    perms: ["Mute clic droit"],
  },
  {
    title: "Shogun",
    role: "@🔆",
    perm: "Perm 4",
    price: "160 €",
    emoji: "☀️",
    contributors: 99,
    commands: [
      "serverinfo, vocinfo, channel [salon]",
      "rank, derank, rankup (Perm III -> Perm IV)",
    ],
    perms: ["Move & deco clic droit (vc public)"],
  },
  {
    title: "Nakama",
    role: "@☘",
    perm: "Perm 5",
    price: "230 €",
    emoji: "☘",
    contributors: 32,
    commands: ["derank (raison)"],
    perms: ["Logs serveur integres", "80% acces backup serveur (mod, msg, vc)"],
  },
  {
    title: "Daimyō",
    role: "@❄️",
    perm: "Perm 5",
    price: "300 €",
    emoji: "❄️",
    contributors: 50,
    commands: ["to, unto"],
    perms: [],
  },
  {
    title: "Shinigami",
    role: "@💧",
    perm: "Perm 5",
    price: "400 €",
    emoji: "💧",
    contributors: 38,
    commands: ["addrole, delrole"],
    perms: ["TO clic droit"],
  },
  {
    title: "ROYAL",
    role: "@ROYAL",
    perm: "Perm 6",
    price: "550 €",
    emoji: "👑",
    bestSeller: true,
    contributors: 63,
    commands: ["join, ban (immediat)"],
    perms: ["Bypass salon sanction", "Bypass jugement", "Bypass raison-derank"],
  },
  {
    title: "CROWN",
    role: "@CROWN",
    perm: "Perm 6",
    price: "800 €",
    emoji: "🤴",
    emojiImage: assetPath("crown.png"),
    contributors: 56,
    commands: [],
    perms: ["Perm role", "Perm image", "Perms clic droit House Voice"],
  },
  {
    title: "ADMIN",
    role: "@ADMIN",
    perm: "Perm 7",
    price: "1200 €",
    emoji: "🛡️",
    contributors: 35,
    commands: [
      "clear, mutelist, unmuteall",
      "blr, unblr, blr-user",
    ],
    perms: ["Full acces backup serveur", "Full acces serveur"],
  },
  {
    title: "BOT=BOT",
    role: "@BOT=BOT",
    perm: "Perm 8",
    price: "1800 €",
    emoji: "🤖",
    contributors: 39,
    commands: [
      "lock, unlock, slowmode, create",
      "badword add, delete, list",
    ],
    perms: ["Gerant serveur", "WL TO clic droit"],
  },
  {
    title: "Role invisible",
    role: "@\u200B",
    perm: "Perm 8",
    price: "2500 €",
    emoji: "",
    contributors: 6,
    commands: [],
    perms: ["BL MASTER", "WL ADMIN"],
  },
  {
    title: "Couronne",
    role: "@Couronne",
    perm: "Perm 9",
    price: "3500 €",
    emoji: "♕",
    emojiImage: assetPath("couronne.webp"),
    contributors: 12,
    commands: ["giveaway, allbots"],
    perms: ["Perm salon", "Perm ban clic droit"],
  },
  {
    title: "Créateur",
    role: "@Createur",
    perm: "Perm 10",
    price: "5500 €",
    emoji: "🏛️",
    contributors: 15,
    megaPack: true,
    commands: ["renew, lockname, unlockname"],
    perms: ["Derank ultime", "BL SYS", "Perm admin"],
  },
];

function toNumericPrice(price) {
  return Number(price.replace(/[^0-9.,]/g, "").replace(",", "."));
}

function computeCatalog(offers) {
  const sorted = [...offers].sort((a, b) => toNumericPrice(a.price) - toNumericPrice(b.price));

  return sorted.map((offer, index) => {
    const previous = sorted.slice(0, index + 1);
    const cumulativeCommands = [...new Set(previous.flatMap((item) => item.commands))];
    const cumulativePerms = [...new Set(previous.flatMap((item) => item.perms))];

    return {
      ...offer,
      tierIndex: index + 1,
      cumulativeCommands,
      cumulativePerms,
      totalFeatures: cumulativeCommands.length + cumulativePerms.length,
    };
  });
}

function OfferCard({ offer, index, onOpen }) {
  const cardClassName = [
    "catalog-card",
    offer.bestSeller ? "best-seller-card" : "",
    offer.starterPack ? "starter-pack-card" : "",
    offer.megaPack ? "mega-pack-card" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClassName}
      style={{ animationDelay: `${index * 55}ms` }}
      onClick={() => onOpen(offer)}
    >
      <div className="card-visual">
        <span className="tier">#{offer.tierIndex}</span>
        {offer.bestSeller && <span className="best-seller-badge">BEST SELLER</span>}
        {offer.starterPack && <span className="starter-pack-badge">STARTER PACK</span>}
        {offer.megaPack && <span className="mega-pack-badge">MEGA PACK</span>}
        {offer.emojiImage ? (
          <img className={"card-emoji card-emoji-img" + (offer.title === "CROWN" ? " card-emoji-crown" : "")} src={offer.emojiImage} alt={offer.title} />
        ) : (
          <span className="card-emoji">{offer.emoji ?? "✨"}</span>
        )}
        <span className="perm-chip">{offer.perm}</span>
      </div>
      <div className="card-content">
        <h3>{offer.title}</h3>
        <p className="meta-line">
          <span>{offer.role}</span>
          <span>{offer.contributors} contributeurs</span>
        </p>
        <ul className="quick-list">
          {offer.perms.slice(0, 2).map((perm) => (
            <li key={perm}>{perm}</li>
          ))}
          {offer.commands.slice(0, 1).map((command) => (
            <li key={command}>{command}</li>
          ))}
        </ul>
      </div>
      <button type="button" className="card-cta" onClick={() => onOpen(offer)}>
        {offer.price}
      </button>
    </article>
  );
}

function formatEuro(value) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

function SubscriptionCard({ plan, index }) {
  return (
    <article
      className="subscription-card"
      style={{ animationDelay: `${index * 65}ms`, "--plan-accent": plan.accent }}
    >
      <header className="subscription-head">
        <p className="subscription-name">{plan.name}</p>
        <span className="subscription-tier">{plan.tier}</span>
      </header>

      <div className="subscription-price">
        <strong>{formatEuro(plan.monthlyPrice)}</strong>
        <small>/ mois</small>
      </div>

      <div className="subscription-body">
        <section>
          <h4>
            <Sparkles size={14} aria-hidden="true" />
            <span>Avantages</span>
          </h4>
          <ul>
            {plan.benefits.map((item) => (
              <li key={item}>
                <CheckCircle2 size={13} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>
            <TerminalSquare size={14} aria-hidden="true" />
            <span>Commandes exclusives</span>
          </h4>
          <ul>
            {plan.commands.map((item) => (
              <li key={item}>
                <TerminalSquare size={13} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <img className="subscription-banner" src={plan.banner} alt={plan.name} />
    </article>
  );
}

function formatDollar(value) {
  return `${value} $`;
}

function WhitelistCard({ item, index, accent }) {
  return (
    <article className="wl-card" style={{ animationDelay: `${index * 50}ms`, "--wl-accent": accent }}>
      <div className="wl-card-top">
        <p className="wl-name">{item.name}</p>
        {item.requirement && (
          <span className="wl-requirement">
            <LockKeyhole size={12} aria-hidden="true" />
            <span>{item.requirement}</span>
          </span>
        )}
      </div>
      <p className="wl-hook">{item.hook}</p>
      {item.commands?.length > 0 && (
        <ul className="wl-commands">
          {item.commands.map((command) => (
            <li key={`${item.name}-${typeof command === "string" ? command : command.name}`}>
              <TerminalSquare size={13} aria-hidden="true" />
              {typeof command === "string" ? (
                <span>{command}</span>
              ) : (
                <span>
                  <code>{command.name}</code> - {command.desc}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      {item.unlocks?.length > 0 && (
        <div className="wl-unlocks">
          <p>Roles ajoutables</p>
          <div className="wl-unlock-chips">
            {item.unlocks.map((role) => (
              <span key={`${item.name}-${role}`}>{role}</span>
            ))}
          </div>
        </div>
      )}
      {item.note && (
        <p className="wl-note">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>{item.note}</span>
        </p>
      )}
      <div className="wl-price-row">
        <strong>{formatDollar(item.price)}</strong>
        {item.monthly && (
          <span className="wl-monthly">
            <CircleDollarSign size={14} aria-hidden="true" />
            <span>+ {formatDollar(item.monthly)} / mois</span>
          </span>
        )}
      </div>
    </article>
  );
}

function DetailsModal({ offer, onClose }) {
  if (!offer) return null;
  const directCommandCount = offer.commands.length;
  const directPermCount = offer.perms.length;
  const cumulativeCommandCount = offer.cumulativeCommands.length;
  const cumulativePermCount = offer.cumulativePerms.length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-btn" onClick={onClose}>
          x
        </button>
        <div className="modal-top">
          <p className="badge">Fiche permission</p>
          <div className="modal-title-row">
            <h2>{offer.title}</h2>
            <span className="modal-emoji">{offer.emoji || "●"}</span>
          </div>
          <p className="modal-subline">Niveau {offer.tierIndex} - Lecture detaillee des acces</p>
          <div className="modal-meta">
            <span>{offer.role}</span>
            <span>{offer.perm}</span>
            <span>{offer.price}</span>
            <span>{offer.contributors} contributeurs</span>
          </div>
          <div className="modal-stats">
            <article className="stat-card">
              <p>Commandes directes</p>
              <strong>{directCommandCount}</strong>
            </article>
            <article className="stat-card">
              <p>Perms directes</p>
              <strong>{directPermCount}</strong>
            </article>
            <article className="stat-card">
              <p>Commandes cumulees</p>
              <strong>{cumulativeCommandCount}</strong>
            </article>
            <article className="stat-card">
              <p>Perms cumulees</p>
              <strong>{cumulativePermCount}</strong>
            </article>
          </div>
        </div>

        <div className="modal-grid">
          <article className="modal-block">
            <h4>Commandes directes ({directCommandCount})</h4>
            <ul>
              {offer.commands.length > 0 ? (
                offer.commands.map((command) => <li key={command}>{command}</li>)
              ) : (
                <li>Aucune commande directe ajoutee sur ce palier.</li>
              )}
            </ul>
          </article>

          <article className="modal-block">
            <h4>Permissions directes ({directPermCount})</h4>
            <ul>
              {offer.perms.length > 0 ? (
                offer.perms.map((perm) => <li key={perm}>{perm}</li>)
              ) : (
                <li>Aucune permission directe ajoutee sur ce palier.</li>
              )}
            </ul>
          </article>

          <article className="modal-block modal-block-wide">
            <h4>Total cumule sur ce role</h4>
            <p className="feature-total">{offer.totalFeatures} avantages disponibles au total</p>
            <div className="cumulative-columns">
              <div>
                <h5>Perms cumulees</h5>
                <ul>
                  {offer.cumulativePerms.length > 0 ? (
                    offer.cumulativePerms.map((perm) => <li key={`perm-${perm}`}>{perm}</li>)
                  ) : (
                    <li>Aucune permission cumulee.</li>
                  )}
                </ul>
              </div>
              <div>
                <h5>Commandes cumulees</h5>
                <ul>
                  {offer.cumulativeCommands.length > 0 ? (
                    offer.cumulativeCommands.map((command) => (
                      <li key={`cmd-${command}`}>{command}</li>
                    ))
                  ) : (
                    <li>Aucune commande cumulee.</li>
                  )}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Contribution");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const subtitle = useMemo(() => {
    if (active === "Contribution") return "Catalogue officiel des permissions Shibuya";
    if (active === "Abonnements") return "Packs abonnement et acces premium";
    return "Espace whitelist et statut prioritaire";
  }, [active]);

  const catalog = useMemo(() => computeCatalog(baseOffers), []);
  const sortedSubscriptions = useMemo(
    () => [...subscriptionPlans].sort((a, b) => a.monthlyPrice - b.monthlyPrice),
    [],
  );
  const slideCount = sliderImages.length;
  const activeSlide = sliderCaptions[slideIndex] ?? sliderCaptions[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideCount);
    }, 4200);
    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <div className="page">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
      <header className="topbar">
        <div className="topbar-head">
          <div className="brand">
            <img className="brand-logo" src={assetPath("shibuya.webp")} alt="Shibuya" />
            <div>
              <p className="brand-title">Shibuya Invest</p>
              <p className="brand-sub">{subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            className={menuOpen ? "nav-toggle open" : "nav-toggle"}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={active === item.label ? "nav-btn active" : "nav-btn"}
              >
                <Icon className="nav-icon-svg" size={16} strokeWidth={2.2} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <a
            className="nav-btn discord-btn"
            href="https://discord.gg/y87WkyppmB"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <img className="nav-icon-svg nav-icon-img" src={assetPath("discord.webp")} alt="" aria-hidden="true" />
            <span>Contribuer</span>
          </a>
        </nav>
      </header>

      <main className="content">
        <section
          className="hero-slider"
          aria-label="Slider presentation"
          onClick={() => setActive(activeSlide.target)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setActive(activeSlide.target);
            }
          }}
        >
          <div className="slides-track" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            {sliderImages.map((image, index) => (
              <article className="slide-item" key={`${image}-${index}`}>
                <img className="slide-bg" src={image} alt={`Slide ${index + 1}`} />
                <div className="slide-dark" />
              </article>
            ))}
          </div>
          <div className="slider-caption">
            <p>{activeSlide.badge}</p>
            <h2>
              {activeSlide.title}
              {activeSlide.target === "Whitelists" && <span className="wl-big"> WL</span>}
            </h2>
            <span>{activeSlide.subtitle}</span>
          </div>
          <div className="slider-dots" onClick={(event) => event.stopPropagation()}>
            {sliderImages.map((_, index) => (
              <button
                type="button"
                key={`dot-${index}`}
                className={index === slideIndex ? "active" : ""}
                onClick={() => setSlideIndex(index)}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {active === "Contribution" && (
          <>
            <section className="hero">
              <p className="badge">Vitrine permissions</p>
              <h1>Contribution sur Shibuya</h1>
              <p>
                Catalogue trie du moins cher au plus cher. Clique sur une card pour
                ouvrir les details complets et l heritage des permissions.
              </p>
            </section>
            <section className="catalog-grid">
              {catalog.map((offer, index) => (
                <OfferCard
                  key={`${offer.title}-${offer.price}`}
                  offer={offer}
                  index={index}
                  onOpen={setSelectedOffer}
                />
              ))}
            </section>
          </>
        )}

        {active === "Abonnements" && (
          <>
            <section className="hero">
              <p className="badge">Packs abonnement</p>
              <h1>Abonnements Shibuya</h1>
              <p>
                Plans tries du moins cher au plus cher avec avantages, commandes
                exclusives et banniere associee.
              </p>
            </section>
            <section className="subscriptions-grid">
              {sortedSubscriptions.map((plan, index) => (
                <SubscriptionCard key={plan.name} plan={plan} index={index} />
              ))}
            </section>
          </>
        )}

        {active === "Whitelists" && (
          <>
            <section className="hero">
              <p className="badge">Catalogue whitelist</p>
              <h1>Whitelists & Packs Premium</h1>
              <p>
                Presentation regroupee par usage pour mieux comparer les acces.
                Chaque bloc suit une progression logique de puissance et de prerequis.
              </p>
            </section>
            <section className="whitelist-layout">
              {whitelistGroups.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <article className="wl-group" key={group.id} style={{ "--wl-accent": group.accent }}>
                    <header className="wl-group-head">
                      <p className="wl-group-title">
                        <GroupIcon size={16} aria-hidden="true" />
                        <span>{group.title}</span>
                      </p>
                      <span className="wl-count">{group.items.length} offres</span>
                    </header>
                    <p className="wl-group-sub">{group.subtitle}</p>
                    <div className="wl-grid">
                      {group.items.map((item, index) => (
                        <WhitelistCard key={item.name} item={item} index={index} accent={group.accent} />
                      ))}
                    </div>
                  </article>
                );
              })}
            </section>
          </>
        )}
      </main>

      <DetailsModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
    </div>
  );
}








