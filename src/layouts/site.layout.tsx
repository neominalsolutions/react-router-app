// import { Outlet } from 'react-router';
import Container from '../components/ui.container';
import FooterComponent from './components/footer';
import Menu from './components/menu';
import Header from './components/header';

function SiteLayout() {
	return (
		<>
			<Container direction="column">
				<Header />
				<Menu />
			</Container>

			{/* dinamik olarak sayfalar bu container içerisine yüklenecek */}
			{/* <Container direction="row">
				<Outlet />
			</Container> */}

			<Container direction="row">
				<FooterComponent>
					<Container direction="row">
						<div style={{ width: '100px' }}>@Copy 2025</div>
						<div style={{ width: '300px' }}>Şişli/İstanbul</div>
						<div style={{ marginRight: 0 }}>
							<b>E-Posta:</b> info@test.com
						</div>
					</Container>
				</FooterComponent>
			</Container>
		</>
	);
}

export default SiteLayout;
