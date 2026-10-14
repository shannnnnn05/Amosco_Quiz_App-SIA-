import { useLocation, useNavigate } from "react-router-dom";
import { AnswerRecord } from "../types";
import Window from "../components/Window";
import ResultCard from "../components/ResultCard";

type ResultState = {
  total: number;
  correct: number;
  ngaran?: string;
  responses?: AnswerRecord[];
};

function Result() {
  const magduman = useNavigate();
  const kinamumugtakan = useLocation();
  const estado = kinamumugtakan.state as ResultState | null;
  const kabilugan = estado ? estado.total : 0;
  const tama = estado ? estado.correct : 0;
  const ngaranKanParakawat = estado && estado.ngaran ? estado.ngaran : "";
  const mgaSimbag = estado && estado.responses ? estado.responses : [];

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-8">
      <div className="grid-overlay" />
      <Window title="Quiz ni Kris">
        <ResultCard
          total={kabilugan}
          correct={tama}
          name={ngaranKanParakawat}
          responses={mgaSimbag}
          saPagLiwat={() =>
            magduman("/quiz", { state: { ngaran: ngaranKanParakawat } })
          }
          saPagUli={() => magduman("/")}
        />
      </Window>
    </div>
  );
}

export default Result;
