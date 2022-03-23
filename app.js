//get the submit btn and add the event listener
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", addContacts);

function addContacts(e) {
  // function Contact(firstName, lastName, address, county, email, website) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.address = address;
  //   this.county = county;
  //   this.email = email;
  //   this.website = website
  // }

  // Contact.prototype.getFullContacts = function() {
  //   return this.address + "," + this.county;
  // }

  // Contact.prototype.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let county = document.getElementById("county").value;
  let email = document.getElementById("email").value;
  let website = document.getElementById("website").value;

  let tableData = document.getElementById("data");


  // let contact1 = new Contact(firstName, lastName, address, county, email, website);

  // console.log(contact1);

  

  let tr = document.createElement("tr");
  let tdFName = document.createElement("td");
  let tdLName = document.createElement("td");
  let tdAddress = document.createElement("td");
  let tdCounty = document.createElement("td");
  let tdEmail = document.createElement("td");
  let tdWebsite = document.createElement("td");


  tdFName.textContent = firstName;
  tdLName.textContent= lastName;
  tdAddress.textContent = address;
  tdCounty.textContent = county;
  tdEmail.textContent = email;
  tdWebsite.textContent = website;

  tr.appendChild(tdFName);
  tr.appendChild(tdLName);
  tr.appendChild(tdAddress);
  tr.appendChild(tdCounty);
  tr.appendChild(tdEmail);
  tr.appendChild(tdWebsite);

  let delBtn = document.createElement("button");
  delBtn.classList.add ("btn", "delete-button");
  delBtn.textContent = "Delete";
  tr.appendChild(delBtn);

  tableData.appendChild(tr);

  delBtn.addEventListener("click", deleteContact);

  function deleteContact (ev) {
    let parentEl = ev.target.parentElement;
    console.log(parentEl);

    tableData.removeChild(parentEl)
    
    ev.preventDefault
  }


  
  // let list = document.getElementById("contacts");
  // let li = document.createElement("li");
  // li.className = "contact-list";
  // let contacts = document.createTextNode(`${contact1.firstName} ${contact1.lastName}`);
  // li.appendChild(contacts);
  // list.appendChild(li);

  //once contacts are clicked on show the full address
  // li.addEventListener("click", showList);
  // function showList(e) {
  //   let showList = document.getElementById("show-list");
  //   showList.style.display = "block";

  //   let userName = document.getElementById("user-name");
  //   let userAddress = document.getElementById("user-address");

  //   let fullName = contact1.getFullName();
  //   userName.append(fullName);

  //   let fullContacts = contact1.getFullContacts();
  //   userAddress.append(fullContacts);

  //   e.preventDefault();
  // }

  e.preventDefault()
}

