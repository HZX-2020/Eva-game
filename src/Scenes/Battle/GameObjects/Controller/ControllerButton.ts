import { GameObject } from "@eva/eva.js";
import { Sprite } from '@eva/plugin-renderer-sprite'
import { Event } from '@eva/plugin-renderer-event'
import { Transition } from '@eva/plugin-transition'
// import { Img } from "@eva/plugin-renderer-img";
const CTRL_WIDTH = 70;
const CTRL_HEIGHT = 70;
const GAP_HEIGHT = 3;
const getPosition = (index: number) => {
  const xAxis = Math.floor((index - 1) / 2);
  const yAxis = (index - 1) % 2;
  return {
    x: (xAxis - 1) * CTRL_WIDTH,
    y: yAxis * (CTRL_HEIGHT + GAP_HEIGHT),
  };
};
const ControllerButton = (index:number) => {
  const btn = new GameObject("btn", {
    size: { width: CTRL_WIDTH, height: CTRL_HEIGHT },
    position: getPosition(index),
    origin: {
      x: 0.5,
      y: 0.5,
    },
    anchor: {
      x: 0.5,
      y: 1,
    },
  });
  // 背景图 --精灵图
  btn.addComponent(
    new Sprite({
      resource: 'ctrl',
      spriteName: `ctrl (${index}).png`,
    })
  );
  // btn.addComponent(
  //   new Img({
  //     resource: 'ctrl',
  //   })
  // );
  // 按钮事件组件
  const event = btn.addComponent(new Event())
   // 按钮点击事件
  event.on('touchstart', () => {
    animation.play('small')
  })
  const endHandler = () => {
    animation.play('big')
  }
  event.on('touchend', endHandler)
  event.on('touchendoutside', endHandler)

  // 按钮动画组件
  const animation = btn.addComponent(new Transition())
  animation.group = {
    small: [
      {
        name: 'scale.x',
        component: btn.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out'
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in'
          }
        ]
      },
      {
        name: 'scale.y',
        component: btn.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out'
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in'
          }
        ]
      }
    ],
    big: [
      {
        name: 'scale.x',
        component: btn.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out'
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in'
          }
        ]
      },
      {
        name: 'scale.y',
        component: btn.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out'
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in'
          }
        ]
      }
    ],

  }
  // // 动画结束事件
  // animation.on('finish', name => {
  //    animation.play('big')
  // })
  return btn;
};
export default ControllerButton;
