export type LeadStatus = "new" | "contacted" | "qualified" | "won" | "lost";
export type LeadSource = "Instagram" | "Email" | "Strona" | "TikTok" | "LinkedIn" | "Polecenie";

export interface Lead {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone?: string;
  source: LeadSource;
  status: LeadStatus;
  value: number;
  createdAt: string;
  message: string;
  score: number;
}

export interface Automation {
  id: string;
  name: string;
  description: string;
  status: "active" | "paused" | "draft";
  trigger: string;
  runs: number;
  successRate: number;
  lastRun: string;
  category: "Lead" | "Email" | "Social" | "CRM" | "Analytics";
}

export interface FeedEvent {
  id: string;
  type: "lead" | "automation" | "ai" | "payment" | "alert";
  title: string;
  meta: string;
  time: string;
  ts: number;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "alert";
}

export interface Integration {
  id: string;
  name: string;
  category: string;
  connected: boolean;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  status: "online" | "offline" | "away";
}

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: string;
  type: "call" | "meeting" | "task" | "deadline";
  with?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  time: string;
}

export const leads: Lead[] = [
  { id: "L-2041", name: "Anna Kowalska", initials: "AK", email: "anna.k@studio.pl", phone: "+48 601 204 110", source: "Instagram", status: "new", value: 4800, createdAt: "12s temu", message: "Cześć, chciałabym poznać szczegóły pakietu Premium dla mojego studia.", score: 92 },
  { id: "L-2040", name: "Marek Zawadzki", initials: "MZ", email: "marek@zawadzki.co", source: "Strona", status: "qualified", value: 12400, createdAt: "1 min", message: "Potrzebujemy wdrożenia automatyzacji CRM dla 15-osobowego zespołu.", score: 88 },
  { id: "L-2039", name: "Julia Nowak", initials: "JN", email: "julia.n@beauty.pl", source: "Instagram", status: "contacted", value: 3200, createdAt: "8 min", message: "Czy oferujecie integrację z Booksy?", score: 76 },
  { id: "L-2038", name: "Tomasz Wiśniewski", initials: "TW", email: "t.wisniewski@firma.pl", source: "LinkedIn", status: "won", value: 18900, createdAt: "32 min", message: "Decyzja zapadła — startujemy od poniedziałku.", score: 95 },
  { id: "L-2037", name: "Karolina Lis", initials: "KL", email: "k.lis@gmail.com", source: "TikTok", status: "new", value: 2400, createdAt: "1h", message: "Widziałam reel — interesuje mnie pakiet startowy.", score: 64 },
  { id: "L-2036", name: "Piotr Mazur", initials: "PM", email: "piotr@mazur.dev", source: "Polecenie", status: "qualified", value: 8700, createdAt: "2h", message: "Polecił mi Was Krzysiek z Octopus Studio.", score: 84 },
  { id: "L-2035", name: "Ewa Górska", initials: "EG", email: "ewa.g@klinika.pl", source: "Strona", status: "contacted", value: 5600, createdAt: "3h", message: "Klinika dentystyczna, 3 lokalizacje. Chcemy zautomatyzować recepcję.", score: 81 },
  { id: "L-2034", name: "Damian Król", initials: "DK", email: "d.krol@e-shop.pl", source: "Email", status: "lost", value: 0, createdAt: "wczoraj", message: "Dziękuję, wybraliśmy inne rozwiązanie.", score: 38 },
  { id: "L-2033", name: "Magda Sikora", initials: "MS", email: "magda@brandhouse.pl", source: "Instagram", status: "won", value: 22500, createdAt: "wczoraj", message: "Zatwierdzone — wystawiajcie fakturę.", score: 97 },
  { id: "L-2032", name: "Rafał Pawlak", initials: "RP", email: "r.pawlak@gym.pl", source: "Strona", status: "new", value: 3900, createdAt: "2 dni", message: "Sieć siłowni — interesuje nas onboarding członków.", score: 72 },
];

