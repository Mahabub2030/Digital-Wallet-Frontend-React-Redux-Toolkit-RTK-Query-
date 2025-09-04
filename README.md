# 💳 Digital Wallet Frontend — React + Redux Toolkit + RTK Query (Starter Blueprint)

This is a **production-ready starter** for your Digital Wallet (bKash/Nagad‑style) frontend. It includes routing, role-based guards, state management, RTK Query with re-auth, UI patterns, charts, tables, toasts, guided tour, theming, and examples for **User / Agent / Admin**.

> Copy this structure into a repo and you can start coding immediately. Replace mock/demo bits with your real API.

---

## ✅ Feature Checklist (mapped to your spec)

* [x] **Public site**: Home, About, Features, Pricing (optional), Contact, FAQ, sticky navbar, footer, skeleton loaders, smooth transitions, responsive
* [x] **Auth**: Login, Register (role: User/Agent), persisted JWT, role-based redirect, logout
* [x] **Dashboards**:

  * **User**: balance, quick actions, deposit, withdraw, send money, transactions (pagination + filters), profile update
  * **Agent**: cash-in/out to users, transactions handled, (optional) commissions, profile
  * **Admin**: stats, manage users/agents, view all transactions w/ advanced filters + pagination, search, (optional) fees/limits, profile
* [x] **Global**: role-based navigation, loaders, error handling, validation, pagination, charts (bar/pie), tables
* [x] **Toasts**: success/error
* [x] **Guided Tour**: react-joyride (5+ steps), runs once per user (localStorage), restart from Settings
* [x] **UI/UX**: responsive, consistent spacing, theme tokens, dark mode toggle, accessibility basics, lazy loading, skeletons, realistic seed data

---

## 🗂️ Folder Structure

```
wallet-frontend/
├─ src/
│  ├─ app/
│  │  ├─ store.ts
│  │  └─ hooks.ts
│  ├─ lib/
│  │  ├─ api.ts                # RTK Query baseQuery with reauth
│  │  ├─ endpoints/            # RTKQ endpoint files
│  │  │  ├─ authApi.ts
│  │  │  ├─ userApi.ts
│  │  │  ├─ agentApi.ts
│  │  │  ├─ adminApi.ts
│  │  │  └─ txApi.ts
│  │  ├─ validators.ts         # zod schemas
│  │  ├─ constants.ts          # roles, route paths, theme keys
│  │  └─ utils.ts              # helpers (formatCurrency, clsx, etc.)
│  ├─ features/
│  │  ├─ auth/authSlice.ts     # user + tokens + role
│  │  ├─ ui/uiSlice.ts         # theme, sidebar, tour
│  │  └─ pagination/pager.ts   # tiny helper slice (optional)
│  ├─ routes/
│  │  ├─ AppRoutes.tsx
│  │  ├─ ProtectedRoute.tsx
│  │  └─ RoleGuard.tsx
│  ├─ pages/
│  │  ├─ public/
│  │  │  ├─ Home.tsx
│  │  │  ├─ About.tsx
│  │  │  ├─ Features.tsx
│  │  │  ├─ Pricing.tsx
│  │  │  ├─ Contact.tsx
│  │  │  └─ FAQ.tsx
│  │  ├─ auth/
│  │  │  ├─ Login.tsx
│  │  │  └─ Register.tsx
│  │  ├─ dashboards/
│  │  │  ├─ user/
│  │  │  │  ├─ UserDashboard.tsx
│  │  │  │  ├─ Deposit.tsx
│  │  │  │  ├─ Withdraw.tsx
│  │  │  │  ├─ SendMoney.tsx
│  │  │  │  ├─ Transactions.tsx
│  │  │  │  └─ Profile.tsx
│  │  │  ├─ agent/
│  │  │  │  ├─ AgentDashboard.tsx
│  │  │  │  ├─ CashIn.tsx
│  │  │  │  ├─ CashOut.tsx
│  │  │  │  ├─ Transactions.tsx
│  │  │  │  └─ Profile.tsx
│  │  │  └─ admin/
│  │  │     ├─ AdminDashboard.tsx
│  │  │     ├─ Users.tsx
│  │  │     ├─ Agents.tsx
│  │  │     ├─ Transactions.tsx
│  │  │     ├─ Settings.tsx    # tour restart, theme
│  │  │     └─ Profile.tsx
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ PublicNavbar.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ AppShell.tsx       # sidebar + header per role
│  │  │  └─ SideNav.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Card.tsx
│  │  │  ├─ Table.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Select.tsx
│  │  │  └─ Skeleton.tsx
│  │  ├─ charts/
│  │  │  ├─ BarChartCard.tsx
│  │  │  └─ PieChartCard.tsx
│  │  ├─ forms/
│  │  │  ├─ LoginForm.tsx
│  │  │  ├─ RegisterForm.tsx
│  │  │  └─ MoneyForm.tsx      # amount, note, etc.
│  │  ├─ feedback/
│  │  │  ├─ Toasts.tsx
│  │  │  └─ ErrorFallback.tsx
│  │  └─ tour/JoyrideGuide.tsx
│  ├─ styles/
│  │  ├─ index.css
│  │  └─ tailwind.css
│  ├─ main.tsx
│  ├─ App.tsx
│  └─ vite-env.d.ts
├─ public/
│  └─ favicon.svg
├─ .env.example
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.cjs
└─ tsconfig.json
```

