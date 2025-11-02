# 💼 Talentra Finance Dashboard

A clean, responsive, and interactive **financial management web application** built with **React**, **Tailwind CSS**, and **Appwrite**.  
The app allows users to **sign up, sign in, manage invoices, view summaries**, and **track financial performance** — all from one intuitive dashboard.

---

## 🎯 Goal & Objective

**Goal:**  
Design and develop a single-page web application that lets users manage invoices and track financial summaries from one place.

**Objective:**  
Create a dashboard application that enables a logged-in business owner to:
- ✅ Create and manage invoices  
- 💰 Mark invoices as paid or unpaid  
- 🧮 Automatically calculate simple VAT  
- 📊 View financial overviews with live totals and charts  

---

## 🧠 Features

- 🔐 **User Authentication** (Sign up, Sign in, Logout) via Appwrite  
- 🧾 **Invoice Management** – create, update, and track invoice status  
- 💹 **Real-time Chart Visualization** using Recharts  
- 💻 **Responsive Dashboard UI** with Tailwind CSS v3  
- ⚡ **SPA Navigation** powered by React Router  
- ☁️ **Appwrite Integration** for secure backend operations  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | [React](https://react.dev/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Backend / Auth | [Appwrite Cloud](https://appwrite.io/) |
| Chart Visualization | [Recharts](https://recharts.org/en-US/) |
| Build Tool | [Vite](https://vitejs.dev/) |

---

## ⚙️ Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/talentra-dashboard.git
cd talentra-dashboard
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create a .env file in the project root
bash
Copy code
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_NAME=Talentra
⚠️ Ensure there are no spaces around the = sign, and no quotes around the values.

4️⃣ Run the development server
bash
Copy code
npm run dev
Open your browser and navigate to:
👉 http://localhost:5173

📁 Folder Structure
bash
Copy code
src/
 ├── assets/               # Images and icons
 ├── components/           # Reusable UI components
 ├── pages/                # App pages (Dashboard, Signin, Signup, Invoices)
 ├── routes/               # React Router configuration
 ├── services/             # Appwrite SDK setup and helper functions
 ├── App.jsx               # Root component
 ├── main.jsx              # Entry point
 └── index.css             # Tailwind global styles
📸 Screenshots
Dashboard	Invoice Page

You can replace these with your actual screenshots later.

🚀 Future Improvements
✉️ Add email notifications for invoice updates

📱 Enhance mobile dashboard layout

🔍 Add search & filter functionality for invoices

📈 Expand analytics with more chart types

🌐 Enable multi-user organization management

👨‍💻 Author
Olamide Wahab
Frontend Developer & Software Engineer
🔗 Olamide101-3mt | https://linkedin.com/in/olamidewahab

📄 License
This project is licensed under the MIT License — feel free to use and modify it for learning or personal projects.

💬 Acknowledgements
Appwrite for backend infrastructure

Recharts for chart visualizations

Tailwind CSS for rapid UI styling
