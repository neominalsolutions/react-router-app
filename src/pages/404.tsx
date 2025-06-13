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
			<button onClick={onNavigate}>Anasayfa</button>
		</>
	);
}

export default NotFoundPage;
