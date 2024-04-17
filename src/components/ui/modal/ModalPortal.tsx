import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { MODAL_PLACEHOLDER_ID } from '@/shared/constants';

const ModalPortal: FC<PropsWithChildren> = ({ children }) => {
  const portalPlaceholder = document.getElementById(MODAL_PLACEHOLDER_ID);
  return ReactDOM.createPortal(children, portalPlaceholder!);
};

export default ModalPortal;
