import React from 'react';

const FilterSales = ({ search, setSearch, placeholder }) => {
    return (
        <form className="ui form">
            <div className="ui search">
                <div className="ui icon input" style={{width: '100%'}}>
                    <input className="prompt" type="text" placeholder={"Buscar por " + placeholder} value={search} onChange={e => setSearch(e.target.value)} />
                    <i className="search icon"></i>
                </div>
            </div>
        </form>
    );
}

export default FilterSales;