import getCapsuleDataById from "./getCapsuleDataById";

const getRandomCapsuleData = async () => {
  const randomId = Math.floor(Math.random() * 50);
  return getCapsuleDataById(randomId);
};

export default getRandomCapsuleData;