---

## 📦 Dependencies

```jsonc
// package.json (excerpt)
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.0",
    "react-hot-toast": "^2.4.1",
    "react-joyride": "^2.9.3",
    "recharts": "^2.9.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.3.4",
    "react-hook-form": "^7.51.2",
    "clsx": "^2.1.0"
  },
  "devDependencies": {
    "typescript": "^5.4.2",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.4",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.19"
  }
}
```

> Add any icon pack you like (Heroicons/Phosphor) and a table lib if preferred. This blueprint uses simple Tailwind tables for control.

---

## 🔧 Tailwind Setup

**tailwind.config.cjs**

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6D28D9',
          50: '#F5F3FF',
          600: '#6D28D9',
          700: '#5B21B6'
        }
      }
    }
  },
  plugins: []
};
```

**src/styles/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* helper classes */
.container-safe { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
.card { @apply rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900; }
```

---

## 🧭 Routing & Guards

**src/routes/ProtectedRoute.tsx**

```tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

export default function ProtectedRoute() {
  const { token } = useAppSelector(s => s.auth);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
```

**src/routes/RoleGuard.tsx**

```tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

type Props = { allow: Array<'user'|'agent'|'admin'> };
export default function RoleGuard({ allow }: Props) {
  const role = useAppSelector(s => s.auth.user?.role);
  return role && allow.includes(role) ? <Outlet /> : <Navigate to="/" replace />;
}
```

**src/routes/AppRoutes.tsx**

```tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Features from '@/pages/public/Features';
import Pricing from '@/pages/public/Pricing';
import Contact from '@/pages/public/Contact';
import FAQ from '@/pages/public/FAQ';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ProtectedRoute from './ProtectedRoute';
import RoleGuard from './RoleGuard';
import UserDashboard from '@/pages/dashboards/user/UserDashboard';
import AgentDashboard from '@/pages/dashboards/agent/AgentDashboard';
import AdminDashboard from '@/pages/dashboards/admin/AdminDashboard';
import UserTx from '@/pages/dashboards/user/Transactions';
import AgentTx from '@/pages/dashboards/agent/Transactions';
import AdminTx from '@/pages/dashboards/admin/Transactions';

export const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      // protected
      { element: <ProtectedRoute />, children: [
        { element: <RoleGuard allow={["user"]} />, children: [
          { path: 'u', element: <UserDashboard /> },
          { path: 'u/tx', element: <UserTx /> },
        ]},
        { element: <RoleGuard allow={["agent"]} />, children: [
          { path: 'a', element: <AgentDashboard /> },
          { path: 'a/tx', element: <AgentTx /> },
        ]},
        { element: <RoleGuard allow={["admin"]} />, children: [
          { path: 'admin', element: <AdminDashboard /> },
          { path: 'admin/tx', element: <AdminTx /> },
        ]},
      ]}
    ]}
  }
]);
```

