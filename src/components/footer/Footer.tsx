import { FC } from 'react';

import styles from './footer.module.scss';
import GithubLogo from '../ui/svg/GithubLogo';

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <GithubLogo />
      <p>2024</p>
    </footer>
  );
};
export default Footer;
