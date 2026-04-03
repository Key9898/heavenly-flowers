# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Dependency Fix - 2026-04-04

#### Fixed

- **Vercel Build Failure** - Resolved npm ERESOLVE dependency conflict
  - Storybook packages had conflicting alpha versions (9.x vs 10.x)
  - Downgraded all Storybook packages to stable version 8.6.14
  - Created `.npmrc` with `legacy-peer-deps=true` for Vite 7 compatibility

#### Changed

- `package.json` - Updated Storybook dependencies:
  - `storybook`: ^10.4.0-alpha.7 → ^8.6.14
  - `@storybook/react-vite`: ^10.4.0-alpha.7 → ^8.6.14
  - `@storybook/addon-essentials`: ^9.0.0-alpha.12 → ^8.6.14
  - `@storybook/addon-interactions`: ^9.0.0-alpha.10 → ^8.6.14
  - `@storybook/test`: ^9.0.0-alpha.2 → ^8.6.14

#### Added

- `.npmrc` - npm configuration with `legacy-peer-deps=true`

#### Technical Notes

- Storybook 8.6.x doesn't officially support Vite 7 (peer dependency requires Vite ^4.0.0 || ^5.0.0 || ^6.0.0)
- `legacy-peer-deps` bypasses peer dependency resolution for compatibility
- Local build verified successful before pushing to Vercel

### Phase 2 Core Features - 2026-04-04

#### Added

- **Custom Hooks** - Created data fetching hooks for all collections
  - `src/hooks/useAuth.ts` - Authentication hook with Firebase integration
  - `src/hooks/useProducts.ts` - Products CRUD operations
  - `src/hooks/useCart.ts` - Shopping cart with localStorage persistence
  - `src/hooks/useOrders.ts` - Order management with order number generation
  - `src/hooks/useWorkshops.ts` - Workshop management with schedule support
  - `src/hooks/useBookings.ts` - Workshop booking management
  - `src/hooks/useArrangements.ts` - Arrangements CRUD with pagination
  - `src/hooks/useInspirations.ts` - Inspirations CRUD with pagination
  - `src/hooks/index.ts` - Central exports for all hooks

- **Admin Forms** - Created CRUD forms for admin operations
  - `src/components/Admin/ProductForm.tsx` - Product create/edit form
  - `src/components/Admin/WorkshopForm.tsx` - Workshop create/edit form
  - `src/components/Admin/ArrangementForm.tsx` - Arrangement create/edit form
  - `src/components/Admin/InspirationForm.tsx` - Inspiration create/edit form

- **Firestore Security Rules** - Comprehensive security rules for all collections
  - Products: Public read, admin write
  - Orders: User owns their orders, admin full access
  - Workshops: Public read, admin write
  - Bookings: User owns their bookings, admin full access
  - Arrangements: Public read, admin write
  - Inspirations: Public read, admin write
  - Users: User owns their profile, admin full access

- **Firestore Indexes** - Composite indexes for optimized queries
  - Products: category + createdAt, featured + createdAt
  - Orders: userId + createdAt, status + createdAt
  - Workshops: status + startDate
  - Bookings: userId + createdAt, workshopId + createdAt

#### Changed

- **Firebase Import Fix** - Fixed `import type { User }` in useAuth.ts
  - Changed to `import { type User }` for proper TypeScript verbatimModuleSyntax compatibility

- **UI/UX Improvements** - Coming Soon page enhancements
  - Professional and clean design across all devices
  - Responsive design for all screen sizes (xs to 2xl)
  - Fixed broken UI elements

- **Component Integration** - Connected CreationsProducts to useProducts hook
  - Real-time data fetching from Firestore
  - Loading states and error handling

- **Code Logic Cleanup** - Removed semicolons from all hook files
  - `src/hooks/useCart.ts`
  - `src/hooks/useInspirations.ts`
  - `src/hooks/useAuth.ts`
  - `src/hooks/useArrangements.ts`
  - `src/hooks/useOrders.ts`
  - `src/hooks/useWorkshops.ts`
  - `src/hooks/useBookings.ts`
  - `src/hooks/index.ts`

