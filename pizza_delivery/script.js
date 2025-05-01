document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pizzas = document.querySelectorAll('input[name="pizza"]:checked');
  
    if (pizzas.length === 0) {
      alert("Please select at least one pizza.");
      return;
    }
  
    let total = 0;
    let items = [];
  
    pizzas.forEach(pizza => {
      items.push(pizza.value);
      total += parseInt(pizza.dataset.price);
    });
  
    const summary = `
      <h3>Order Summary</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Pizzas Ordered:</strong> ${items.join(", ")}</p>
      <p><strong>Total Amount:</strong> ₹${total}</p>
      <p>✅ Your pizza is on the way!</p>
    `;
  
    document.getElementById("order-summary").innerHTML = summary;
  
    // Optionally reset the form
    document.getElementById("order-form").reset();
  });
  