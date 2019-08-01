export const getSales = (setSale) => {
    fetch('http://localhost:8000/sells')
        .then(response => response.json())
        .then(saleJson => {
            setSale(saleJson);
        })
        .catch((err) => {
            console.log('Ocorreu um erro', err);
        });
}

export const handleSell = (e, setWhoSell) => {
    setWhoSell(e.target.value);
}

export const handleBought = (e, setWhoBought) => {
    setWhoBought(e.target.value);
}

export const handleTotal = (e, setTotal) => {
    setTotal(e.target.value);
}

export const sendSale = () => {
    
}