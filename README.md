<br>
<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Free_Fire_New_Logo.svg/960px-Free_Fire_New_Logo.svg.png?20221203015417" width="180" />

# Free Fire Checker

A premium Free Fire player statistics and profile checker with a modern dark UI, built using React and Vite.

![React](https://img.shields.io/badge/React-19-blue?logo=react&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-7-yellow?logo=vite&style=for-the-badge)
![Router](https://img.shields.io/badge/React_Router-v7-red?logo=reactrouter&style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-Vanilla-blue?logo=css3&style=for-the-badge)
 
---

## Deploy via Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rifanortega/freefire-check)

</div>

## 📌 Note
This project uses the API provided by `flamingo.cobical.xyz`.
> **Important:** If you are not from Indonesia, please change the API request region key `server` to your own country code (e.g., `SG`, `IND`, `BR`).

## ✨ Features

- 🔍 **Search by Nickname**  
  Find Free Fire players instantly using their in-game nickname.

- 🆔 **Direct UID Lookup**  
  Fetch detailed account information and complete player statistics using a UID.

- 📊 **Comprehensive Stats**  
  Detailed breakdown for **Battle Royale (BR)** & **Clash Squad (CS)**:
  - 🏆 Career, Normal, & Ranked Modes
  - 📈 Headshot Rate, K/D Ratio, Win Rate
  - 🌟 MVP Count, Matches, Wins

- 🎨 **Premium UI/UX**
  - Dark Mode Glassmorphism
  - Smooth Animations

---

## 🛠 Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Frontend** | React 19 (Vite 7) |
| **Routing** | React Router DOM v7 |
| **Styling** | Vanilla CSS (Custom Variables) |
| **Icons** | Lucide React |

---

## 📡 API Usage Guide

Want to build your own frontend? Here is how to consume the endpoints directly.

**Base URL**: `https://flamingo.cobical.xyz/lookup/freefire`

### 1. Search Player
Search for a player by their in-game nickname.

```javascript
const searchPlayer = async (nickname, region = 'id') => {
  const url = `https://flamingo.cobical.xyz/lookup/freefire/search?keyword=${nickname}&server=${region}`;
  const response = await fetch(url);
  return await response.json();
}
```

### 2. Get Player Stats
Fetch stats for specific modes. params: `gamemode` (br/cs) & `matchmode` (RANKED/CAREER/NORMAL).

```javascript
/* 
  gamemode: 'br' | 'cs'
  matchmode: 'RANKED' | 'CAREER' | 'NORMAL'
*/
const getStats = async (uid, gamemode, matchmode, region = 'id') => {
  const url = `https://flamingo.cobical.xyz/lookup/freefire/check-stats?uid=${uid}&server=${region}&gamemode=${gamemode}&matchmode=${matchmode}`;
  const response = await fetch(url);
  return await response.json();
}
```

### 3. Get Player Profile
Get personal details like bio, pet, equipped items, and account age.

```javascript
const getProfile = async (uid, region = 'id') => {
  const url = `https://flamingo.cobical.xyz/lookup/freefire/check-profile?uid=${uid}&server=${region}&need_gallery_info=true`;
  const response = await fetch(url);
  return await response.json();
}
```

#### Example Response (Profile)
```json
{
  "basicinfo": {
     "nickname": "Dᴇʙꫝꫝ",
     "level": 78,
     "region": "IND",
     "createat": "1574902662" // Timestamp
  },
  "socialinfo": {
     "signature": "..."
  },
  "petinfo": { ... }
}
```

---

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

---

## ⚠️ Disclaimer

This project is for educational purposes only. The API and data belong to their respective owners.