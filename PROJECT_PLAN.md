# Heavenly Flowers (Fleurs du Ciel) - Project Plan

## Project Overview

**Heavenly Flowers** is an online flower shop based in Bangkok, Thailand. The platform offers flower sales, workshops, event arrangements, and concierge services.

---

## Technology Stack

| Category         | Technology                        |
| ---------------- | --------------------------------- |
| **Frontend**     | React 19, TypeScript, Vite        |
| **Styling**      | Tailwind CSS v4 (via Vite plugin) |
| **Animation**    | Framer Motion                     |
| **Icons**        | Lucide Icons                      |
| **Backend**      | Firebase (Free Tier)              |
| **Hosting**      | Vercel                            |
| **Code Quality** | ESLint, Prettier, Storybook       |

---

## Project Structure

```
src/
├── components/          # Modular Components (each in own folder)
│   ├── ComponentName/
│   │   ├── ComponentName.tsx    # UI/Dumb Component
│   │   ├── ComponentName.stories.tsx
│   │   └── index.ts
│   └── ...
├── hooks/               # Smart Logic (reusable hooks)
│   ├── useModal.ts
│   └── ...
├── utils/               # API calls, formatters, validators
│   ├── api.ts
│   ├── formatters.ts
│   └── validators.ts
├── demo/                # Dashboard App
│   └── mocks/           # Mock Data for testing
├── assets/              # Static assets (images, fonts)
├── types/               # TypeScript type definitions
└── config/              # Configuration files
```

### Architecture Principles

#### 1. Modular Component Architecture

- Each component has its own folder
- UI (Dumb) logic stays in `.tsx` files
- Smart logic extracted to `src/hooks/`

#### 2. Utils & Services

- API calls go in `src/utils/`
- Formatters and validators in `src/utils/`
- Smart components can use `containers/` folder if needed

#### 3. Mock Data

- Test data in `src/demo/mocks/`
- Storybook stories can include inline mock data

---

## Development Rules

### Code Quality Rules

1. **No Inline CSS** - Use Tailwind classes only
2. **Mind Your Own Business** - Only modify what you're asked to change
3. **Change Log** - Update CHANGELOG.md after each modification
4. **Session Summary** - Update SESSION_SUMMARY.md at end of each session

### Git Workflow

1. **Gitignore** - Ensure sensitive files are ignored before first commit
2. **Pre-commit** - Run Storybook, Prettier, ESLint before each push
3. **Commit Messages** - Clear, descriptive commit messages

### Component Guidelines

- **Dumb Components**: Pure UI, no business logic
- **Smart Components**: Connect to hooks, manage state
- **Hooks**: Reusable logic, separated from UI
- **Utils**: Pure functions, API calls, formatters

---

## Development Phases

### Phase 1: Foundation Setup

- [x] Setup Firebase project
- [x] Configure Firebase Authentication
- [x] Setup Firebase Firestore database
- [x] Setup Firebase Storage
- [x] Create project rules documentation
- [x] Setup ESLint configuration
- [x] Setup Prettier configuration
- [x] Setup Storybook

### Phase 2: Core Features

- [ ] Implement Authentication (SignIn/SignUp)
- [ ] Create Product CRUD operations
- [ ] Create Arrangements CRUD operations
- [ ] Create Workshops CRUD operations
- [ ] Create Inspirations CRUD operations
- [ ] Implement Cart functionality
- [ ] Create Order management

### Phase 3: Enhancements

- [ ] Add Framer Motion animations
- [ ] Replace icons with Lucide Icons
- [ ] Implement real-time notifications
- [ ] Add payment gateway integration
- [ ] Optimize performance
- [ ] Add SEO optimization

### Phase 4: Deployment

- [ ] Configure Vercel deployment
- [ ] Setup custom domain
- [ ] Configure environment variables
- [ ] Setup CI/CD pipeline
- [ ] Final testing and QA

---

## Responsive Design Requirements

### Supported Devices & Screen Sizes

