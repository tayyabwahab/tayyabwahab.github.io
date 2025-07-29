module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep slate for professional authority
        primary: {
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
          DEFAULT: "#1e293b", // slate-800
        },
        
        // Secondary Colors - Balanced mid-tone for navigation
        secondary: {
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
          DEFAULT: "#475569", // slate-600
        },
        
        // Accent Colors - Strategic blue for interactive elements
        accent: {
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
          DEFAULT: "#3b82f6", // blue-500
        },
        
        // Background Colors
        background: "#f8fafc", // slate-50 - Clean, slightly warm white
        surface: "#ffffff", // white - Pure white for content cards
        
        // Text Colors
        text: {
          primary: "#0f172a", // slate-900 - Near-black with subtle warmth
          secondary: "#64748b", // slate-500 - Muted tone for supporting info
        },
        
        // Status Colors
        success: {
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600 - Professional green for positive states
          DEFAULT: "#059669", // emerald-600
        },
        
        warning: {
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600 - Balanced orange for attention states
          DEFAULT: "#d97706", // amber-600
        },
        
        error: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600 - Clear red for error states
          DEFAULT: "#dc2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // slate-200 - Minimal border usage
          light: "#f1f5f9", // slate-100
        },
      },
      
      fontFamily: {
        // Headings: Inter - Modern geometric sans-serif for contemporary professionalism
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        
        // Body: Source Sans 3 - Highly legible humanist typeface for extended reading
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        source: ['Source Sans 3', 'system-ui', 'sans-serif'],
        
        // Data: JetBrains Mono - Purpose-built monospace for technical information
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        jetbrains: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      
      fontSize: {
        // Fluid typography using clamp functions
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(2.25rem, 2rem + 2vw, 3rem)',
      },
      
      boxShadow: {
        // Layered elevation system for professional appearance
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      borderRadius: {
        // Modern softness without compromising professional credibility
        'card': '6px',
        'button': '4px',
      },
      
      backdropBlur: {
        'xs': '2px',
        'sm': '8px',
      },
      
      transitionDuration: {
        // Purposeful motion design timing
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '400': '400ms',
        '500': '500ms',
      },
      
      transitionTimingFunction: {
        // Ease-out timing for professional feel
        'out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      animation: {
        // Loading states and micro-interactions
        'pulse-slow': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 150ms ease-out',
        'fade-out': 'fadeOut 150ms ease-out',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      spacing: {
        // Additional spacing for professional layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        // Content width constraints for readability
        'prose': '65ch',
        'content': '1200px',
      },
      
      zIndex: {
        // Layer management for complex interfaces
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal': '1040',
        'popover': '1050',
        'tooltip': '1060',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}