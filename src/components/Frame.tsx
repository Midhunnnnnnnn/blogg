import { cn } from "@/lib/utils"

export function RetroCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex p-4 gap-8 items-center justify-center", className)}
    >
      <div className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-background p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[8px_8px_0_0_#000]">
        <div className="mb-2 flex items-center gap-x-2 text-xs">
          <time
            className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110"
            dateTime="2025-01-19"
          >
            Jan 19, 2025
          </time>
          <a
            className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300"
            href="#"
          >
            Technology
          </a>
        </div>
        <div className="group relative">
          <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
            <a href="#">
              <span className="absolute inset-0 max-w-xs"></span>INNOVATION
              DRIVES CHANGE
            </a>
          </h3>
          <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
            "The best way to predict the future is to invent it."
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-2">
          <div className="text-sm leading-6">
            <p className="font-black text-black transition-all duration-500 ease-in-out transform hover:scale-110">
              <a className="hover:underline hover:text-red-500" href="#">
                <span className="absolute inset-0"></span>-BuouUI-
              </a>
            </p>
            <p className="font-bold text-gray-700 transition-all duration-500 ease-in-out transform hover:text-gray-500">
              Computer Scientist
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
