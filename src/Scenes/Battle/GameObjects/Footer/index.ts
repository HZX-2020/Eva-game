import { GameObject } from "@eva/eva.js";
import { Text } from '@eva/plugin-renderer-text'
const Footer = () => {
const footer = new GameObject("footer", {
  position: {
    x: 0,
    y: -16
  },
  origin: {
    x: 0.5,
    y: 1
  },
  anchor: {
    x: 0.5,
    y: 1
  }
});
footer.addComponent(new Text({
  text: 'Cramped Room of Death Demo',
  style: {
    fontSize: 16,
    fill: ['#ffffff', '#00ff99', '#fff','#ff9900', '#ff0000'], // 渐变色
    fontFamily: 'Arial',
    fontWeight: 'bold',
  }
}));
return footer
}

export default Footer;