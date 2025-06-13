// Eğer korumalaı sayfalar varsa bu durumda kullanıcın oturum açıp açmamasına göre yada yetkisinin olup olmamasına göre sayfanın açılıp açılmayacağına karar vermek için react router da navigate componeti kullanarak bir yapı kurarız. Bu tarz yapılara guard ismini veriyoruz. Route Guard

import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router';

type AuthProps = {
	children: React.ReactNode;
};
// <AuthGuard><AdminLayout /></AuthGuard>
function AuthGuard({ children }: AuthProps) {
	const token = localStorage.getItem('x-token');

	console.log('token', token);
	console.log('...AuthGuard');

	try {
		if (token) {
			const jwt = jwtDecode(token as string);
			console.log('jwt', jwt);

			return <>{children}</>;
		} else {
			return <Navigate to="/unauthorized" />;
		}
	} catch (error) {
		console.log('err', error);
		return <Navigate to="/unauthorized" />;
	}
}

export default AuthGuard;