| Device Category   | Breakpoint | Width Range     | Examples                 |
| ----------------- | ---------- | --------------- | ------------------------ |
| **Mobile S**      | `xs`       | 320px - 374px   | iPhone SE, Small Android |
| **Mobile M**      | `sm`       | 375px - 639px   | iPhone 12/13/14, Pixel   |
| **Tablet**        | `md`       | 640px - 1023px  | iPad Mini, iPad, Surface |
| **Desktop**       | `lg`       | 1024px - 1279px | MacBook Air, Laptops     |
| **Desktop Large** | `xl`       | 1280px - 1535px | iMac, External Monitors  |
| **Desktop XL**    | `2xl`      | 1536px+         | 4K Displays, Ultra-wide  |

### Tailwind CSS Breakpoints

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      xs: '320px', // Mobile S
      sm: '640px', // Mobile M to Tablet
      md: '768px', // Tablet
      lg: '1024px', // Desktop
      xl: '1280px', // Desktop Large
      '2xl': '1536px', // Desktop XL
    },
  },
};
```

### Responsive Design Principles

#### 1. Mobile-First Approach

- Start with mobile styles, then add larger screen styles
- Use `min-width` media queries (Tailwind's default)
- Progressive enhancement for larger screens

#### 2. Touch-First Design

- Minimum tap target: 44px × 44px (Apple HIG)
- Adequate spacing between interactive elements
- Touch-friendly form inputs

#### 3. Fluid Typography

- Use responsive font sizes
- Maintain readability across all devices
- Line length optimization (45-75 characters)

#### 4. Flexible Layouts

- Use CSS Grid and Flexbox
- Avoid fixed pixel widths
- Percentage-based containers

#### 5. Responsive Images

- Use `srcset` for different resolutions
- Lazy loading for below-fold images
- WebP format with fallbacks

### Component Responsive Patterns

| Component        | Mobile         | Tablet               | Desktop              |
| ---------------- | -------------- | -------------------- | -------------------- |
| **Navigation**   | Hamburger Menu | Hamburger/Tab Bar    | Full Horizontal Nav  |
| **Product Grid** | 1-2 columns    | 2-3 columns          | 3-4 columns          |
| **Hero Section** | Stacked        | Stacked/Overlay      | Side-by-side         |
| **Forms**        | Full width     | Centered (max 600px) | Side-by-side labels  |
| **Modals**       | Full screen    | Centered             | Centered (max width) |
| **Tables**       | Card view      | Scrollable           | Full table           |

### Testing Requirements

- **Chrome DevTools**: All device presets
- **Real Devices**: iPhone, iPad, Android phone/tablet
- **BrowserStack**: Cross-browser testing
- **Responsive Design Mode**: Firefox, Safari

### Accessibility on All Devices

- Zoom support up to 200%
- Landscape/Portrait orientation
- High contrast mode support
- Screen reader compatibility

---

## Database Schema (Firestore Collections)

### Collection: `products`

| Field           | Type          | Required | Description                    |
| --------------- | ------------- | -------- | ------------------------------ |
| `id`            | string        | Yes      | Auto-generated document ID     |
| `name`          | string        | Yes      | Product name                   |
| `nameTh`        | string        | No       | Thai name                      |
| `nameFr`        | string        | No       | French name                    |
| `description`   | string        | Yes      | Product description            |
| `descriptionTh` | string        | No       | Thai description               |
| `price`         | number        | Yes      | Price in THB                   |
| `images`        | array<string> | Yes      | Array of image URLs            |
| `category`      | string        | Yes      | 'bouquet', 'arrangement', etc. |
| `tags`          | array<string> | No       | Search tags                    |
| `inStock`       | boolean       | Yes      | Availability status            |
| `featured`      | boolean       | No       | Featured product flag          |
| `createdAt`     | timestamp     | Yes      | Creation timestamp             |
| `updatedAt`     | timestamp     | Yes      | Last update timestamp          |

### Collection: `orders`

| Field           | Type             | Required | Description                      |
| --------------- | ---------------- | -------- | -------------------------------- |
| `id`            | string           | Yes      | Auto-generated document ID       |
| `orderNumber`   | string           | Yes      | Human-readable order number      |
| `userId`        | string           | Yes      | Reference to users collection    |
| `items`         | array<OrderItem> | Yes      | Array of ordered items           |
| `subtotal`      | number           | Yes      | Subtotal in THB                  |
| `deliveryFee`   | number           | Yes      | Delivery fee in THB              |
| `total`         | number           | Yes      | Total amount in THB              |
| `status`        | string           | Yes      | 'pending', 'confirmed', etc.     |
| `paymentStatus` | string           | Yes      | 'unpaid', 'paid', 'refunded'     |
| `paymentMethod` | string           | No       | 'credit_card', 'promptpay', etc. |
| `shippingInfo`  | ShippingInfo     | Yes      | Delivery address & details       |
| `notes`         | string           | No       | Special instructions             |
| `createdAt`     | timestamp        | Yes      | Order creation timestamp         |
| `updatedAt`     | timestamp        | Yes      | Last update timestamp            |

**OrderItem Sub-schema:**

| Field       | Type   | Description           |
| ----------- | ------ | --------------------- |
| `productId` | string | Reference to product  |
| `name`      | string | Product name snapshot |
| `price`     | number | Price at order time   |
| `quantity`  | number | Quantity ordered      |
| `image`     | string | Product image URL     |

**ShippingInfo Sub-schema:**

| Field          | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `name`         | string | Recipient name          |
| `phone`        | string | Contact phone           |
| `address`      | string | Full address            |
| `district`     | string | District/Khwaeng        |
| `province`     | string | Province/Changwat       |
| `postalCode`   | string | Thai postal code        |
| `deliveryDate` | string | Preferred delivery date |
| `deliveryTime` | string | Preferred delivery time |

### Collection: `users`

| Field         | Type           | Required | Description                |
| ------------- | -------------- | -------- | -------------------------- |
| `id`          | string         | Yes      | Firebase Auth UID          |
| `email`       | string         | Yes      | User email                 |
| `displayName` | string         | No       | Display name               |
| `phone`       | string         | No       | Phone number               |
| `photoURL`    | string         | No       | Profile photo URL          |
| `role`        | string         | Yes      | 'customer', 'admin'        |
| `addresses`   | array<Address> | No       | Saved addresses            |
| `favorites`   | array<string>  | No       | Favorite product IDs       |
| `createdAt`   | timestamp      | Yes      | Account creation timestamp |
| `updatedAt`   | timestamp      | Yes      | Last update timestamp      |

**Address Sub-schema:**

| Field        | Type    | Description          |
| ------------ | ------- | -------------------- |
| `label`      | string  | 'home', 'work', etc. |
| `name`       | string  | Recipient name       |
| `phone`      | string  | Contact phone        |
| `address`    | string  | Full address         |
| `district`   | string  | District             |
| `province`   | string  | Province             |
| `postalCode` | string  | Postal code          |
| `isDefault`  | boolean | Default address flag |

### Collection: `workshops`

| Field             | Type            | Required | Description                |
| ----------------- | --------------- | -------- | -------------------------- |
| `id`              | string          | Yes      | Auto-generated document ID |
| `title`           | string          | Yes      | Workshop title             |
| `titleTh`         | string          | No       | Thai title                 |
| `description`     | string          | Yes      | Workshop description       |
| `descriptionTh`   | string          | No       | Thai description           |
| `image`           | string          | Yes      | Cover image URL            |
| `images`          | array<string>   | No       | Gallery images             |
| `price`           | number          | Yes      | Price per person in THB    |
| `duration`        | number          | Yes      | Duration in minutes        |
| `maxParticipants` | number          | Yes      | Maximum participants       |
| `schedule`        | array<Schedule> | Yes      | Available schedules        |
| `instructor`      | string          | Yes      | Instructor name            |
| `location`        | string          | Yes      | Workshop venue             |
| `requirements`    | array<string>   | No       | What to bring              |
| `includes`        | array<string>   | No       | What's included            |
| `active`          | boolean         | Yes      | Active status              |
| `createdAt`       | timestamp       | Yes      | Creation timestamp         |
| `updatedAt`       | timestamp       | Yes      | Last update timestamp      |

**Schedule Sub-schema:**

| Field       | Type   | Description        |
| ----------- | ------ | ------------------ |
| `date`      | string | Date (YYYY-MM-DD)  |
| `startTime` | string | Start time (HH:mm) |
| `endTime`   | string | End time (HH:mm)   |
| `available` | number | Available slots    |
| `booked`    | number | Booked slots       |

### Collection: `arrangements`

| Field           | Type          | Required | Description                  |
| --------------- | ------------- | -------- | ---------------------------- |
| `id`            | string        | Yes      | Auto-generated document ID   |
| `title`         | string        | Yes      | Arrangement title            |
| `titleTh`       | string        | No       | Thai title                   |
| `description`   | string        | Yes      | Description                  |
| `descriptionTh` | string        | No       | Thai description             |
| `images`        | array<string> | Yes      | Portfolio images             |
| `eventType`     | string        | Yes      | 'wedding', 'corporate', etc. |
| `priceRange`    | PriceRange    | Yes      | Price range                  |
| `features`      | array<string> | No       | Key features                 |
| `active`        | boolean       | Yes      | Active status                |
| `createdAt`     | timestamp     | Yes      | Creation timestamp           |
| `updatedAt`     | timestamp     | Yes      | Last update timestamp        |

**PriceRange Sub-schema:**

| Field | Type   | Description          |
| ----- | ------ | -------------------- |
| `min` | number | Minimum price in THB |
| `max` | number | Maximum price in THB |

### Collection: `inspirations`

| Field         | Type          | Required | Description                |
| ------------- | ------------- | -------- | -------------------------- |
| `id`          | string        | Yes      | Auto-generated document ID |
| `title`       | string        | Yes      | Blog post title            |
| `titleTh`     | string        | No       | Thai title                 |
| `slug`        | string        | Yes      | URL-friendly slug          |
| `excerpt`     | string        | Yes      | Short excerpt              |
| `excerptTh`   | string        | No       | Thai excerpt               |
| `content`     | string        | Yes      | Full content (markdown)    |
| `contentTh`   | string        | No       | Thai content               |
| `coverImage`  | string        | Yes      | Cover image URL            |
| `images`      | array<string> | No       | Gallery images             |
| `author`      | string        | Yes      | Author name                |
| `tags`        | array<string> | No       | Tags for filtering         |
| `published`   | boolean       | Yes      | Published status           |
| `publishedAt` | timestamp     | No       | Publication date           |
| `createdAt`   | timestamp     | Yes      | Creation timestamp         |
| `updatedAt`   | timestamp     | Yes      | Last update timestamp      |

### Collection: `bookings`

| Field           | Type      | Required | Description                   |
| --------------- | --------- | -------- | ----------------------------- |
| `id`            | string    | Yes      | Auto-generated document ID    |
| `bookingNumber` | string    | Yes      | Human-readable booking number |
| `userId`        | string    | Yes      | Reference to users collection |
| `workshopId`    | string    | Yes      | Reference to workshops        |
| `scheduleDate`  | string    | Yes      | Booked date (YYYY-MM-DD)      |
| `scheduleTime`  | string    | Yes      | Booked time slot              |
| `participants`  | number    | Yes      | Number of participants        |
| `totalPrice`    | number    | Yes      | Total price in THB            |
| `status`        | string    | Yes      | 'pending', 'confirmed', etc.  |
| `paymentStatus` | string    | Yes      | Payment status                |
| `notes`         | string    | No       | Special requests              |
| `createdAt`     | timestamp | Yes      | Booking creation timestamp    |
| `updatedAt`     | timestamp | Yes      | Last update timestamp         |

### Collection Relationships

```
users ──────┬──────> orders (1:N)
            ├──────> bookings (1:N)
            └──────> favorites (N:M with products)

