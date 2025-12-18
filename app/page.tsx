'use client';

import { BackgroundAnimation } from '../components/background-animation';

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #111827, #000, #1f2937)',
      color: 'white',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '1rem',
      paddingTop: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Animation */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <BackgroundAnimation />
      </div>
      
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          JTP<span style={{ 
            background: 'linear-gradient(to right, #60a5fa, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Nexus</span>
        </h1>
        <p style={{ 
          fontSize: '1.5rem',
          color: '#d1d5db',
          marginBottom: '1.5rem',
          maxWidth: '36rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          A collection of tools, applications, and resources by<br />John Turner Peters
        </p>
        
        {/* Social Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <a
            href="https://www.linkedin.com/in/j-t-peters/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              height: '2rem',
              width: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
              padding: '0.4rem',
              color: 'white',
              transition: 'transform 200ms ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="LinkedIn Profile"
            onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'linkedin_link' });
              }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
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
              height: '2rem',
              width: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #1f2937, #111827)',
              padding: '0.4rem',
              color: 'white',
              transition: 'transform 200ms ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="X (formerly Twitter) Profile"
            onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'x_twitter_link' });
              }
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          
          <a
            href="https://github.com/Turnstyle"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              height: '2rem',
              width: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #1f2937, #111827)',
              padding: '0.4rem',
              color: 'white',
              transition: 'transform 200ms ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="GitHub Profile"
            onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'github_link' });
              }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          
          <a
            href="mailto:turnerpeters+jtpnexus@gmail.com"
            style={{
              display: 'flex',
              height: '2rem',
              width: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
              padding: '0.4rem',
              color: 'white',
              transition: 'transform 200ms ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Contact Me"
            onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'email_link' });
              }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: '1.5rem',
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2rem'
        }}>
          <a href="https://www.hellotelle.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'hellotelle_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Hello Telle
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Voice companionship for senior citizens—activated, funded, and appreciated by loved ones. (End-to-end agentic operations)
              </p>
            </div>
          </a>

          <a href="https://www.prompt-box.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'prompt_box_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Prompt Box
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Create, organize, and manage AI prompts with sophisticated version control
              </p>
            </div>
          </a>
          
          <a href="https://www.music-mana.xyz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'music_mana_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Music Mana
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Emotive music discovery and AI-curated playlist creation. (Built inside 24-hrs)
              </p>
            </div>
          </a>
          
          <a href="https://turnstyle.github.io/cyberspyhunter/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'cyber_spy_hunter_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Cyber Spy Hunter
              </h2>
              <p style={{ color: '#9ca3af' }}>
                A mobile web-app game of a classic Nintendo title (Test of ChatGPT Agent mode)
              </p>
            </div>
          </a>
          
          <a href="https://www.produce-section.xyz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'produce_section_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                The Produce Section
              </h2>
              <p style={{ color: '#9ca3af' }}>
                A whimsical GenAI Image maker for people who love their fruits & veggies. (First Vibe Coding Project)
              </p>
            </div>
          </a>

          <a href="https://turnstyle.github.io/websiterequestform/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'form_clone_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Google Form Clone
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Custom form with email, Google Sheets, and Slack integration showcase
              </p>
            </div>
          </a>

          <a href="https://chatgpt.com/canvas/shared/689578017d108191a44c9669646bf9e4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={() => {
              if (window.vercelAnalytics) {
                window.vercelAnalytics.track('click', { name: 'snake_game_link' });
              }
            }}>
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.5rem' }}>
                Snake Game
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Classic snake game with modern design. (One shot prompt to ChatGPT 5 Agent mode)
              </p>
            </div>
          </a>
        </div>
      </div>
      
      <footer style={{ 
        textAlign: 'center',
        width: '100%',
        fontSize: '0.875rem',
        color: '#6b7280',
        zIndex: 1,
        marginTop: '4rem',
        paddingBottom: '2rem'
      }}>
        <p>&copy; {new Date().getFullYear()} John Turner Peters. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
