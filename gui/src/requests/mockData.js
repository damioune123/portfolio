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

//METADATA IMG
import LogoImg from "../img/logo.png";
import SeenOnLogo1 from "../img/logo-bbc.png";
import SeenOnLogo2 from "../img/logo-forbes.png";
import SeenOnLogo3 from "../img/logo-techcrunch.png";
import SeenOnLogo4 from "../img/logo-bi.png";
import SpriteSvg from "../img/sprite.svg";
import StoryImg1 from "../img/story-1.jpeg";
import StoryImg2 from "../img/story-2.jpeg";

//GALLERY ITEMS IMG
import Item1Img from "../img/gal-1.jpeg";
import Item2Img from "../img/gal-2.jpeg";
import Item3Img from "../img/gal-3.jpeg";
import Item4Img from "../img/gal-4.jpeg";
import Item5Img from "../img/gal-5.jpeg";
import Item6Img from "../img/gal-6.jpeg";
import Item7Img from "../img/gal-7.jpeg";
import Item8Img from "../img/gal-8.jpeg";
import Item9Img from "../img/gal-9.jpeg";
import Item10Img from "../img/gal-10.jpeg";
import Item11Img from "../img/gal-11.jpeg";
import Item12Img from "../img/gal-12.jpeg";
import Item13Img from "../img/gal-13.jpeg";
import Item14Img from "../img/gal-14.jpeg";

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

//GALERY ITEMS MOCK DATA
const galleryItems = [
  { img: Item1Img },
  { img: Item2Img },
  { img: Item3Img },
  { img: Item4Img },
  { img: Item5Img },
  { img: Item6Img },
  { img: Item7Img },
  { img: Item8Img },
  { img: Item9Img },
  { img: Item10Img },
  { img: Item11Img },
  { img: Item12Img },
  { img: Item13Img },
  { img: Item14Img },
];

//METADATA MOCK DATA
const metaData = {
  galleryItemMetaData: {
    altBase: "Gallery image"
  },
  realtorMetaData:{
    housesSoldText: "houses sold"
  },
  homeMetaData: {
    btnText: "Contact realtor",
    heartFullIcon: SpriteSvg+"#icon-heart-full",
    mapPinIcon: SpriteSvg+"#icon-map-pin",
    profileMaleIcon: SpriteSvg+"#icon-profile-male",
    expandIcon: SpriteSvg+"#icon-expand",
    keyIcon: SpriteSvg+"#icon-key"
  },
  headerMetaData: {
    logoImg: LogoImg,
    logoAlt: "Nexter logo",
    heading3: "Your own home:",
    heading1: "The ultimate personal freedom",
    btnText: "View our properties",
    seenOnText: "Seen on",
    seenOnLogos: [
      {
        img: SeenOnLogo1,
        alt: "Seen on logo 1"
      },
      {
        img: SeenOnLogo2,
        alt: "Seen on logo 2"
      },
      {
        img: SeenOnLogo3,
        alt: "Seen on logo 3"
      },
      {
        img: SeenOnLogo4,
        alt: "Seen on logo 4"
      }
    ]
  },
  featuresMetaData: {
    features:[
      {
        icon: SpriteSvg+"#icon-global",
        title: "World's best luxury homes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
        Tenetur distinctio necessitatibus pariatur voluptatibus.",
      },
      {
        icon: SpriteSvg+"#icon-trophy",
        title: "Only the best properties",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
                Tenetur distinctio necessitatibus pariatur voluptatibus.",
      },
      {
        icon: SpriteSvg+"#icon-map-pin",
        title: "All homes in in top locations",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
                Tenetur distinctio necessitatibus pariatur voluptatibus.",
      },
      {
        icon: SpriteSvg+"#icon-key",
        title: "New home in one week",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
                Tenetur distinctio necessitatibus pariatur voluptatibus.",
      },
      {
        icon: SpriteSvg+"#icon-presentation",
        title: "Top 1% realtors",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
                Tenetur distinctio necessitatibus pariatur voluptatibus.",
      },
      {
        icon: SpriteSvg+"#icon-lock",
        title: "Secure payments on nexter",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
                Tenetur distinctio necessitatibus pariatur voluptatibus.",
      }
    ]
  },
  storyMetaData: {
    title: "Happy Customers",
    subtitle: "The best decision of our live",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus \
        ariatur voluptatibus. Quidem consequatur harum volupta!",
    btnText: "Find your own home",
    img1: StoryImg1,
    alt1: "Couple with new house",
    img2: StoryImg2,
    alt2: "New house"
  }

};
export default {
  homes,
  realtors,
  galleryItems,
  metaData
}