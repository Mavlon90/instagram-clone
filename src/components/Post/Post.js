import React from 'react'

export default function index(props) {
    
    return <article className="Post" ref="Post">             
    <header>               
        <div className="Post-user">                 
            <div className="Post-user-avatar">                   
              <img src={props.userUrl} alt="" />
            </div>                
            <div className="Post-user-nickname">                   
            <span>Chris</span></div>
            </div> 
    </header>
         <div className="Post-image">               
            <div className="Post-image-bg">                 
                <img alt="Icon Living" src={props.userImg} />
                  </div>
                   </div>
                  <div className="Post-caption">
              <strong>Chris</strong> Moving the community!</div>         
        </article>;       
 }    
