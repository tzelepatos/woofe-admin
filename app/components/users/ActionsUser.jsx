import userAvatar1 from "@/assets/images/user/userAvatar1.png";
import userAvatar2 from "@/assets/images/user/userAvatar2.jpg";
import userAvatar3 from "@/assets/images/user/userAvatar3.png";
import userAvatar4 from "@/assets/images/user/userAvatar4.jpg";
import userAvatar5 from "@/assets/images/user/userAvatar5.svg";

export const imageNames = [
  { name: "userAvatar1", src: userAvatar1 },
  { name: "userAvatar2", src: userAvatar2 },
  { name: "userAvatar3", src: userAvatar3 },
  { name: "userAvatar4", src: userAvatar4 },
  { name: "userAvatar5", src: userAvatar5 },
];

export function getNextImageIndex(currentIndex) {
  return (currentIndex + 1) % imageNames.length;
}

export function getPreviousImageIndex(currentIndex) {
  return (currentIndex - 1 + imageNames.length) % imageNames.length;
}

export function getUserImage(userImage) {
  // Find the image in imageNames
  const userAvatar = imageNames.find((image) => image.name === userImage);
  return userAvatar ? userAvatar.src : imageNames[0].src;
}
