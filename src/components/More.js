import React from "react";
function More()
{
    return(
      <div>
           
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-5">
      
  {/*first*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://m.media-amazon.com/images/I/61G1ZLzdBeS._UX679_.jpg" />
        <h2>MENS CLOTHING</h2>
        <h5>Range: 500-3000</h5>
        <h5>Offer: Upto 30% off</h5>
        <button class="btn btn-primary">BUY NOW!</button>
   
  
    </div>
      </div>
      
    </div>
 

   {/*second*/}
   <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://m.media-amazon.com/images/I/61bfjt7PFDS._UY675_.jpg" />
        <h2>MENS FOOTWEAR</h2>
        <h5>Range: 300-1500</h5>
        <h5>Offer: Upto 20% off</h5>
        <button class="btn btn-primary">BUY NOW!</button>
   
  
    </div>
      </div>
      
    </div>
  {/*Third*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://m.media-amazon.com/images/I/71wWoeA+PVL._AC_UL480_FMwebp_QL65_.jpg" />
        <h2>MENS ACCESSORIES</h2>
        <h5>Range: 300-2000</h5>
        <h5>Offer: Upto 20% off</h5>
        <button class="btn btn-primary">BUY NOW!</button>
   
  
    </div>
      </div>
      
    </div>
    </div>
    </div>

      
                  
    )
          
    }
export default More;