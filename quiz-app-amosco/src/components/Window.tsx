import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
};

function Window({ title, children }: WindowProps) {
  return (
    <div className="relative w-full max-w-[640px] animate-rise overflow-hidden rounded-[18px] border border-line bg-[linear-gradient(180deg,rgba(19,28,48,0.92),rgba(12,18,33,0.96))] shadow-[0_30px_70px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(56,225,255,0.04)] backdrop-blur-md">
      <span className="absolute inset-x-0 top-0 z-10 h-0.5 bg-linear-to-r from-accent via-accent-blue to-accent-purple" />
      <div className="flex items-center gap-2 border-b border-line-soft bg-[#090e1a]/70 px-4 py-[13px]">
        <span className="ml-2.5 text-[12.5px] tracking-[0.02em] text-muted">
          {title}
        </span>
      </div>
      <div className="px-[34px] pt-[34px] pb-9 max-[520px]:px-5 max-[520px]:pt-6 max-[520px]:pb-[26px]">
        {children}
      </div>
    </div>
  );
}

export default Window;
