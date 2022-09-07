let orders = [];

function addOrder() {
  let website = document.getElementById("website").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  // أنشئ كائن newOrder
  let newOrder = {
    website: website,
    username: username,
    password: password,
    email: email,
  };
  // أدرج الكائن إلى المصفوفة
  orders.push(newOrder);
  // طبق الخطوة 7 تحت هذا الكومنت
  load();
}

function load() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  // طبّق الخطوة 6 تحت هذا الكومنت
  orders.forEach((item) => {
    container.innerHTML += `<div><h1>${item.website} - ${item.username}</h1><h3>${item.password} - ${item.email}</h3></div>`;
  });
}
