import Typography from '@mui/material/Typography';

export default function PageHeading({ children, gutterBottom = true }) {
    return (
        <Typography variant="h2" component="div" align="center"
            gutterBottom={gutterBottom}>
            {children}
        </Typography>
    );
}