//=================getSearch elements==================
const SearchBox=document.querySelector('.Search-Box');
const SearchBTN=document.querySelector('.Search-BTN');


//=================Search Button=======================
SearchBTN.addEventListener('click',()=>{
    console.log(SearchBox.value);




    SearchBox.value='';
});


//================Genarate products==========================

const productArray=[
    {
        type:'moblie Phone,Apple',
        pName:'Iphone 11 pro',
        price:'1000',
        image:'asset/iphone_11_Pro.png'
    },
    {
        type:'moblie Phone,Apple',
        pName:'Iphone 11 pro',
        price:'1000',
        image:'asset/iphone_11_Pro.png'
    },
    {
        type:'moblie Phone,Apple',
        pName:'Iphone 11 pro',
        price:'1000',
        image:'asset/iphone_11_Pro.png'
    },
    {
        type:'moblie Phone,Apple',
        pName:'Iphone 11 pro',
        price:'1000',
        image:'asset/iphone_11_Pro.png'
    },
]


const getProducts=document.querySelector('.js-products');

let ProductHTML=``;

productArray.forEach(product=>{
    ProductHTML+=`
        <div class="card-mobile col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 ">
            <h7>${product.type}</h7>
            <h4>${product.pName}</h4>
            <img src="${product.image}" alt="..." >
            <p>Price : Rs.<span>${product.price}</span></p>
            <button>add to cart</button>
         </div>
    
    `
});


getProducts.innerHTML=ProductHTML;

