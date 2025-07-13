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
- Fetch Movies From TMDB
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribe on the onAuthStatechanged callback
- Add Hardcoded values to constant file
- Register TMDB Api & create an app & Get access Token
- Get Data from TMDB now playing movies list api 
- Created Custom Hook 
- Update store for movies data
- Planing for Main Container and Secondary Container
- Fetch data for Trailer video
- Update store with Trailer video data
- Embedded the Youtube video make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- GPT search feature
- usePopularMovies, useTopRated, useUpcoming custom hook
- Gpt search page
- GPT Search Bar
- Multi-language feature in our App

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

