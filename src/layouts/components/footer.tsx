// Bir component içerisinde dışarıdan bir görüntü jsx dosyası içeriği alacak ise children props ile tanımlanır
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type FooterProps = {
	children: React.ReactNode; // children ismi react için özel bir isimdir.
};

function FooterComponent({ children }: FooterProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				mt: 'auto',
				backgroundColor: 'lightgray',
				padding: '2rem',
			}}
		>
			<Grid container spacing={2}>
				{' '}
				{children}
			</Grid>
		</Box>
	);
}

export default FooterComponent;

// [  Copy@     Saat     Yıl  ]