products ───┬──────> orders (via OrderItem)
            └──────> favorites (N:M with users)

workshops ──────────> bookings (1:N)
```

---

## User Flows

### 1. Customer Shopping Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CUSTOMER SHOPPING FLOW                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │  Home   │───>│ Browse  │───>│ Product │───>│  Cart   │───>│Checkout │   │
│  │  Page   │    │ Products│    │ Detail  │    │         │    │         │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│       │              │              │              │              │         │
│       │              │              │              │              │         │
│       v              v              v              v              v         │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │ Featured│    │ Filter  │    │ Add to  │    │ Update  │    │Shipping │   │
│  │Products │    │ by Cat  │    │  Cart   │    │Quantity │    │  Info   │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │ Payment │    │
│                                                               └─────────┘    │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │Confirm  │    │
│                                                               │ Order   │    │
│                                                               └─────────┘    │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │ Order   │    │
│                                                               │Tracking │    │
│                                                               └─────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2. Workshop Booking Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        WORKSHOP BOOKING FLOW                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │Workshop │───>│Workshop │───>│ Select  │───>│ Enter   │───>│Confirm  │   │
│  │  List   │    │ Detail  │    │ Schedule│    │Details  │    │Booking  │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│       │              │              │              │              │         │
│       v              v              v              v              v         │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │ Filter  │    │ View    │    │Calendar │    │Participant│  │ Payment │   │
│  │ by Type │    │Gallery  │    │  Pick   │    │  Count   │    │         │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │Booking  │    │
│                                                               │Confirmed│    │
│                                                               └─────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3. Event Arrangement Request Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EVENT ARRANGEMENT REQUEST FLOW                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │Arrangement──>│Arrangement──>│ Request │───>│  Form   │───>│ Submit  │   │
│  │  List   │    │ Detail  │    │  Quote  │    │ Details │    │ Request │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│       │              │              │              │              │         │
│       v              v              v              v              v         │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │ Filter  │    │ View    │    │ Event   │    │ Budget  │    │ Admin   │   │
│  │ by Type │    │Portfolio│    │  Type   │    │ Range   │    │ Review  │   │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │ Quote   │    │
│                                                               │ Sent    │    │
│                                                               └─────────┘    │
│                                                                     │         │
│                                                                     v         │
│                                                               ┌─────────┐    │
│                                                               │Customer │    │
│                                                               │Accepts  │    │
│                                                               └─────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4. Admin Dashboard Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ADMIN DASHBOARD FLOW                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────┐    ┌─────────────────────────────────────────────────────┐     │
│  │  Admin  │───>│              Dashboard Home                          │     │
│  │  Login  │    └─────────────────────────────────────────────────────┘     │
│  └─────────┘                              │                                  │
│                                           v                                  │
│           ┌───────────────┬───────────────┼───────────────┬─────────────┐   │
│           v               v               v               v             v   │
│     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   ┌─────────┐│
│     │Products │     │ Orders  │     │Customers│     │Workshops│   │Analytics││
│     │ Manage  │     │ Manage  │     │ Manage  │     │ Manage  │   │ View    ││
│     └─────────┘     └─────────┘     └─────────┘     └─────────┘   └─────────┘│
│           │               │               │               │             │    │
│           v               v               v               v             v    │
│     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   ┌─────────┐│
│     │CRUD     │     │Status   │     │View     │     │Schedule │   │Sales    ││
│     │Operations│    │Update   │     │History  │     │Manage   │   │Reports  ││
│     └─────────┘     └─────────┘     └─────────┘     └─────────┘   └─────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5. Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        AUTHENTICATION FLOW                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                         Landing Page                                 │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                    ┌───────────────┴───────────────┐                        │
│                    v                               v                        │
│            ┌─────────────┐                 ┌─────────────┐                  │
│            │   Sign In   │                 │   Sign Up   │                  │
│            └─────────────┘                 └─────────────┘                  │
│                    │                               │                        │
│         ┌──────────┼──────────┐                   │                        │
│         v          v          v                   v                        │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐   ┌─────────────┐                 │
│   │  Email   │ │  Google  │ │  Guest   │   │Email/Password│                │
│   │/Password │ │   OAuth  │ │Checkout  │   │   Form      │                 │
│   └──────────┘ └──────────┘ └──────────┘   └─────────────┘                 │
│         │          │                              │                        │
│         └──────────┼──────────────────────────────┘                        │
│                    v                                                        │
│            ┌─────────────┐                                                  │
│            │  Dashboard  │                                                  │
│            │  / Home     │                                                  │
│            └─────────────┘                                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Environment Variables

### Required Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Optional: Firebase Emulator (Development)
VITE_USE_EMULATOR=false
VITE_EMULATOR_HOST=localhost
VITE_EMULATOR_AUTH_PORT=9099
VITE_EMULATOR_FIRESTORE_PORT=8080
VITE_EMULATOR_STORAGE_PORT=9199

# Payment Gateway (Future)
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_OMISE_PUBLIC_KEY=your_omise_public_key

# Analytics (Future)
VITE_GA_TRACKING_ID=your_ga_tracking_id

# Contact & Support
VITE_CONTACT_EMAIL=info@heavenlyflowers.com
VITE_CONTACT_PHONE=+66-XX-XXX-XXXX

# Social Media Links
VITE_INSTAGRAM_URL=https://instagram.com/heavenlyflowers
VITE_FACEBOOK_URL=https://facebook.com/heavenlyflowers
VITE_LINE_ID=@heavenlyflowers
```

