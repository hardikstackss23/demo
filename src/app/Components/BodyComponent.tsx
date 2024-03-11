"use client"
import React,{useEffect} from 'react'

const BodyComponent = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
  
      document.body.addEventListener('contextmenu', handleContextMenu);
  
      return () => {
        document.body.removeEventListener('contextmenu', handleContextMenu);
      };
    }, []);
    return <body>{children}</body>;
}

export default BodyComponent
