function logout(){

    let choice = confirm("Are you sure you want to logout?");

    if(choice){
        window.location.href = "login.html";
    }
}