import { IMarket } from '.';

export type IEvent = {
  id: string;
  name: string;
  markets: IMarket[];
};
