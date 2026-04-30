import { motion } from "framer-motion";
import { ArrowUpRight, Download, Eye, Instagram } from "lucide-react";
import InkbladeMockup from "@/components/portfolio/InkbladeMockup";
import PhoneMockup from "@/components/portfolio/PhoneMockup";
import EbookMockup from "@/components/portfolio/EbookMockup";
import InstagramMockup from "@/components/portfolio/InstagramMockup";
import EbookDialog from "@/components/EbookDialog";
import { downloadEbook, EBOOK_DOWNLOAD_PAGE_URL } from "@/lib/ebookDownload";

const baseCard =
  "group relative rounded-2xl overflow-hidden border border-white/[0.05] bg-white/[0.02] backdrop-blur-md transition-all";

const Card = ({
  children,
  delay,
  href,
  onClick,
  asDiv,
}: {
  children: React.ReactNode;
  delay: number;
  href?: string;
  onClick?: () => void;
  asDiv?: boolean;
}) => {
  const Comp: any = asDiv ? "div" : "a";
  const props = asDiv
    ? {}
    : { href, target: href?.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -4 }}
      className={baseCard}
    >
      <Comp {...props} onClick={onClick} className="block">
        {children}
      </Comp>
    </motion.div>
  );
};

const Footer = ({
  title,
  tag,
  action,
}: {
  title: string;
  tag: string;
  action?: React.ReactNode;
}) => (
  <div className="p-6 flex items-center justify-between gap-4">
    <div className="min-w-0">
      <h3 className="text-white font-light text-lg truncate">{title}</h3>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1 font-light">
        {tag}
      </p>
    </div>
    {action ?? (
      <ArrowUpRight
        className="w-5 h-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300 shrink-0"
        strokeWidth={1.5}
      />
    )}
  </div>
);

const Portfolio = () => {
  return (
    <section className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white mb-4"
        >
          Wybrane <span className="italic text-white/70">realizacje</span>
        </motion.h2>
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-20">
          Cisza, precyzja, rezultat
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Inkblade */}
          <Card delay={0} href="https://www.inkblade.site/">
            <div className="aspect-[4/3] w-full relative bg-zinc-950">
              <InkbladeMockup />
            </div>
            <Footer title="Ink & Blade Academy" tag="WWW · Identyfikacja" />
          </Card>

          {/* FlowPilot Command */}
          <Card delay={0.08} href="/app">
            <div className="aspect-[4/3] w-full relative" style={{ background: "linear-gradient(135deg, #18181b 0%, #000 100%)" }}>
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
              <PhoneMockup />
            </div>
            <Footer title="FlowPilot Command" tag="PWA · Aplikacja" />
          </Card>

          {/* Czarny Zeszyt */}
          <Card delay={0.16} asDiv>
            <a
              href={EBOOK_DOWNLOAD_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={downloadEbook}
              className="block w-full text-left aspect-[4/3] relative cursor-pointer"
              style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #18181b 100%)" }}
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
              <EbookMockup />
            </a>
            <div className="p-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-white font-light text-lg truncate">Czarny Zeszyt</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1 font-light">
                  E-book · Premium
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <EbookDialog
                  trigger={
                    <button className="btn-pill !py-2 !px-3 text-[10px] uppercase tracking-[0.2em]">
                      <Eye className="w-3 h-3" /> Podgląd
                    </button>
                  }
                />
                <a
                  href={EBOOK_DOWNLOAD_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={downloadEbook}
                  className="btn-pill !py-2 !px-3 text-[10px] uppercase tracking-[0.2em]"
                >
                  <Download className="w-3 h-3" /> Pobierz
                </a>
              </div>
            </div>
          </Card>

          {/* Noir Automation - Instagram */}
          <Card delay={0.24} href="https://www.instagram.com/inkandblade.academy/">
            <div className="aspect-[4/3] w-full relative" style={{ background: "linear-gradient(135deg, #0f0f10 0%, #1f1f22 100%)" }}>
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_60%)]" />
              <InstagramMockup />
            </div>
            <div className="p-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-white font-light text-lg truncate">Ink &amp; Blade Academy</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1 font-light">
                  SMM · System
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-white/60 group-hover:text-white transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" strokeWidth={1.5} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
