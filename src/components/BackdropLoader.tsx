/** @format */
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SimpleBackdrop() {
	return (
		<Backdrop
			sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
			open={true}
			// onClick={handleClose}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
}
