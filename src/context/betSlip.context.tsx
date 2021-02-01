import React, { createContext, FC } from 'react';
import { ISelectionContext } from 'common/types';
import { useImmer, Updater } from 'use-immer';

type IBetSlipContextState = {
  selections: ISelectionContext[];
};

type IBetSlipContext = [IBetSlipContextState, Updater<IBetSlipContextState>];

const defaultState: IBetSlipContextState = {
  selections: [],
};

export const BetSlipContext = createContext<IBetSlipContext>([
  undefined!,
  undefined!,
]);

export const BetSlipProvider: FC = ({ children }) => {
  const [state, updateState] = useImmer<IBetSlipContextState>({
    ...defaultState,
  });

  return (
    <BetSlipContext.Provider value={[state, updateState]}>
      {children}
    </BetSlipContext.Provider>
  );
};
