import { FinalCollum } from "./final/FinalCollum";

export const CollumTree = (winersData) => {

    let counter = 0;
    let game = {};
    let winers = [];
    let playerCounter = 1;
    winersData.props.props.map((a, i) => {
        let arr = Object.entries(a)

        //console.log("arrcheto " + arr)
       // console.log(a)
       // console.log("Are e "+arr[0][0])

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


    return (
        <>
            <div className="round round-three">
                <div className="round-details">Round 3<br /><span className="date">March 22</span></div>
                {
                    winers.map((x, i) => {
                       // console.log(x)
                        let arrElement = Object.entries(x)
                       // console.log(arrElement)
                        return (
                            <ul className="matchup">
                                <li className="team team-top">&nbsp;{arrElement[0][1]}<span className="score">&nbsp;{arrElement[1][1]}</span></li>
                                <li className="team team-bottom">&nbsp;{arrElement[2][1]}<span className="score">&nbsp;{arrElement[3][1]}</span></li>
                            </ul>
                        )
                        
                    })
                    
                }


            </div>
            <FinalCollum props={winers} />
        </>
    );
}
