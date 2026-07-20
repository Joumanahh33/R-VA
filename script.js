const scriptURL = "https://script.google.com/macros/s/AKfycbxuyXbcIjiguYKH6eAgKzsNujsgnv8v8QCQWVOOM6AXygyrbBmJj_gKdJ0zl2OHHq-Z3w/exec";

function sendOrder(name, phone, address, products) {
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      products: products
    })
  })
  .then(response => alert("تم إرسال الطلب بنجاح ✅"))
  .catch(error => alert("حدث خطأ ❌"));
}
