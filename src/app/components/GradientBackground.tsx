export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 animate-gradient opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900 via-indigo-800 to-violet-900 animate-gradient opacity-50 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(255,0,128,0.1)_0deg,_rgba(255,140,0,0.1)_120deg,_rgba(64,224,208,0.1)_240deg,_rgba(255,0,128,0.1)_360deg)]" />
    </div>
  )
}