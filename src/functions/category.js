export const getCategories = (setCategory, page, callback) => {
    fetch(`http://localhost:8000/categories?_page=${page}&_limit=5`)
    .then(response => {
        let pages = response.headers.get('Link');
        callback(pages);
        return response.json();
    })
    .then(responseJson => {
        setCategory(responseJson);
    }) 
}

export const handleName = (e, setName) => {
    setName(e.target.value);
}

export const handleDescription = (e, setDescription) => {
    setDescription(e.target.value);
}

export const createCategory = (e, name, description, history) => {
    e.preventDefault();
    let data = { 
         "title": name,
         "description": description
    }

    fetch('http://localhost:8000/categories/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },            
        body: JSON.stringify(data)
    })
    .then(data => {
        history.push('/categories');
    })
    .catch(error => console.error(error));     
}

export const deleteCategory = (id) => {
    fetch(`http://localhost:8000/categories/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    }) 
}