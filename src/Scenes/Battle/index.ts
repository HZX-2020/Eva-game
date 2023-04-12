import { Scene, } from "@eva/eva.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../index";
import BackgroundColor from "./GameObjects/BackgroundColor";
import Footer from "./GameObjects/Footer";
import Controller from "./GameObjects/Controller";
import {BattleManager} from "./BattleManager";
// import TileMap from "./GameObjects/TileMap";
const BattleScene = () => {
  const scene = new Scene("BattleScene", {
    size: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
  });
  // 场景背景
  scene.addChild(BackgroundColor()); //添加到场景
  // 底部文字
  scene.addChild(Footer()); //添加到场景
  // 按钮区
  scene.addChild(Controller()); 
  // // 地图
  // scene.addChild(TileMap());
  scene.addComponent(new BattleManager())
  return scene;
};
export default BattleScene;
