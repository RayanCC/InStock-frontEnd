import React from 'react';
import './warehouseInventory.scss'
import { useEffect, useState } from 'react';
import deleteIcon from '../../assets/icon/delete_outline-24px.svg';
import editIcon from '../../assets/icon/edit-24px.svg';
import linkIcon from '../../assets/icon/chevron_right-24px.svg';

export const WarehouseInventory = ({Inventory}) => {

    const [statusColor, setStatusColor] = useState();

    useEffect(() => {
      // Update the color based on the status when the component mounts or when the Inventory prop changes
      if (Inventory.status === 'In Stock') {
        setStatusColor('green');
      } else {
        setStatusColor('red');
      }
    }, [Inventory.status]);
  return (
    <section className='main'>
        <section className='main__tabdesk'>
            <article className='main__tabdesk--data InventoryName'>
                <span className='main__tabdesk-data--name'>{Inventory.item_name}</span>
                <img className= 'main__tabdesk-content-icon' src={linkIcon}/> 
            </article>
            <span className='main__tabdesk--data'>{Inventory.category}</span>
            <span className='main__tabdesk--data statusColour' style={{ color: statusColor }}>{Inventory.status}</span>
            <span className='main__tabdesk--data'>{Inventory.quantity}</span>
            <article className='main__tabdesk-content-iconbox main__tabdesk--data'>
                <img className= 'main__tabdesk-content-iconbox--icon' src={deleteIcon}/>
                <img className= 'main__tabdesk-content-iconbox--icon' src={editIcon}/> 
            </article>
        </section>

        <section className='main__mobile'>
            <article className='main__mobile-content'>
                <article className='main__mobile-content-box1'>
                    <div className='main__mobile-content-box1-item'>
                        <h5 className='main__mobile--heading'>INVENTORY ITEM</h5>
                        <span className='main__mobile--itemName'>{Inventory.item_name}  &gt;</span>
                    </div>
                    <div className='main__mobile-content-box1-item'>
                        <h5 className='main__mobile--heading'>CATEGORY</h5>
                        <span className='main__mobile--data'>{Inventory.category}</span>
                    </div>
                </article>
                <article className='main__mobile-content-box1'>
                    <div className='main__mobile-content-box1-item'>
                        <h5 className='main__mobile--heading' >STATUS</h5>
                        <span className='main__mobile--data statusColour' style={{ color: statusColor }}>{Inventory.status}</span>
                    </div>
                    <div className='main__mobile-content-box1-item'>
                        <h5 className='main__mobile--heading'>QUANTITY</h5>
                        <span className='main__mobile--data'>{Inventory.quantity}</span>
                    </div>
                </article>
            </article>
            <article className='main__mobile-content-iconbox'>
            <img src={deleteIcon}/>
            <img src={editIcon}/> 
            </article>
        </section>
    </section>
    )
}

export default WarehouseInventory;