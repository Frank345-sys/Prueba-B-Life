import icon_phone from "../images/icon_phone.png";
import icon_email from "../images/icon_email.png";

import icon_laptop from "../images/icon_laptop.png";
import icon_movil from "../images/icon_movil.png";
import icon_camara from "../images/icon_camara.png";
import icon_tv from "../images/icon_tv.png";
import icon_home_appliance from "../images/icon_home_appliance.png";
import icon_accessories from "../images/icon_accessories.png";
import icon_other_categories from "../images/icon_other_categories.png";

export const footer_info = [
  {
    title: "Company",
    access: [
      {
        title: "About Us",
        enlace: "https://www.google.com/",
        logo: "",
      },
      {
        title: "Products Digital",
        enlace: "https://www.google.com/",
        logo: "",
      },
      {
        title: "Customer Reviews",
        enlace: "https://www.google.com/",
        logo: "",
      },
    ],
    modifier: "",
  },
  {
    title: "Information",
    access: [
      {
        title: "Help Center",
        enlace: "https://www.google.com/",
        logo: "",
      },
      {
        title: "Payment Methods",
        enlace: "https://www.google.com/",
        logo: "",
      },
      {
        title: "Return & Refund",
        enlace: "https://www.google.com/",
        logo: "",
      },
    ],
    modifier: "",
  },
  {
    title: "Contact",
    access: [
      {
        title: "(+1) 123-456-7890",
        enlace: "",
        logo: icon_phone,
      },
      {
        title: "Products Digital",
        enlace: "mailto:email@youremail.com",
        logo: icon_email,
      },
    ],
    modifier: "footer__info_gap-23px",
  },
];

export const providers = [
  {
    typeOfDevice: "Computer & Laptop",
    image: icon_laptop,
  },
  {
    typeOfDevice: "Mobile & Phone",
    image: icon_movil,
  },
  {
    typeOfDevice: "Camera",
    image: icon_camara,
  },
  {
    typeOfDevice: "TV & Smart Box",
    image: icon_tv,
  },
  {
    typeOfDevice: "Home Appliance",
    image: icon_home_appliance,
  },
  {
    typeOfDevice: "Accessories",
    image: icon_accessories,
  },
  {
    typeOfDevice: "Other Categories",
    image: icon_other_categories,
  },
];
