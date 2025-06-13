type ContainerProps = {
	children: React.ReactNode;
	direction: flexDirection;
};

type flexDirection = 'row' | 'column'; // sadece bu tipe row ve column atanabilir. bu sayede buraya tanımlanacak olan componentin arayüzde dikey mi yoksa yatay mı hizlanacağına karar veriyoruz

// Not arayüzdeki layoıut oluşturuken yada sayfa oluşturuken componentlerin belirli bir boşluk ile oluşmasını yönetecek olan component

function Container({ children, direction }: ContainerProps) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: direction,
				padding: 5,
				margin: 5,
				justifyContent: 'center', // yatayda ortalı
				alignItems: 'center', // dikeyde ortalı
			}}
		>
			{children}
		</div>
	);
}

export default Container;
