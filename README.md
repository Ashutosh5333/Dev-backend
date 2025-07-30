## 🚀 Portfolio API (Backend)

This is the backend service for the **Portfolio Project Platform** built using **Node.js**, **Express**, and **MongoDB**. It provides authentication, user management, and project-related APIs.

### 🌐 Live API Base URL

[https://dev-backend-zvor.onrender.com/api](https://dev-backend-zvor.onrender.com/api)

---

## 📂 Project Structure

```
.
├── controllers/       # API controllers (business logic)
├── middleware/        # Authentication middleware
├── models/            # MongoDB models
├── routes/            # API routes
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── project.routes.js
├── app.js             # Express app setup
├── index.js          # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Features

* **Authentication**: User signup & login with JWT.
* **User Management**: Fetch profile, update user details.
* **Projects Management**: Create, view, and comment on projects.
* **CORS Enabled**: Configured for cross-origin requests.
* **RESTful API Design**.

---

## 🔧 Tech Stack

* **Node.js** + **Express.js**
* **MongoDB** + **Mongoose**
* **JWT** Authentication
* **Express Validator**
* **CORS**
* **Body-Parser**

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ashutosh5333/Dev-backend.git
cd Dev-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the root directory and add:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the server

```bash
npm start
```

Server will run on:

```
http://localhost:8000
```

---

## 📌 API Endpoints

### Auth

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register new user |
| POST   | `/api/auth/login`  | Login user        |

### Users

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/api/users`            | Get all users            |
| GET    | `/api/users/profile/me` | Get my profile (auth)    |
| PUT    | `/api/users/update`     | Update my profile (auth) |

### Projects

| Method | Endpoint                    | Description                 |
| ------ | --------------------------- | --------------------------- |
| GET    | `/api/projects`             | Get all projects            |
| POST   | `/api/projects/create`      | Create a new project (auth) |
| PUT    | `/api/projects/comment/:id` | Comment on a project (auth) |

---

## 🚀 Deployment

This project is deployed on **Render**.
Live API: [https://dev-backend-zvor.onrender.com/api](https://dev-backend-zvor.onrender.com/api)

---

## ✅ Example Request

**Signup Example (POST /api/auth/signup)**

```json
{
  "name": "Ashutosh Lakshakar",
  "email": "ashutosh@example.com",
  "password": "securepassword"
}
```

---

## 🧑‍💻 Author

* **Ashutosh Lakshakar** – [GitHub]([https://github.com/your-username](https://github.com/Ashutosh5333))

