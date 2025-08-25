'use client'

import { SocialLinks } from "@/components/social-links"
import { LinkCard } from "@/components/link-card"
import { BackgroundAnimation } from "@/components/background-animation"

export function PageContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <BackgroundAnimation />

      <main className="container relative z-10 mx-auto px-4 pt-12 sm:px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-2xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-6 shadow-2xl">
                <span className="text-2xl font-bold text-white">JTP</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              John Turner Peters
            </h1>
            <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
              Developer & Digital Innovator
            </p>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Explore my collection of tools and applications built with modern technologies
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <LinkCard
              title="RIA Hunter"
              description="Professional investment advisor search and discovery platform"
              href="https://ria-hunter.jtpnexus.com"
              ctaText="Explore Platform"
              gradient="from-gray-600 to-gray-800"
              icon="search"
            />
            <LinkCard
              title="Cyber Spy Hunter"
              description="Advanced cybersecurity monitoring and threat detection system"
              href="/cyber-spy-hunter"
              ctaText="Launch Application"
              gradient="from-gray-700 to-black"
              icon="layers"
            />
            <LinkCard
              title="Snake Game"
              description="Classic snake game with modern design and smooth gameplay"
              href="/snake-game"
              ctaText="Play Game"
              gradient="from-gray-600 to-gray-900"
              icon="flame"
            />
            <LinkCard
              title="Music Mana"
              description="Intelligent music discovery and playlist management platform"
              href="/music-mana"
              ctaText="Discover Music"
              gradient="from-black to-gray-700"
              icon="apple"
            />
            <LinkCard
              title="The Produce Section"
              description="Creative AI-powered image generation for fresh produce enthusiasts"
              href="/produce-section"
              ctaText="Create Images"
              gradient="from-gray-800 to-gray-600"
              icon="apple"
            />
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <span className="text-gray-300 text-sm">
                Connect with me through the social links
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gray-800 opacity-20 blur-3xl"></div>
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gray-700 opacity-20 blur-3xl"></div>
      </main>
    </div>
  )
}