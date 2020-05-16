//HOMES IMG
import House1Img from "../img/house-1.jpeg";
import House2Img from "../img/house-2.jpeg";
import House3Img from "../img/house-3.jpeg";
import House4Img from "../img/house-4.jpeg";
import House5Img from "../img/house-5.jpeg";
import House6Img from "../img/house-6.jpeg";
//REALTORS IMG
import Realtor1Img from "../img/realtor-1.jpeg";
import Realtor2Img from "../img/realtor-2.jpeg";
import Realtor3Img from "../img/realtor-3.jpeg";

//HOME MOCK DATA
const homes = [
  {
    img: House1Img,
    alt: "home-1",
    title: "Beautiful Familiy House",
    location: "USA",
    amountRooms: 5,
    surface: 325,
    price: "1,200,000",
  },
  {
    img: House2Img,
    alt: "home-2",
    title: "Modern Glass Villa",
    location: "Canada",
    amountRooms: 6,
    surface: 450,
    price: "2,750,000",
  },
  {
    img: House3Img,
    alt: "home-3",
    title: "Cozy Country House",
    location: "Canada",
    amountRooms: 4,
    surface: 250,
    price: "850,000",
  },
  {
    img: House4Img,
    alt: "home-4",
    title: "Large Rustical Villa",
    location: "Portugal",
    amountRooms: 6,
    surface: 480,
    price: "1,950,000",
  },
  {
    img: House5Img,
    alt: "home-5",
    title: "Majestic Palace House",
    location: "Germany",
    amountRooms: 18,
    surface: 4230,
    price: "9,500,000",
  },
  {
    img: House6Img,
    alt: "home-6",
    title: "Modern Familiy Apartment",
    location: "Italy",
    amountRooms: 3,
    surface: 180,
    price: "600",
  },
];

//REALTORS MOCK DATA
const realtors = [
  {
    img: Realtor1Img,
    alt: "Realtor 1",
    fullName: "Erik Feinman",
    sold: 125
  },
  {
    img: Realtor2Img,
    alt: "Realtor 2",
    fullName: "Kim Brown",
    sold: 284
  },
  {
    img: Realtor3Img,
    alt: "Realtor 3",
    fullName: "Toby Ramsey",
    sold: 254
  },
];
export default {
  homes,
  realtors
}