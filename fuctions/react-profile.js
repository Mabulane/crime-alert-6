
const closePopup =document.querySelector('#updateBtn');
//    REAPET POPUP CALLER COZ IF its one,, its  doesnt other
const openPopup1 =document.querySelector('.callPopUp1');
const openPopup2 =document.querySelector('.callPopUp2');
const openPopup3 =document.querySelector('.callPopUp3');
const openPopup4 =document.querySelector('.callPopUp4');
const openPopup5 =document.querySelector('.callPopUp5');

const UpdateThis =document.querySelector('#edit');

//=============close pop up=======================================================
openPopup1.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.popUp').style.display="flex";
    closePopup.addEventListener('click',(e)=>{
            e.preventDefault();
            // lodear
            
      
                if(UpdateThis.value !=""){
                  auth.onAuthStateChanged(user => {
                  if(user){
                            //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                            db.collection('Users').doc(user.uid).update({
                           // db.collection('Users').doc(userID).update({
                            first_name : UpdateThis.value
                            /*last_name :  signUp['last-name'].value,
                            province :  signUp['province'].value,
                            contact :  signUp['phone-no'].value,
                            gender :   signUp['gender-type'].value,*/
                    }).then(()=>{
                      document.querySelector('.popUp').style.display="none";   
                    });
                }
            });
          }else{
            document.querySelector('.popUp').style.display="none";   
        }
      });
});

openPopup2.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
      if(UpdateThis.value !=""){
        auth.onAuthStateChanged(user => {
        if(user){
                  //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                  db.collection('Users').doc(user.uid).update({
                // db.collection('Users').doc(userID).update({
                  //last_name : UpdateThis.value
                  last_name :  UpdateThis.value
                  /*province :  signUp['province'].value,
                  contact :  signUp['phone-no'].value,
                  gender :   signUp['gender-type'].value,*/
          }).then(()=>{
            document.querySelector('.popUp').style.display="none";   
          });
      }
    });
    }else{
    document.querySelector('.popUp').style.display="none";   
    }
});
});




openPopup3.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
  if(UpdateThis.value !=""){
    auth.onAuthStateChanged(user => {
        if(user){
                  //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                  db.collection('Users').doc(user.uid).update({
                // db.collection('Users').doc(userID).update({
                 // first_name : UpdateThis.value
                  //last_name :  signUp['last-name'].value,
                 province :  UpdateThis.value
                 /* contact :  signUp['phone-no'].value,
                  gender :   signUp['gender-type'].value,*/
          }).then(()=>{
            document.querySelector('.popUp').style.display="none";   
          });
      }
    });
    }else{
    document.querySelector('.popUp').style.display="none";   
    }
    });
  });


openPopup4.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
  if(UpdateThis.value !=""){
    auth.onAuthStateChanged(user => {
    if(user){
              //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
              db.collection('Users').doc(user.uid).update({
             // db.collection('Users').doc(userID).update({
              //first_name : UpdateThis.value
              //last_name :  signUp['last-name'].value,
             // province :  signUp['province'].value,
              contact :  UpdateThis.value
              //gender :   signUp['gender-type'].value,
      }).then(()=>{
        document.querySelector('.popUp').style.display="none";   
      });
  }
});
}else{
document.querySelector('.popUp').style.display="none";   
}
});
});

openPopup5.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
      if(UpdateThis.value !=""){
        auth.onAuthStateChanged(user => {
        if(user){
                  //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                  db.collection('Users').doc(user.uid).update({
                // db.collection('Users').doc(userID).update({
                /* first_name : UpdateThis.value
                  last_name :  signUp['last-name'].value,
                  province :  signUp['province'].value,
                  contact :  signUp['phone-no'].value,*/
                  gender :   UpdateThis.value
          }).then(()=>{
            document.querySelector('.popUp').style.display="none";   
          });
      }
    });
    }else{
    document.querySelector('.popUp').style.display="none";   
    }
    });
});



//=============close pop up=======================================================
closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});
/*  closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});       alertGeoLocation
*/




//==  End close pop up=======================================================
//https://firebase.google.com/docs/reference/js/firebase.User#updateProfile
//auth/wrong-password

