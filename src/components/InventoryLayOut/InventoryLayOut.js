import SearchHeading from "../SearchHeading/SearchHeading";
import InventoryLayOutM from "./InventoryLayoutM";
import InventoryLayOutT from "./IventoryLayoutT";
import { useEffect, useState } from "react";

const InventoryLayOut = () => {
  const [isTablet, setTablet] = useState(window.innerWidth > 767);

  const updateMedia = () => {
    setTablet(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isTablet ? (
        <div>
          <InventoryLayOutT />
        </div>
      ) : (
        <div>
          <InventoryLayOutM />
        </div>
      )}
    </div>
  );
};

export default InventoryLayOut;
