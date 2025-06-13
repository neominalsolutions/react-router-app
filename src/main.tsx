import { createRoot } from 'react-dom/client';
// import './index.css';
import SiteLayout from './layouts/site.layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import IndexPage from './pages/index.page.tsx';
import AboutPage from './pages/about.page.tsx';

// Uygulama içerisindeki Browser routerlar burada tanımlanır

// SPA uygulamalarda routerlar tarayıcı tabanlı çalıştığından createBrowserRouter ile tarayıcı üzerinden sayfa işlemlerini yönetecek bir yapı kurduk
const router = createBrowserRouter([
	{
		path: '', // / path gibi davranır.
		Component: SiteLayout,
		children: [
			{
				index: true, // '/ path anasayfası ilk açılışta gösterilecek olan safya IndexPage Component olsun.'
				Component: IndexPage,
			},
			{
				path: 'hakkimizda',
				Component: AboutPage,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
