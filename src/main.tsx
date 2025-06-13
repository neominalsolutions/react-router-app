import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import SiteLayout from './layouts/site.layout.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SiteLayout />
	</StrictMode>
);
