import React from 'react';
import "./Sugesstions.css"
function Suggestion() {
  return (
    <div className='main'>
      <div className='user'>
        <div className='img'>
            <img src="https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg" alt=""/>
        </div>
        <div className='username'>
            <a href="#">peter_patrickson</a>
            <p>patrick</p>
        </div>
        <div className='btn'>
            <button>Switch</button>
        </div>
      </div>
      <div className='second'>
        <h6>Suggested for you</h6>
        <button>See All</button>
      </div>
      <div className='third'>
        <div className='one'>
            <Rep picture="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_960_720.jpg" name={"monica_belluci"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2019/11/06/05/57/woman-4605248_1280.jpg" name={"natalie_portman"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           

        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2022/09/28/21/07/woman-7486045_640.jpg" name={"anne_hathaway"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2022/07/28/22/04/sun-7350734_640.jpg" name={"penelope_cruz"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2019/02/24/10/53/woman-4017330_640.jpg" name={"jennifer_lopez"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2021/11/25/12/48/woman-6823526_640.jpg" name={"natalie_portman"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2023/10/12/12/54/woman-8310746_640.jpg" name={"lilly_simons"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2019/07/20/00/10/woman-4349857_640.jpg" name={"jennifer_lawrence"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2016/11/29/05/46/young-woman-1867618_1280.jpg" name={"alexandra_daddario"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_1280.jpg" name={"jenny"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_640.jpg" name={"lilly_simons"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
        <div className='one'>
        <Rep picture="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_640.jpg" name={"ann_paul"} name2={"Followed by alfin ,username"} followbutton={"Follow"}></Rep>           
        </div>
      </div>
    </div>
  )
}

export default Suggestion
function Rep({picture,name,name2,followbutton}) {
  return (
    <>
        <div className='img'>
        <img src={picture} style={{width:"40px",
            height: "40px",
            objectFit:"cover", borderRadius: "100%", }} />
        </div>
        <div className='username'>
        <a href="#" style={{ textDecoration:"none",color: "rgb(255, 255, 255)",
        fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}}>{name}</a>
        <p style={{color: "rgba(255, 255, 255, 0.648)",
        fontSize:"12px"}}>{name2}</p>
        </div>
        <div className='btn'>
        <button className='btn12'>
        {followbutton}</button>
        </div>
    </>
  )
}