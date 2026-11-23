import { useEffect } from "react";
import { isTauri } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";

const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, [contenteditable="true"], [data-no-maximize]';

export function useDoubleClickMaximize() {
  useEffect(() => {
    if (!isTauri()) return;

    const handleDoubleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) return;

      void getCurrentWindow().toggleMaximize();
    };

    window.addEventListener("dblclick", handleDoubleClick);
    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);
}
