# Next.js & Genkit Portfolio Template

This is a modern, fully-responsive, and customizable portfolio website template built with Next.js, Tailwind CSS, ShadCN UI, and Google's Genkit for AI-powered features. It's designed to be easily personalized and deployed on Firebase App Hosting.

## ✨ Features

- **Modern & Responsive Design**: A clean and professional layout that looks great on all devices.
- **AI Resume Tailor**: Uses Google's Genkit to dynamically tailor your project portfolio to a specific job description.
- **Smooth Animations**: Engaging user experience with animations powered by GSAP.
- **Easy Customization**: All personal data (bio, projects, skills, experience) is centralized in `src/lib/data.ts` for quick updates.
- **Component-Based**: Built with reusable components using React and ShadCN UI.
- **Type-Safe**: Written in TypeScript for better code quality and developer experience.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://gsap.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install NPM packages:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 🎨 How to Customize

Personalizing the portfolio is designed to be as simple as possible.

1.  **Update Personal Info, Projects, Skills, and Experience**:
    -   All content is managed in one file: `src/lib/data.ts`. Open it and replace the placeholder data with your own.

2.  **Update Images**:
    -   Place your images (headshot, project screenshots) in the `public/images/` directory.
    -   Update the image paths in the `src/lib/placeholder-images.json` file to match your new files.

3.  **Update Skill Icons**:
    -   Skill icons (a mix of SVGs and icon components) are defined in `src/components/sections/skills.tsx`. You can add new SVGs or map skills to different icons from the `lucide-react` library.
