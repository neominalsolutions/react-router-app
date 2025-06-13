import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
	return (
		<>
			<Box sx={{ flex: 'row' }}>
				<Typography align="center" variant="h3">
					React Router APP
				</Typography>
			</Box>
		</>
	);
}

export default Header;
