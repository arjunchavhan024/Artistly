# Artistly.com - Performing Artist Booking Platform

A modern, responsive web application built with React.js and Next.js for connecting event planners with talented performers. This platform allows users to browse artists, filter by categories, and manage bookings through an intuitive interface.

## 🌟 Features

### For Event Planners

- **Browse Artists**: Explore a curated list of verified performers
- **Advanced Filtering**: Filter by category, location, and price range
- **Responsive Design**: Seamless experience across all devices
- **Artist Profiles**: Detailed information including ratings, bio, and pricing

### For Artists

- **Easy Onboarding**: Comprehensive registration form with validation
- **Profile Management**: Upload images and manage professional details
- **Multi-category Support**: List multiple performance categories

### For Managers

- **Dashboard**: Manage artist submissions and approvals
- **Status Tracking**: Monitor application status and statistics
- **Bulk Operations**: Approve or reject multiple submissions

## 🚀 Live Demo

**Live URL**: [https://artistly-demo.vercel.app](https://artistly-demo.vercel.app)

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **UI Library**: React.js (Functional Components)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
artistly/
├── app/                    # Next.js App Router pages
│   ├── artists/           # Artist listing page
│   ├── dashboard/         # Manager dashboard
│   ├── onboard/          # Artist registration
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui components
│   ├── ArtistCard.jsx    # Artist profile card
│   ├── CategoryCard.jsx  # Category selection card
│   ├── FilterSidebar.jsx # Filtering controls
│   └── Header.jsx        # Navigation header
├── data/                 # Mock data and constants
│   └── mockData.js       # Artist and category data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/artistly.git
   cd artistly
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### 1. Homepage (`/`)

- Hero section with platform overview
- Category cards for quick navigation
- Call-to-action buttons for artists and event planners
- Feature highlights and benefits

### 2. Artist Listing (`/artists`)

- Grid/List view toggle
- Advanced filtering by category, location, and price
- Search functionality
- Responsive artist cards with ratings and details

### 3. Artist Onboarding (`/onboard`)

- Multi-step registration form
- Form validation with real-time feedback
- File upload for profile images
- Multi-select dropdowns for categories and languages

### 4. Manager Dashboard (`/dashboard`)

- Artist submission management
- Status tracking and statistics
- Approval/rejection workflow
- Data visualization with charts

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradient accents
- **Responsive Layout**: Mobile-first approach with breakpoint optimization
- **Micro-interactions**: Hover effects and smooth transitions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images and lazy loading

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- Custom color palette
- Extended spacing system
- Animation utilities
- Component-specific styles

### Next.js Configuration

- Static export enabled for deployment
- Image optimization configured
- ESLint integration

## 📊 Mock Data Structure

The application uses structured mock data for:

```javascript
// Artist Data
{
  id: 'unique-id',
  name: 'Artist Name',
  category: ['singers', 'dancers'],
  priceRange: '₹25,000 - ₹50,000',
  location: 'City Name',
  bio: 'Professional description',
  languages: ['Hindi', 'English'],
  profileImage: 'image-url',
  rating: 4.8,
  verified: true
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `out`
3. **Deploy automatically on push**

### Manual Deployment

```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 🧪 Testing

The project includes:

- Form validation testing
- Component rendering tests
- Responsive design validation
- Cross-browser compatibility

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Bundle Analysis**: Webpack bundle analyzer integration

## 🔒 Security Features

- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Built-in Next.js security features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


✅ **Technical Requirements**

- Next.js 13+ with App Router
- React functional components with hooks
- Tailwind CSS styling
- Responsive design implementation
- Form validation with React Hook Form

✅ **Page Requirements**

- Homepage with hero section and categories
- Artist listing with filtering functionality
- Artist onboarding form with validation
- Manager dashboard with data management

✅ **Code Quality**

- Clean folder structure
- Reusable components
- Proper state management
- Performance optimizations
- SEO-friendly implementation

---

**Built with ❤️ using React.js and Next.js**
