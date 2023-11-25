const txtNameElm = document.querySelector('#txt-name');
const txtContactElm = document.querySelector('#txt-contact');
const btnAddElm = document.querySelector('#btn-add');
const { API_BASE_URL } = process.env;

btnAddElm.addEventListener('click', ()=>{
    const name = txtNameElm.value.trim();
    const contact = txtContactElm.value.trim();

    if(!/^[A-Za-z ]+$/.test(name)){
        txtNameElm.focus();
        txtNameElm.select();
        return;
    }else if(!/^\d{3}-\d{7}$/.test(contact)){
        txtContactElm.focus();
        txtContactElm.select();
        return;
    }
    fetch(`${API_BASE_URL}/teachers` , {
        
    }).catch(err => alert("Something went wrong, try again later"));
});

function loadAllTeachers(){

}