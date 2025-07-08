import React from 'react'
import { FC, ReactNode, useRef } from 'react'

interface Props {
    children: ReactNode;
    tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
    const tooltipRef = useRef<HTMLSpanElement>(null);

    return (
        <div onMouseEnter={({ clientX})} => {
            if(!tooltipRef.current) return;
            tooltipRef.current.style.left = clientX + 'px';
        }
        className="relative group inline-block">
            {children}
            <span ref={tooltipRef} className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-400 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap'}>
            
            </span>
        </div>       
  )
}

export default ToolTip