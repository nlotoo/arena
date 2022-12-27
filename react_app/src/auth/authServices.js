


export const loginUser = (obj) => {

    return fetch("http://localhost:5000/sing-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("UserName", data.username);
            localStorage.setItem("userID", data.userID);
            localStorage.setItem("token", data.token);
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}



export const RegisterUser = (username, password) => {


    fetch('http://localhost:5000/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
        .then((res) => console.log(res.data))
        .catch((e) => {
            console.error(e)
        })

}