- **Project Plan Update** - Removed Phase 3 Dashboard Development
  - Renamed Phase 4: Enhancements → Phase 3: Enhancements
  - Renamed Phase 5: Deployment → Phase 4: Deployment

#### Fixed

- Firebase User import error in useAuth.ts (verbatimModuleSyntax compatibility)

#### Technical Notes

- All hooks follow project rules (no semicolons)
- TypeScript strict mode compatible
- Firebase v12.11.0 integration
- React 19 + Vite 7.1.2 + Tailwind CSS v4

### Branding & Assets - 2026-04-04

#### Added

- **Premium Favicon** - Created high-fidelity gold monogram "F" favicon in SVG format
  - Professional serif typography with subtle floral accents
  - Brand-consistent metallic gold color (`#B4912D`)
  - Transparent background for premium integration
- **Asset Organization** - Restructured public branding assets
  - Created `public/favicon/` for browser identity icons
  - Created `public/Logo/` for primary branding SVGs

#### Changed

- **Asset Paths** - Moved original `logo.svg` to the new `public/Logo/` directory
- **Browser Integration** - Updated `index.html` to reference the new favicon location (`/favicon/favicon.svg`)

### [General] - 2026-04-04

#### Added

- **Firebase Configuration** - Created `.env` file with Firebase project configuration
  - All Firebase environment variables (API key, auth domain, project ID, storage bucket, etc.)
  - VITE\_ prefix for Vite compatibility

- **Storybook Setup** - Configured Storybook for component documentation
  - `.storybook/main.ts` - Core configuration with React-Vite framework
  - `.storybook/preview.ts` - Preview configuration with Tailwind CSS import
  - `src/components/Hero/HeroSection.stories.tsx` - Example story file
  - Scripts: `npm run storybook` (dev), `npm run build-storybook` (build)
  - Using alpha versions for Vite 7 compatibility (storybook@10.4.0-alpha.7)

- **Phase 1 Completion** - All Phase 1 tasks completed
  - Firebase project setup ✓
  - Firebase Authentication ✓
  - Firebase Firestore database ✓
  - Firebase Storage ✓
  - Project rules documentation ✓
  - ESLint configuration ✓
  - Prettier configuration ✓
  - Storybook ✓

- **Database Schema** - Added comprehensive Firestore collections schema to `PROJECT_PLAN.md`
  - 7 collections: products, orders, users, workshops, arrangements, inspirations, bookings
  - Field definitions with data types and constraints
  - Sub-schemas: OrderItem, ShippingInfo, Address, Schedule, PriceRange
  - Relationships and indexes

- **User Flows** - Added 5 user flow diagrams to `PROJECT_PLAN.md`
  - Customer Shopping Flow (Browse → Cart → Checkout → Order Tracking)
  - Workshop Booking Flow
  - Event Arrangement Request Flow
  - Admin Dashboard Flow
  - Authentication Flow

- **Environment Variables** - Added complete environment configuration to `PROJECT_PLAN.md`
  - Firebase config variables
  - Emulator settings
  - Payment gateway keys
  - Analytics keys

- **Third-party Integrations** - Added integration plan to `PROJECT_PLAN.md`
  - Payment: Stripe, Omise, PromptPay
  - Analytics: Google Analytics, Sentry, Firebase Analytics
  - Email: Firebase Extensions
  - Social: Instagram, Facebook, LINE

- **Localization Plan** - Added i18n implementation plan to `PROJECT_PLAN.md`
  - Thai (primary), English, French
  - File structure and implementation phases

- **Deployment Checklist** - Added Vercel deployment guide to `PROJECT_PLAN.md`
  - Vercel setup steps
  - DNS configuration
  - Firebase production config

- **Analytics & Monitoring** - Added monitoring setup to `PROJECT_PLAN.md`
  - Metrics table (page views, conversion rates, error tracking)
  - Sentry integration code

- **Environment Setup Guide** - Added to `project_rules.md`
  - Prerequisites (Node.js 20.x, Firebase CLI)
  - Initial setup steps
  - Firebase configuration
  - IDE setup

