# Karwade Financial Services Website

A modern, responsive financial services website built with React and Node.js.

## Features

- 🏠 Modern landing page with hero section
- 💼 Services showcase
- 💰 Insurance quote calculator
- 📝 Contact and inquiry forms
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎨 Smooth animations with Framer Motion

## Tech Stack

**Frontend:**
- React 18
- React Router
- Framer Motion
- Axios
- Vite

**Backend:**
- Node.js
- Express
- Nodemailer

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
cd ..
```

### Running the Application

Development mode (runs both client and server):
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
KarwadeFinancial/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   └── App.jsx        # Main app component
│   └── package.json
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   └── index.js          # Server entry point
└── package.json          # Root package.json
```

## Available Scripts

- `npm run dev` - Run both client and server in development mode
- `npm run server` - Run only the backend server
- `npm run client` - Run only the frontend
- `npm run build` - Build frontend for production
- `npm start` - Run production server

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## License

MIT
