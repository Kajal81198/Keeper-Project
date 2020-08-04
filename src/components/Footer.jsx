import React from "react";
const date = new Date();
const CurrentYear = date.getFullYear();
function Footer(){
  return <footer><p>copyright @ {CurrentYear}</p></footer>

}

export default Footer;