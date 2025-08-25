"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    formType: "contact",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch('/api/save-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted:", formData)
        setFormState("success")
      } else {
        console.error("Failed to save form data", await response.text());
        setFormState("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("idle");
    }
  }

  if (formState === "success") {
    return (
      <div className="relative flex flex-col items-center justify-center py-8 text-center">
        <div className="animate-pulse">
          <CheckCircle className="mb-4 h-20 w-20 text-gray-400" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">
          Message Sent!
        </h3>
        <p className="mb-6 text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
        <Button
          onClick={onClose}
          className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
        >
          Close
        </Button>
      </div>
    )
  }

  return (
    <div className="relative py-2">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Get in Touch
      </h2>
      <p className="mb-6 text-gray-400">
        Have a question or want to collaborate? Send me a message and I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-300">
            Phone (optional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            rows={4}
            required
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <div className="flex justify-end space-x-2 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={formState === "submitting"}
            className="border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            {formState === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
}