// أنشئ المصفوفة تحت هذا الكومنت

let orders = [];

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  let newOrdern = {name,id,phone,order}

  // أدرج الكائن إلى المصفوفة
  orders.push(newOrdern )

  // طبق الخطوة 7 تحت هذا الكومنت
  load()
}

function load() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  
  // طبّق الخطوة 6 تحت هذا الكومنت
orders.forEach(item => {
  container.innerHTML +=     `<div><h1>${item.name} - ${item.id}</h1><h3>${item.order}</h3></div>`
});
}



function removeitm(){

  const element = document.getElementById("container")
  element.remove();
}
