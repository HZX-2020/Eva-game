import { Component } from '@eva/eva.js'
import TileMap from './GameObjects/TileMap'

export class BattleManager extends Component {
  static componentName = 'BattleManager' // 设置组件的名字
  
  init() { // 初始化组件
    this.initLevel()
  }
  initLevel() {
    this.generateTileMap()
  }
  generateTileMap() {
    // 地图
    this.gameObject.addChild(TileMap());
  }
  awake() {  // 组件被添加到GameObject时调用

  }
  update() { // 更新组件
  }
}