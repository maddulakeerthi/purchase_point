import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {AiFillGift} from "react-icons/ai";
import {GrDeliver} from "react-icons/Gr";
import axios from 'axios';
import {useState} from "react";

function Buy()
{
  
    return(
        <div className="row-mt-3">
            <div className="row">
                <div className="col-sm-6 ms-3">
                <img className="h-30 w-100 mt-2 ms-4" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCUx47g0NsokucJJKUnEftZ7fyqu0ATL3BpJo0Xtxf0Ww1pbSU1yrS1RWqrG5V_XBYVBfCUD2kyawYDWqFwmVgLBRFdj731z5b6NJPTpVTv1PMZlIfEI44Vg&usqp=CAE"/> 
                
                </div>
                <div className="col-sm-4 mt-5 ms-3">
                    <h3 className="mt-5">Havells Crisp Plus 750-Watt</h3>
                    <h3>Pop-up Toaster (Red)</h3>
                    <div className="row">
                        <div className="col-sm-4">
                    
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>

                        </div>
                        <div className="col-sm-4">
                            <h6 className="text-primary mt-1">700 Ratings</h6>

                        </div>

                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-3 mt-3">
                            <h5 className="font-weight-bold">Brand:</h5>
                        </div>
                        <div className="col-sm-3 mt-3">
                           <h5 className="font-weight-light text-secondary">Havells</h5>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">Colour:</h5>
                        </div>
                        <div className="col-sm-3">
                           <h5 className="font-weight-light text-secondary">Black</h5>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">Material:</h5>
                        </div>
                        <div className="col-sm-3">
                           <h5 className="font-weight-light text-secondary">Plastic</h5>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">Item</h5>
                        </div>
                        <div className="col-sm-9">
                           <h5 className="font-weight-light text-secondary">17 x 19.4 x 31.4 Centimeters</h5>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">Dimensions</h5>
                        </div>
                        

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">L/W/H:</h5>
                        </div>
                        

                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-weight-bold">Item Weight:</h5>
                        </div>
                        <div className="col-sm-3">
                           <h5 className="font-weight-light text-secondary">1160 grams</h5>
                        </div>

                    </div>
                    <h5>About this item</h5>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•Reheat function will rewarm the slices of bread without going through the whole toasting cycle again</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•Hygienic stainless steel cage housing to protect against rusting</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•With the power of 75 watt, 7 heat settings and electronic variable browning, this toaster is stunningly fast in toasting your bread slices evenly</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•This toaster comes with 2 year warranty and home service with in 24 hours. Power input: (220 - 240)V</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•Warranty: 2 years on product</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•Power: 75 watts</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <h6 className="text-black-50">•Includes: Toaster and Crumb Tray</h6>
                        </div>
                    </div>
                   
                    
                </div>

            </div>

        </div>
    )
}
export default Buy