const form = document.querySelector("#new-contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const contact = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    company: document.querySelector("#company").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  }; // save the stuff the user writes in the object

  const response = await postData(contact);
  console.log(response); // takes the data and post it to backend

  if (response.status === 200) {
    // if the object is safe - the form is sent, and it fills the template we did in html
    clearForm();
    const newNode = fillContactTemplate(contact); // in dept is in script.js -- the lined with cloning
    displayNewNode(newNode);
  }
});
