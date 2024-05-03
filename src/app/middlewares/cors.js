module.exports = (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.setHeader('Access-Control-Allow-Methods', '*'); // GET, POST, PUT, DELETE, OPTIONS -> * Libera todos
    response.setHeader('Access-Control-Allow-Headers', '*'); // Libera todos os headers
    response.setHeader('Access-Control-Max-Age', '10'); //  Cache de 10s
    next();
}
