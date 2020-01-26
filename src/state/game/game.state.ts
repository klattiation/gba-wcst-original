import {
  CriteriaValue,
  CriteriaName,
  CardConfig,
  CriteriaAssignment,
  GameState,
  ResolvedCard,
} from "./game.props"
import { INITIAL_SCORE } from "../../constants"

const { Channel, Category, Price, Design, Value } = CriteriaName

const CATEGORIES: Record<string, CriteriaValue> = {
  adventure: {
    id: "adventure",
    label: "Erlebnis",
  },
  luxury: {
    id: "luxury",
    label: "Luxus",
  },
  trend: {
    id: "trend",
    label: "Trend",
  },
  leisure: {
    id: "leisure",
    label: "Freizeit",
  },
  routine: {
    id: "routine",
    label: "Alltag",
  },
}

const DESIGNS: Record<string, CriteriaValue> = {
  classic: {
    id: "classic",
    label: "Klassisch",
  },
  modern: {
    id: "modern",
    label: "Modern",
  },
  innovative: {
    id: "innovative",
    label: "Innovativ",
  },
  minimal: {
    id: "minimal",
    label: "Minimalistisch",
  },
  extravagant: {
    id: "extravagant",
    label: "Extravagant",
  },
}

const PRICES: Record<string, CriteriaValue> = {
  advanced: {
    id: "advanced",
    label: "Gehoben",
  },
  sale: {
    id: "sale",
    label: "Sale",
  },
  installments: {
    id: "installments",
    label: "Ratenzahlung",
  },
  regular: {
    id: "regular",
    label: "Regulär",
  },
  discount: {
    id: "discount",
    label: "Discount",
  },
}

const VALUES: Record<string, CriteriaValue> = {
  fairness: {
    id: "fairness",
    label: "Fairness",
  },
  quality: {
    id: "quality",
    label: "Qualität",
  },
  health: {
    id: "health",
    label: "Gesundheit",
  },
  image: {
    id: "image",
    label: "Image",
  },
  sustainability: {
    id: "sustainability",
    label: "Nachhaltigkeit",
  },
}

const CHANNELS: Record<string, CriteriaValue> = {
  social: {
    id: "social",
    label: "Soziale Medien",
  },
  print: {
    id: "print",
    label: "Printmedien",
  },
  tele: {
    id: "tele",
    label: "Telemarketing",
  },
  tv: {
    id: "tv",
    label: "Fernsehwerbung",
  },
  outdoor: {
    id: "outdoor",
    label: "Außenwerbung",
  },
}

