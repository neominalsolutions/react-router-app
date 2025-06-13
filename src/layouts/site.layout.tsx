// import { Outlet } from 'react-router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router';
import FooterComponent from './components/footer';
import Menu from './components/menu';

function SiteLayout() {
	return (
		<Container
			sx={{
				minHeight: '100vh',
				border: '1px solid blue',
				padding: '0px !important', // stili ezmek için !important yazdık.
			}}
			maxWidth={'xl'}
		>
			{/* <Header /> */}
			<Menu />

			{/* dinamik olarak sayfalar bu container içerisine yüklenecek */}

			<Box sx={{ minHeight: '100vh' }}>
				<Outlet />
			</Box>

			{/* Grid kullanırken ekran 12 birime ayrılır */}
			<FooterComponent>
				<Grid size={2}>@Copy 2025</Grid>
				<Grid size={2}>Şişli/İstanbul</Grid>
				<Grid size={8}>
					<b>E-Posta:</b> info@test.com
				</Grid>
			</FooterComponent>
		</Container>
	);
}

export default SiteLayout;
