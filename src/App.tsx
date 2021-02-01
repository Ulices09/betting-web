import { FC } from 'react';
import Routes from 'routes';
import { BetSlipProvider } from 'context/betSlip.context';

const App: FC = () => {
  return (
    <BetSlipProvider>
      <Routes />
    </BetSlipProvider>
  );
};

export default App;
