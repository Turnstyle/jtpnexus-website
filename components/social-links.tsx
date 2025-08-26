'use client';

import { XLogo } from './icons/x-logo';

export function SocialLinks() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '0.5rem',
      left: 0,
      right: 0,
      zIndex: 20,
      borderTop: '1px solid rgba(255, 255, 255, 0.5)',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: '0.5rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backdropFilter: 'blur(8px)',
      transition: 'all 300ms',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '0.5rem',
        width: 'auto',
        maxWidth: '300px'
      }}>
        <a
          href="https://www.linkedin.com/in/j-t-peters/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            height: '2.5rem',
            width: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
            padding: '0.5rem',
            color: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 300ms'
          }}
          aria-label="LinkedIn Profile"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              transition: 'transform 300ms'
            }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://x.com/JTPeters_"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            height: '2.5rem',
            width: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #1f2937, #111827)',
            padding: '0.5rem',
            color: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 300ms'
          }}
          aria-label="X (formerly Twitter) Profile"
        >
          <XLogo style={{
            height: '1.25rem',
            width: '1.25rem',
            transition: 'transform 300ms'
          }} />
        </a>
        <a
          href="https://github.com/Turnstyle"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            height: '2.5rem',
            width: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #1f2937, #111827)',
            padding: '0.5rem',
            color: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 300ms'
          }}
          aria-label="GitHub Profile"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              transition: 'transform 300ms'
            }}
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a
          href="mailto:john@jtpnexus.com"
          style={{
            display: 'flex',
            height: '2.5rem',
            width: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
            padding: '0.5rem',
            color: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 300ms'
          }}
          aria-label="Contact Me"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              transition: 'transform 300ms'
            }}
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}