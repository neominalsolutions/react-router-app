// import { Outlet } from 'react-router';
import Container from '../components/ui.container';
import FooterComponent from './components/footer';
import Menu from './components/menu';
import Header from './components/header';
import { Outlet } from 'react-router';

function SiteLayout() {
	return (
		<>
			<Container direction="column">
				<Header />
				<Menu />
			</Container>

			{/* dinamik olarak sayfalar bu container içerisine yüklenecek */}
			<Container direction="row">
				<Outlet />
			</Container>

			<Container direction="row">
				<FooterComponent>
					<Container direction="row">
						<div style={{ width: '10rem' }}>@Copy 2025</div>
						<div style={{ width: '80rem' }}>Şişli/İstanbul</div>
						<div style={{ width: '20rem' }}>
							<b>E-Posta:</b> info@test.com
						</div>
					</Container>
				</FooterComponent>
			</Container>
		</>
	);
}

export default SiteLayout;
