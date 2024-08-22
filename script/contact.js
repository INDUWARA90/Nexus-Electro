const getName=document.getElementById('name');
const getEmail=document.getElementById('email');
const getPhoneNumber=document.getElementById('phone');
const getMassage=document.getElementById('massage');
const btnSubmit=document.querySelector('.js-submit-button');

const customerContactArray=[];

btnSubmit.addEventListener('click',()=>{
    customerContactArray.push({
        name:getName.value,
        Email:getEmail.value,
        PhoneNumber:getPhoneNumber.value,
        Massage:getMassage.value
    });

    clear();

    // customerContactArray.forEach((ele)=>{console.log(ele);
    // });
    
});













function clear() {
    getName.value='';
    getEmail.value='';
    getPhoneNumber.value='';
    getMassage.value='';
}

