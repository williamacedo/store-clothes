export const deleteCategory = (id) => {
    fetch(`http://localhost:8000/categories/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    }) 
}