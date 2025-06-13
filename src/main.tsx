import { createRoot } from 'react-dom/client';
// import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthGuard from './guards/auth.guard.tsx';
import AdminLayout from './layouts/admin.layout.tsx';
import SiteLayout from './layouts/site.layout.tsx';
import UnAuthroized from './pages/403.tsx';
import NotFoundPage from './pages/404.tsx';
import AboutPage from './pages/about.page.tsx';
import AdminIndexPage from './pages/admin/admin.index.page.tsx';
import IndexPage from './pages/index.page.tsx';
import PostCommentsPage from './pages/posts/post.comments.page.tsx';
import PostIndexPage from './pages/posts/post.page.tsx';

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
	{
		path: 'posts',
		Component: SiteLayout,
		children: [
			{
				index: true,
				Component: PostIndexPage,
			},
			{
				path: 'comments/:postId', // posts/comments/1
				Component: PostCommentsPage,
			},
		],
	},
	{
		path: 'admin',
		element: (
			<AuthGuard>
				<AdminLayout />
			</AuthGuard>
		),
		children: [{ index: true, Component: AdminIndexPage }],
	},
	{
		path: 'unauthorized',
		Component: UnAuthroized,
	},
	{
		path: '*', // sayfa bulunamadığında yönelnecek olan sayfamız. En sona tanımlamamız lazım yukarıdaki pathleri atlarsa o zaman bu path girer farklı bir component açılır.
		Component: NotFoundPage,
	},
]);

// tüm admin sayfalarını AuthGuard ile koruma altına aldık.

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
