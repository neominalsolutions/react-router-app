import { Link } from 'react-router';
import Container from '../components/ui.container';

function AboutPage() {
	return (
		<>
			<Container direction="column">
				<h1>Hakkımızda Sayfası</h1>
				<p>
					<Link to="/">Anasayfa</Link>
				</p>
			</Container>
		</>
	);
}

export default AboutPage;
