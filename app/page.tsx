export default function Home() {
  return (
    <div className="font-mono grid grid-rows-[1fr] items-center justify-items-center min-h-screen bg-[#000000] p-4 sm:p-8">
      <main className="flex flex-col gap-4 sm:gap-8 items-center text-center [image-rendering:pixelated]">
        <div className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl [font-family:var(--font-geist-mono)]">
          <pre className="leading-none">
            {`
  __ _ _             _       
 / _| (_)_ __   ___ | |_ ___ 
| |_| | | '_ \\ / _ \\| __/ _ \\
|  _| | | |_) | (_) | ||  __/
|_| |_|_| .__/ \\___/ \\__\\___|
        |_|                   
            `}
          </pre>
        </div>
        <a
          className="border-2 border-[#ffffff] bg-[#000000] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#000000] transition-colors px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base [font-family:var(--font-geist-mono)]"
          href="/get-started"
        >
          [GET STARTED]
        </a>
      </main>
    </div>
  );
}
