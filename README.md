# 🎬 Noxe – Movie Streaming Web App

A modern, high-performance movie streaming web application built with **Vite**, **React 19**, **Tailwind CSS**, and **Firebase**.  
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
- **Styling:** Tailwind CSS + Bootstrap 5  
- **State & Forms:** React Hook Form  
- **Routing:** React Router DOM  
- **Notifications:** React Hot Toast  
- **HTTP Client:** Axios  
- **Backend/Auth:** Firebase  
- **Linting:** ESLint with modern React rules  

---

## 📁 Project Structure

src/
├── Components/
│ ├── About/ # About page
│ ├── AuthContext/ # Authentication context provider
│ ├── Context/ # Global state or store
│ ├── Details/ # Movie details component
│ ├── Firebase/ # Firebase configuration and authentication
│ ├── Home/ # Homepage layout
│ ├── Login/ # Login form
│ ├── Logout/ # Logout component
│ ├── Movies/ # Movie list and details
│ ├── Navbar/ # Navbar and styles
│ ├── Networks/ # Network info section
│ ├── NotFound/ # 404 Page
│ ├── People/ # Cast/People list
│ ├── Register/ # User registration form
│ └── Tvshows/ # TV shows page
│
├── App.jsx # Root component
├── App.css # Global styles
└── main.jsx # App entry point