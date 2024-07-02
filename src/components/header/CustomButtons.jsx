import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #ffffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
`;

const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="contained" color="primary">Login</LoginButton>
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    );
};

export default CustomButtons;
