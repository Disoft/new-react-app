import React from 'react'

const SearchBar = ({resources, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) =>{
        if(!e.target.value) return setSearchResults(resources)
        
        const resultArray = resources.filter(
            resource => resource.name.includes(e.target.value) || resource.role.includes(e.target.value)) //Where the criteria will be applied.
    
        setSearchResults(resultArray)
    }
    return (
        <header>
            <form className='search' onSubmit={handleSubmit}>
                <input 
                className='search__input'
                type='text'
                id='search'
                placeholder='Search resources here...'
                onChange={handleSearchChange}
                />
                <button className='search__button'>Search</button>
            </form>
        </header>
    )
}

export default SearchBar