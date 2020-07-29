import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '20px 4px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		backgroundColor: 'transparent',
	},
	logo: { fontSize: `1rem`},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
		paddingRight: 0,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function CustomizedInputBase() {
	const classes = useStyles();

	return (
		<Paper component="div" className={classes.root} elevation={0} square>
			<span className={classes.logo}>ZUGOR</span>
			<IconButton className={classes.iconButton} aria-label="menu">
				<MenuIcon />
			</IconButton>
		</Paper>
	);
}
