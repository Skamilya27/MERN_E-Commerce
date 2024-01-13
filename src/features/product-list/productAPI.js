export function fetchAllProducts() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products') 
      const data = await response.json()
      resolve({data})
    }
    );
  }
  
  export function fetchProductsByFilters(filter) {
    let queryString = Object.keys(filter)
    .map(key => `${key}=${filter[key]}`)
    .join('&');
    console.log(queryString);
  
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products?'+queryString) 
      const data = await response.json()
      resolve({data})
    }
    );
  }
  