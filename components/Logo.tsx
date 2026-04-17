type LogoVariant = "dark" | "light" | "teal";

interface LogoProps {
  variant?: LogoVariant;
  width?: number;
  height?: number;
  showTagline?: boolean;
}

export function Logo({
  variant = "light",
  width = 240,
  height = 72,
  showTagline = true,
}: LogoProps) {
  const colors = {
    dark: {
      ringA: "rgba(0,184,148,0.15)",
      ringB: "rgba(0,184,148,0.25)",
      figureA: "#00B894",
      figureB: "#55EFC4",
      text1: "#FFFFFF",
      text2: "#00B894",
      tagline: "rgba(255,255,255,0.35)",
    },
    light: {
      ringA: "rgba(26,60,52,0.08)",
      ringB: "rgba(26,60,52,0.12)",
      figureA: "#1A3C34",
      figureB: "#00B894",
      text1: "#1A3C34",
      text2: "#00B894",
      tagline: "rgba(26,60,52,0.4)",
    },
    teal: {
      ringA: "rgba(255,255,255,0.15)",
      ringB: "rgba(255,255,255,0.2)",
      figureA: "#FFFFFF",
      figureB: "rgba(255,255,255,0.6)",
      text1: "#FFFFFF",
      text2: "#1A3C34",
      tagline: "rgba(255,255,255,0.5)",
    },
  }[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fit mit Marco – Personal Training für Senioren"
    >
      <circle
        cx="40"
        cy="40"
        r="38"
        fill="none"
        stroke={colors.ringA}
        strokeWidth="1.5"
      />
      <circle
        cx="40"
        cy="40"
        r="28"
        fill="none"
        stroke={colors.ringB}
        strokeWidth="1"
      />
      <circle
        cx="40"
        cy="20"
        r="6"
        fill={variant === "teal" ? "#FFFFFF" : "#00B894"}
      />
      <path
        d="M40 28 C40 28 32 38 28 48 C26 53 30 55 33 52 L38 44"
        stroke={colors.figureA}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 28 C40 28 48 38 52 48 C54 53 50 55 47 52 L42 44"
        stroke={colors.figureB}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 36 C30 34 25 36 24 38"
        stroke={colors.figureA}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 36 C50 34 55 36 56 38"
        stroke={colors.figureB}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="88"
        y="32"
        fontFamily="var(--font-cormorant), serif"
        fontSize="28"
        fontWeight="700"
        fill={colors.text1}
      >
        fit mit
      </text>
      <text
        x="88"
        y="60"
        fontFamily="var(--font-cormorant), serif"
        fontSize="28"
        fontWeight="700"
        fill={colors.text2}
      >
        marco
      </text>
      {showTagline && (
        <text
          x="89"
          y="74"
          fontFamily="var(--font-outfit), sans-serif"
          fontSize="8"
          fill={colors.tagline}
          letterSpacing="3"
        >
          PERSONAL TRAINING FÜR SENIOREN
        </text>
      )}
    </svg>
  );
}

export function LogoIcon({
  size = 48,
  variant = "light",
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  const stroke1 = variant === "dark" ? "#FFFFFF" : "#1A3C34";
  const stroke2 = variant === "dark" ? "#55EFC4" : "#00B894";
  const dot = "#00B894";
  const bg = variant === "dark" ? "#1A3C34" : "transparent";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {variant === "dark" && <rect width="48" height="48" rx="12" fill={bg} />}
      <circle cx="24" cy="13" r="4" fill={dot} />
      <path
        d="M24 18 C24 18 19 25 17 31 C16 34 18 35 20 33 L23 28"
        stroke={stroke1}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 18 C24 18 29 25 31 31 C32 34 30 35 28 33 L25 28"
        stroke={stroke2}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21 23 C19 22 16 23 15 24"
        stroke={stroke1}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 23 C29 22 32 23 33 24"
        stroke={stroke2}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