---

## 🏪 Store & RTK Query

**src/app/store.ts**

```ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import uiReducer from '@/features/ui/uiSlice';
import { baseApi } from '@/lib/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**src/app/hooks.ts**

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

**src/lib/api.ts** — baseQuery + auto-refresh

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/app/store';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) headers.set('authorization', `Bearer ${token}`);
    return headers;
  },
  credentials: 'include'
});

const baseQueryWithReauth: typeof rawBaseQuery = async (args, api, extra) => {
  const result = await rawBaseQuery(args, api, extra);
  if (result.error && (result.error as any).status === 401) {
    const refresh = await rawBaseQuery({ url: '/auth/refresh', method: 'POST' }, api, extra);
    if ((refresh as any).data?.accessToken) {
      // save new token
      api.dispatch({ type: 'auth/setToken', payload: (refresh as any).data.accessToken });
      return await rawBaseQuery(args, api, extra);
    } else {
      api.dispatch({ type: 'auth/logout' });
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Me','Wallet','Transaction','User','Agent','Stats'],
  endpoints: () => ({})
});
```

**src/lib/endpoints/authApi.ts**

```ts
import { baseApi } from '@/lib/api';

export const authApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    login: b.mutation<{accessToken:string; user: any}, {email:string; password:string}>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body })
    }),
    register: b.mutation<{message:string}, {name:string; email:string; phone:string; password:string; role:'user'|'agent'>>({
      query: (body) => ({ url: '/auth/register', method: 'POST', body })
    }),
    me: b.query<any, void>({
      query: () => ({ url: '/auth/me' }), providesTags: ['Me']
    })
  })
});
export const { useLoginMutation, useRegisterMutation, useMeQuery } = authApi;
```

**src/lib/endpoints/txApi.ts** (transactions w/ filters & pagination)

```ts
import { baseApi } from '@/lib/api';

export type TxQuery = { page?: number; limit?: number; type?: string; from?: string; to?: string; search?: string };

export const txApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    listTx: b.query<{data:any[]; meta:{page:number; limit:number; total:number}}, TxQuery>({
      query: (q) => ({ url: '/transactions', params: q }), providesTags: ['Transaction']
    }),
    sendMoney: b.mutation<any, { to: string; amount: number; note?: string }>({
      query: (body) => ({ url: '/wallet/send', method: 'POST', body }),
      invalidatesTags: ['Wallet','Transaction','Stats']
    }),
    deposit: b.mutation<any, { amount:number; note?:string }>({
      query: (body) => ({ url: '/wallet/deposit', method: 'POST', body }),
      invalidatesTags: ['Wallet','Transaction','Stats']
    }),
    withdraw: b.mutation<any, { amount:number; note?:string }>({
      query: (body) => ({ url: '/wallet/withdraw', method: 'POST', body }),
      invalidatesTags: ['Wallet','Transaction','Stats']
    })
  })
});
export const { useListTxQuery, useSendMoneyMutation, useDepositMutation, useWithdrawMutation } = txApi;
```

> Add `userApi`, `agentApi`, `adminApi` similarly for profile management, approvals, blocking, system settings, and admin stats.

---

## 🔐 Auth Slice

**src/features/auth/authSlice.ts**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Role = 'user'|'agent'|'admin';
interface AuthState {
  user: { id: string; name: string; email: string; role: Role } | null;
  token: string | null;
}

const initial: AuthState = {
  user: JSON.parse(localStorage.getItem('auth_user') || 'null'),
  token: localStorage.getItem('auth_token')
};

