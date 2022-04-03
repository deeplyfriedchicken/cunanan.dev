import { IFlock } from './flock.interface';
import { IPage } from './page.interface';

export interface ISite {
  id: string;
  name: string;
  slug: string;
  pages: IPage[];
  flocks: IFlock[];
}
