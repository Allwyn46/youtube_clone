import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

    //USING USENAVIGATE TO NAVIGATE TO THE SEARCHED VIDEO

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    //FUNCTION TO SERACH FOR VIDEO

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #A99F96',
                pl: 1,
                boxShadow: 'none',
                mr: { sm: 5 },
                background: '#000',
                color: 'gray'
            }}>

            <input className='search-bar'
                placeholder='Search....'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar