import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // This is a test endpoint for budgetbuddylive integration
    const response = {
      status: 'success',
      message: 'Budget Buddy Live API is ready for integration',
      endpoints: {
        expenses: '/api/budgetbuddylive/expenses',
        income: '/api/budgetbuddylive/income', 
        budgets: '/api/budgetbuddylive/budgets',
        reports: '/api/budgetbuddylive/reports',
        auth: '/api/budgetbuddylive/auth'
      },
      timestamp: new Date().toISOString()
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Budget Buddy Live API test error:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'API test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Echo back the request for testing
    return NextResponse.json({
      status: 'success',
      message: 'POST endpoint ready',
      received: body,
      timestamp: new Date().toISOString()
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Invalid JSON or request format' 
      }, 
      { status: 400 }
    )
  }
} 