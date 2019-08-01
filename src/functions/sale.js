export const getSales = (cb) => {
    fetch('http://localhost:8000/sells')
        .then(response => response.json())
        .then(saleJson => {
            cb(saleJson);
        })
        .catch((err) => {
            console.log('Ocorreu um erro', err);
        });
}

export const sendSale = () => {
    
}