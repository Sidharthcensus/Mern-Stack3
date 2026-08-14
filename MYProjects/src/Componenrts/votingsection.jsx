import { useNavigate } from "react-router-dom";
import Header from "./Header";
const VotingSection=()=>{
    const navigate=useNavigate()
return(
  <>
    <Header/>
  <div className="d-flex justify-content-center">
  
  <div onClick={()=>navigate("/voting")} className="border w-25 text-center p-4 bg-primary-subtle">
    <h4>Enter Voting Booth</h4>
  </div>
  </div>
  </>
)
}
export default VotingSection;