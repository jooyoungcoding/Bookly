import { FolderOpen, FolderPlus } from "lucide-react";
import booklyLogo from "../../../assets/bookly-logo.png";

export function HomeScreen() {
  return (
    <div className="animate-fade-in relative flex min-h-dvh w-full flex-col bg-[#f5e5cc]">
      <header className="absolute top-0 left-0 pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] pb-5 pl-[calc(env(safe-area-inset-left,0px)+1.5rem)] pr-[calc(env(safe-area-inset-right,0px)+1.5rem)]">
        <img
          src={booklyLogo}
          alt="Bookly"
          draggable={false}
          className="h-9 w-9 object-contain select-none"
        />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-[calc(env(safe-area-inset-top,0px)+3.5rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] text-center">
        <FolderOpen
          className="h-14 w-14 text-[#000000]"
          strokeWidth={2}
          aria-hidden="true"
        />

        <h1 className="mt-5 text-[24px] font-bold tracking-tight text-[#000000]">
          Your bookshelf is giving... empty 📚
        </h1>

        <p className="mt-2 text-[14px] font-normal text-[#000000]/65">
          Drop some books in and let the reading era begin.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#009fff] px-4 py-2.5 text-xs font-medium text-[#ffffff] transition-opacity duration-150 hover:opacity-90 active:opacity-80 focus:outline-none"
        >
          <FolderPlus
            className="h-4 w-4 text-[#ffffff]"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>Import here</span>
        </button>
      </main>
    </div>
  );
}
