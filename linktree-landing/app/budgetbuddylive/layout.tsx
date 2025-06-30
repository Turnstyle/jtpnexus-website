import React from 'react'

export default function BudgetBuddyLiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="budgetbuddylive-app">
      {/* Optional: Add budgetbuddylive-specific navigation or header */}
      <main className="flex-1">
        {children}
      </main>
      {/* Optional: Add budgetbuddylive-specific footer */}
    </div>
  )
} 