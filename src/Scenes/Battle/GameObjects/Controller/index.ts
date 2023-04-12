import { GameObject } from "@eva/eva.js";
import controllerButton from "./ControllerButton";
// 按钮区
const Controller = () => {
  const controller = new GameObject("controller", {
    position: {
      x: 0,
      y: -160
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
  // 子按钮
  controller.addChild(controllerButton(1))
  controller.addChild(controllerButton(2))
  controller.addChild(controllerButton(3))
  controller.addChild(controllerButton(4))
  controller.addChild(controllerButton(5))
  controller.addChild(controllerButton(6))
  return controller;
};
export default Controller;
