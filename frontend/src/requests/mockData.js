// //HOMES IMG
// const House1Img = "/static/img/house-1.jpeg";
// const House2Img = "/static/img/house-2.jpeg";
// const House3Img = "/static/img/house-3.jpeg";
// const House4Img = "/static/img/house-4.jpeg";
// const House5Img = "/static/img/house-5.jpeg";
// const House6Img = "/static/img/house-6.jpeg";
//
// //REALTORS IMG
// const Realtor1Img = "/static/img/realtor-1.jpeg";
// const Realtor2Img = "/static/img/realtor-2.jpeg";
// const Realtor3Img = "/static/img/realtor-3.jpeg";

//METADATA IMG
const LogoImg = "/static/img/logo.png";
const SeenOnLogo1 = "/static/img/logo-bbc.png";
const SeenOnLogo2 = "/static/img/logo-forbes.png";
const SeenOnLogo3 = "/static/img/logo-techcrunch.png";
const SeenOnLogo4 = "/static/img/logo-bi.png";
const SpriteSvg = "/static/img/sprite.svg";
const StoryImg1 = "/static/img/story-1.jpeg";
const StoryImg2 = "/static/img/story-2.jpeg";

// //GALLERY ITEMS IMG
// const Item1Img = "/static/img/gal-1.jpeg";
// const Item2Img = "/static/img/gal-2.jpeg";
// const Item3Img = "/static/img/gal-3.jpeg";
// const Item4Img = "/static/img/gal-4.jpeg";
// const Item5Img = "/static/img/gal-5.jpeg";
// const Item6Img = "/static/img/gal-6.jpeg";
// const Item7Img = "/static/img/gal-7.jpeg";
// const Item8Img = "/static/img/gal-8.jpeg";
// const Item9Img = "/static/img/gal-9.jpeg";
// const Item10Img = "/static/img/gal-10.jpeg";
// const Item11Img = "/static/img/gal-11.jpeg";
// const Item12Img = "/static/img/gal-12.jpeg";
// const Item13Img = "/static/img/gal-13.jpeg";
// const Item14Img = "/static/img/gal-14.jpeg";

// //HOME MOCK DATA
// const homes = [
//   {
//     img: House1Img,
//     alt: "home-1",
//     title: "Beautiful Familiy House",
//     location: "USA",
//     amountRooms: 5,
//     surface: 325,
//     price: "1,200,000",
//   },
//   {
//     img: House2Img,
//     alt: "home-2",
//     title: "Modern Glass Villa",
//     location: "Canada",
//     amountRooms: 6,
//     surface: 450,
//     price: "2,750,000",
//   },
//   {
//     img: House3Img,
//     alt: "home-3",
//     title: "Cozy Country House",
//     location: "Canada",
//     amountRooms: 4,
//     surface: 250,
//     price: "850,000",
//   },
//   {
//     img: House4Img,
//     alt: "home-4",
//     title: "Large Rustical Villa",
//     location: "Portugal",
//     amountRooms: 6,
//     surface: 480,
//     price: "1,950,000",
//   },
//   {
//     img: House5Img,
//     alt: "home-5",
//     title: "Majestic Palace House",
//     location: "Germany",
//     amountRooms: 18,
//     surface: 4230,
//     price: "9,500,000",
//   },
//   {
//     img: House6Img,
//     alt: "home-6",
//     title: "Modern Familiy Apartment",
//     location: "Italy",
//     amountRooms: 3,
//     surface: 180,
//     price: "600,000",
//   },
// ];

// //REALTORS MOCK DATA
// const realtors = [
//   {
//     img: Realtor1Img,
//     alt: "Realtor 1",
//     fullName: "Erik Feinman",
//     sold: 125
//   },
//   {
//     img: Realtor2Img,
//     alt: "Realtor 2",
//     fullName: "Kim Brown",
//     sold: 284
//   },
//   {
//     img: Realtor3Img,
//     alt: "Realtor 3",
//     fullName: "Toby Ramsey",
//     sold: 254
//   },
// ];

// //GALERY ITEMS MOCK DATA
// const galleryItems = [
//   { img: Item1Img },
//   { img: Item2Img },
//   { img: Item3Img },
//   { img: Item4Img },
//   { img: Item5Img },
//   { img: Item6Img },
//   { img: Item7Img },
//   { img: Item8Img },
//   { img: Item9Img },
//   { img: Item10Img },
//   { img: Item11Img },
//   { img: Item12Img },
//   { img: Item13Img },
//   { img: Item14Img },
// ];

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
  // homes,
  // realtors,
  // galleryItems,
  metaData
}