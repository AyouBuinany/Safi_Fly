
$(document).ready(function() {
    
    $('#reserve').click(function(){
        if($('#adults').val()<=0 && $('#children').val()<=0){ 
            alert('please the number of children and adults must be greater than 0');
        }
    });


 // setting the total price 
 $('#reserve').click(function(){
     //setting the price of travel_class
    var class_price;
     if($('#travel_class').val()==='First Class'){
        class_price = 500 ;
     }
    else if($('#travel_class').val()==='Bussness Class'){
        class_price = 400 ;
    }
    else if($('#travel_class').val()==='Econemy Class'){
        class_price = 300 ;
    }
    else{
        class_price = 0 ;
    }
     //setting the price of each Adult
     var adults_price=0;
     var adult = $('#adults').val();
     const adult_price = $("#price").val();
     adults_price = adult * adult_price; 
      //setting the price of each child
      var children_price=0;
      var child = $('#children').val();
      const child_price = adult_price/2;
      children_price = child * child_price; 
    //total price
    var total_price=0;
    total_price = class_price + adults_price + children_price ;
    console.log("total_price" + total_price);
    //round or one way trip
    var final_price=0;
   
        final_price=total_price + ' DH' ;
        $('#price').val(final_price);
});

});
function typeVoyage(voyage){
    if(voyage.id=="Aller-Simple"){
      document.getElementById('returning').disabled=true;
    }else if(voyage.id=="Aller-Retour"){
      document.getElementById('returning').disabled=false;
     
    }
  }

$("#showEscale").click(function(){
  $("#show").click();
})

  //Ajax
  function showResult(id) {
      var xhttp= new XMLHttpRequest();
      var modelBody=document.getElementById("getModel");
     // console.log("modelBody" + modelBody );
     xhttp.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
        var  escale=JSON.parse(xhttp.responseText);
        modelBody.innerHTML="hello";

        var keyl;
        if(escale.length>0){
        for(keyl in escale){
         modelBody.innerHTML +="   <div class='row rounded text-center voyage-item w-100'> <div class='col-md-12 text-blue d-flex p-0 info-voyage'><div class='w-100 h-100 flex-center flex-column'>";
       
        
          modelBody.innerHTML  +="<span class='text-red'>Premier escale</span><h3 class='font-weight-bold text-blue ville-depart'>" + escale[keyl].stopover_name + "</h3> <div> <span class='text-red'>Heures :</span><h4 class='vol-time'>" + escale[keyl].hours + " h </h4></div> </div></div></div><hr>";
        }
        }else{
          modelBody.innerHTML  +=" <h3 class='font-weight-bold text-blue ville-depart'>Sorry Not find escals </div>";
        }
        }
    }
      xhttp.open( "GET", `http://127.0.0.1:8000/vole/${id}`, true );
      xhttp.send();
  }
