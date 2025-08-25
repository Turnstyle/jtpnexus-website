"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, X } from "lucide-react"
import { ContactForm } from "./contact-form"
import { Button } from "@/components/ui/button"
import { XLogo } from "./icons/x-logo"

export function SocialLinks() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-20 flex flex-col space-y-3 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        <a
          href="https://www.linkedin.com/in/j-t-peters/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-110 hover:shadow-xl"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
        <a
          href="https://x.com/JTPeters_"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-110 hover:shadow-xl"
          aria-label="X (formerly Twitter) Profile"
        >
          <XLogo className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
        <a
          href="https://github.com/Turnstyle"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-110 hover:shadow-xl"
          aria-label="GitHub Profile"
        >
          <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
        <Button
          onClick={() => setShowContactForm(true)}
          variant="outline"
          size="icon"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-110 hover:shadow-xl"
          aria-label="Contact Me"
        >
          <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </Button>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowContactForm(false);
            }
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-900/95 backdrop-blur-md border border-gray-700/50 p-6 shadow-2xl">
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-gray-700 to-black opacity-20 blur-3xl"></div>

            <Button
              onClick={() => setShowContactForm(false)}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white z-50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </>
  )
}