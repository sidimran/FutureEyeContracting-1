import imagescard1 from "../../images/glaze-aluminum 1.jpeg";
import imagescard2 from "../../images/glaze-aluminum2.jpeg";
import imagescard3 from "../../images/glaze-aluminum3.jpeg";
import imagescard4 from "../../images/aluminumwindow1.jpeg";
import imagescard5 from "../../images/aluminumwindow2.jpeg";
import imagescard6 from "../../images/aluminumwindow3.jpeg";
import imagescard7 from "../../images/aluminumwindow4.jpeg";
import imagescard8 from "../../images/aluminumdoor.jpeg";




let product = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Alluminiu Glass",
    image: imagescard1,
    star :12
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "UPVC - PVC Doors Windows",
    image: imagescard2,
    star :12
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Electrical Plumbing ",
     image: imagescard3,
    star :12
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "A/C Installations",
    image: imagescard4,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "TV Installations",
    image: imagescard5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "POP-Stainless Steel",
    image: imagescard6,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Mild Steet Works",
     image: imagescard7,
  },
];

export function getproduct(){
    return product;
}
