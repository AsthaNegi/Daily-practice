
const products= [
{
"id": 1,
"title": "Essence Mascara Lash Princess",
"description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
"category": "beauty",
"price": 9.99,
"rating": 2.56,
},
{
"id": 2,
"title": "Eyeshadow Palette with Mirror",
"description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
"category": "beauty",
"price": 19.99,
"rating": 2.86,
},
{
"id": 3,
"title": "Powder Canister",
"description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
"category": "beauty",
"price": 14.99,
"rating": 4.64,
},
{
"id": 4,
"title": "Red Lipstick",
"description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
"category": "beauty",
"price": 12.99,
"rating": 4.36,
},
{
"id": 5,
"title": "Red Nail Polish",
"description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
"category": "beauty",
"price": 8.99,
"rating": 4.32,
},
{
"id": 6,
"title": "Calvin Klein CK One",
"description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
"category": "fragrances",
"price": 49.99,
"rating": 4.37,
},
{
"id": 7,
"title": "Chanel Coco Noir Eau De",
"description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
"category": "fragrances",
"price": 129.99,
"rating": 4.26,
},
{
"id": 8,
"title": "Dior J'adore",
"description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
"category": "fragrances",
"price": 89.99,
"rating": 3.8,
},
];

document.addEventListener("DOMContentLoaded",()=>{
    const tableContainer =document.querySelector(".table-container");

    const renderTable=()=>{
       const table=document.createElement("table") ;
       const thead=document.createElement("thead"); 
       const tbody=document.createElement("tbody");
       
       let headers=[];
       // create header row 
       if(products&&products.length>0){
         headers=Object.keys(products[0]);
       }
       const headerRow=document.createElement("tr");
       headers.forEach((headerText)=>{
          const th=  document.createElement("th");
          th.textContent=headerText;
          headerRow.appendChild(th);
       });
       thead.appendChild(headerRow);
       table.appendChild(thead);
       
       // start populating different rows 
       
       products.forEach((product)=>{
          const row=document.createElement("tr"); // create row for each product 
          for(let key in product){
           // iterate through product object 
           const td=document.createElement("td");
           td.textContent=product[key];
           row.appendChild(td);
          } // now product row is completed 
          
          tbody.appendChild(row); // row is added to tbody     
       });
    
       table.appendChild(tbody);


       // add the JS craeted table to tableContainer in html 
       tableContainer.appendChild(table);
       
    }
    renderTable();
});
