import { createSlice } from "@reduxjs/toolkit"
const Parties =
{
    RJP: 0,
    HONGRESS: 0,
    PAAP: 0,
    TCM: 0,
    NOTA: 0
}



const VoteSlice = createSlice({
    name: "vote",
    initialState: Parties,
    reducers: {
        RJP: (state) => {
            state.RJP += 1
        },
        HONGRESS: (state) => { state.HONGRESS += 1 },
        PAAP: (state) => { state.PAAP += 1 },
        TCM: (state) => { state.TCM += 1 },
        NOTA: (state) => { state.NOTA += 1 }

    }
})

export const { RJP,HONGRESS,PAAP,TCM,NOTA } = VoteSlice.actions
export const VoteReducer = VoteSlice.reducer