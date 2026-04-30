import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FeedEvent, initialFeed, polishFirstNames, polishLastNames, sourcesPool, leads as initialLeads, Lead, notifications as initialNotifications, Notification } from "../data/mockData";

interface LiveContextValue {
  feed: FeedEvent[];
  leads: Lead[];
  notifications: Notification[];
  revenue: number;
  revenueDelta: number;
  leadsToday: number;
  conversionRate: number;
  uptime: number;
  automationsActive: number;
  sparkline: number[];
  markAllNotificationsRead: () => void;
  pulse: number; // increments each tick — for triggering subtle animations
}

const LiveContext = createContext<LiveContextValue | null>(null);

const rand = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const initials = (first: string, last: string) => `${first[0]}${last[0]}`;

export const LiveSimulationProvider = ({ children }: { children: ReactNode }) => {
  const [feed, setFeed] = useState<FeedEvent[]>(initialFeed);
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [revenue, setRevenue] = useState(47200);
  const [revenueDelta, setRevenueDelta] = useState(12.4);
  const [leadsToday, setLeadsToday] = useState(7);
  const [conversionRate, setConversionRate] = useState(18.4);
  const [uptime] = useState(99.9);
  const [automationsActive] = useState(12);
  const [sparkline, setSparkline] = useState<number[]>([28, 32, 30, 35, 33, 38, 41, 39, 42, 40, 44, 47, 45, 48, 46, 50, 52, 49, 53, 55, 51, 56, 58, 54, 59, 61, 57, 62, 64, 47.2]);
  const [pulse, setPulse] = useState(0);

  // Pulse every 4s for ambient micro-animation
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => p + 1), 4000);
    return () => clearInterval(id);
  }, []);

  // New lead every ~14-22s
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(() => {
        const first = rand(polishFirstNames);
        const last = rand(polishLastNames);
        const source = rand(sourcesPool);
        const value = Math.round((1500 + Math.random() * 18000) / 100) * 100;
        const score = 50 + Math.floor(Math.random() * 50);
        const id = `L-${2042 + Math.floor(Math.random() * 9999)}`;
        const newLead: Lead = {
          id,
          name: `${first} ${last}`,
          initials: initials(first, last),
          email: `${first.toLowerCase()}.${last.toLowerCase()}@mail.pl`.replace(/ł/g, "l").replace(/ą/g, "a").replace(/ę/g, "e").replace(/ó/g, "o").replace(/ś/g, "s").replace(/ż|ź/g, "z").replace(/ć/g, "c").replace(/ń/g, "n"),
          source,
          status: "new",
          value,
          createdAt: "przed chwilą",
          message: "Hej, chciałbym poznać szczegóły waszej oferty.",
          score,
        };
        setLeads((prev) => [newLead, ...prev].slice(0, 50));
        setLeadsToday((c) => c + 1);
        setRevenue((r) => r + Math.round(value * 0.15));
        setRevenueDelta((d) => Math.min(99, d + Math.random() * 0.4));
        setConversionRate((c) => Math.max(0, Math.min(100, c + (Math.random() - 0.4) * 0.6)));

        const event: FeedEvent = {
          id: `F-${Date.now()}`,
          type: "lead",
          title: `Lead przechwycony · ${newLead.initials}`,
          meta: `${source} · wartość ${(value / 1000).toFixed(1)}k`,
          time: "przed chwilą",
          ts: Date.now(),
        };
        setFeed((prev) => [event, ...prev].slice(0, 30));

        // Sometimes follow-up event
        if (Math.random() > 0.5) {
          setTimeout(() => {
            const follow: FeedEvent = {
              id: `F-${Date.now() + 1}`,
              type: "automation",
              title: `Auto-odpowiedź wysłana · ${newLead.initials}`,
              meta: `${source === "Instagram" || source === "TikTok" ? "DM" : "Email"} · 0:42s`,
              time: "przed chwilą",
              ts: Date.now(),
            };
            setFeed((prev) => [follow, ...prev].slice(0, 30));
          }, 3000);
        }

        // Premium lead → notification
        if (score > 85) {
          const notif: Notification = {
            id: `N-${Date.now()}`,
            title: "Nowy lead premium",
            body: `${newLead.name} — score ${score}/100. Wartość ${(value / 1000).toFixed(1)}k PLN.`,
            time: "przed chwilą",
            read: false,
            type: "success",
          };
          setNotifications((prev) => [notif, ...prev].slice(0, 20));
        }

        schedule();
      }, 14000 + Math.random() * 8000);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, []);

  // Sparkline drift every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setSparkline((prev) => {
        const next = [...prev.slice(1), Math.max(20, prev[prev.length - 1] + (Math.random() - 0.45) * 4)];
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Time labels age — re-render handled by pulse

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <LiveContext.Provider
      value={{
        feed,
        leads,
        notifications,
        revenue,
        revenueDelta,
        leadsToday,
        conversionRate,
        uptime,
        automationsActive,
        sparkline,
        markAllNotificationsRead,
        pulse,
      }}
    >
      {children}
    </LiveContext.Provider>
  );
};

export const useLive = () => {
  const ctx = useContext(LiveContext);
  if (!ctx) throw new Error("useLive must be used within LiveSimulationProvider");
  return ctx;
};