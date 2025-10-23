# 🌿 GreenGarden — React Firebase Authentication Project

A modern and secure user authentication system built using **React (Vite)**, **Firebase Authentication**, and **Tailwind CSS**.  
This project allows users to **register, log in, and manage profiles**, following industry-standard best practices for security and structure.

---

## 🚀 Features

- 🔒 User Registration (Email & Password)
- 🔐 Secure Login Authentication
- 🧑‍💻 Profile Management (Update Name, Photo)
- 🚫 Auto-login Disabled after Registration (Secure flow)
- ⚡ Toast Notifications for feedback
- 💾 Persistent Auth State (using Firebase)
- 🧭 Protected Routes for Authorized Users
- 🌈 Fully Responsive & Clean UI with Tailwind CSS

---

## 🏗️ Project Structure

src/
├── Components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
│
├── Layouts/
│ ├── MainLayout.jsx
│ ├── AuthLayout.jsx
│
├── Pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── MyProfile.jsx
│ ├── Loading.jsx
│
├── Provider/
│ └── AuthContext.jsx
│
├── Firebase/
│ └── Firebase.config.js
│
└── main.jsx

---

## 🧰 Tech Stack

| Technology                  | Purpose                    |
| --------------------------- | -------------------------- |
| **React (Vite)**            | Frontend Framework         |
| **Firebase Authentication** | User Auth, Profile Update  |
| **React Router DOM**        | Routing & Protected Routes |
| **React Toastify**          | User Notifications         |
| **Tailwind CSS**            | Styling & Layout           |
| **React Icons**             | Icons (eye/eye-slash etc.) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/GreenGarden.git
cd GreenGarden



2️⃣ Install Dependencies
npm install



3️⃣ Setup Firebase

Go to Firebase Console

Create a project → Enable Email/Password Authentication

Copy your Firebase config and paste into:


3️⃣ Setup Firebase

Go to Firebase Console

Create a project → Enable Email/Password Authentication

Copy your Firebase config and paste into:

src/Firebase/Firebase.config.js



Example:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

4️⃣ Run Locally
npm run dev

5️⃣ Build for Production
npm run build

6️⃣ Deploy (Optional)

You can deploy using:

Firebase Hosting

Vercel

Netlify

🧠 Error Handling Strategy
🔹 Validation Errors

Handled using Regular Expressions (RegEx) and Toastify:

if (!passwordPattern.test(password)) {
  toast.error("Password must contain uppercase, lowercase, number & special character");
  return;
}

🔹 Firebase Auth Errors

All Firebase errors are handled with descriptive feedback:

createUser(email, password)
  .catch(error => {
    if (error.code === "auth/email-already-in-use") {
      toast.error("User already exists!");
    } else {
      toast.error("Something went wrong!");
    }
  });

🔹 Protected Route Errors

Unauthorized users trying to access protected routes are redirected to login:

if (!user) return <Navigate to="/auth/login" replace />;

🔹 Global Loading State

Handled via Context and a <Loading /> component with animation.

🧩 Important Packages
Package   	        Purpose
firebase	        Authentication
react-router-dom  	Routing
react-toastify   	Notifications
react-icons	        Icons
tailwindcss	        Styling
vite	            Fast build tool


🧱 How to Implement Error Handling Professionally

Centralized Error Management:
Create a helper file utils/errorHandler.js to handle Firebase & custom errors globally.

import { toast } from "react-toastify";

export const handleFirebaseError = (error) => {
  const messages = {
    "auth/email-already-in-use": "Email already registered.",
    "auth/invalid-email": "Invalid email address.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password.",
  };
  toast.error(messages[error.code] || "Something went wrong!");
};


Use Try-Catch in Async Functions

try {
  await createUser(email, password);
} catch (error) {
  handleFirebaseError(error);
}


Toast for All Errors & Success
Always provide user feedback using toast.success() or toast.error().

🔐 Protected Routes Example
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/auth/login" replace />;

  return children;
};

export default ProtectedRoute;


Usage:

<Route path="/profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />

📦 Deployment Example (Firebase Hosting)
npm run build
firebase deploy

👨‍💻 Developer

Author: Alif Hossin Sajjad (Malik)

GitHub: alifhossinsajjad

Email: your-email@example.com

📜 License

This project is licensed under the MIT License — free to use and modify with attribution.

💡 Future Improvements

🔄 Google / GitHub OAuth Login

📱 Password Reset Functionality

🌐 Dark Mode Support

🧮 Form Validation with React Hook Form

🧭 Route-based Code Splitting


---

Would you like me to **customize this README with your project’s real name, deployment link, and your GitHub repo link** (so it looks 100% personal and professional)?
If you send me those three details, I’ll make a **final version** ready for upload. 🚀
```
