# FastBite - Premium Food Delivery Platform

A full-stack food delivery application built with **React Native** and a **Django REST Framework** backend. This project features a modern, premium UI/UX designed for a seamless ordering experience.

## ✨ Premium Features (New Update!)

- **Modern UI/UX**: Completely redesigned with a professional color palette (`#FF4757` Primary) and 8-point grid system.
- **Premium Item Cards**: Elevated card designs with soft shadows, nutrition badges, and price indicators.
- **Interactive Ordering**: Polished quantity selectors and a floating "Add to Cart" experience.
- **Dynamic Headers**: Beautiful, high-quality image headers with transparent app bars and glassmorphism overlays.
- **Smooth Navigation**: Custom-styled Bottom Tab Navigator and Material Top Tabs for category browsing.

## 👥 Integrated User Workflow

The platform supports three distinct user roles:

1. **Customer**:
   - Browse restaurants and trending food items.
   - Real-time search with category filtering.
   - Detailed food views with nutritional info and reviews.
   - Secure checkout with address and payment management.

2. **Restaurant Manager**:
   - Dynamic menu management (add/edit items).
   - Real-time order tracking and status updates.
   - Driver assignment system for outgoing deliveries.

3. **Delivery Partner**:
   - Order acceptance and GPS-integrated location tracking.
   - Streamlined order completion workflow.

## 🚀 Tech Stack

- **Frontend**: React Native, React Navigation, React Native Paper, Vector Icons.
- **Backend**: Python, Django REST Framework.
- **Database**: PostgreSQL (Production recommended) / SQLite (Local dev).
- **Styling**: Premium Design System with custom shadow engines and color tokens.

## 🛠️ Installation & Setup

### 1. Backend Setup
Configure your `.env` file in the `backend/` directory:
```env
db_name="your_db"
db_user="your_user"
db_pass="your_password"
secret_key='your_secret'
DEBUG=True
```

Run migrations and initialize the server:
```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

### 2. Mobile App Setup
Install dependencies and start the Metro bundler:
```bash
npm install
npm start
```

*Note: Ensure you update the API IP address in `api-fetch.js` to match your local machine's network IP.*

---

## 📸 Interface Preview

<p float="left">
  <img src="screenshots/login.png" width="350" alt="Login Screen"/>
  <img src="screenshots/home.png" width="350" alt="Home Screen"/> 
</p>
<br/>
<p float="left">
  <img src="screenshots/checkout.png" width="350" alt="Checkout"/>
  <img src="screenshots/order-detail.png" width="350" alt="Order Detail"/> 
</p>

---
Created with ❤️ as a premium delivery solution.