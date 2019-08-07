export const getProducts = (setProduct, page, callback) => {
    fetch(`http://localhost:8000/products?_page=${page}&_limit=5`)
    .then(response => {
        let pages = response.headers.get('Link');
        callback(pages);
        return response.json();
    })
    .then(ProductJson => {
        setProduct(ProductJson);
    })   
    .catch(err => {
        console.log('Error:', err);
    });
}

export const getAllProducts = (setProduct) => {
    fetch(`http://localhost:8000/products`)
    .then(response => response.json())
    .then(ProductJson => {
        setProduct(ProductJson);
    })   
    .catch(err => {
        console.log('Error:', err);
    });
}

export const handleName = (e, setName) => {
    setName(e.target.value);
}

export const handleDescription = (e, setDescription) => {
    setDescription(e.target.value);
}

export const handleCategory = (e, setChange) => {
    setChange(e.target.value)
}

export const handlePrice = (e, setPrice) => {
    setPrice(e.target.value);
}

export const createProduct = (e, name, description, selectCategory, price, history) => {
    e.preventDefault();

    if(name !== "" && selectCategory !== "" && price !== "") {
        let data = { 
            "title": name,
            "description": description,
            "category": selectCategory,
            "price": price
       }
       fetch('http://localhost:8000/products', {
           method: 'POST',
           headers: {
               "Content-Type": "application/json",
           },            
           body: JSON.stringify(data)
       })
       .then(data => {
            history.push('/products');
       })
       .catch(error => console.error(error));              
    } else {

    }
}

export const updateData = (e, id, name, description, selectCategory, price, history) => {
    e.preventDefault();

    if(name !== "" && selectCategory !== "" && price !== "") {
        let data = { 
            "title": name,
            "description": description,
            "category": selectCategory,
            "price": price
       }
       fetch(`http://localhost:8000/products/${id}`, {
           method: 'PUT',
           headers: {
               "Content-Type": "application/json",
           },            
           body: JSON.stringify(data)
       })
       .then(data => {
            history.push('/products');
       })
       .catch(error => console.error(error));              
    } else {

    }    
}

export const deleteProduct = (id, callback, history) => {
    fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    }) 
}

export const handleSingleName = (e, setName) => {
    setName(e.target.value);
}

export const handleSingleDescription = (e, setDescription) => {
    setDescription(e.target.value);
}

export const handleSingleCategory = (e, setChange) => {
    setChange(e.target.value)
}

export const handleSinglePrice = (e, setPrice) => {
    setPrice(e.target.value);
}

export const getProduct = (id, setName, setDescription, setChange, setPrice) => {
    fetch(`http://localhost:8000/products/${id}`)
    .then(response => response.json())
    .then(product => {
        setName(product.title);
        setDescription(product.description);
        setChange(product.category);
        setPrice(product.price);
    });    
}

export const handleSearch = (e, setSearch) => {
    setSearch(e.target.value);
}