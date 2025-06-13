// Bir component içerisinde dışarıdan bir görüntü jsx dosyası içeriği alacak ise children props ile tanımlanır

type FooterProps = {
	children: React.ReactNode; // children ismi react için özel bir isimdir.
};

function FooterComponent({ children }: FooterProps) {
	return (
		<div
			style={{
				padding: 5,
				margin: 5,
				width: '100%',
				bottom: 0,
				position: 'fixed',
				minHeight: '5rem',
				backgroundColor: 'lightgray',
				display: 'flex',
				flexDirection: 'row',
				color: 'blue',
			}}
		>
			{children}
		</div>
	);
}

export default FooterComponent;

// [  Copy@     Saat     Yıl  ]
