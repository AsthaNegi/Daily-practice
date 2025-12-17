document.addEventListener("DOMContentLoaded",()=>{
   const toDoForm= document.querySelector(".to-do-form");
   const toDoInput= document.querySelector(".to-do-input");
   const toDoButton= document.querySelector(".to-do-button");
   const toDoList=document.querySelector(".to-do-list");
   
   let editMode=false;
   let editItem=null;


   toDoForm.addEventListener("submit",(e)=>{
       e.preventDefault(); 
       const toDoText=toDoInput.value.trim();

       if(toDoText===""){
          alert("Enter some text");
       }
       else{
            if(editMode){
                    // we need to edit already listed Item
                    editItem.querySelector("span").textContent =toDoInput.value;
                    toDoButton.textContent="Add Task";
                    editItem=null;
                    editMode=false;
                }
                else{
                    // Item doesn't exist , we need to add the element
                    addToDo(toDoText); 
                }     
                
                toDoInput.value=""; 
       }

   });

   function addToDo(toDoText){
       const toDoItem=document.createElement("li");
       const span= document.createElement("span");
       span.textContent=toDoText;
       
       toDoItem.appendChild(span);

       const removeBtn= document.createElement("button");
       const editBtn=document.createElement("button");
       removeBtn.textContent="Remove";
       editBtn.textContent="Edit";
       
       toDoItem.appendChild(removeBtn);
       toDoItem.appendChild(editBtn);

       
       toDoList.appendChild(toDoItem);  
         
   }

   toDoList.addEventListener("click",(e)=>{
       console.log(" List clicked ");   

       if(e.target.tagName==="BUTTON"){
            console.log("button clicked ");
            const btn=e.target;
            const toDoItem=e.target.parentNode;

            if(btn.textContent==="Remove"){
                toDoItem.remove();
            }
            else if(btn.textContent==="Edit"){    
                 toDoInput.value=toDoItem.querySelector("span").textContent;
                 toDoButton.textContent=`Edit Task`;    
                 editMode=true;
                 editItem= toDoItem;    
            }
       }
       
       

   })
   
});