const slice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    setCredentials: (s, a: PayloadAction<{ user: AuthState['user']; token: string }>) => {
      s.user = a.payload.user; s.token = a.payload.token;
      localStorage.setItem('auth_user', JSON.stringify(a.payload.user));
      localStorage.setItem('auth_token', a.payload.token);
    },
    setToken: (s, a: PayloadAction<string>) => {
      s.token = a.payload; localStorage.setItem('auth_token', a.payload);
    },
    logout: (s) => {
      s.user = null; s.token = null;
      localStorage.removeItem('auth_user'); localStorage.removeItem('auth_token');
    }
  }
});
export const { setCredentials, setToken, logout } = slice.actions;
export default slice.reducer;
```

---

## 🎛️ UI Slice

**src/features/ui/uiSlice.ts**

```ts
import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  theme: 'light'|'dark';
  tourSeen: boolean;
}

const initial: UIState = {
  theme: (localStorage.getItem('theme') as any) || 'light',
  tourSeen: localStorage.getItem('tourSeen') === '1'
};

const slice = createSlice({
  name: 'ui', initialState: initial, reducers: {
    toggleTheme: (s) => {
      s.theme = s.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', s.theme);
      document.documentElement.classList.toggle('dark', s.theme === 'dark');
    },
    setTourSeen: (s, a) => {
      s.tourSeen = a.payload; localStorage.setItem('tourSeen', a.payload ? '1' : '0');
    }
  }
});
export const { toggleTheme, setTourSeen } = slice.actions;
export default slice.reducer;
```

---

## 🚀 App Entrypoints

**src/main.tsx**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoutes';
import '@/styles/index.css';

const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
```

**src/App.tsx**

```tsx
import { Outlet, useLocation, Link } from 'react-router-dom';
import PublicNavbar from '@/components/layout/PublicNavbar';
import Footer from '@/components/layout/Footer';
import Toasts from '@/components/feedback/Toasts';
import JoyrideGuide from '@/components/tour/JoyrideGuide';

export default function App() {
  const loc = useLocation();
  const isPublic = ['/', '/about','/features','/pricing','/contact','/faq','/login','/register'].includes(loc.pathname) || loc.pathname === '/';
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {isPublic ? <PublicNavbar /> : null}
      <main className="container-safe py-6">
        <Outlet />
      </main>
      {isPublic ? <Footer /> : null}
      <JoyrideGuide />
      <Toasts />
    </div>
  );
}
```

---

## 🧑‍💼 Public Pages (examples)

**src/pages/public/Home.tsx** (sticky navbar assumed in `PublicNavbar`)

```tsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="grid gap-10">
      <header className="text-center py-16">
        <h1 id="hero" className="text-4xl sm:text-5xl font-bold tracking-tight">Fast, Secure Digital Wallet</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Send, receive, deposit and withdraw in seconds. Fees you can see. Control you can trust.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/register" className="px-6 py-3 rounded-xl bg-brand text-white">Get Started</Link>
          <Link to="/features" className="px-6 py-3 rounded-xl border">See Features</Link>
        </div>
      </header>
      <div className="grid sm:grid-cols-3 gap-6">
        {["Deposit","Send","Withdraw"].map((t,i)=> (
          <div key={i} className="card p-6" aria-label={`${t} card`}>
            <h3 className="font-semibold text-xl">{t} Instantly</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">No hidden fees. Real-time updates.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 💬 Login/Register (forms + role selection)

**src/pages/auth/Login.tsx**

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@/lib/endpoints/authApi';
import { useAppDispatch } from '@/app/hooks';
import { setCredentials } from '@/features/auth/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });

export default function Login() {
  const nav = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const d = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();
      d(setCredentials({ user: res.user, token: res.accessToken }));
      toast.success('Welcome back!');
      const role = res.user.role;
      nav(role === 'admin' ? '/admin' : role === 'agent' ? '/a' : '/u');
    } catch (e:any) { toast.error(e?.data?.message || 'Login failed'); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 max-w-md mx-auto grid gap-4">
      <h2 className="text-2xl font-semibold">Sign In</h2>
      <input className="input" placeholder="Email" {...register('email')} />
      {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
      <input className="input" type="password" placeholder="Password" {...register('password')} />
      {errors.password && <p className="text-red-500 text-sm">{String(errors.password.message)}</p>}
      <button disabled={isLoading} className="px-4 py-2 rounded-lg bg-brand text-white">{isLoading ? 'Signing in…' : 'Sign In'}</button>
    </form>
  );
}
```

