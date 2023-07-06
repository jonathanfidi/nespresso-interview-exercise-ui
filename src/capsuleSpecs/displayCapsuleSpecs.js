const displayCapsuleSpecs = (data) => {
  const container = document.querySelector(".coffee-specs #fetched-data");
  console.log("data", data);
  container.innerHTML = JSON.stringify(data);
};

export default displayCapsuleSpecs;
