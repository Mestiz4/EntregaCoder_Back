class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }

class ProductManager{
    constructor(){
        this.products=[]
    }

    getProducts=()=>{
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let products = this.getProducts();
        let productExists = products.findIndex((product) => product.code === code) !== -1;
        let aFieldIsEmpty = !(title && description && price && thumbnail && code && stock); //un campo en false, también es un campo vacío 
        if (productExists || aFieldIsEmpty) { //si se cumple alguna de estas condiciones hay un error
            console.log(`Product not added.Errors:${productExists ? "Product already exists." : ""} ${aFieldIsEmpty ? "Must complete all fields." : ""}`);
        } else {
            let id = products.length + 1;
            let newProduct = new Product(id, title, description, price, thumbnail, code, stock);
            products.push(newProduct);
            console.log(`Product ${title} added with ID ${id}`);
        }
      }

getProductById=(idProduct)=>{
    let productIndex = products.findIndex((product) => product.id === idProduct);
    /*
    *La función utiliza el método findIndex en el array products para encontrar 
    el índice del producto que coincide con el ID proporcionado. 
    findIndex recorre cada elemento del array y devuelve el índice del primer 
    elemento que cumple con la condición especificada en la función de retorno. 
    En este caso, la condición es product.id === idProduct, lo que significa que se 
    busca un producto cuyo ID sea igual al idProduct proporcionado.
    *La variable productIndex almacena el índice del producto encontrado 
    en el paso anterior. Si no se encuentra ningún producto con el 
    ID correspondiente, productIndex será igual a -1.
    */
    let productExists = productIndex !== -1;
    /* 
    *La variable productExists se establece en true si se encontró un producto en la 
    lista (productIndex !== -1), lo que indica que el producto existe. De lo contrario, 
    se establece en false.
    */
    if (productExists) {
      return products[productIndex];
    } else {
      console.log("Product not found.");
    }
    /*
    *A continuación, se realiza una comprobación 
    utilizando una declaración if. Si productExists 
    es verdadero, significa que se encontró un producto 
    con el ID proporcionado en la lista de productos. 
    En ese caso, se devuelve el producto encontrado utilizando 
    la notación de corchetes (products[productIndex]), 
    lo que permite acceder al producto en el array.

    *Si productExists es falso, es decir, no se encontró 
    ningún producto con el ID proporcionado, se muestra 
    un mensaje de "Product not found" en la consola.
    */
}
}

const manejadorProducts = new ProductManager();

manejadorProducts.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen','abc123', 25)
console.log(manejadorProducts.getProducts)