export const automations: Automation[] = [
  { id: "A-01", name: "Lead Capture · Instagram DM", description: "Przechwytuje wiadomości z IG i zapisuje do CRM", status: "active", trigger: "IG DM zawiera 'oferta'", runs: 1247, successRate: 98.4, lastRun: "12s temu", category: "Lead" },
  { id: "A-02", name: "Auto-odpowiedź · Email", description: "Wysyła spersonalizowaną odpowiedź w <60s", status: "active", trigger: "Nowy lead z email", runs: 892, successRate: 99.1, lastRun: "1 min", category: "Email" },
  { id: "A-03", name: "Reel Generator · AI", description: "Tworzy 3 warianty reels dziennie z trending audio", status: "active", trigger: "Codziennie 06:00", runs: 142, successRate: 94.7, lastRun: "6h", category: "Social" },
  { id: "A-04", name: "Pipeline Optimizer", description: "Analizuje pipeline i sugeruje akcje", status: "active", trigger: "Co 4h", runs: 384, successRate: 100, lastRun: "32 min", category: "Analytics" },
  { id: "A-05", name: "Faktura · Auto-wystaw", description: "Wystawia fakturę po podpisaniu umowy", status: "active", trigger: "Status: won", runs: 47, successRate: 100, lastRun: "wczoraj", category: "CRM" },
  { id: "A-06", name: "Cold Email · Sequence", description: "5-stopniowa sekwencja do leadów cold", status: "paused", trigger: "Manual", runs: 218, successRate: 87.2, lastRun: "3 dni", category: "Email" },
  { id: "A-07", name: "Lead Scoring · GPT", description: "Ocenia leady 1-100 w czasie rzeczywistym", status: "active", trigger: "Nowy lead", runs: 1134, successRate: 96.8, lastRun: "12s", category: "Lead" },
  { id: "A-08", name: "Weekly Report · Slack", description: "Raport tygodniowy do zespołu w piątki", status: "active", trigger: "Pt 17:00", runs: 32, successRate: 100, lastRun: "5 dni", category: "Analytics" },
  { id: "A-09", name: "Abandoned Cart · DM", description: "Przypomnienie w IG po porzuceniu koszyka", status: "draft", trigger: "Brak płatności 1h", runs: 0, successRate: 0, lastRun: "—", category: "Social" },
];

export const initialFeed: FeedEvent[] = [
  { id: "F-001", type: "lead", title: "Lead przechwycony · A.K.", meta: "Instagram · wartość 4.8k", time: "przed chwilą", ts: Date.now() },
  { id: "F-002", type: "ai", title: "Reel wygenerowany", meta: "IG · 3 warianty gotowe", time: "1 min", ts: Date.now() - 60000 },
  { id: "F-003", type: "automation", title: "Auto-odpowiedź wysłana", meta: "Email · M. Zawadzki", time: "5 min", ts: Date.now() - 300000 },
  { id: "F-004", type: "payment", title: "Płatność otrzymana · 18.9k PLN", meta: "Stripe · T. Wiśniewski", time: "32 min", ts: Date.now() - 1920000 },
  { id: "F-005", type: "automation", title: "Pipeline zoptymalizowany", meta: "12 sugestii zastosowanych", time: "wczoraj", ts: Date.now() - 86400000 },
];

export const notifications: Notification[] = [
  { id: "N-01", title: "Nowy lead premium", body: "Anna Kowalska — score 92/100. Kliknij aby otworzyć.", time: "12s", read: false, type: "success" },
  { id: "N-02", title: "Płatność otrzymana", body: "T. Wiśniewski opłacił fakturę FV/2026/0341 — 18 900 PLN.", time: "32 min", read: false, type: "success" },
  { id: "N-03", title: "Automatyzacja wymaga uwagi", body: "Cold Email Sequence wstrzymana — przekroczony limit dzienny.", time: "2h", read: false, type: "alert" },
  { id: "N-04", title: "Raport tygodniowy gotowy", body: "Konwersja +18%, średnia wartość leada +12.4%.", time: "wczoraj", read: true, type: "info" },
  { id: "N-05", title: "Nowa wersja FlowPilot", body: "v1.4 — szybsze AI, nowy widok kalendarza.", time: "2 dni", read: true, type: "info" },
];

