# 📚 BookVault

BookVault is a modern e-commerce web application for buying **Computer Science books**.  
It provides a smooth shopping experience with cart management, secure order creation, and a personalized user dashboard to track past orders.

---

## 🚀 Features

### 🛒 Shopping Experience
- Browse Computer Science books
- View detailed product pages
- Add / remove items from cart
- Quantity management per item
- Real-time cart total calculation

### 💳 Order & Checkout
- Create orders with:
  - Payment ID
  - Order date
  - Item quantities
  - Total amount paid
- Session-based authentication
- Secure order storage

### 📊 User Dashboard
- View complete order history
- Each order shows:
  - Order ID
  - Payment ID
  - Order date
  - Item-wise quantity
  - Price breakdown
- Clickable product links from past orders

### 🌙 UI & UX
- Dark mode support
- Responsive design (mobile + desktop)
- Clean and minimal UI
- Toast notifications for actions & errors

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router
- Context API + useReducer
- Tailwind CSS
- React Toastify

**Backend (Mock / API)**
- JSON Server
- JWT Authentication (via json-server-auth)


---

## 🧾 Order Data Structure

Each order is stored in the following format:

```json
{
      "cartList": [
        {
          "id": 10005,
          "name": "",
          "overview": "",
          "long_description": "",
          "price": ,
          "poster": "",
          "image_local": "/assets/images/10005.avif",
          "rating": ,
          "in_stock": true,
          "pages": ,
          "best_seller": false,
          "qty": 
        }
      ],
      "amount_paid": ,
      "total_items": ,
      "paymentId": "",
      "orderDate": "",
      "user": {
        "id": 1,
        "name": "",
        "email": ""
      },
      "id": 1
}


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Chhabra-Jatin/bookvault.git
cd bookvault

### 2️⃣🔐 Environment Variables
REACT_APP_HOST=http://localhost:8000

### 3️⃣ Install dependencies
npm install

### 4️⃣ Start JSON Server
json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json --port 8000

### 5️⃣ Start the React app
npm start

---