**src/pages/auth/Register.tsx**

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '@/lib/endpoints/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  password: z.string().min(6),
  role: z.enum(['user','agent'])
});

export default function Register() {
  const nav = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data:any) => {
    try {
      await registerUser(data).unwrap();
      toast.success('Account created. Please sign in');
      nav('/login');
    } catch (e:any) { toast.error(e?.data?.message || 'Registration failed'); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 max-w-md mx-auto grid gap-4">
      <h2 className="text-2xl font-semibold">Create Account</h2>
      <input className="input" placeholder="Full name" {...register('name')} />
      <input className="input" placeholder="Email" {...register('email')} />
      <input className="input" placeholder="Phone" {...register('phone')} />
      <input className="input" type="password" placeholder="Password" {...register('password')} />
      <select className="input" {...register('role')}>
        <option value="user">User</option>
        <option value="agent">Agent</option>
      </select>
      {Object.values(errors).length>0 && <p className="text-red-500 text-sm">Please fix the errors</p>}
      <button disabled={isLoading} className="px-4 py-2 rounded-lg bg-brand text-white">{isLoading ? 'Creating…' : 'Register'}</button>
    </form>
  );
}
```

> **Note**: `.input` can be a Tailwind component class (e.g., `@apply border rounded-lg px-3 py-2 bg-white dark:bg-gray-900`)

---

## 📊 Dashboard Example (User)

**src/pages/dashboards/user/UserDashboard.tsx**

```tsx
import { useListTxQuery } from '@/lib/endpoints/txApi';
import { useAppSelector } from '@/app/hooks';
import BarChartCard from '@/components/charts/BarChartCard';

