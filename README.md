# netflix-gpt

- create react app
- configure tailwind
- Header
- Login Form
- Sign Up Form
- Form validation
- UseRef
- Firebase setup
- Deploying app to production
- Create Sign Up User Account
- Implement Sign In User Api
- Create Redux Store With userSlice
- Implemented Sign Out
- Update Profile



# Features

- Login/sign-up page
  - Sign In/Sign Up Form
  - Redirect to Browse Page
- Browse

  - Header
  - Main movie
    - Trailer in background
    - Title & Description
    - Movie suggestion
      - Movie list \* N

- Netflix-Gpt
  - Search Bar
  - Movie suggestion

# Useful Libraries

- FORMIK (to handle large forms)

# For Routing

- commond (npm i -D react-router-dom)
- this is how we do Routing
  import React from "react";
  import Login from "./Login";
  import Browse from "./Browse";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

```ruby
    const Body = () => {
    const appRouter = createBrowserRouter([
        {
        path: "/browse",
        element: <Browse />,
        },
        {
        path: "/login",
        element: <Login />,
        },
    ]);
    
    return (
        <div>
        <RouterProvider router={appRouter} />
        </div>
    );
    };

    export default Body;
```

- Setup Redux(npm i -D @redux/toolkit, npm i react-redux)
- Create Redux store
