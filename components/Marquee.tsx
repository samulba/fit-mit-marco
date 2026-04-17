import { Phone } from "lucide-react";

export function Marquee() {
  const text = "Jetzt Erstgespräch sichern";
  const phone = "+49 176 2346578";
  const item = (
    <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
      <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl">
        {text}
      </span>
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-mint" />
      <span className="font-mono text-xs sm:text-sm lg:text-base tracking-wide inline-flex items-center gap-2">
        <Phone size={14} /> Ruf an: {phone}
      </span>
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-mint" />
    </div>
  );

  return (
    <div className="bg-teal text-forest overflow-hidden py-5 sm:py-6 border-y border-teal/50">
      <div className="flex animate-marquee whitespace-nowrap gap-6 sm:gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}
