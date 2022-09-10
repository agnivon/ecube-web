import Container from '@mui/material/Container';
import PageHeading from '../components/PageHeading';
import Error from '../components/Error';
import Divider from '@mui/material/Divider';

const NotFound = () => {

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            <PageHeading gutterBottom={false}>
                404
            </PageHeading>
            <Divider />
            <Error message="This page cannot be found"/>
        </Container>
    );
}

export default NotFound;