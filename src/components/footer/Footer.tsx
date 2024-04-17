import { FC } from 'react';
import GithubLogo from '../ui/svg/GithubLogo';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <GithubLogo />
      <p>2024</p>
    </footer>
  );
};
export default Footer;
