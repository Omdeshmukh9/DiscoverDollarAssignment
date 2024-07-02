import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 40%;
    border-radius:2px;
    margin-left:12%;
    display:flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    width: 100%;
    font-size: unset;
`;
const SearchIconWrapper =styled(Box)`
color:blue;
padding: 5px;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search..."/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        </SearchContainer>
    );
}

export default Search;
