import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Window from "../components/Window";
import Button from "../components/Button";

function Home() {
  const magduman = useNavigate();
  const [ngaran, ibugtakAnNgaran] = useState("");

  function magpoon() {
    magduman("/quiz", { state: { ngaran: ngaran.trim() } });
  }

  function dangogonAnTecla(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      magpoon();
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-8">
      <div className="grid-overlay" />
      <Window title= "Quiz ni Kris">
        <div className="flex flex-col items-start gap-3.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/[0.08] px-3 py-1.5 text-xs tracking-[0.03em] text-ok">
          System Integration and Architecture - Sir Fadrilan
          </span>

          <h1 className="mt-1.5 bg-[linear-gradient(100deg,#ffffff_10%,var(--color-accent)_55%,var(--color-accent-purple))] bg-clip-text text-[40px] leading-[1.1] font-bold tracking-[-0.02em] text-transparent max-[520px]:text-[30px]">
            Quiz App Amosco
            <span className="ml-1.5 inline-block h-[34px] w-1 animate-blink bg-accent align-[-4px] shadow-[0_0_14px_var(--color-accent)] max-[520px]:h-[26px]" />
          </h1>

          <p className="text-[14.5px] leading-relaxed text-muted">
          Go and Explore what's the content of my Quiz!
          </p>

          <div className="mt-3 w-full">
            <label
              htmlFor="name-input"
              className="mb-2 block text-xs tracking-[0.14em] text-muted uppercase"
            >Enter your name
            </label>
            <div className="flex items-center gap-2.5 rounded-xl border border-line bg-shell/75 px-4 transition focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(56,225,255,0.12)]">
              <input
                id="name-input"
                className="min-h-[52px] flex-1 bg-transparent py-3.5 text-[15px] text-fg outline-none placeholder:text-[#4a5c7a]"
                type="text"
                placeholder="Shan Amosco"
                value={ngaran}
                autoComplete="off"
                onChange={(event) => ibugtakAnNgaran(event.target.value)}
                onKeyDown={dangogonAnTecla}
              />
            </div>
          </div>

          <Button className="mt-2 max-[520px]:w-full" onClick={magpoon}>
            Start Quiz
          </Button>

          <p className="text-[12.5px] text-muted">
            Programmed by Kristian Carl D. Amosco{" "}
          </p>
        </div>
      </Window>
    </div>
  );
}

export default Home;
