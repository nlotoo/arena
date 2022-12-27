export const FinalCollum = (winersData) => {

    let counter = 0;
    let game = {};
    let winers = [];
    let playerCounter = 1;

    console.log(winersData.props);
    winersData.props.map((a, i) => {
        let arr = Object.entries(a)

        console.log("arrcheto " + arr)
        console.log(a)

        if (arr[1][1] > arr[3][1])
        {
            game[`player${playerCounter}.1`] = arr[0][1];
            game[`score${playerCounter}.1`] = arr[1][1];
            counter++;
            playerCounter++;
        } else
        {
            game[`player${playerCounter}.1`] = arr[2][1];
            game[`score${playerCounter}.1`] = arr[3][1];
            counter++;
            playerCounter++;
        }

        if (counter === 2)
        {
            counter = 0;
            winers.push(game);
            game = {}
        }

    })
    console.log(winers)
    return (
        <>
            <div className="champion">
                <div className="semis-l">
                    <i className="fa fa-trophy"></i>
                    <div className="round-details">championship <br /><span className="date">March 30 - Apr. 1</span></div>
                    {
                        winers.map((x, i) => {
                            let arrElement = Object.entries(x)
                            return (

                                <ul className="matchup championship">
                                    <li className="team team-top">{ arrElement[0][1]}<span className="score">{arrElement[1][1]}</span></li>
                                    <li className="team team-bottom">{arrElement[2][1]}<span className="score">{arrElement[3][1]}</span></li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
