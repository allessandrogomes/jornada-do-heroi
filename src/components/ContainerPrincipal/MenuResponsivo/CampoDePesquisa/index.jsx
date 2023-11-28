import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useFiltroHerois } from '../../../../context/FiltroHeroi';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#6528F7',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        backgroundColor: '#18122B',
        width: '100%',
        border: '1px solid white',
        borderRadius: '20px',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const CampoDePesquisa = () => {

    const { valor, atualizarValor } = useFiltroHerois()

    const aoDigitar = evento => {
        const novoValor = evento.target.value
        atualizarValor(novoValor)
    }

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#FFFBF5', zIndex: '10' }}/>
            </SearchIconWrapper>
            <StyledInputBase value={valor} onChange={aoDigitar}
                sx={{ color: '#FFFBF5' }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default CampoDePesquisa