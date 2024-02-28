import { useEffect, useState } from 'react'
import Warehouse from './Warehouse';
import WarehouseT from './WarehouseT';

const WarehouseB = () => {
    const [isTablet, setTablet] = useState(window.innerWidth > 767);

    const updateMedia = () => {
        setTablet(window.innerWidth > 767);
    };
  
     useEffect(() => {
             window.addEventListener("resize",updateMedia);
             return() => window.removeEventListener("resize",updateMedia);
     });
  
    return (
    <div>
        {isTablet ? (
            <div><WarehouseT /></div>
        ) : (
            <div><Warehouse /></div>
        )}
    </div>
  )
};

export default WarehouseB