tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Space Grotesk', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          animation: {
            'spin-slow': 'spin 18s linear infinite',
            'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
          },
          keyframes: {
            pulseGlow: {
              '0%, 100%': { opacity: '0.4' },
              '50%': { opacity: '0.8' },
            }
          }
        }
      }
    }