### Environment Variable Usage

| Variable                            | Purpose                 | Required |
| ----------------------------------- | ----------------------- | -------- |
| `VITE_FIREBASE_API_KEY`             | Firebase API key        | Yes      |
| `VITE_FIREBASE_AUTH_DOMAIN`         | Firebase Auth domain    | Yes      |
| `VITE_FIREBASE_PROJECT_ID`          | Firebase project ID     | Yes      |
| `VITE_FIREBASE_STORAGE_BUCKET`      | Firebase Storage bucket | Yes      |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging ID   | Yes      |
| `VITE_FIREBASE_APP_ID`              | Firebase App ID         | Yes      |
| `VITE_FIREBASE_MEASUREMENT_ID`      | Firebase Analytics ID   | No       |
| `VITE_USE_EMULATOR`                 | Use local emulators     | No       |
| `VITE_STRIPE_PUBLIC_KEY`            | Stripe payment          | No       |
| `VITE_GA_TRACKING_ID`               | Google Analytics        | No       |

---

## Third-party Integrations

### Payment Gateways

| Provider  | Purpose             | Status  | Notes                        |
| --------- | ------------------- | ------- | ---------------------------- |
| Stripe    | International cards | Planned | Best for international users |
| Omise     | Thai payment        | Planned | Local Thai payment methods   |
| PromptPay | QR payment          | Planned | Popular in Thailand          |

