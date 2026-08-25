let username = localStorage.getItem("studentUser");
if(username == null)
{
    window.location.href = "login.html";
}

window.onload = async function()
{
    let response = await fetch("http://localhost:5000/api/studentdata/" + username);
    let student = await response.json();

    let card = document.getElementById("studentCard");
    card.innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <td>${student.name}</td>
            </tr>
            <tr>
                <th>Roll Number</th>
                <td>${student.rollNo}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${student.email}</td>
            </tr>
            <tr>
                <th>Course</th>
                <td>${student.course}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${student.phone}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>${student.address}</td>
            </tr>
            <tr>
                <th>Marks</th>
                <td>${student.marks}</td>
            </tr>
            <tr>
                <th>Attendance</th>
                <td>${student.attendance}%</td>
            </tr>
            <tr>
                <th>Result</th>
                <td>${student.result}</td>
            </tr>
        </table>
    `;
}

function logout()
{
    localStorage.removeItem("studentUser");
    window.location.href = "login.html";
}