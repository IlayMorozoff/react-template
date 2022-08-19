import React from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
}

export const Portal: React.FC<IPortalProps> = ({ children }) => <>{ReactDOM.createPortal(children, document.body)}</>;