### Analytics & Monitoring

| Service            | Purpose        | Status  | Notes                    |
| ------------------ | -------------- | ------- | ------------------------ |
| Google Analytics   | User tracking  | Planned | Free tier available      |
| Firebase Analytics | App analytics  | Planned | Integrated with Firebase |
| Sentry             | Error tracking | Planned | Free tier available      |
| LogRocket          | Session replay | Planned | For debugging            |

### Email Services

| Service             | Purpose             | Status  | Notes                |
| ------------------- | ------------------- | ------- | -------------------- |
| SendGrid            | Transactional email | Planned | Order confirmations  |
| Firebase Extensions | Email triggers      | Planned | Firebase integration |

### Social Media

| Platform  | Purpose               | Status  |
| --------- | --------------------- | ------- |
| Instagram | Portfolio & marketing | Active  |
| Facebook  | Business page         | Active  |
| LINE OA   | Customer support      | Planned |

### Storage & CDN

| Service          | Purpose       | Status  |
| ---------------- | ------------- | ------- |
| Firebase Storage | Image storage | Planned |
| Vercel CDN       | Static assets | Active  |

---

## Localization Plan

### Supported Languages

| Language | Code | Priority  | Status   |
| -------- | ---- | --------- | -------- |
| Thai     | `th` | Primary   | Required |
| English  | `en` | Secondary | Required |
| French   | `fr` | Optional  | Future   |

