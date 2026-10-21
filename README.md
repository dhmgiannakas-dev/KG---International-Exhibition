# K&G International — Exhibition Design & Construction

A modern, responsive corporate website for **K&G International**, a company specializing in exhibition stand design and construction.

The website presents the company's identity, services, and projects through a clean, contemporary interface, with a strong focus on visual storytelling, user experience, and responsive design.

## 🌐 Live Demo

**[View Live Website](https://kg-international-exhibition-eight.vercel.app)**

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based user interface
- **Vite** — Fast development and production builds
- **JavaScript (ES6+)** — Application logic
- **CSS3** — Custom styling, layouts, and responsive design
- **Axios** — Communication with the backend API

### Backend
- **Node.js** — Server-side JavaScript runtime
- **Express.js** — REST API and backend routing
- **CORS** — Secure cross-origin communication
- **SMTP** — Email delivery for contact form submissions

### Deployment & Version Control
- **Vercel** — Frontend and backend hosting
- **Git & GitHub** — Version control and source code management

## ✨ Features

- Modern and fully responsive design
- Custom visual identity and brand-inspired color palette
- Interactive and reusable React components
- Dedicated pages for company information, projects, and exhibition stands
- Exhibition stand portfolio and project detail pages
- Client showcase carousel
- Functional contact form connected to an Express API
- Email submission through SMTP integration
- Environment-based API configuration
- Separate frontend and backend deployments

## 📄 Website Pages

| Page | Description |
|---|---|
| **Home** | Brand introduction, services, and featured content |
| **About** | Company background, philosophy, and expertise |
| **Projects** | Portfolio of exhibition and construction projects |
| **Exhibition Stands** | Exhibition stand showcases and individual project details |
| **Contact** | Contact information and email-enabled inquiry form |

## 📁 Project Structure

```text
KG---International-Exhibition/
│
├── client/                  # React + Vite frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Website pages
│   │   └── ...
│   ├── package.json
│   └── index.html
│
├── server/                  # Node.js + Express backend
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/dhmgiannakas-dev/KG---International-Exhibition.git
cd KG---International-Exhibition
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

### 3. Install Backend Dependencies

Open another terminal and navigate to the backend directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory and configure the environment variables required by your backend.

For local development, the frontend origin can be configured as:

```env
CLIENT_URL=http://localhost:5173
PORT=5000
```

Configure the SMTP credentials and other email settings according to the backend implementation.

Start the backend using the development or start script defined in `server/package.json`.

## 📩 Contact Form Integration

The contact form sends requests from the React frontend to the Express backend using Axios.

**API Endpoint**

```http
POST /api/contact
```

The backend handles form submissions and uses SMTP to deliver contact inquiries.

The frontend API URL is configured through:

```env
VITE_API_URL
```

The backend allows requests from the configured frontend origin through:

```env
CLIENT_URL
```

Sensitive credentials should remain in backend environment variables and must never be committed to GitHub.

## ☁️ Deployment

The application is deployed on **Vercel** as two separate projects connected to the same GitHub repository.

| Service | Root Directory |
|---|---|
| Frontend | `client` |
| Backend | `server` |

The frontend uses the production `VITE_API_URL` to communicate with the deployed backend.

The backend uses `CLIENT_URL` to allow requests from the production frontend domain.

## 🎨 Design Approach

The interface follows a modern exhibition-industry aesthetic with:

- Deep forest green backgrounds
- Elegant gold accents
- Teal highlights
- Strong typography and spacious layouts
- High-quality project imagery
- Responsive layouts for desktop, tablet, and mobile

## 👨‍💻 Developer

**Dhm Giannakas**

GitHub: [@dhmgiannakas-dev](https://github.com/dhmgiannakas-dev)

## 📌 Project Status

Deployed on Vercel.

---

Built with React, Vite, Node.js, and Express.