- **Animation Guidelines** - Added Framer Motion guidelines to `project_rules.md`
  - Duration limits (≤300ms for micro-interactions)
  - Reduced motion support
  - Performance considerations
  - Animation patterns

- **State Management Decision Tree** - Added to `project_rules.md`
  - Decision flow diagram
  - Current project approach table
  - When to add libraries (React Query, Zustand, Jotai)

- **Security Best Practices** - Added to `project_rules.md`
  - Input sanitization
  - Firebase security rules
  - XSS prevention
  - CSRF protection
  - Rate limiting awareness

- **Pull Request Template** - Added to `project_rules.md`
  - PR title format
  - Description template
  - Checklist

- **Dependency Management** - Added to `project_rules.md`
  - Adding new dependencies process
  - Update policy
  - Security audit schedule
  - Bundle size monitoring

- **Internationalization (i18n) Rules** - Added to `project_rules.md`
  - No hardcoded strings rule
  - Translation key structure
  - RTL support consideration
  - Number/date formatting

- **Responsive Design Guidelines** - Added comprehensive responsive design requirements
  - `PROJECT_PLAN.md` - Added Responsive Design Requirements section
    - Supported devices & screen sizes table (xs to 2xl)
    - Tailwind CSS breakpoints configuration
    - 5 Responsive Design Principles (Mobile-First, Touch-First, Fluid Typography, Flexible Layouts, Responsive Images)
    - Component responsive patterns table
    - Testing requirements
    - Accessibility on all devices
  - `.trae/rules/project_rules.md` - Added Responsive Design Guidelines section
    - Breakpoints table with target devices
    - Mobile-first approach with code examples
    - Touch targets (44px × 44px minimum)
    - Responsive typography examples
    - Responsive spacing patterns
    - Responsive images with srcset
    - Component patterns (Navigation, Product Grid, Forms, Modals)
    - Testing checklist for all screen sizes
    - Orientation and zoom support

- Project documentation structure
  - `PROJECT_PLAN.md` - Development roadmap and phases
  - `.trae/rules/project_rules.md` - Universal Project Rules for all AI agents
  - `CHANGELOG.md` - Change tracking
  - `SESSION_SUMMARY.md` - Session tracking

### Changed

- **Universal Project Rules** - Expanded `.trae/rules/project_rules.md` to be comprehensive
  - Added Golden Rules section (5 core rules)
  - Added detailed Project Structure
  - Added Coding Standards with code examples
  - Added Component Architecture guidelines
  - Added Naming Conventions table
  - Added Git Workflow (branch naming, commit messages)
  - Added Firebase Integration guidelines
  - Added Performance Guidelines
  - Added Accessibility (a11y) requirements
  - Added Testing Requirements
  - Added Error Handling patterns
  - Added Documentation Requirements
  - Added Pre-Commit Checklist
  - Added Agent Acknowledgment section
  - Target agents: CodeX, Claude, Antigravity, Trae, VSCode IDEs

- Removed Sanity CMS integration
  - Deleted `src/sanity/` folder
  - Deleted `src/lib/sanity.js`
  - Removed Sanity dependencies from `package.json`:
    - `@sanity/cli`
    - `@sanity/client`
    - `@sanity/image-url`
    - `@sanity/vision`
    - `sanity`
  - Updated `.env.example` to remove Sanity variables
  - Removed `sanity` script from `package.json`

### Technical Notes

- Reduced 970 packages after removing Sanity
- Dev server running successfully without Sanity
- Project Rules now 680+ lines covering all development aspects

---

## Change Log Format

Each entry should include:

```
### [Category] - YYYY-MM-DD

#### Added
- New features

#### Changed
- Changes to existing features

#### Fixed
- Bug fixes

#### Removed
- Removed features

#### Technical Notes
- Technical details about the change
```

---

## Categories

- **Foundation** - Project setup, configuration
- **Authentication** - User auth related changes
- **Products** - Product management changes
- **Orders** - Order management changes
- **UI/UX** - User interface changes
- **Performance** - Performance improvements
- **Security** - Security related changes
- **Documentation** - Documentation updates
