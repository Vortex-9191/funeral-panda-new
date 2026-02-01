export default function FullScreenLayout({ children, className = '' }) {
  return (
    <div
      className={`relative flex min-h-dvh w-full flex-col overflow-hidden bg-indigo-deep ${className}`}
    >
      {children}
    </div>
  )
}
