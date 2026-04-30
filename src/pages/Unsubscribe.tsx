import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State =
  | { kind: "loading" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } },
        );
        const data = await res.json();
        if (!res.ok) {
          setState({ kind: "invalid" });
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setState({ kind: "already" });
          return;
        }
        setState({ kind: "valid" });
      } catch {
        setState({ kind: "error", message: "Nie udało się zweryfikować linku." });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) {
      setState({ kind: "error", message: "Coś poszło nie tak. Spróbuj ponownie." });
      return;
    }
    if (data?.success || data?.reason === "already_unsubscribed") {
      setState({ kind: "success" });
    } else {
      setState({ kind: "error", message: "Nie udało się przetworzyć rezygnacji." });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
      <div className="max-w-md w-full text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-light">
          FlowPilot AI Lab
        </p>
        <h1 className="text-3xl font-light -tracking-[0.02em]">Rezygnacja z e-maili</h1>

        {state.kind === "loading" && (
          <p className="text-white/60 font-light">Weryfikujemy link…</p>
        )}
        {state.kind === "invalid" && (
          <p className="text-white/60 font-light">Link jest nieprawidłowy lub wygasł.</p>
        )}
        {state.kind === "already" && (
          <p className="text-white/60 font-light">
            Ten adres został już wypisany z naszej listy.
          </p>
        )}
        {state.kind === "valid" && (
          <>
            <p className="text-white/60 font-light">
              Kliknij poniżej, aby potwierdzić, że nie chcesz otrzymywać dalszych e-maili.
            </p>
            <button onClick={confirm} className="btn-pill !py-4 px-10 uppercase tracking-[0.3em] text-xs">
              Potwierdź rezygnację
            </button>
          </>
        )}
        {state.kind === "submitting" && (
          <p className="text-white/60 font-light">Przetwarzanie…</p>
        )}
        {state.kind === "success" && (
          <p className="text-white/60 font-light">
            Gotowe. Twój adres został wypisany z naszej listy.
          </p>
        )}
        {state.kind === "error" && (
          <p className="text-white/60 font-light">{state.message}</p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;