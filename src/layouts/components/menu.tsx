import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router';

function Menu() {
	return (
		<>
			<AppBar position="static">
				<Container
					maxWidth="xl"
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link style={{ padding: 5 }} to="/">
								Anasayfa
							</Link>{' '}
							<Link style={{ padding: 5 }} to="/hakkimizda">
								Hakkımızda
							</Link>
							<Link style={{ padding: 5 }} to="/posts">
								Makaleler
							</Link>
							<Link style={{ padding: 5 }} to="/admin">
								Admin Page
							</Link>
							<Link style={{ padding: 5 }} to="/dialog-sample">
								MUI Dialog
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}

export default Menu;
