import { Link } from 'react-router';

function Menu() {
	return (
		<>
			<nav
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 5,
				}}
			>
				<Link style={{ padding: 5 }} to="/">
					Anasayfa
				</Link>{' '}
				<Link style={{ padding: 5 }} to="/hakkimizda">
					Hakkımızda
				</Link>
				<Link style={{ padding: 5 }} to="/posts">
					Makaleler
				</Link>
			</nav>
		</>
	);
}

export default Menu;
