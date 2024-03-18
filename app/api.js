export const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};