export default function UserDashboard() {
  const user = useAppSelector(s => s.auth.user);
  const { data, isLoading } = useListTxQuery({ page:1, limit:5 });

  return (
    <div className="grid gap-6">
      <header className="grid sm:grid-cols-3 gap-4" id="stats-cards">
        {['Balance','Sent (30d)','Received (30d)'].map((t, i) => (
          <div key={i} className="card p-5">
            <p className="text-sm text-gray-500">{t}</p>
            <p className="text-2xl font-semibold mt-2">{isLoading ? '…' : `$ ${(Math.random()*1000).toFixed(2)}`}</p>
          </div>
        ))}
      </header>

      <section id="chart-section" className="card p-5">
        <h3 className="font-semibold mb-2">Monthly Activity</h3>
        <BarChartCard />
      </section>

      <section id="table-section" className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Recent Transactions</h3>
          <input placeholder="Search" className="input max-w-xs" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">#</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? Array.from({length:5}).map((_,i)=> (
                <tr key={i} className="animate-pulse">
                  <td className="py-2">—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                </tr>
              )) : data?.data?.map((row:any, i:number)=> (
                <tr key={row.id || i} className="border-b">
                  <td className="py-2">{i+1}</td>
                  <td>{row.type}</td>
                  <td>$ {row.amount}</td>
                  <td>{row.status}</td>
                  <td>{new Date().toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
```

**src/components/charts/BarChartCard.tsx**

```tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = Array.from({length:6}).map((_,i)=> ({ name: `M${i+1}`, value: Math.round(Math.random()*800+100) }));

export default function BarChartCard(){
  return (
    <div style={{width:'100%', height:300}}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="value" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
```

---

## 🔍 Transactions Page (filters + pagination)

**src/pages/dashboards/admin/Transactions.tsx** (pattern applies to all roles)

```tsx
import { useListTxQuery } from '@/lib/endpoints/txApi';
import { useState } from 'react';

export default function AdminTransactions(){
  const [q, setQ] = useState({ page:1, limit:10, type:'', from:'', to:'', search:'' });
  const { data, isLoading } = useListTxQuery(q);

  const next = () => setQ(s => ({...s, page: (s.page||1)+1}));
  const prev = () => setQ(s => ({...s, page: Math.max(1,(s.page||1)-1)}));

  return (
    <div className="card p-5">
      <div className="grid sm:grid-cols-5 gap-3 mb-4" id="filters">
        <select className="input" value={q.type} onChange={e=>setQ(s=>({...s,type:e.target.value}))}>
          <option value="">All types</option>
          <option value="send">Send</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <input className="input" type="date" value={q.from} onChange={e=>setQ(s=>({...s,from:e.target.value}))}/>
        <input className="input" type="date" value={q.to} onChange={e=>setQ(s=>({...s,to:e.target.value}))}/>
        <input className="input" placeholder="Search email/phone" value={q.search} onChange={e=>setQ(s=>({...s,search:e.target.value}))}/>
        <button className="px-4 py-2 rounded-lg border" onClick={()=>setQ(s=>({...s,page:1}))}>Apply</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">ID</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? Array.from({length:10}).map((_,i)=> (
              <tr key={i} className="animate-pulse"><td className="py-2" colSpan={7}>Loading…</td></tr>
            )) : data?.data?.map((row:any)=> (
              <tr key={row.id} className="border-b">
                <td className="py-2">{row.id}</td>
                <td>{row.type}</td>
                <td>{row.from}</td>
                <td>{row.to}</td>
                <td>$ {row.amount}</td>
                <td>{row.status}</td>
                <td>{new Date().toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between" aria-label="pagination">
        <button className="px-3 py-1 border rounded-lg" onClick={prev}>Prev</button>
        <p>Page {data?.meta?.page || q.page} / {Math.ceil(((data?.meta?.total || 1))/(q.limit || 10))}</p>
        <button className="px-3 py-1 border rounded-lg" onClick={next}>Next</button>
      </div>
    </div>
  );
}
```

---

## 🧭 Guided Tour (react-joyride)

**src/components/tour/JoyrideGuide.tsx**

```tsx
import Joyride, { CallBackProps, STATUS } from 'react-joyride';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setTourSeen } from '@/features/ui/uiSlice';

export default function JoyrideGuide(){
  const { tourSeen } = useAppSelector(s=>s.ui);
  const d = useAppDispatch();
  const steps = [
    { target: 'nav', content: 'Use the navigation to switch sections.' },
    { target: '#stats-cards', content: 'Quick overview of balances and totals.' },
    { target: '#chart-section', content: 'Visualize monthly activity here.' },
    { target: '#table-section', content: 'Filter and search your transactions.' },
    { target: 'body', content: 'Use Settings to toggle themes and restart this tour.' },
  ];

  const cb = (data: CallBackProps) => {
    const finished = [STATUS.FINISHED, STATUS.SKIPPED].includes(data.status as any);
    if (finished) d(setTourSeen(true));
  };

  if (tourSeen) return null;
  return <Joyride steps={steps} continuous showSkipButton callback={cb} />;
}
```

> In **Admin → Settings**, add a “Restart Tour” button that dispatches `setTourSeen(false)`.

---

## 🔔 Toasts

**src/components/feedback/Toasts.tsx**

```tsx
import { Toaster } from 'react-hot-toast';
export default function Toasts(){
  return <Toaster position="top-right" />;
}
```

---

## 📨 Money Operations (form pattern)

**src/components/forms/MoneyForm.tsx**

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type Props = { onSubmit:(v:any)=>Promise<void>|void; label:string };
const schema = z.object({ amount: z.coerce.number().positive(), note: z.string().optional() });

export default function MoneyForm({ onSubmit, label }:Props){
  const { register, handleSubmit, formState:{errors}, reset } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(async (v)=>{ await onSubmit(v); reset(); })} className="grid gap-3">
      <input className="input" type="number" step="0.01" placeholder="Amount" {...register('amount')}/>
      {errors.amount && <p className="text-red-500 text-sm">Amount must be positive</p>}
      <input className="input" placeholder="Note (optional)" {...register('note')}/>
      <button className="px-4 py-2 rounded-lg bg-brand text-white">{label}</button>
    </form>
  );
}
```

**Usage** (e.g., User → Deposit)

```tsx
import MoneyForm from '@/components/forms/MoneyForm';
import { useDepositMutation } from '@/lib/endpoints/txApi';
import toast from 'react-hot-toast';

export default function Deposit(){
  const [deposit] = useDepositMutation();
  return (
    <div className="card p-6 max-w-md">
      <h3 className="font-semibold mb-3">Deposit</h3>
      <MoneyForm label="Deposit" onSubmit={async (v)=>{
        try { await deposit(v).unwrap(); toast.success('Deposited'); }
        catch(e:any){ toast.error(e?.data?.message || 'Failed'); }
      }}/>
    </div>
  );
}
```

---

## 🧰 Utils

**src/lib/constants.ts**

```ts
export const ROLES = ['user','agent','admin'] as const;
export const THEME_KEY = 'theme';
```

**src/lib/utils.ts**

```ts
export const formatCurrency = (n:number) => new Intl.NumberFormat(undefined, { style:'currency', currency:'USD' }).format(n);
export const clsx = (...a:any[]) => a.filter(Boolean).join(' ');
```

---

## 🧪 Realistic Data (Dev)

Until your backend is ready, add temporary “realistic” data in components (e.g., recent transactions) or hook **MSW**. Replace random values once endpoints respond.

---

## 🔒 Accessibility & Performance

* Use proper labels/aria on form inputs
* Keyboard reachable controls and focus rings (`focus:outline-none focus:ring`)
* Lazy load dashboard routes with `React.lazy`
* Skeletons during loading, debounce search input, memoize heavy lists

---

## 🔐 .env.example

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 README (starter)

````md
# Digital Wallet Frontend

A role-based digital wallet frontend built with React, Redux Toolkit, and RTK Query.

## Tech
- React + TypeScript + Vite
- Redux Toolkit + RTK Query
- Tailwind CSS
- react-joyride, react-hot-toast, recharts

## Setup
```bash
pnpm i # or npm i / yarn
cp .env.example .env
pnpm dev
````

## Scripts

* `dev` – run Vite dev server
* `build` – production build
* `preview` – preview production build

## Backends

Point `VITE_API_URL` to your Express API. This app expects endpoints similar to:

* `POST /auth/login` `POST /auth/register` `POST /auth/refresh` `GET /auth/me`
* `GET /transactions` (filters: page, limit, type, from, to, search)
* `POST /wallet/send` `POST /wallet/deposit` `POST /wallet/withdraw`
* Admin management endpoints for users/agents

## Roles & Redirects

* After login, users → `/u`, agents → `/a`, admins → `/admin`.

## Guided Tour

* Runs once for new users. Restart from **Admin → Settings**.

## Deployment

* Build and host on Vercel/Netlify. Ensure env var is configured.

```

---

## ▶️ Next Steps

1. Wire up real endpoints in `endpoints/*.ts` files.
2. Flesh out Admin/Agent pages with table actions (approve/suspend/block/unblock).
3. Add profile forms (`/profile`) that call `PATCH /me`.
4. Replace demo chart data with `/stats` endpoint responses.
5. Record demo video following your submission checklist.

---

### Notes
- This blueprint avoids placeholder text on the public site and uses believable UI copy.
- Colors: uses a **brand** violet accent with safe dark mode. Adjust Tailwind theme tokens to your preference.
- All code is TypeScript and Vite-ready.

```
