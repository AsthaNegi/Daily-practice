import {useState} from "react";

const sections=[{id:1,title:"title 1",text:"section 1"},{id:2,title:"title 2",text:"section2"},{id:3,title:"title 3",text:"section 3"}];

const Accordian=()=>{
   
    const [showIndex,setShowIndex]=useState(1);

    function handleClick(id){
        setShowIndex(prev=>(prev===id)?null:id);
    }

    return(
        <div className="accordian" >       
         { sections.map((section)=>(            
              <div key={section.id} className="accordian-item">
                <div className="accordian-header" onClick={()=>handleClick(section.id)}>{section.title}</div>
                {
                    showIndex===section.id&&(
                        <div className="accordian-section">
                            {section.text}
                        </div>
                    )
                }
            </div>    
         ))
         }
        </div>
    );
}

export default Accordian;