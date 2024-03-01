import React from 'react';
import './inventoryDetails.scss';
import arrowBackIcon from '../../assets/icon/arrow_back-24px.svg';
import editIcon from '../../assets/icon/edit-24px.svg';
import deleteIcon from '../../assets/icon/delete_outline-24px.svg';
import arrowUpDown from '../../assets/icon/sort-24px.svg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WarehouseInventory from '../WarehouseInventory/WarehouseInventory'
//import Inventory from '../../pages/Inventory/Inventory';
import { useNavigate } from "react-router-dom"

export const InventoryDetails = ({inventoryId}) => {
    const navigate = useNavigate();
                                        //const params=useParams();
                                        //const =params.inventoryId ? params.inventoryId : inventoryId;    
    const[selectedInventory,setSelectedInventory] = useState([]);
    const url=`http://localhost:5050/instock/inventory/${inventoryId}`;
    useEffect(() => {
        if(inventoryId){
            axios.get(url).then((res) => {
                setSelectedInventory(res.data);
                console.log(Inventory);
            }).catch((error) => {
                console.log(error);
            });
        }
        else{
            console.log("no Ids found");
        }
    },[inventoryId, url]);
    if(!selectedInventory || selectedInventory.length ===0){
        return('');
    }
    const goBack = () => {
        navigate(-1);
    };
    const Inventory = selectedInventory[0];
  return (
    <section className="detailsContainer" >
        <section className='detailsContainer__headSection'>
            <article className='detailsContainer__headSection-warehouseBox'>
                <div className='detailsContainer__headSection-warehouseNameBox' onClick={goBack}>
                    <img className='detailsContainer__headSection-warehouseNameBox--arrow' src={arrowBackIcon}/>
                    <h1 className='detailsContainer__headSection-warehouseNameBox--name'>{Inventory.item_name}</h1>
                </div>
                <div className='detailsContainer__headSection-warehouseNameBox-editbox'>
                    <img className='detailsContainer__headSection-warehouseNameBox--edit' src= {editIcon}/>
                </div>
            </article>
            <section className='detailsContainer__headSection-warehouseDetails'>
                <article className='detailsContainer__headSection-warehouseDetails-addressInfo'>
                    <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>WAREHOUSE ADDRESS</h5>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--address'>{Inventory.description}, </span>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--city'>{Inventory.city}, </span>
                    <span className='detailsContainer__headSection-warehouseDetails-addressInfo--country'>{Inventory.category}</span>
                </article>
                <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox'>
                    <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo'>
                        <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>CONTACT NAME</h5>
                        <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactNameInfo--contactName'>{Inventory.status}</p>
                        <p className='detailsContainer__headSection-warehouseDetails-ContactInfoBox--city'>{Inventory.quantity}</p>
                    </article>
                    <article className='detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo'>
                        <h5 className='detailsContainer__headSection-warehouseDetails-info-lbl'>CONTACT INFORMATION</h5>
                        {/* <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox--contact'>{warehouse.contact_phone}</p>
                        <p className='detailsContainer__headSection-warehouseDetails-contactInfoBox--contact'>{warehouse.contact_email}</p> */}
                    </article>
                </article>
            </section>
        </section>
    </section>
  )
}
