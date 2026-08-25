const API = "http://localhost:5000/api/records";

window.onload = async function()
{
    let response = await fetch(API);
    let records = await response.json();

    let table = document.getElementById("studentTable");

    while(table.rows.length > 1)
        table.deleteRow(1);

    records.forEach((student, index) =>
    {
        let row = table.insertRow(-1);
        row.setAttribute("data-id", student._id);
        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.rollNo;
        row.insertCell(3).innerHTML = student.email;
        row.insertCell(4).innerHTML = student.course;
        row.insertCell(5).innerHTML = student.phone;
        row.insertCell(6).innerHTML = student.address;
        row.insertCell(7).innerHTML = student.marks;
        row.insertCell(8).innerHTML = student.attendance;
        row.insertCell(9).innerHTML = student.result;
        row.insertCell(10).innerHTML =
            '<button onclick="editStudent(this)">Edit</button> ' +
            '<button onclick="deleteStudent(this)">Delete</button>';
    });

    updateStudentCount();
}

async function addStudent()
{
    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let marks = document.getElementById("marks").value;
    let attendance = document.getElementById("attendance").value;
    let result = marks >= 33 ? "Pass" : "Fail";

    if(name == "" || rollNo == "" || email == "" ||
       course == "" || phone == "" || address == "")
    {
        alert("Please fill all fields");
        return;
    }

    let data = {name, rollNo, email, course, phone, address, marks, attendance, result};

    let response = await fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    let msg = await response.text();
    alert(msg);

    clearFields();
    window.onload();
}

async function deleteStudent(button)
{
    let choice = confirm("Are you sure you want to delete this student?");

    if(choice)
    {
        let row = button.parentElement.parentElement;
        let id = row.getAttribute("data-id");

        let response = await fetch(API + "/" + id, {
            method: "DELETE"
        });

        let msg = await response.text();
        alert(msg);

        window.onload();
    }
}

async function editStudent(button)
{
    let row = button.parentElement.parentElement;
    let id = row.getAttribute("data-id");

    document.getElementById("name").value = row.cells[1].innerText;
    document.getElementById("rollNo").value = row.cells[2].innerText;
    document.getElementById("email").value = row.cells[3].innerText;
    document.getElementById("course").value = row.cells[4].innerText;
    document.getElementById("phone").value = row.cells[5].innerText;
    document.getElementById("address").value = row.cells[6].innerText;
    document.getElementById("marks").value = row.cells[7].innerText;
    document.getElementById("attendance").value = row.cells[8].innerText;

    let addBtn = document.querySelector('button[onclick="addStudent()"]');
    addBtn.innerText = "Update Student";
    addBtn.setAttribute("onclick", "updateStudent('" + id + "')");
}

async function updateStudent(id)
{
    let marks = document.getElementById("marks").value;
    let result = marks >= 33 ? "Pass" : "Fail";

    let data = {
        name: document.getElementById("name").value,
        rollNo: document.getElementById("rollNo").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        marks: marks,
        attendance: document.getElementById("attendance").value,
        result: result
    };

    let response = await fetch(API + "/" + id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    let msg = await response.text();
    alert(msg);

    let addBtn = document.querySelector('button[onclick^="updateStudent"]');
    addBtn.innerText = "Add Student";
    addBtn.setAttribute("onclick", "addStudent()");

    clearFields();
    window.onload();
}

function clearFields()
{
    document.getElementById("name").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("attendance").value = "";
}

function searchStudent()
{
    let input = document.getElementById("search").value.toLowerCase();
    let table = document.getElementById("studentTable");
    let rows = table.getElementsByTagName("tr");

    for(let i = 1; i < rows.length; i++)
    {
        let name = rows[i].cells[1].innerText.toLowerCase();
        let rollNo = rows[i].cells[2].innerText.toLowerCase();

        if(name.includes(input) || rollNo.includes(input))
            rows[i].style.display = "";
        else
            rows[i].style.display = "none";
    }
}

function updateStudentCount()
{
    let table = document.getElementById("studentTable");
    let total = table.rows.length - 1;
    document.getElementById("studentCount").innerText = "Total Students: " + total;
}
function printTable()
{
    window.print();
}