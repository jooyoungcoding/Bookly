import { useEffect, useState } from "react";
import booklyLogo from "../../../assets/bookly-logo.png";

interface WelcomeScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

export function WelcomeScreen({
  onComplete,
  durationMs = 1600,
}: WelcomeScreenProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, Math.max(durationMs - 280, 300));

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, durationMs);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
        setIsLeaving(true);
        window.setTimeout(onComplete, 180);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [durationMs, onComplete]);

  const handleSkip = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    window.setTimeout(onComplete, 180);
  };

  return (
    <main
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Bookly"
      className={`fixed inset-0 flex items-center justify-center bg-[#f5e5cc] px-[max(1.5rem,env(safe-area-inset-left))] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] transition-opacity duration-300 cursor-pointer ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={booklyLogo}
        alt="Bookly"
        draggable={false}
        className="animate-fade-in h-36 w-36 object-contain select-none"
      />
    </main>
  );
}
