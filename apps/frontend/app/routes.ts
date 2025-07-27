import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('pages/layout.tsx', [
    index('pages/home.tsx'),
    route('merch', 'pages/merch.tsx'),
    route('about', 'pages/about.tsx'),
    layout('lib/require-auth.tsx', [
      route('admin', 'pages/dashboard/index.tsx', [
        index('pages/dashboard/home.tsx'),
        route('settings', 'pages/dashboard/settings.tsx'),
        route('products', 'pages/dashboard/products.tsx'),
        route('orders', 'pages/dashboard/orders.tsx'),
        route('users', 'pages/dashboard/users.tsx'),
      ]),
    ]),
    route('auth', 'pages/auth/layout.tsx', [
      route('login', 'pages/auth/login.tsx'),
      route('register', 'pages/auth/register.tsx'),
    ]),
  ]),
] satisfies RouteConfig
