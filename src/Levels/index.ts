import level1 from './level1';
import { TILE_TYPE_ENUM } from '../Enums';

export interface ITile {
  src: number | null;
  type: TILE_TYPE_ENUM | null;
}
export interface ILevel {
  mapInfo: Array<Array<ITile>>;
  // player: IEntity;
  // enemies: Array<IEntity>;
  // spikes: Array<ISpikes>;
  // bursts: Array<IEntity>;
  // door: IEntity;
}
const levels:Record<string, ILevel> = {
  level1
}
export default levels