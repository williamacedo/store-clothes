export const getSales = (setSale, page, callback) => {
    fetch(`http://localhost:8000/sells?_page=${page}&_limit=5`)
        .then(response => {
            let pages = response.headers.get('Link');
            callback(pages);
            return response.json();
        })
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

export const createSale = (e, whoSell, whoBought, total, items, history) => {
    e.preventDefault();

    let data = {
        "whoSell": whoSell,
        "whoBought": whoBought,
        "totalPrice": total,
        "productSells": items        
    };

    fetch('http://localhost:8000/sells', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        history.push('/sales');
    })
    .catch(err => {
        console.log(err);
    });
}

export const getSingleSale = (id, setSale, cb) => {
    fetch(`http://localhost:8000/sells/${id}`)
        .then(response => response.json())
        .then(sale => {
            cb(sale.productSells);
        })
        .catch(err => {
            console.log(err);
        });
}  

export const deleteSale = (id, history) => {
    fetch(`http://localhost:8000/sells/${id}`, {
        method: 'DELETE'
    })
    .then(data => {

    })
    .catch(err => {

    });
}