const CARD_CONFIGS: CardConfig[] = [
  {
    [Channel]: "social",
    [Category]: "luxury",
    [Price]: "sale",
    [Design]: "classic",
    [Value]: "fairness",
    image: "car.jpg",
  },
  {
    [Channel]: "print",
    [Category]: "adventure",
    [Price]: "installments",
    [Design]: "modern",
    [Value]: "quality",
    image: "benzinroller.png",
  },
  {
    [Channel]: "tele",
    [Category]: "trend",
    [Price]: "advanced",
    [Design]: "innovative",
    [Value]: "health",
    image: "rollerblades-1.png",
  },
  {
    [Channel]: "tv",
    [Category]: "leisure",
    [Price]: "installments",
    [Design]: "innovative",
    [Value]: "image",
    image: "bike.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "leisure",
    [Price]: "advanced",
    [Design]: "classic",
    [Value]: "image",
    image: "tennisschlaeger.png",
  },
  {
    [Channel]: "social",
    [Category]: "routine",
    [Price]: "advanced",
    [Design]: "minimal",
    [Value]: "fairness",
    image: "bathrobe.jpg",
  },
  {
    [Channel]: "print",
    [Category]: "luxury",
    [Price]: "regular",
    [Design]: "modern",
    [Value]: "sustainability",
    image: "microwave.png",
  },
  {
    [Channel]: "tele",
    [Category]: "luxury",
    [Price]: "regular",
    [Design]: "modern",
    [Value]: "health",
    image: "chair.png",
  },
  {
    [Channel]: "tv",
    [Category]: "routine",
    [Price]: "sale",
    [Design]: "modern",
    [Value]: "fairness",
    image: "staubsauger.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "routine",
    [Price]: "advanced",
    [Design]: "minimal",
    [Value]: "image",
    image: "rasenmaeher.png",
  },
  {
    [Channel]: "social",
    [Category]: "leisure",
    [Price]: "installments",
    [Design]: "extravagant",
    [Value]: "fairness",
    image: "monitor.png",
  },
  {
    [Channel]: "print",
    [Category]: "trend",
    [Price]: "installments",
    [Design]: "innovative",
    [Value]: "quality",
    image: "couch.png",
  },
  {
    [Channel]: "tele",
    [Category]: "leisure",
    [Price]: "advanced",
    [Design]: "innovative",
    [Value]: "image",
    image: "pot.png",
  },
  {
    [Channel]: "tv",
    [Category]: "trend",
    [Price]: "regular",
    [Design]: "minimal",
    [Value]: "sustainability",
    image: "headphones.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "luxury",
    [Price]: "installments",
    [Design]: "minimal",
    [Value]: "image",
    image: "kitchenmachine.png",
  },
  {
    [Channel]: "social",
    [Category]: "adventure",
    [Price]: "sale",
    [Design]: "classic",
    [Value]: "quality",
    image: "chair-3.png",
  },
  {
    [Channel]: "print",
    [Category]: "routine",
    [Price]: "advanced",
    [Design]: "modern",
    [Value]: "fairness",
    image: "bike-2.png",
  },
  {
    [Channel]: "tele",
    [Category]: "adventure",
    [Price]: "advanced",
    [Design]: "modern",
    [Value]: "health",
    image: "kicker.png",
  },
  {
    [Channel]: "tv",
    [Category]: "adventure",
    [Price]: "sale",
    [Design]: "modern",
    [Value]: "sustainability",
    image: "headphones-2.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "leisure",
    [Price]: "installments",
    [Design]: "modern",
    [Value]: "quality",
    image: "lamp.png",
  },
  {
    [Channel]: "social",
    [Category]: "routine",
    [Price]: "advanced",
    [Design]: "innovative",
    [Value]: "health",
    image: "helmet.jpg",
  },
  {
    [Channel]: "print",
    [Category]: "trend",
    [Price]: "regular",
    [Design]: "extravagant",
    [Value]: "sustainability",
    image: "tv.jpg",
  },
  {
    [Channel]: "tele",
    [Category]: "luxury",
    [Price]: "sale",
    [Design]: "innovative",
    [Value]: "image",
    image: "grill.png",
  },
  {
    [Channel]: "tv",
    [Category]: "adventure",
    [Price]: "installments",
    [Design]: "modern",
    [Value]: "health",
    image: "tent.png",
  },
  {
    [Channel]: "social",
    [Category]: "leisure",
    [Price]: "advanced",
    [Design]: "classic",
    [Value]: "fairness",
    image: "helmet-2.jpg",
  },
  {
    [Channel]: "print",
    [Category]: "luxury",
    [Price]: "installments",
    [Design]: "innovative",
    [Value]: "image",
    image: "chandelier.png",
  },
  {
    [Channel]: "tele",
    [Category]: "leisure",
    [Price]: "regular",
    [Design]: "extravagant",
    [Value]: "image",
    image: "rollerblades-2.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "luxury",
    [Price]: "installments",
    [Design]: "modern",
    [Value]: "health",
    image: "watch.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "trend",
    [Price]: "advanced",
    [Design]: "minimal",
    [Value]: "sustainability",
    image: "coffeemaker.jpg",
  },
  {
    [Channel]: "social",
    [Category]: "adventure",
    [Price]: "sale",
    [Design]: "extravagant",
    [Value]: "sustainability",
    image: "boots.png",
  },
  {
    [Channel]: "print",
    [Category]: "adventure",
    [Price]: "advanced",
    [Design]: "modern",
    [Value]: "sustainability",
    image: "scooter.png",
  },
  {
    [Channel]: "tele",
    [Category]: "adventure",
    [Price]: "sale",
    [Design]: "extravagant",
    [Value]: "image",
    image: "camping-chair.png",
  },
  {
    [Channel]: "tele",
    [Category]: "trend",
    [Price]: "installments",
    [Design]: "innovative",
    [Value]: "health",
    image: "watch-2.png",
  },
  {
    [Channel]: "tv",
    [Category]: "routine",
    [Price]: "regular",
    [Design]: "minimal",
    [Value]: "image",
    image: "coffeemaker-2.jpg",
  },
  {
    [Channel]: "social",
    [Category]: "adventure",
    [Price]: "installments",
    [Design]: "extravagant",
    [Value]: "health",
    image: "actioncam.png",
  },
  {
    [Channel]: "print",
    [Category]: "routine",
    [Price]: "regular",
    [Design]: "extravagant",
    [Value]: "image",
    image: "toaster.png",
  },
  {
    [Channel]: "tele",
    [Category]: "trend",
    [Price]: "regular",
    [Design]: "minimal",
    [Value]: "quality",
    image: "bag.png",
  },
  {
    [Channel]: "tv",
    [Category]: "leisure",
    [Price]: "regular",
    [Design]: "classic",
    [Value]: "image",
    image: "coffeemaker-3.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "routine",
    [Price]: "advanced",
    [Design]: "modern",
    [Value]: "health",
    image: "washingmachine.png",
  },
  {
    [Channel]: "social",
    [Category]: "luxury",
    [Price]: "regular",
    [Design]: "classic",
    [Value]: "health",
    image: "pan.png",
  },
  {
    [Channel]: "print",
    [Category]: "luxury",
    [Price]: "regular",
    [Design]: "classic",
    [Value]: "image",
    image: "bag-3.jpg",
  },
  {
    [Channel]: "tele",
    [Category]: "adventure",
    [Price]: "advanced",
    [Design]: "minimal",
    [Value]: "image",
    image: "digicam.png",
  },
  {
    [Channel]: "tv",
    [Category]: "routine",
    [Price]: "regular",
    [Design]: "modern",
    [Value]: "health",
    image: "laptop.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "trend",
    [Price]: "advanced",
    [Design]: "classic",
    [Value]: "health",
    image: "niconcam.png",
  },
  {
    [Channel]: "social",
    [Category]: "leisure",
    [Price]: "regular",
    [Design]: "extravagant",
    [Value]: "sustainability",
    image: "deckchair.png",
  },
  {
    [Channel]: "print",
    [Category]: "adventure",
    [Price]: "discount",
    [Design]: "classic",
    [Value]: "quality",
    image: "suitcase.png",
  },
  {
    [Channel]: "tele",
    [Category]: "leisure",
    [Price]: "regular",
    [Design]: "modern",
    [Value]: "quality",
    image: "bag-2.png",
  },
  {
    [Channel]: "tele",
    [Category]: "adventure",
    [Price]: "discount",
    [Design]: "minimal",
    [Value]: "sustainability",
    image: "grill-2.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "leisure",
    [Price]: "sale",
    [Design]: "modern",
    [Value]: "fairness",
    image: "balance.png",
  },
  {
    [Channel]: "social",
    [Category]: "luxury",
    [Price]: "regular",
    [Design]: "minimal",
    [Value]: "sustainability",
    image: "iron.png",
  },
  {
    [Channel]: "print",
    [Category]: "trend",
    [Price]: "advanced",
    [Design]: "innovative",
    [Value]: "sustainability",
    image: "chair-2.png",
  },
  {
    [Channel]: "tele",
    [Category]: "luxury",
    [Price]: "discount",
    [Design]: "innovative",
    [Value]: "health",
    image: "hairdryer.png",
  },
  {
    [Channel]: "tv",
    [Category]: "trend",
    [Price]: "installments",
    [Design]: "minimal",
    [Value]: "fairness",
    image: "kettle.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "luxury",
    [Price]: "sale",
    [Design]: "modern",
    [Value]: "sustainability",
    image: "screwdriver.jpg",
  },
  {
    [Channel]: "social",
    [Category]: "adventure",
    [Price]: "installments",
    [Design]: "minimal",
    [Value]: "quality",
    image: "shoes.png",
  },
  {
    [Channel]: "print",
    [Category]: "adventure",
    [Price]: "advanced",
    [Design]: "classic",
    [Value]: "image",
    image: "wallet.png",
  },
  {
    [Channel]: "tele",
    [Category]: "trend",
    [Price]: "sale",
    [Design]: "innovative",
    [Value]: "quality",
    image: "",
  },
  {
    [Channel]: "tv",
    [Category]: "leisure",
    [Price]: "installments",
    [Design]: "modern",
    [Value]: "fairness",
    image: "watch-3.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "leisure",
    [Price]: "advanced",
    [Design]: "modern",
    [Value]: "sustainability",
    image: "umbrella.png",
  },
  {
    [Channel]: "social",
    [Category]: "adventure",
    [Price]: "advanced",
    [Design]: "minimal",
    [Value]: "sustainability",
    image: "alarm.png",
  },
  {
    [Channel]: "print",
    [Category]: "routine",
    [Price]: "discount",
    [Design]: "extravagant",
    [Value]: "fairness",
    image: "bed.png",
  },
  {
    [Channel]: "tele",
    [Category]: "adventure",
    [Price]: "sale",
    [Design]: "modern",
    [Value]: "quality",
    image: "shoes-2.jpg",
  },
  {
    [Channel]: "tv",
    [Category]: "adventure",
    [Price]: "installments",
    [Design]: "minimal",
    [Value]: "image",
    image: "car-2.png",
  },
  {
    [Channel]: "outdoor",
    [Category]: "trend",
    [Price]: "sale",
    [Design]: "classic",
    [Value]: "quality",
    image: "blender.png",
  },
]

