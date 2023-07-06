import getRandomCapsuleData from "@/capsuleSpecs/api/getRandomCapsuleData";
import displayCapsuleSpecs from "../capsuleSpecs/displayCapsuleSpecs";

const displayRandomCapsuleData = async () => {
  const data = await getRandomCapsuleData();
  displayCapsuleSpecs(data);
};

const capsuleInformationsInit = () => {
  const capsule = document.querySelector(".capsule#fetch-json");
  if (capsule) addEventListener("click", displayRandomCapsuleData);
};

export default capsuleInformationsInit;
