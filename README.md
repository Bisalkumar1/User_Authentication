<div id="top"></div>

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <h3 style="font-weight: 600" align="center">User Authentication System</h3>

  <p align="center">
    User Authentication System For Login, Register, Logout and Reset Password
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details style="margin: 1rem 0">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
      <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li><a href="#how-to-use">How To Use</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![preview-screenshot]('./assets/Preview.png) <!-- screenshot-->

User Authentication System where You can  Login,Register,Logout and  Reset Password

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->

## Built With

Frontend

- [React JS](https://reactjs.org/)
- [Material UI](https://mui.com/material-ui/)
- [Sonner](https://sonner.emilkowal.ski/)

Backend
- [Node Js](https://nodejs.org/en)
- [Express Js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

Common

- [Bootstrap](https://getbootstrap.com/docs/5.0/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Features -->

## Features

- User Authentication
  - Login.
  - Signup or Register.
  - Logout.
  - Reset Password

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- How To Use -->

## How To Use

1.  Visit [User Authentication System]() and click on the Login Page if you already registered.

2.  Otherwise Go to Register section by clicking on register where you will get another page where you have to fill some details like email, username, fullname and password and then register after that you will redirect to login page 

3.  Login to the page after register or without register if you are already registered then in the next section you will get two options to logout and reset password  

4.  After clicking Logout you will redirect to login page 

5.  After Clicking on Reset Password you will redirect to new section where you can change password by putting old password and new password and after clicking change password password will change and you will redirect to login page

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Folder Structure -->

## Folder Structure

```
- /Backend
   /Api
     /index.js
   /controllers
     /user.controllers.js
   /db
     /index.js
   /middlewares
     /auth.middlewares.js
   /models
     /User.js
   /node_modules
   /routes
     /users.js
   /src
     /app.js
     /constants.js
     /index.js
   /utils
     /ApiResponse.js
   .env
   package-lock.json
   package.json
   vercel.json

- /frontend
    /node_modules
    /public
      /favicon.ico
      /index.html
      /logo192.png 
      /logo512.png
      /{}manifest.json
      /robots.txt
    /src
      /Images
         /backimg3.avif
      /Pages
        /changePassword.jsx
        /Loading.jsx
        /login.jsx
        /register.jsx
        /SelectPageOption.jsx
      /services
        /changePassword.service.js
        /login.services.js
        /register.services.js
      App.js
      index.css
      index.js
      .env
      .gitignore
      package-lock.json
      package.json
      README.md

- README.md

```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Email - [kumarmodibisal@gmail.com](mailto:kumarmodibisal@gmail.com)
- Linkedin - [@BisalKumar](https://www.linkedin.com/in/bisal-kumar-97459122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

<p align="right">(<a href="#top">back to top</a>)</p>