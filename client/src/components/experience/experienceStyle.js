import { styled, Card, Box, IconButton } from '@mui/material';

const GradientCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: `0 0 10px 3px ${theme.palette.primary.main}`,
    transform: "scale(1.02)",
  },
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  height: "90%",
  padding: theme.spacing(2),
    borderRadius: "10px",
    

}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginBottom: theme.spacing(3),
}));

const AddButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 10,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export { GradientCard, HeaderContainer, AddButton };
