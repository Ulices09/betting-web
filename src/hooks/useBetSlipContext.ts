import { useContext } from 'react';
import { ISelection, ISelectionContext } from 'common/types';
import { BetSlipContext } from 'context/betSlip.context';

export const useBetSlipContext = () => {
  const [state, updateState] = useContext(BetSlipContext);

  const addBet = (selection: ISelection, marketName: string) => {
    updateState((draft) => {
      const selectionContext: ISelectionContext = {
        ...selection,
        marketName,
      };
      draft.selections = [...draft.selections, selectionContext];
    });
  };

  const removeBet = (selectionId: string) => {
    updateState((draft) => {
      draft.selections = draft.selections.filter((s) => s.id !== selectionId);
    });
  };

  return {
    ...state,
    addBet,
    removeBet,
  };
};
