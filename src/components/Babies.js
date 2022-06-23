import React from "react";
function Babies()
{
    return(
      <div>
           
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-5">
      
  {/*first*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://i0.wp.com/pna.co.za/blog/wp-content/uploads/2017/11/last-minute-shopping-tips-cover.jpg?fit=750%2C375&ssl=1" />
        <h2>KIDS CLOTHING</h2>
        <h5>Range: 500-1500</h5>
        <h5>Offer: Upto 50% off</h5>
        <button class="btn btn-primary">BUY NOW!</button>
   
  
    </div>
      </div>
      
    </div>
 

   {/*second*/}
   <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://thumbs.dreamstime.com/b/kids-sport-shoe-store-selling-shoes-childrens-49432917.jpg" />
        <h2>KIDS FOOTWEAR</h2>
        <h5>Range: 400-1000</h5>
        <h5>Offer: Upto 40% off</h5>
        <button class="btn btn-primary">BUY NOW!</button>
   
  
    </div>
      </div>
      
    </div>
  {/*Third*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        
        <img className="h-95 w-100 mt-3" src="https://cdn.babycouture.in/pub/media/wysiwyg/hair_accesserioes.jpg" />
        <h2>KIDS ACCESSORIES</h2>
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
export default Babies;