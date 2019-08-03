import styled from 'styled-components';

export const ProductContainer = styled.div`
        
`;

export const Item = styled.a`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CCC;
    padding: 5px;
    margin-top: 5px;
    cursor: pointer;
`;

export const Content = styled.div`
    height: 177.2px;
    overflow: auto;
`;

export const ItemSearch = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #CCC;
    margin-bottom: 10px;
    cursor: pointer;
    p {
        font-size: 15px;
        color: black;
    }
`;