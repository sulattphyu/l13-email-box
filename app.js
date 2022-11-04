const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemailcontainer = document.querySelector('.email-container');


//cursor cha
getemail.focus();
getemail.addEventListener('keyup',function(e){
    createemaillist(e.target.value);
    // createemaillist(this.value)

});

function createemaillist(inputtext){
    // console.log(inputtext);

    //split by(",")
    // const emitems = inputtext.split(",")
    // console.log(emitems);

    //remove empty
    // const emitems = inputtext.split(',').filter(remempty=>remempty.trim() !== '');
    // console.log(emitems);

    //remove space/empty
    const emitems = inputtext.split(',').filter(remempty=>remempty.trim() !== '').map(reempty=>reempty.trim());
    // console.log(emitems);
    getemailcontainer.innerHTML = '';

    emitems.forEach(function(emitem){
        // console.log(emitem);

        const setnewspan = document.createElement('span');
        setnewspan.textContent = emitem;
        setnewspan.classList.add('email-item');
        // console.log(setnewspan);

        getemailcontainer.appendChild(setnewspan);
        
    });
}

getbtn.addEventListener('click',function(e){
    sendemail();
    e.preventDefault();

});
function sendemail(){
    // console.log('Hay i m working')
    const gettxtvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');
    // console.log(getaddresses);

    var persons = [];
    

       if(getaddresses.length > 0 && gettxtvalue){
        getaddresses.forEach(function(getaddress){
            persons.push({
                email: getaddress.textContent,
                message: gettxtvalue
            });
            console.log(persons);

        });
        
       }else{
        window.alert('Enter Message');
        gettextarea.focus();

       }
       
   

    
    
}