function login()
{
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(role == "")
    {
        document.getElementById("message").innerText = "Please select a role!";
        return;
    }
    if(role == "admin")
    {
        if(username == "Shreya" && password == "SMS2026")
        {
            window.location.href = "dashboard.html";
        }
        else
        {
            window.location.href = "invalid.html";
        }
    }
    else if(role == "student")
    {
        studentLogin(username, password);
    }
}

async function studentLogin(username, password)
{
    let response = await fetch("http://localhost:5000/api/studentlogin", 
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    });

    let msg = await response.text();

    if(msg == "Login Success")
    {
        localStorage.setItem("studentUser", username);
        window.location.href = "student.html";
    }
    else
    {
        document.getElementById("message").innerText = "Invalid Student Credentials!";
    }
}