import { Outlet } from 'react-router';
import Container from '../components/ui.container';

function AdminLayout() {
	return (
		<>
			<h1>Admin Layout</h1>

			<Container direction="row">
				<Outlet />
			</Container>
		</>
	);
}

export default AdminLayout;
