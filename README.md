
#  Netflix GPT

A Netflix‑inspired movie‑browsing app built with **React**, **Firebase**, and **Redux** — and super‑charged with GPT‑powered search to help you find the perfect film just by asking.

---

##  What is Netflix GPT?

Netflix GPT mixes TMDB’s huge movie database with GPT’s natural‑language smarts. The result: a slick Netflix‑style UI where you can log in, browse categories, and ask for movie recs in plain English.

> Ever wondered, “Show me the best feel‑good movies from the 2000s”?  
> Netflix GPT understands and delivers.

---

##  Key Features

###  Authentication
- Sign up / Sign in / Sign out (Firebase Authentication)
- Update profile (name & photo)
- Protected routes so only logged‑in users can browse

###  Movie Browsing
- Categories: **Now Playing**, **Top Rated**, **Upcoming**
- Hero banner with trailer background
- Responsive UI styled with Tailwind CSS

###  GPT‑Powered Search
- Ask in natural language (e.g. “Suggest horror movies under 90 minutes”)
- GPT parses the query → returns titles
- App fetches full details from TMDB and shows movie cards

###  State Management
- Global state via Redux Toolkit
- Slices for **user**, **movies**, and **GPT** results
- Optimized with custom hooks & memoization

---

##  Tech Stack

| Layer           | Tech |
|-----------------|------|
| Frontend        | React, Tailwind CSS |
| State Mgmt      | Redux Toolkit |
| Auth            | Firebase Authentication |
| APIs            | TMDB, OpenAI GPT (or Gemini) |
| Hosting         | Firebase Hosting / Vercel |

---

##  Folder Structure

```
src/
├── components/       → Reusable UI pieces
├── hooks/            → Custom data / logic hooks
├── slices/           → Redux slices
├── utils/            → Helper functions
├── pages/            → SignIn, SignUp, Browse, GPTSearch
├── App.js            → App routes & layout
└── index.js          → Entry point
```

---

##  Getting Started

1. **Clone**
   ```bash
   git clone https://github.com/vipin88149/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install**
   ```bash
   npm install
   ```

3. **Add Environment Vars**

   Create a `.env` file in the project root:

   ```
   REACT_APP_FIREBASE_API_KEY=your_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project
   REACT_APP_TMDB_KEY=your_tmdb_key
   REACT_APP_OPENAI_KEY=your_openai_key
   ```

4. **Run Dev Server**
   ```bash
   npm start          # CRA
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

##  Deployment

### Firebase Hosting
```bash
firebase deploy
```


---

##  Example Prompts

- “Best romantic comedies on Netflix”
- “Top thrillers released after 2020”
- “Short animated movies for kids”

GPT returns titles → we fetch details from TMDB → you get a shiny grid of movies.

---

##  Contributing

Found a bug? Have an idea? Open an issue or create a pull request — everyone’s welcome!

---

##  License

MIT © 2025 Vipin Yadav

---

## 👋 Author

Built with ❤️ by [Vipin Yadav](https://github.com/vipin88149).  
Feel free to reach out and say hi!
