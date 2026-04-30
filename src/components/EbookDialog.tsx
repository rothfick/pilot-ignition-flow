import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Download, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PDF_URL = "/ebook/czarny-zeszyt.pdf";

type Props = {
  trigger: React.ReactNode;
};

const EbookDialog = ({ trigger }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black border border-white/10 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light">
              FlowPilot · E-book
            </p>
            <h3 className="text-white font-light text-lg mt-0.5">
              Czarny <span className="italic text-white/70">Zeszyt</span>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PDF_URL}
              download="Czarny-Zeszyt.pdf"
              className="btn-pill !py-2 !px-4 text-xs uppercase tracking-[0.2em]"
            >
              <Download className="w-3.5 h-3.5" />
              Pobierz
            </a>
            <button
              aria-label="Zamknij"
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.iframe
              key="pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`${PDF_URL}#view=FitH`}
              title="Czarny Zeszyt — podgląd"
              className="flex-1 w-full h-full bg-zinc-900"
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export const EbookActions = () => (
  <div className="flex items-center gap-2">
    <EbookDialog
      trigger={
        <button className="btn-pill !py-2 !px-4 text-[10px] uppercase tracking-[0.25em]">
          <Eye className="w-3 h-3" /> Podgląd
        </button>
      }
    />
    <a
      href={PDF_URL}
      download="Czarny-Zeszyt.pdf"
      onClick={(e) => e.stopPropagation()}
      className="btn-pill !py-2 !px-4 text-[10px] uppercase tracking-[0.25em]"
    >
      <Download className="w-3 h-3" /> Pobierz
    </a>
  </div>
);

export default EbookDialog;
