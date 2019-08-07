export const handleMonth = (e, setMonth) => {
    setMonth(e.target.value);
}

export const getAllSales = async (setSale, setTotal) => {
    const response = await fetch(`http://localhost:8000/sells`);
    const data = await response.json();
    const reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue.totalPrice);
    setSale(data);
    setTotal(data.reduce(reducer, 0).toFixed(2));
}

export const getAcess = (setAcess) => {

}