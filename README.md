# MetaEval MVP - AI Benchmarking Platform

A modern, beautiful AI benchmarking web application built with Next.js, TypeScript, and Tailwind CSS. MetaEval allows you to compare different AI models, generate benchmark reports, and use prebuilt templates for evaluation tasks.

## ✨ Features

### 🎨 Modern Design
- **Dark Mode by Default**: Elegant dark theme with violet-indigo-blue gradient
- **Glass Morphism**: Beautiful blurred glass effects throughout the UI
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Subtle hover effects and transitions

### 🔧 Core Functionality
- **AI Model Comparison**: Side-by-side evaluation of multiple LLMs
- **Benchmark Reports**: Comprehensive analysis with detailed metrics
- **Prebuilt Templates**: Ready-to-use templates for common tasks
- **Real-time Results**: Live performance tracking and analysis

### 📊 Benchmark Metrics
- **Performance Score**: Overall model performance rating
- **Accuracy**: Response quality and correctness
- **Speed**: Response time measurements
- **Cost**: Usage cost analysis
- **Efficiency**: Resource utilization metrics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MetaEval-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### 🏠 Home Page (`/`)
- **Hero Section**: Eye-catching introduction with gradient text
- **Feature Cards**: Showcase of core capabilities
- **Call-to-Action**: Direct links to get started
- **Footer**: Links to important pages and resources

### 🔐 Authentication Pages
- **Login Page** (`/login`): Modern sign-in form with glass morphism
- **Signup Page** (`/signup`): User registration with validation

### 📊 Dashboard (`/dashboard`)
- **Input Form**: Configure benchmark parameters
- **Model Selection**: Choose from popular AI models
- **Task Types**: Rephrasing, coding, summarization, Q&A, creative writing
- **Templates**: Quick-start templates for common tasks
- **Results Table**: Detailed performance comparison
- **Analysis**: AI-generated insights and recommendations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Design System

### Colors
- **Primary**: Violet (`#8b5cf6`)
- **Secondary**: Indigo (`#6366f1`)
- **Accent**: Blue (`#3b82f6`)
- **Background**: Dark gradient with glass effects

### Components
- **Cards**: Glass morphism with subtle borders
- **Buttons**: Gradient variants with glow effects
- **Inputs**: Modern styling with focus states
- **Tables**: Clean, readable data presentation

## 📁 Project Structure

```
MetaEval-mvp/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── InputForm.tsx    # Benchmark form
│   └── Navbar.tsx       # Navigation bar
├── lib/                 # Utilities
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🔮 Future Enhancements

- [ ] Real AI model integration
- [ ] User authentication system
- [ ] Result history and comparison
- [ ] Export functionality (PDF, CSV)
- [ ] Advanced analytics dashboard
- [ ] Custom benchmark templates
- [ ] API endpoints for external access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)

---

**MetaEval** - Benchmark Smarter, Build Faster ⚡
