import { AppBar, Toolbar, styled , Box} from '@mui/material';
//components 
import Search from './Search'
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    margin-left:12%;
`;

const Header = () => {

    const logoURL="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" 

    return (
        <StyledHeader>
            <Toolbar>
                <Box>
                    <img src ={logoURL} alt="logo" style={{ width:75}}/>
                </Box>
                <Search/>
                <CustomButtons/>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;
