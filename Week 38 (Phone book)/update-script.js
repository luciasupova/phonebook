window.addEventListener("load", async function () {
  const id = getIdFormUrl();
  const contact = await getSpecificContact(id);
  fillInTheForm(contact);
});

function getIdFormUrl() {
  const location = window.location.toString(); //needed to add tostring to make it work
  const splitQuestionmark = location.split("?"); // takes the string, and splits whenever finds "?"
  const routeParams = splitQuestionmark[1];
  const splitIdParam = routeParams.split("=");
  return splitIdParam[1]; // cuz you need this kind of info for further functions
}

function fillInTheForm(contact) {
  document.querySelector("#name").value = contact.name;
  document.querySelector("#surname").value = contact.surname;
  document.querySelector("#company").value = contact.company;
  document.querySelector("#phone").value = contact.phone;
  document.querySelector("#email").value = contact.email;
}

const form = document.querySelector("#new-contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi, form submitted");

  const contact = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    company: document.querySelector("#company").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };

  const id = getIdFormUrl();

  putSpecificContact(id, contact);
});
