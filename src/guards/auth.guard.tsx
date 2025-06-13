// Eğer korumalaı sayfalar varsa bu durumda kullanıcın oturum açıp açmamasına göre yada yetkisinin olup olmamasına göre sayfanın açılıp açılmayacağına karar vermek için react router da navigate componeti kullanarak bir yapı kurarız. Bu tarz yapılara guard ismini veriyoruz. Route Guard

import { Navigate } from 'react-router';

type AuthProps = {
	children: React.ReactNode;
};
// <AuthGuard><AdminLayout /></AuthGuard>
function AuthGuard({ children }: AuthProps) {
	const token = localStorage.getItem('x-token');

	console.log('token', token);
	console.log('...AuthGuard');

	if (token) {
		return <>{children}</>;
	} else {
		return <Navigate to="/unauthorized" />;
	}
}

export default AuthGuard;
