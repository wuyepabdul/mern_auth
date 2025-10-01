# 🔐 Advanced MERN Authentication App  

A production-ready **MERN (MongoDB, Express, React, Node.js)** authentication boilerplate featuring secure authentication flows, email verification, password management, and lightweight state handling with **Zustand**.  

---

## ✨ Features  

- ✅ **JWT Authentication** with HttpOnly cookies  
- 📧 **Email Verification** on signup  
- 🎉 **Welcome Email** after successful account verification  
- 🔑 **Forgot & Reset Password** with secure tokens  
- 🛡️ **Protected Routes** (only accessible by authenticated users)  
- ⚡ **Zustand** for global state management  
- 🔒 **Secure by Design** (bcrypt hashing, token expiry, HttpOnly cookies)  
- 🌍 **CORS-ready API** for deployment with Vercel, Netlify, or Render  

---


## 🖼️ App Screenshots  

> Replace the placeholders below with your actual app screenshots.  
> Recommended format: keep screenshots in a `/screenshots` folder inside your repo.  

### 🌐 Web View  

| Login Page | Dashboard | Email Verification |  
|------------|-----------|---------------------|  
| ![Web Login](./screenshots/web-login.png) | ![Web Dashboard](./screenshots/web-dashboard.png) | ![Web Email Verification](./screenshots/web-email-verification.png) |  

### 📱 Mobile View  

| Login Page | Dashboard | Email Verification |  
|------------|-----------|---------------------|  
| ![Mobile Login](./screenshots/mobile-login.png) | ![Mobile Dashboard](./screenshots/mobile-dashboard.png) | ![Mobile Email Verification](./screenshots/mobile-email-verification.png) |  

---


## 🛠️ Tech Stack  

**Client (Frontend):**  
- React  
- Zustand (state management)  
- Axios  
- TailwindCSS (optional, if used for styling)  

**API (Backend):**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT Authentication  
- Nodemailer (email service)  
- Bcrypt.js (password hashing)  
- Cookie-parser (HttpOnly cookies)  
- CORS  

---

## 📂 Project Structure  

```bash
root/
│── api/                 # Express server & API
│   ├── controllers/     # Authentication & user controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Email & token utilities
│   └── server.js        # Entry point
│
│── client/              # React + Zustand client
│   ├── src/
│   │   ├── store/       # Zustand store
│   │   ├── pages/       # Login, Register, Forgot, Reset, Dashboard
│   │   ├── components/  # Reusable UI components
│   │   └── App.js
│   └── package.json
│
└── README.md

---

## 📬 Contact  

If you have any questions, suggestions, or feedback, feel free to reach out:  

- **Author:** Abdul Wuyep  
- **Portfolio:** [your-portfolio-link](https://your-portfolio-link.com)  
- **LinkedIn:** [your-linkedin](https://linkedin.com/in/your-linkedin)  
- **Email:** your.email@example.com  

---

## ⭐ Acknowledgements  

Special thanks to the **MERN community**, contributors, and open-source libraries that made this project possible.  

---

## 💡 Final Note  

This project was built to serve as a **scalable, production-ready authentication boilerplate**.  
Feel free to use it as a starter for your own applications, extend it with new features, or contribute improvements.  

If you find this project helpful, please consider leaving a ⭐ on the repo — it helps others discover it too!  

---
