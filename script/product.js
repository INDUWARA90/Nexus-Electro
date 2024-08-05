//=================getSearch elements==================
const SearchBox=document.querySelector('.Search-Box');
const SearchBTN=document.querySelector('.Search-BTN');


//=================Search Button=======================
SearchBTN.addEventListener('click',()=>{
    console.log(SearchBox.value);




    SearchBox.value='';
});