import React from 'react';
import './warehouseInventory.scss'
import deleteIcon from '../../assets/icon/delete_outline-24px.svg';
import editIcon from '../../assets/icon/edit-24px.svg';

export const WarehouseInventory = ({Inventory}) => {

  return (
    <section className='main'>
        <section className='main__tabdesk'>
        <span className='main__tabdesk--data'>{Inventory.item_name}</span>
        <span className='main__tabdesk--data'>{Inventory.category}</span>
        <span className='main__tabdesk--data'>{Inventory.status}</span>
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
                        <h5 className='main__mobile--heading'>STATUS</h5>
                        <span className='main__mobile--data'>{Inventory.status}</span>
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