

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mis_productos)
        })
    },100)
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = mis_productos.find(item => item.id === id)
            resolve(producto)
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(Resolve => {
        setTimeout(() =>{
            const productosCategoria = mis_productos.filter(item => item.idcat === idCategoria)
            Resolve(productosCategoria)
        },100)
    })
}
