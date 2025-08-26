'use client';

import Link from 'next/link';

export default function ProduceSectionPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #065f46, #065f46, #064e3b)',
      color: 'white',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          width="96" 
          height="96" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            margin: '0 auto',
            marginBottom: '2rem',
            color: 'rgba(167, 243, 208, 0.8)', 
            animation: 'pulse 2s infinite'
          }}
        >
          <path d="M12 2a9 9 0 0 1 9 9c0 4-3 6.5-4 8.5s-2.5 3-5 3-4-1-5-3S3 15 3 11a9 9 0 0 1 9-9Z"/>
          <path d="M12 6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Z"/>
          <path d="M12 17a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2Z"/>
        </svg>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          The <span style={{
            background: 'linear-gradient(to right, #84cc16, #22c55e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Produce Section</span>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#d1fae5',
          marginBottom: '2.5rem',
          maxWidth: '36rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          A whimsical GenAI Image maker for people who love their fruits & veggies
        </p>
        <div style={{
          backgroundColor: 'rgba(6, 78, 59, 0.6)',
          padding: '2rem',
          borderRadius: '0.75rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          maxWidth: 'md',
          margin: '0 auto'
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              margin: '0 auto',
              marginBottom: '1rem',
              color: '#a7f3d0'
            }}
          >
            <path d="M12 9v4l2 2" />
            <path d="M4 22h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2Z" />
            <path d="M3.3 7h17.4" />
          </svg>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: '600',
            color: '#d1fae5',
            marginBottom: '0.75rem'
          }}>Coming Soon!</h2>
          <p style={{
            color: '#a7f3d0',
            marginBottom: '1.5rem'
          }}>
            Get ready to create fun, imaginative images featuring your favorite fruits and vegetables!
            The Produce Section is ripening and will be ready for harvest soon.
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            borderWidth: '1px',
            borderColor: 'rgba(167, 243, 208, 0.5)',
            color: '#d1fae5',
            fontWeight: '500',
            fontSize: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}>
            Back to Home
          </Link>
        </div>
      </div>
      <footer style={{
        position: 'absolute',
        bottom: '2rem',
        textAlign: 'center',
        width: '100%',
        fontSize: '0.875rem',
        color: '#a7f3d0'
      }}>
        <p>&copy; {new Date().getFullYear()} John Turner Peters. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
