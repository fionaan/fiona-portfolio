export default function Year() {
  return (
    <div className="fixed top-0 right-5 sm:right-12 flex flex-col items-center gap-y-5">
      <div className="w-[0.10em] h-[3.5em] bg-newFuchsia"/>
      <p className="year text-newFuchsia rotate-90">{new Date().getFullYear()}.</p>
    </div>
  )
}