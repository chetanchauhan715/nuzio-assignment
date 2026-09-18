# Nuzio AI Assignment

A full-stack implementation of the important Nuzio AI screens for Google login, personalization, and audio news playback.

## Live Demo

**Frontend:**  
https://nuzio-assignment.netlify.app

**Backend API:**  
https://nuzio-api.onrender.com

## Features

- Google Sign-In
- Profession and interest selection
- Narrator and brief-length preferences
- Personalized news from the backend
- Audio playback using the Web Speech API
- Previous / next story controls
- Responsive mobile-first UI

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- React Router
- React Context API
- `@react-oauth/google`

### Backend
- Node.js
- Express.js
- Google Auth Library
- REST APIs

### Deployment
- Netlify
- Render

## Application Flow

```text
Google Login
    ↓
Profession
    ↓
Interests
    ↓
Voice + Brief Length
    ↓
Preferences sent to backend
    ↓
Personalized news returned
    ↓
Audio News Player
```

## API Endpoints

```text
POST /api/auth/google
PUT  /api/preferences
POST /api/news/personalized
```

## Project Structure

```text
nuzio-assignment/
├── frontend/
│   └── src/
│       ├── context/
│       ├── pages/
│       └── services/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── data/
│   └── server.js
│
└── README.md
```

## Local Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

Create `backend/.env`:

```env
GOOGLE_CLIENT_ID=your_google_client_id
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Notes

- Google credentials are verified on the backend.
- Personalized news is filtered on the backend based on selected interests.
- News data is seeded for the assignment scope.
- Audio playback uses the browser Web Speech API.

## Author

**Chetan Chauhan**
