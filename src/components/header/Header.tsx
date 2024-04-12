'use client';
import { FC } from 'react';
import Navigation from './components/Navigation';
import Arrows from './components/Arrows';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';

import styles from './header.module.scss';
import SignBoard from './components/SignBoard';

const Header: FC = () => (
  <header className={styles.container}>
    <Navigation />
    <Arrows
      color={COLOR_PRIMARY_500}
      count={9}
    />
    <SignBoard />
    <Arrows
      color={COLOR_SECONDARY}
      count={9}
    />
  </header>
);

export default Header;
