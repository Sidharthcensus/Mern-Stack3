import {useSelector,useDispatch} from "react-redux"
import {RJP,HONGRESS,PAAP,TCM,NOTA} from "../Votes/VoteReducer"

const VotingBooth=()=>{
    const RjpVotes=useSelector((state)=>state.vote.RJP)
    const HongressVotes=useSelector((state)=>state.vote.HONGRESS)
    const PaapVotes=useSelector((state)=>state.vote.PAAP)
    const TcmVotes=useSelector((state)=>state.vote.TCM)
    const NotaVotes=useSelector((state)=>state.vote.NOTA)
    const dispatch=useDispatch()
return(
    <div>
        <div className="text-center m-2">
            <h1>Voting Booth</h1>
            <p>Welcome to Voting Booth Please Click On the Button You Want to Vote </p>
        </div>
        <div className="border w-100 m-4 p-3 d-flex flex-column align-items-center">
            <button onClick={()=>dispatch(RJP())} className=" btn  btn-secondary w-50 m-2 p-3">RJP</button>
            <button onClick={()=>dispatch(HONGRESS())} className=" btn  btn-secondary w-50 m-2 p-3">Hongress</button>
            <button onClick={()=>dispatch(PAAP())} className=" btn  btn-secondary w-50 m-2 p-3">PAAP</button>
            <button onClick={()=>dispatch(TCM())} className=" btn  btn-secondary w-50 m-2 p-3">TCM</button>
            <button onClick={()=>dispatch(NOTA())} className=" btn  btn-secondary w-50 m-2 p-3">Nota</button>
        </div>
        <div>
           <p>RJP:{RjpVotes}</p>
           <p>Hongress:{HongressVotes}</p>
           <p>PAAP:{PaapVotes}</p>  
           <p>TCM:{TcmVotes}</p>
           <p>Nota:{NotaVotes}</p> 

        </div>
    </div>
)
}
export default VotingBooth;