### Implementation Strategy

#### Phase 1: Thai + English

- All UI text in both languages
- Product descriptions bilingual
- Email templates bilingual

#### Phase 2: French (Future)

- Brand name "Fleurs du Ciel" already French
- Target French-speaking tourists/expats

### Localization Structure

```
src/
├── locales/
│   ├── th/
│   │   ├── common.json
│   │   ├── products.json
│   │   ├── checkout.json
│   │   └── emails/
│   ├── en/
│   │   ├── common.json
│   │   ├── products.json
│   │   ├── checkout.json
│   │   └── emails/
│   └── fr/
│       └── (future)
├── i18n.ts
└── types/
    └── i18n.d.ts
```

### Currency & Formatting

| Setting       | Thai (th)       | English (en)    |
| ------------- | --------------- | --------------- |
| Currency      | THB (฿)         | THB (฿)         |
| Date Format   | DD/MM/YYYY      | DD/MM/YYYY      |
| Number Format | 1,234.56        | 1,234.56        |
| Phone Format  | +66 XX XXX XXXX | +66 XX XXX XXXX |

---

## Deployment Checklist

### Pre-Deployment

- [ ] All environment variables configured
- [ ] Firebase production project created
- [ ] Firebase Security Rules deployed
- [ ] All tests passing
- [ ] Lighthouse score > 90
- [ ] Mobile responsive verified
- [ ] Cross-browser testing complete

