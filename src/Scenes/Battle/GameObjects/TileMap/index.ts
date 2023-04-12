import { GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";
import levels from "../../../../Levels";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../../index";

const TILE_WIDTH = 32;
const TILE_HEIGHT = 32;

const TileMap = () => {
  const tileMap = new GameObject("tileMap", {
    // size: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
    // position: {x: 0, y: 0},
    // origin: {
    //   x: 0,
    //   y: 0,
    // },
    // anchor: {
    //   x: 0,
    //   y: 1,
    // },
  });
  
  // 解构地图信息
  const {
    level1: { mapInfo }
  } = levels;

  // 遍历地图信息
  for (let i = 0; i < mapInfo.length; i++) {
    const column = mapInfo[i];
    for (let j = 0; j < column.length; j++) {
      const item = column[j];
      if(item.src === null || item.type === null) continue; // 如果是空的，就跳过
      const imgSrc = `bg (${item.src}).png`;
      const tile = new GameObject("tileMap", {
        size: { width: TILE_WIDTH, height: TILE_HEIGHT },
        position: {x: i * TILE_WIDTH, y: j * TILE_HEIGHT},
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
      tile.addComponent(new Sprite({
        resource: 'tile',
        spriteName: imgSrc,
      }));
      // 添加到地图中
      tileMap.addChild(tile);
    }
  }

  return tileMap;
};
export default TileMap;