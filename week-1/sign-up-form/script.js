let form = document.querySelector("form");

const handleFormSubmit = (e) => {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;
  let resultView = document.querySelector("#result-view");

  e.preventDefault();
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
  };

  const userDataAsJson = JSON.stringify(userData);

  console.log(userData);
  console.log(
    "================================================================="
  );
  console.log(userDataAsJson);

  resultView.innerHTML = `<li>First Name: ${userData.firstName}</li><li>Last Name: ${userData.lastName}</li><li>Email: ${userData.email}</li><li>Age: ${userData.age}</li>`;
};
form.addEventListener("submit", handleFormSubmit);
