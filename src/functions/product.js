export const sendData = (e, name, description, selectCategory, price, history) => {
    e.preventDefault();

    if(name !== "" && description !== "" && selectCategory !== "" && price !== "") {
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
            history.push('./products');
       })
       .catch(error => console.error(error));              
    } else {

    }
}