const AUDIENCE_CONFIGS: CriteriaAssignment[] = [
  {
    [Channel]: "social",
    [Category]: "trend",
    [Price]: "discount",
    [Design]: "modern",
    [Value]: "image",
  },
  {
    [Channel]: "print",
    [Category]: "leisure",
    [Price]: "sale",
    [Design]: "minimal",
    [Value]: "health",
  },
  {
    [Channel]: "tele",
    [Category]: "routine",
    [Price]: "installments",
    [Design]: "classic",
    [Value]: "sustainability",
  },
  {
    [Channel]: "tv",
    [Category]: "luxury",
    [Price]: "advanced",
    [Design]: "extravagant",
    [Value]: "quality",
  },
  {
    [Channel]: "outdoor",
    [Category]: "adventure",
    [Price]: "regular",
    [Design]: "innovative",
    [Value]: "fairness",
  },
]

export const CRITERIA_TRUMP_ORDER = [
  Category,
  Value,
  Price,
  Channel,
  Design,
  Value,
  Price,
]

export const DEFAULT_CRITERIA_ORDER = [Channel, Category, Price, Design, Value]

export const CRITERIA_CARD_ORDERS = [
  { threshold: 24, order: DEFAULT_CRITERIA_ORDER },
  { threshold: 34, order: [Price, Value, Design, Channel, Category] },
  { threshold: 44, order: [Design, Channel, Value, Category, Price] },
  { threshold: 54, order: [Value, Price, Category, Channel, Design] },
  { threshold: 64, order: [Category, Design, Channel, Value, Price] },
]

const makeResolver = (haystack: Record<string, any>) => (id: string) => {
  const cat = haystack[id]
  if (!cat) {
    throw Error(`Could not resolve id: "${id}"`)
  }
  return cat
}

const resolveIds = (cards: CriteriaAssignment[]) => {
  const category = makeResolver(CATEGORIES)
  const channel = makeResolver(CHANNELS)
  const design = makeResolver(DESIGNS)
  const price = makeResolver(PRICES)
  const value = makeResolver(VALUES)
  return cards.map(card => ({
    ...card,
    category: category(card.category),
    channel: channel(card.channel),
    design: design(card.design),
    price: price(card.price),
    value: value(card.value),
  }))
}

export const AUDIENCE = resolveIds(AUDIENCE_CONFIGS)

const cards = resolveIds(CARD_CONFIGS) as ResolvedCard[]
export const CARDS = cards //.filter((v, i) => i < 3)

export const getInitialState = (): GameState => ({
  cardIndex: 0,
  criteriaChanges: [],
  criteriaOrderIndex: 0,
  criteriaTrumpIndex: 0,
  combo: 0,
  scores: [INITIAL_SCORE],
  scoresPerRound: [],
})
