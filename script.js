// var selectedRow = null
// displayUsers();

// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//         displayUsers();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["fullName"] = document.getElementById("fullName").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["password"] = document.getElementById("password").value;
//     formData["city"] = document.getElementById("city").value;

//     let editIndex = document.getElementById("editIndex").value;
//     if (editIndex !== "") {
//         formData["editIndex"] = document.getElementById("editIndex").value;
//     }

//     return formData;
// }

// function insertNewRecord(data) {
//     const userArr = JSON.parse(localStorage.getItem('userData')) ?? [];
//     userArr.push(data);
//     localStorage.setItem('userData',JSON.stringify(userArr));
// }

// function resetForm() {
//     document.getElementById("editIndex").value = "";
//     document.getElementById("fullName").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("city").value = "";
//     selectedRow = null;
// }

// function displayUsers() {
//     var users = JSON.parse(localStorage.getItem("userData")) ?? [];
//     var tableBody = document.querySelector("#list tbody");
//     tableBody.innerHTML = "";
//     users.forEach(function (user, index) {
//         var row = tableBody.insertRow();
//         row.insertCell(0).textContent = user.fullName;
//         row.insertCell(1).textContent = user.email;
//         row.insertCell(2).textContent = user.password;
//         row.insertCell(3).textContent = user.city;

//         var actionsCell = row.insertCell(4);
//         actionsCell.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
//     });
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     let rowIndex = selectedRow.rowIndex - 1;
//     document.getElementById("editIndex").value = rowIndex;
//     document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("email").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("password").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("city").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//     const userArr = JSON.parse(localStorage.getItem('userData')) ?? [];
//     let editIndex = formData.editIndex;
//     userArr[editIndex] = formData;
//     localStorage.setItem('userData',JSON.stringify(userArr));
// }

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("list").deleteRow(row.rowIndex);

//         let userArr = JSON.parse(localStorage.getItem('userData')) ?? [];
//         userArr.splice(row.rowIndex - 1, 1);
//         localStorage.setItem('userData', JSON.stringify(userArr));

//         resetForm();
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById("fullName").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }








// Updated Code for complete CRUD

function onFormSubmit() {
    var formData = readFormData();
    var editIndex = localStorage.getItem("editIndex");
    if (editIndex === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData, editIndex);
        localStorage.removeItem("editIndex"); // Clear editIndex after updating
    }

    resetForm();
    window.location.href = "index.html"; // Redirect to index.html after submission
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["city"] = document.getElementById("city").value;

    return formData;
}

function insertNewRecord(data) {
    const userArr = JSON.parse(localStorage.getItem('userData')) ?? [];
    userArr.push(data);
    localStorage.setItem('userData', JSON.stringify(userArr));
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("city").value = "";
}

function populateFormForEdit() {
    var editIndex = localStorage.getItem("editIndex");
    if (editIndex !== null) {
        var users = JSON.parse(localStorage.getItem("userData")) ?? [];
        var user = users[editIndex];
        document.getElementById("fullName").value = user.fullName;
        document.getElementById("email").value = user.email;
        document.getElementById("password").value = user.password;
        document.getElementById("city").value = user.city;
        document.getElementById("editIndex").value = editIndex;
    }
}

function updateRecord(formData, editIndex) {
    var users = JSON.parse(localStorage.getItem("userData")) ?? [];
    users[editIndex] = formData;
    localStorage.setItem("userData", JSON.stringify(users));
}
populateFormForEdit();
// resetForm();