export const integrations: Integration[] = [
  { id: "I-IG", name: "Instagram", category: "Social", connected: true, description: "DM, komentarze, reels" },
  { id: "I-EM", name: "Gmail", category: "Email", connected: true, description: "Inbox, sekwencje, etykiety" },
  { id: "I-ST", name: "Stripe", category: "Płatności", connected: true, description: "Faktury, subskrypcje" },
  { id: "I-SL", name: "Slack", category: "Komunikacja", connected: true, description: "Alerty, raporty" },
  { id: "I-HU", name: "HubSpot", category: "CRM", connected: false, description: "Synchronizacja kontaktów" },
  { id: "I-NO", name: "Notion", category: "Wiedza", connected: true, description: "Baza wiedzy, dokumenty" },
  { id: "I-CA", name: "Calendly", category: "Kalendarz", connected: false, description: "Spotkania, slot booking" },
  { id: "I-TT", name: "TikTok", category: "Social", connected: false, description: "Posty, analytics" },
  { id: "I-LI", name: "LinkedIn", category: "Social", connected: true, description: "Posty, wiadomości" },
  { id: "I-WP", name: "WhatsApp Business", category: "Komunikacja", connected: false, description: "Czat, broadcast" },
];

export const team: TeamMember[] = [
  { id: "T-01", name: "Jan Kowal", initials: "JK", role: "Founder", status: "online" },
  { id: "T-02", name: "Marta Lis", initials: "ML", role: "Head of Sales", status: "online" },
  { id: "T-03", name: "Krzysztof Bąk", initials: "KB", role: "Automation Engineer", status: "away" },
  { id: "T-04", name: "Aleksandra Wójcik", initials: "AW", role: "Customer Success", status: "online" },
  { id: "T-05", name: "Bartosz Nowak", initials: "BN", role: "AI Specialist", status: "offline" },
];

export const calendar: CalendarEvent[] = [
  { id: "C-01", title: "Discovery call · Anna Kowalska", time: "10:00", date: "Dziś", type: "call", with: "AK" },
  { id: "C-02", title: "Demo · Brand House", time: "13:30", date: "Dziś", type: "meeting", with: "MS" },
  { id: "C-03", title: "Wysłać ofertę · M. Zawadzki", time: "16:00", date: "Dziś", type: "task" },
  { id: "C-04", title: "Onboarding · T. Wiśniewski", time: "09:00", date: "Jutro", type: "meeting", with: "TW" },
  { id: "C-05", title: "Deadline: faktury Q2", time: "17:00", date: "Pt", type: "deadline" },
  { id: "C-06", title: "Strategy review · zespół", time: "11:00", date: "Pn", type: "meeting" },
];

export const initialChat: ChatMessage[] = [
  { id: "M-01", role: "ai", text: "Cześć Jan. Dziś przechwyciłem 7 leadów (+40% vs średnia). Top: Anna Kowalska, score 92. Chcesz, żebym przygotował dla niej spersonalizowaną ofertę?", time: "9:41" },
];

// Sparkline data — 30 dni
export const revenueSpark = [28, 32, 30, 35, 33, 38, 41, 39, 42, 40, 44, 47, 45, 48, 46, 50, 52, 49, 53, 55, 51, 56, 58, 54, 59, 61, 57, 62, 64, 47.2];
export const leadsSpark = [12, 14, 11, 16, 18, 15, 19, 22, 18, 24, 21, 26, 28, 24, 30, 27, 32, 29, 34, 31, 35, 33, 38, 36, 41, 38, 43, 40, 45, 42];

export const sources = [
  { name: "Instagram", value: 42, color: "white/80" },
  { name: "Strona", value: 28, color: "white/60" },
  { name: "LinkedIn", value: 14, color: "white/40" },
  { name: "Polecenia", value: 9, color: "white/30" },
  { name: "TikTok", value: 7, color: "white/20" },
];

export const polishFirstNames = ["Anna", "Marek", "Julia", "Tomasz", "Karolina", "Piotr", "Ewa", "Damian", "Magda", "Rafał", "Olga", "Jakub", "Natalia", "Adam", "Zofia"];
export const polishLastNames = ["Kowalska", "Zawadzki", "Nowak", "Wiśniewski", "Lis", "Mazur", "Górska", "Król", "Sikora", "Pawlak", "Wójcik", "Bąk"];
export const sourcesPool: LeadSource[] = ["Instagram", "Email", "Strona", "TikTok", "LinkedIn", "Polecenie"];