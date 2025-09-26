  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;

    if (name === "" || email === "") {
      alert("Please fill in both Name and Email.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);

    alert("Form submitted! Check console.");

    form.reset();
  });
