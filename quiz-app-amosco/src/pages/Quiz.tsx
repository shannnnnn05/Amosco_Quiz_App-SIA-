import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { saliwon } from "../utils/saliwon";
import { AnswerRecord } from "../types";
import Window from "../components/Window";
import Button from "../components/Button";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

type QuizState = {
  ngaran?: string;
};

const MGA_TECLA = ["a", "b", "c", "d"];

function Quiz() {
  const magduman = useNavigate();
  const kinamumugtakan = useLocation();
  const estado = kinamumugtakan.state as QuizState | null;
  const ngaranKanParakawat = estado && estado.ngaran ? estado.ngaran : "";

  const [mgaHapot] = useState(() =>
    saliwon(questions).map((item) => ({
      ...item,
      choices: saliwon(item.choices),
    }))
  );
  const [indeks, ibugtakAnIndeks] = useState(0);
  const [napilingSimbag, ibugtakAnSimbag] = useState("");
  const [puntos, ibugtakAnPuntos] = useState(0);
  const [mgaSimbag, ibugtakAnMgaSimbag] = useState<AnswerRecord[]>([]);

  const hapotNgunyan = mgaHapot[indeks];
  const huringHapot = indeks === mgaHapot.length - 1;

  function magpadagos() {
    const tala: AnswerRecord = {
      question: hapotNgunyan,
      selected: napilingSimbag,
    };
    const bagongMgaSimbag = [...mgaSimbag, tala];
    const bagongPuntos =
      napilingSimbag === hapotNgunyan.answer ? puntos + 1 : puntos;

    ibugtakAnPuntos(bagongPuntos);

    if (huringHapot) {
      magduman("/result", {
        state: {
          total: mgaHapot.length,
          correct: bagongPuntos,
          ngaran: ngaranKanParakawat,
          responses: bagongMgaSimbag,
        },
      });
      return;
    }

    ibugtakAnMgaSimbag(bagongMgaSimbag);
    ibugtakAnIndeks(indeks + 1);
    ibugtakAnSimbag("");
  }

  useEffect(() => {
    function dangogonAnTecla(event: KeyboardEvent) {
      const teclaIndeks = MGA_TECLA.indexOf(event.key.toLowerCase());

      if (teclaIndeks >= 0 && teclaIndeks < hapotNgunyan.choices.length) {
        ibugtakAnSimbag(hapotNgunyan.choices[teclaIndeks]);
      }

      if (event.key === "Enter" && napilingSimbag !== "") {
        magpadagos();
      }
    }

    window.addEventListener("keydown", dangogonAnTecla);
    return () => window.removeEventListener("keydown", dangogonAnTecla);
  });

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-8">
      <div className="grid-overlay" />
      <Window title="Quiz ni Kris">
        <QuizHeader
          current={indeks + 1}
          total={mgaHapot.length}
          score={puntos}
        />
        <ProgressBar current={indeks + 1} total={mgaHapot.length} />
        <div className="min-h-[240px] animate-question-in" key={indeks}>
          <QuestionCard
            question={hapotNgunyan}
            questionNumber={indeks + 1}
            selectedAnswer={napilingSimbag}
            saPagpili={ibugtakAnSimbag}
          />
        </div>
        <div className="mt-[22px] flex justify-end">
          <Button
            className="max-[520px]:w-full"
            onClick={magpadagos}
            disabled={napilingSimbag === ""}
          >
            {huringHapot ? "Finish Quiz" : "Next"}
            <span>→</span>
          </Button>
        </div>
      </Window>
    </div>
  );
}

export default Quiz;
