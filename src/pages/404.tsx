import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function NotFoundPage() {
	const navigate = useNavigate(); // js ile butona basıldığında herhangi bir linke yöneldirmek istersek kullandığımız bir react-router hook.

	// kontrollü yönlendirmeler yapmak için useNavigate Hookdan yararlanırız.
	const onNavigate = () => {
		const result = confirm('Sayfadan ayrılmak istediğpinize emin misiniz ?');

		if (result) {
			navigate('/');
		}
	};

	return (
		<>
			<h1>404 Sayfa Bulunamadı</h1>
			<Button variant="outlined" size="medium" onClick={onNavigate}>
				Anasayfa
			</Button>
		</>
	);
}

export default NotFoundPage;
