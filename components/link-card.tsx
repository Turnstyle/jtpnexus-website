import Link from "next/link"
import { ArrowRight, Layers, Search, Flame, Apple } from "lucide-react"

interface LinkCardProps {
  title: string
  description: string
  href: string
  ctaText: string
  gradient: string
  icon: "layers" | "search" | "flame" | "apple"
  onClick?: () => void
}

export function LinkCard({ title, description, href, ctaText, gradient, icon, onClick }: LinkCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "layers":
        return <Layers className="h-5 w-5" />
      case "search":
        return <Search className="h-5 w-5" />
      case "flame":
        return <Flame className="h-5 w-5" />
      case "apple":
        return <Apple className="h-5 w-5" />
      default:
        return <Layers className="h-5 w-5" />
    }
  }

  const cardContent = (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-gray-600/70">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10" 
           style={{ backgroundImage: `linear-gradient(135deg, #6b7280, #374151)` }}>
      </div>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className={`mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg`}>
                {getIcon()}
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                {title}
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>
          <div className="ml-4 flex items-center text-gray-500 group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} opacity-60 transition-all duration-300 group-hover:opacity-100`}></div>
      </div>
    </div>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {cardContent}
      </button>
    )
  }

  return (
    <Link href={href} className="block">
      {cardContent}
    </Link>
  )
}