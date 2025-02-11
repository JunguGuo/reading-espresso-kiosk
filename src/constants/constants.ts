// --- Types ---
export interface FlowStep {
  route: string;
  title: string;
  optional?: boolean;
}

export interface AgeOption {
  label: string;
  value: number;
}

// --- Flow Steps ---
export const FLOW_STEPS: FlowStep[] = [
  { route: "/how-it-works", title: "How it Works", optional: true },
  // { route: "/library-card", title: "Library Card", optional: true },
  { route: "/age-group", title: "Age Group", optional: false },
  { route: "/mood", title: "Mood", optional: false },
  { route: "/puzzle-selection", title: "Puzzle Selection", optional: true },
];

// --- Age Options ---

export const AGE_OPTIONS: AgeOption[] = [
  // { label: "0-6 (Early Childhood)", value: 0 },
  { label: "7-12 (Elementary)", value: 7 },
  { label: "13-18 (Teens)", value: 13 },
  { label: ">18 (Adults)", value: 19 },
];

// --- Mood Page Options ---
export const GENRE_OPTIONS: string[] = [
  "Historical",
  "Graphic Novel",
  "Fiction",
  "Family Drama",
  "Nonfiction",
  "Mystery",
  "Literary Fiction",
  "Suspense",
  "History",
  "Thriller",
  "Poetry",
];

export const THEME_OPTIONS: string[] = [
  "Classic",
  "Adventure",
  "Morality",
  "Romance",
  "Struggle",
  "Rebellion",
  "Humanity",
  "Duality",
  "Heroism",
  "Fate",
  "Gala",
];

// --- Puzzle Options ---
export const PUZZLE_OPTIONS = [
  { name: "Chess", imgSrc: "/images/icon_puzzle_chess.svg" },
  { name: "Crossword", imgSrc: "/images/icon_puzzle_crossword.svg" },
  { name: "Sudoku", imgSrc: "/images/icon_puzzle_sudoku.svg" },
];
