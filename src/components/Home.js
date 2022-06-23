import React from 'react' 
import './Home.css'

function Home()
{
    return(
        <div class="container">
           
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-5">
      
  {/*first*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"80%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Men</h1>
        <div class="row">
        <img className="h-80 w-80 mt-3" src="https://m.media-amazon.com/images/I/71+H+kAB6vL._UY879_.jpg" />
        </div>
    <a href="/More" class="btn btn-secondary mt-5">More</a>
      </div>
      
    </div>
  </div>

   {/*second*/}
   <div className="col">
    <div className="card ms-3"  style={{width:"80%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Babies</h1>
        <div class="row">
        <img className="h-80 w-80 mt-2" src="https://m.media-amazon.com/images/I/71E8tPgLMOL._UY879_.jpg" />
        </div>
    <a href="/Women" class="btn btn-secondary mt-1">More</a>
      </div>
      
    </div>
  </div>
  {/*Third*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"80%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Women</h1>
        <div class="row">
        <img className="h-80 w-80 mt-3" src="https://m.media-amazon.com/images/I/91ty5QkCI6L._UY879_.jpg" />
        </div>
    <a href="/Babies" class="btn btn-secondary mt-5">More</a>
      </div>
      
    </div>
  </div>
   </div>
  </div> 
    )}
export default Home