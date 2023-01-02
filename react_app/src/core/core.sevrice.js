
export const RegisterTeam = (teamName) => {

    let obj = {
        teamName: teamName,
        score: Math.floor(Math.random() * 100),
    }


    fetch('http://localhost:5000/register-team', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ obj })
    })
        .then((res) => console.log(res.data))
        .catch((e) => {
            console.error(e)
        })

}




export async function getListOfTeam() {

}