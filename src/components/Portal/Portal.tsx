import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
    children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps) => {
    const el: HTMLDivElement = useMemo(() => 
        document.createElement ( 'div' )
    , []);

    useEffect(() => {
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
          };
    }, [el])

    return ReactDOM.createPortal(children, el);
}