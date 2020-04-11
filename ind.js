var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var currID=1;
function addCategory(){
  let categories = document.getElementById("categories");
  let clone = categories.firstElementChild.cloneNode(true);
  let inps=clone.getElementsByTagName("input");
  let t=clone.getElementsByTagName("textarea");
  let btn=clone.getElementsByTagName("button");
  let sp=clone.getElementsByTagName("span");
  let sl=clone.getElementsByTagName("select");
  let h=clone.getElementsByTagName("h3");
  //clone.setAttribute("id", currID);
  sp[0].setAttribute("id",currID);
  sl[0].setAttribute("id",currID);
  clone.setAttribute("id",currID);
  btn[0].setAttribute("id",currID);
  inps[0].setAttribute("id",currID);
  inps[1].setAttribute("id",currID);
  btn[0].style.display="inline";
  currID++;
  inps[0].value="";
  t[0].value="";
  inps[1].value="";
  h[0].innerHTML="Category: 0";
  categories.appendChild(clone);
  var x = document.getElementsByClassName("category-box");
  for(var i=0;i<x.length-1;i++){
    x[i].getElementsByTagName("div")[1].style.display="none";
    x[i].getElementsByTagName("div")[0].style.display="block";
   // console.log(i);
  }
  x[x.length-1].getElementsByTagName("div")[1].style.display="block";
  x[x.length-1].getElementsByTagName("div")[0].style.display="none";
}

function showFull(idd){
  var x = document.getElementsByClassName("category-box");
  for(var i=0;i<x.length;i++){
    if(x[i].id==idd){
      x[i].getElementsByTagName("div")[1].style.display="block";
      x[i].getElementsByTagName("div")[0].style.display="none";
    }
    else{
    x[i].getElementsByTagName("div")[1].style.display="none";
    x[i].getElementsByTagName("div")[0].style.display="block";
    }
  }
}

function updateSummary(idd){
  var x = document.getElementsByClassName("category-box");
  var tot=0;
  for(var i=0;i<x.length;i++){
      var ip2;
      ip2=x[i].getElementsByTagName("input")[1].value;
      if(!ip2){
        ip2=0;
      }
      ip2=parseInt(ip2);
      tot+=ip2;
    }
    var e=x[0].getElementsByTagName("select")[0];
    var curr=e.options[e.selectedIndex].value;

    document.getElementById("total").innerHTML="Total Price: "+curr+tot;

  for(var i=0;i<x.length;i++){
    if(x[i].id==idd){
      var ip1;
      ip1=x[i].getElementsByTagName("input")[0].value;
      if(!ip1){
        ip1="Category"
      }
      var ip2;
      ip2=x[i].getElementsByTagName("input")[1].value;
      if(!ip2){
        ip2="0";
      }
      console.log(ip1);
      console.log(ip2);
      x[i].getElementsByTagName("h3")[0].innerHTML=ip1+ ' : '+curr+ ip2;
     // x[i].getElementsByTagName("h3")[0].append(ip2);
      break;
    }
  }
}

function removeCategory(idd){
  console.log(idd);
  //console.log("HI");
  var x = document.getElementsByClassName("category-box");
  let dlt;
  for(var i=0;i<x.length;i++){
    if(x[i].id==idd){
      dlt=x[i];
      break;
    }
  }
  let cat = document.getElementById("categories");
  cat.removeChild(dlt);
  if(x.length==1){
    x[0].getElementsByTagName("div")[1].style.display="block";
    x[0].getElementsByTagName("div")[0].style.display="none";
  }else{
    x[x.length-1].getElementsByTagName("div")[1].style.display="block";
    x[x.length-1].getElementsByTagName("div")[0].style.display="none";
  }
  var tot=0;
  for(var i=0;i<x.length;i++){
      var ip2;
      ip2=x[i].getElementsByTagName("input")[1].value;
      if(!ip2){
        ip2=0;
      }
      ip2=parseInt(ip2);
      tot+=ip2;
    }
    var e=x[0].getElementsByTagName("select")[0];
    var curr=e.options[e.selectedIndex].value;
    document.getElementById("total").innerHTML="Total Price: "+curr+tot;

}

function changeBtn(){
  var x = document.getElementsByClassName("tab");
  var y = x[currentTab].getElementsByTagName("input");
  if(y[0].checked){
    document.getElementById("nextBtn").innerHTML = "Next";
  }else if(y[1].checked){
    document.getElementById("nextBtn").innerHTML = "Done";
  }
}

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1) || n== (x.length-2)) {
    document.getElementById("nextBtn").innerHTML = "Done";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
 

  if(n==3){
    document.getElementById("total").style.display="inline";
  }else{
    document.getElementById("total").style.display="none";
  }
}
  //... and run a function that will display the correct step indicator:
  //fixStepIndicator(n)

/*
function addCategory{
  let categories = document.getElementById("categories");
  let clone = categories.firstElementChild.cloneNode(true);
  categories.appendChild(clone);
}
*/

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  if(currentTab==0){

  var y = x[currentTab].getElementsByTagName("input");
  if(y[0].checked){
    currentTab = 1;
  }else if(y[1].checked){
    closemdl();
  }
    
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
    return;
  }
  if(currentTab==1 && n==1){
    var x,y;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");   
    if(y[0].checked){
      currentTab=2;
    }
    else{
      currentTab=3;
    }
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
    return;
  }
  if(currentTab==1 && n==-1){
    currentTab = 0;
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
  }
  if(currentTab==2 && n==-1){
    currentTab=1;
    showTab(currentTab);
  }
  if(currentTab==2 && n==1){
    closemdl();
    currentTab=0;
    showTab(currentTab);
    return false;
  }
  if(currentTab==3 && n==-1){
    currentTab=1;
    showTab(currentTab);
  }
  if(currentTab==3 && n==1){
   // document.getElementById("regForm").submit();
   closemdl();
   currentTab=0;
   showTab(currentTab);
   return false;
  }
  
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
 var rd=0;
 var nr=0;
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      valid = false;
    }
    if(y[i].type=="radio"){
      nr++;
    }
    if(y[i].checked){
      rd++;
    }
  }
  if(nr>0 && rd==0){
    valid=false;
  }
  return valid; 
}

function slct(i){
  
  if(i==1){
    document.getElementById("rd1").checked=true;
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  else if(i==2){
    document.getElementById("rd2").checked=true;
    document.getElementById("nextBtn").innerHTML = "Done";
  }
}

function sl(i){
  if(i==3){
    document.getElementById("rd3").checked=true;
  }
  else if(i==4){
    document.getElementById("rd4").checked=true;
  }
}

function sll(i){
  if(i==5){
    document.getElementById("rd5").checked=true;
  }
  else if(i==6){
    document.getElementById("rd6").checked=true;
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closemdl() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}