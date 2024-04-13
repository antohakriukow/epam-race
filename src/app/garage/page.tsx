import { FC } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import Stadium from './components/Stadium';

const GaragePage: FC = () => {
  return (
    <section>
      <Toolbar />
      <Stadium />
    </section>
  );
};
export default GaragePage;
