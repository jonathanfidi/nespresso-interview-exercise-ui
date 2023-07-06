const getCapsuleDataById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return await response.json();
};

export default getCapsuleDataById;
