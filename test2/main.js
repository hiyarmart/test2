const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
};

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

2
const fibonacci = (prev = 0, curr = 1) => {
    if (prev > 144) return;
    console.log(prev);
    setTimeout(() => fibonacci(curr, prev + curr), 1000);
};

fibonacci();

const fetchTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => console.log(product.title));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchTitles();



