# Bookstore Management System (Node.js)

This project is a *Bookstore Management System* built with *Node.js, **Express, and **MongoDB. It features **admin* and *user* functionalities, including book management, user registration, OTP verification, and authentication using JWT. Images for books and user profiles are stored locally.

## Features

### Admin Features:
- *Automatic Admin Creation*: Admin account is created on server initialization.
- *Admin Login*: Admin can log in using credentials.
- *Book Management*:
  - Add new books (name, author, price, description, and quantity).
  - Perform CRUD operations on books.
  - Update book quantities.
- *Image Storage*: Book images are uploaded and stored locally.

### User Features:
- *User Registration*: Users register by providing details such as name, age, email, phone, and profile picture.
- *OTP Verification*: A 4-digit OTP is sent during registration for verification.
- *User Login*: After verifying OTP, users can log in and a JWT token is stored in HTTP-only cookies.
- *Book Search & Cart*: Users can search for books, add them to a cart, and manage the cart.
- *Logout*: Clears the JWT cookie on logout.

### Image Storage
- All book images and user profile pictures are stored locally in the /uploads/ directory using *Multer*.

