import './warehouseDetails.scss';
import arrowBackIcon from '../../assets/icon/arrow_back-24px.svg';
import editIcon from '../../assets/icon/edit-24px.svg';
import deleteIcon from '../../assets/icon/delete_outline-24px.svg';
import arrowUpDown from '../../assets/icon/sort-24px.svg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WarehouseInventory from '../WarehouseInventory/WarehouseInventory'
import Inventory from '../../pages/Inventory/Inventory';
import { useNavigate } from "react-router-dom"

function WarehouseDetails ({warehouseId}) {
    const navigate = useNavigate();
                                        //const params=useParams();
                                        //const =params.warehouseId ? params.warehouseId : warehouseId;    
    const[selectedWarehouse,setSelectedWarehouse] = useState([]);
    const url=`http://localhost:5050/instock/warehouse/${warehouseId}`;
    useEffect(() => {
        if(warehouseId){
            axios.get(url).then((res) => {
                setSelectedWarehouse(res.data);
            }).catch((error) => {
                console.log(error);
            });
        }
        else{
            console.log("no Ids found");
        }
    },[warehouseId, url]);
    if(!selectedWarehouse || selectedWarehouse.length ===0){
        return('');
    }
    const goBack = () => {
        navigate(-1);
    };
    const warehouse = selectedWarehouse[0];
return(
    <section className="detailsContainer" >
        <section className='detailsContainer__headSection'>
            <article className='detailsContainer__headSection-warehouseBox'>
                <div className='detailsContainer__headSection-warehouseNameBox' onClick={goBack}>
                    <img className='detailsContainer__headSection-warehouseNameBox--arrow' src={arrowBackIcon}/>
                    <h1 className='detailsContainer__headSection-warehouseNameBox--name'>{warehouse.warehouse_name}</h1>
                </div>
                <div className='detailsContainer__headSection-warehouseNameBox-editbox'>
                    <svg className='detailsContainer__headSection-warehouseNameBox--edit' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#2E66E6"/>
                    </svg>
                    <p className='detailsContainer__headSection-warehouseNameBox-editbox-text'>Edit</p>
                </div>
            </article>
            <section className='detailsContainer__headSection-warehouseDetails'>
                <article className='detailsContainer__headSection-warehouseDetails-addressInfo'>
                    <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>WAREHOUSE ADDRESS</h5>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--address'>{warehouse.address}, </span>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--city'>{warehouse.city}, </span>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--country'>{warehouse.country}</span>
                </article>
                <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox'>
                    <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo'>
                        <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>CONTACT NAME</h5>
                        <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactNameInfo--contactName'>{warehouse.contact_name}</p>
                        <p className='detailsContainer__headSection-warehouseDetails-ContactInfoBox--city'>{warehouse.contact_position}</p>
                    </article>
                    <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo'>
                        <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>CONTACT INFORMATION</h5>
                        <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox--contact'>{warehouse.contact_phone}</p>
                        <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox--contact'>{warehouse.contact_email}</p>
                    </article>
                </article>
            </section>
        </section>
        <section className='detailsContainer__main-headingSection'>
            <article className='detailsContainer__main-headingSection--heading'>
                <h5>INVENTORY ITEMS</h5>
                <img className= 'main__tabdesk-content-iconbox--icon' src={arrowUpDown}/> 
            </article>
            <article className='detailsContainer__main-headingSection--heading'>
                <h5 className='detailsContainer__main-headingSection--headingtext'>CATEGORY</h5>
                <img className= 'main__tabdesk-content-iconbox--icon' src={arrowUpDown}/> 
            </article>
            <article className='detailsContainer__main-headingSection--heading'>
                <h5 className='detailsContainer__main-headingSection--headingtext'>STATUS</h5>
                <img className= 'main__tabdesk-content-iconbox--icon' src={arrowUpDown}/> 
            </article>
            <article className='detailsContainer__main-headingSection--heading'>
                <h5 className='detailsContainer__main-headingSection--headingtext'>QUANTITY</h5>
                <img className= 'main__tabdesk-content-iconbox--icon' src={arrowUpDown}/> 
            </article>
            <h5 className='detailsContainer__main-headingSection--heading'>ACTIONS</h5>
        </section>
        {selectedWarehouse.map(Inventory => 
            <WarehouseInventory key ={Inventory.id}
                Inventory={Inventory}
                />
            )}
    </section>
)
}

export default WarehouseDetails;
