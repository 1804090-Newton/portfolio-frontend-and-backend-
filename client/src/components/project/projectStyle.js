import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: '20px 0',
  },
  buttonContainer: {
    margin: '20px',
  },
  projectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    minWidth: 275,
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    animation: '$fadeIn 0.5s ease forwards',
    transition: 'transform 0.3s ease',
    backgroundColor: '#87CEEB', 
  },
  cardContent: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  cardTitle: {
    fontSize: 20,
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  iconButton: {
    padding: '0',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
});

export default useStyles;
