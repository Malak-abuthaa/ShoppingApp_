export async function getListOfProduct() {
  const url = 'https://dummyjson.com/products';
  const options = {
    method: 'GET',
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function SearchForProduct(value: string) {
  const url = `https://dummyjson.com/products/search?q=` + value;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
