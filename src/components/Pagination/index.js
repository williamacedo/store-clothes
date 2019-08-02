import React, { useEffect, useState } from 'react';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import ProxButton from '../Inputs/ProxButton';

const Pagination = ({ data, set }) => {

    const [page, setPage] = useState(1);
    const [qtdPages, setQtdPages] = useState("");

    useEffect(() => {
        data(set, page, (data) => {
            setQtdPages(data);
        });
    }, [page]);
    
    const proxPage = () => {
        setPage(page + 1);
    }
    
    const prevPage = () => {
        setPage(page - 1);
    }

    return (
        <Column col="sixteen wide column">
            {qtdPages.search('prev') !== -1  &&
                <ButtonIcon 
                    type="left floated"
                    icon="angle left"
                    text="Anterior"
                    click={prevPage}
                />
            }
            {qtdPages.search('next') !== -1 &&
                <ProxButton 
                    type="right floated"
                    icon="angle right"
                    text="Proxima"
                    click={proxPage}
                /> 
            }           
        </Column> 
    );   
}

export default Pagination;