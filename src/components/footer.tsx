export function Footer() {
  const gitHash = process.env.NEXT_PUBLIC_GIT_HASH;
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;
  
  return (
    <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/20 font-mono">
      {yearDisplay} 池鱼 · {gitHash}
    </footer>
  )
}
