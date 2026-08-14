// BravePay Academy starter interactions
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert("This button is ready to be connected to your signup/payment system.");
  });
});

console.log("BravePay Academy loaded successfully.");