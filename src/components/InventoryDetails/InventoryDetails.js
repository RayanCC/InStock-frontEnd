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
    const[selectedInventory,setSelectedInventory] = useState([]);
    const [statusColor, setStatusColor] = useState();
    const navigate = useNavigate();

    const url=`http://localhost:5050/instock/inventory/${inventoryId}`;

    useEffect(() => {
        if(inventoryId){
            axios.get(url).then((res) => {
                setSelectedInventory(res.data);
            }).catch((error) => {
                console.log(error);
            });
        }
        else{
            console.log("no Ids found");
        }
    },[inventoryId, url]);
    useEffect(() => {
        if (selectedInventory.length > 0) {
            const inventoryStatus = selectedInventory[0].status;
            if (inventoryStatus === 'In Stock') {
            setStatusColor('green');
            } else {
            setStatusColor('red');
            }
        }
    }, [selectedInventory]);
    if(!selectedInventory || selectedInventory.length ===0){
        return('');
    }
    const goBack = () => {
        navigate(-1);
    };
    const Inventory = selectedInventory[0];

  return (
    <section className="inventoryContainer" >
        <section className='inventoryContainer__headSection'>
            <article className='inventoryContainer__headSection-InventoryBox'>
                <div className='inventoryContainer__headSection-InventoryNameBox' onClick={goBack}>
                    <img className='inventoryContainer__headSection-InventoryNameBox--arrow' src={arrowBackIcon}/>
                    <h1 className='inventoryContainer__headSection-InventoryNameBox--name'>{Inventory.item_name}</h1>
                </div>
                <div className='inventoryContainer__headSection-InventoryNameBox-editbox'>
                    <svg className='inventoryContainer__headSection-InventoryNameBox--edit' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#2E66E6"/>
                    </svg>
                    <p className='inventoryContainer__headSection-InventoryNameBox-editbox-text'>Edit</p>
                </div>
            </article>
            <section className='inventoryContainer__headSection-inventoryDetails'>
                <article className='inventoryContainer__headSection-InventoryDetails-itemInfo'>
                    <h5 className='inventoryContainer__headSection-InventoryDetails-info-lbl'>ITEM DESCRIPTION:</h5>
                    <p className='inventoryContainer__headSection-InventoryDetails-itemInfo--description'>{Inventory.description}, </p>
                    <h5 className='inventoryContainer__headSection-InventoryDetails-info-lbl'>CATEGORY:</h5>
                    <p className='inventoryContainer__headSection-InventoryDetails-itemInfo--category'>{Inventory.category}</p>
                </article>
                <article className='inventoryContainer__headSection-inventoryDetails-Box'>
                    <article className='inventoryContainer__headSection-InventoryDetails-InfoBox'>
                        <article className='inventoryContainer__headSection-InventoryDetails-InfoBox-Info'>
                            <h5 className='inventoryContainer__headSection-InventoryDetails-info-lbl'>STATUS:</h5>
                            <p className='inventoryContainer__headSection-InventoryDetails-InfoBox-Info--status statusColour' style={{ color: statusColor }}>{Inventory.status}</p>
                        </article>
                        <article className='inventoryContainer__headSection-InventoryDetails-InfoBox-Info'>
                            <h5 className='inventoryContainer__headSection-InventoryDetails-info-lbl'>QUANTITY:</h5>
                            <p className='inventoryContainer__headSection-InventoryDetails-InfoBox--quantity'>{Inventory.quantity}</p>
                        </article>
                    </article>
                    <article className='inventoryContainer__headSection-InventoryDetails-contactInfoBox-contactInfo'>
                        <h5 className='inventoryContainer__headSection-InventoryDetails-info-lbl'>WAREHOUSE:</h5>
                        <p className='inventoryContainer__headSection-InventoryDetails-contactInfoBox--contact'>{Inventory.warehouse_name}</p>
                    </article>
                </article>
            </section>
        </section>
    </section>
  )
}
