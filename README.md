# 🎬 Noxe – Movie Streaming Web App

A modern, high-performance movie streaming web application built with **Vite**, **React 19**, **Bootstrap**, and **Firebase**.  
Noxe allows users to explore movies, view detailed information, and manage authentication seamlessly — all within a clean and responsive UI.

---

## 🚀 Features

### 🎥 Core Functionality
- **Movie & TV Browsing** – Browse popular and trending titles  
- **Detailed Movie Pages** – View overviews, ratings, and release dates  
- **User Authentication** – Sign up, log in, and log out with Firebase  
- **Protected Routes** – Only authorized users can access certain pages  
- **Responsive Design** – Optimized for all devices  
- **Axios Integration** – Fetch data from TMDB or similar APIs efficiently  

### ⚡ Performance & UX
- **Vite 7** – Lightning-fast dev server and optimized build system  
- **React 19** – Utilizing concurrent rendering features  
- **React Router DOM 7** – Smooth navigation and route management  
- **React Hot Toast** – Elegant feedback notifications  
- **React Hook Form** – Simplified form validation and management  
- **Bootstrap 5** – Additional layout and responsive components  

---

## 🧠 Tech Stack

- **Frontend:** React 19 + Vite  
- **Styling:** Bootstrap 5  
- **State & Forms:** React Hook Form  
- **Routing:** React Router DOM  
- **Notifications:** React Hot Toast  
- **HTTP Client:** Axios  
- **Backend/Auth:** Firebase  
- **Linting** | ESLint (React best practices) |

---

## 📁 Project Structure

src/
├── Components
│   ├── Auth
│   │   ├── AuthContext
│   │   ├── Login
│   │   └── Register
│   ├── Icons
│   ├── Loading
│   ├── Navbar
│   ├── ProtectedRoute
│   └── Ui
│
├── assets
├── constant
│   ├── ToastStyles.js
│   └── VALIDATIONS.js
│
├── firebase
│   ├── auth.js
│   └── firebase.js
│
├── hooks
│   ├── useLogout.js
│   ├── useGoToDetails.js
│   └── useTrending.js
│
├── layouts
│   ├── AuthLayout.jsx
│   └── MasterLayout.jsx
│
├── pages
│   ├── Details
│   ├── Home
│   ├── Movies
│   ├── NotFound
│   ├── People
│   └── Tvshows
│
└── store
    └── Store.jsx


---

## ⚙️ **Getting Started**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/noxe.git
cd noxe


### 2️⃣ Install Dependencies
npm install


### 3️⃣ Create an .env File
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

4️⃣ Start the Development Server
npm run dev


## 👨‍💻 **Author**

**Mohamed Ahmed**  
Frontend Developer specializing in **React**, **TypeScript**, and **modern UI development**.
