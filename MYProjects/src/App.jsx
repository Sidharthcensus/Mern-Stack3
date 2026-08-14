
import VotingBooth from "./Componenrts/VotingBooth"
import VotingSection from "./Componenrts/votingsection"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <>

            <BrowserRouter>
               
                <Routes>
                    <Route path="/" element={  <VotingSection />} />
                    <Route path="/voting" element={<VotingBooth />} />
                </Routes>
            </BrowserRouter>
       


        </>
    )
}
export default App;