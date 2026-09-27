# Social Media MERN Stack

A full-stack social media web application built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js.

The application allows users to create accounts, log in, connect with other users, create posts, view posts, and interact with posts through likes and other social features.

## 🚀 Features

* 🔐 User registration and login
* 👤 User profiles
* 🤝 Add and remove friends
* 🔎 View other users
* 📝 Create and share posts
* ❤️ Like posts
* 📰 View posts from other users
* 🗄️ Persistent data storage using MongoDB
* ⚡ REST API powered by Express.js and Node.js
* ⚛️ Responsive React-based frontend

## 🛠️ Tech Stack

### Frontend

* **React.js**
* JavaScript
* HTML5
* CSS3

### Backend

* **Node.js**
* **Express.js**
* REST APIs

### Database

* **MongoDB**

### Architecture

```text
Social-Media-MERN-Stack
│
├── client/          # React frontend
│
├── server/          # Node.js + Express backend
│
├── .gitignore
└── README.md
```

## 📋 Prerequisites

Before running the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB
* Git

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/AmlanShanker/Social-Media-MERN-Stack.git
```

Navigate into the project:

```bash
cd Social-Media-MERN-Stack
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal and run:

```bash
cd server
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

> Replace the MongoDB connection string with your own MongoDB database credentials.

If the application uses additional environment variables, add them to the same `.env` file.

## ▶️ Running the Application

### Start the backend

From the `server` directory:

```bash
npm start
```

Or, if the project uses a development script:

```bash
npm run dev
```

### Start the frontend

From the `client` directory:

```bash
npm start
```

The React development server will start locally, while the Express server will run separately as the backend API.

## 🔄 How It Works

The application follows a typical MERN architecture:

```text
        ┌─────────────────┐
        │     React       │
        │    Frontend     │
        └────────┬────────┘
                 │
                 │ HTTP / REST API
                 ▼
        ┌─────────────────┐
        │    Express.js   │
        │    + Node.js    │
        └────────┬────────┘
                 │
                 │ Database Queries
                 ▼
        ┌─────────────────┐
        │     MongoDB     │
        └─────────────────┘
```

The **React frontend** provides the user interface and communicates with the **Express/Node.js backend** through API requests. The backend handles application logic and communicates with **MongoDB** for persistent data storage.

## 📱 Application Functionality

### Authentication

Users can create an account and log in to access the social-media functionality.

### Friends

Users can discover other accounts and add or remove users from their friend network.

### Posts

Authenticated users can create posts and view posts created by other users.

### Likes

Users can interact with posts by liking them.

## 📁 Project Structure

```text
.
├── client/
│   ├── ...
│   └── ...
│
├── server/
│   ├── ...
│   └── ...
│
├── .gitignore
└── README.md
```

## 🧪 Development

When developing locally, run the frontend and backend in separate terminals.

**Terminal 1 — Backend**

```bash
cd server
npm install
npm start
```

**Terminal 2 — Frontend**

```bash
cd client
npm install
npm start
```

## 🔮 Future Improvements

Some potential improvements for the project include:

* 💬 Real-time chat and messaging
* 🔔 Notifications
* 📸 Image and video uploads
* 🔐 JWT-based authentication
* 🔑 Password reset functionality
* 📱 Improved mobile responsiveness
* 🔍 Advanced user search
* 💭 Comments on posts
* 📊 User activity and analytics
* ☁️ Cloud-based media storage

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

## 📄 License

This project is open source. Please check the repository for the applicable license.

## 👨‍💻 Author

**Amlan Shanker**

GitHub: [AmlanShanker](https://github.com/AmlanShanker)

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub!

---

Built with ❤️ using the **MERN Stack**.
