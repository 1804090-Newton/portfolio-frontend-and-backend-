
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    padding: theme.spacing(8, 2),
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',  
  },
  
  title: {
    marginBottom: theme.spacing(4),
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2rem', 
  },
  description: {
    color: '#34495e',
    lineHeight: '1.6',
    textAlign: 'justify',
    fontSize: '0.875rem', 
  },
  picture: {
    width: '100%',
    maxWidth: '300px', 
    margin: '0 auto', 
    display: 'block',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  gridContainer: {
    alignItems: 'center',
  },
}));

export default useStyles;
