# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added

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