### Vercel Setup

1. **Connect Repository**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Link project
   vercel link
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.example`

3. **Build Settings**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

### Domain Configuration

1. **Add Custom Domain**
   - Vercel Dashboard → Project → Settings → Domains
   - Add: `heavenlyflowers.com`
   - Add: `www.heavenlyflowers.com`

2. **DNS Configuration**

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Firebase Production

1. **Create Production Project**

   ```bash
   firebase projects:create heavenly-flowers-prod
   ```

2. **Deploy Security Rules**

   ```bash
   firebase deploy --only firestore:rules
   firebase deploy --only storage
   ```

3. **Enable Services**
   - Authentication: Email/Password, Google
   - Firestore Database
   - Storage
   - Analytics (optional)

### Post-Deployment

- [ ] Verify all pages load correctly
- [ ] Test authentication flows
- [ ] Test checkout process
- [ ] Verify email notifications
- [ ] Check analytics tracking
- [ ] Test on real devices
- [ ] Monitor error logs

---

## Analytics & Monitoring

### Key Metrics to Track

| Metric                | Tool             | Frequency |
| --------------------- | ---------------- | --------- |
| Page Views            | Google Analytics | Real-time |
| Unique Visitors       | Google Analytics | Daily     |
| Conversion Rate       | Google Analytics | Weekly    |
| Cart Abandonment Rate | Custom           | Weekly    |
| Average Order Value   | Custom           | Weekly    |
| Product Views         | Google Analytics | Daily     |
| Workshop Bookings     | Custom           | Weekly    |
| Error Rate            | Sentry           | Real-time |
| Page Load Time        | Vercel Analytics | Real-time |

### Dashboard Metrics

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ANALYTICS DASHBOARD                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │  Total Revenue  │  │  Total Orders   │  │  Conversion Rate│             │
│  │    THB XXX,XXX  │  │      XXX        │  │      X.XX%      │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                     Sales Over Time                                  │   │
│  │  [Chart: Line graph showing daily/weekly/monthly sales]             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────┐  ┌──────────────────────────┐               │
│  │   Top Products           │  │   Traffic Sources        │               │
│  │   1. Product A - XX units│  │   Direct: XX%            │               │
│  │   2. Product B - XX units│  │   Social: XX%            │               │
│  │   3. Product C - XX units│  │   Search: XX%            │               │
│  └──────────────────────────┘  └──────────────────────────┘               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Error Tracking (Sentry)

```typescript
// src/utils/sentry.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Performance Monitoring

| Metric                   | Target  | Alert Threshold |
| ------------------------ | ------- | --------------- |
| First Contentful Paint   | < 1.5s  | > 2.5s          |
| Largest Contentful Paint | < 2.5s  | > 4.0s          |
| Time to Interactive      | < 3.0s  | > 5.0s          |
| Cumulative Layout Shift  | < 0.1   | > 0.25          |
| First Input Delay        | < 100ms | > 300ms         |

---

## Success Metrics

| Metric             | Target      |
| ------------------ | ----------- |
| Page Load Time     | < 3 seconds |
| Lighthouse Score   | > 90        |
| Mobile Responsive  | 100%        |
| Tablet Responsive  | 100%        |
| Desktop Responsive | 100%        |
| Code Coverage      | > 80%       |
| Zero Critical Bugs | Production  |

---

## Risk Assessment

| Risk                      | Mitigation                       |
| ------------------------- | -------------------------------- |
| Firebase free tier limits | Monitor usage, plan upgrade path |
| Scope creep               | Follow project plan strictly     |
| Performance issues        | Regular optimization audits      |
| Security vulnerabilities  | Regular security audits          |

---

## Current Status

**Last Updated**: 2026-04-03

**Current Phase**: Phase 1 - Foundation Setup

**Completed**:

- [x] Frontend architecture (React + TypeScript + Vite)
- [x] Tailwind CSS v4 setup
- [x] Sanity CMS removed
- [x] Project plan created

**In Progress**:

- [ ] Firebase setup
- [ ] Project rules documentation
- [ ] Code quality tools setup

**Next Steps**:

1. Setup Firebase project
2. Create project rules documentation
3. Setup ESLint, Prettier, Storybook
