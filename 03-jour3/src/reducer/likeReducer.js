export function reducer(state, action){
    switch(action){
        case "AUGMENTER":
            return state + 1
        case "APPRECIER":
            return state + 5 ;
        case "DIMINUER":
            return state - 1;
        case "DETESTE":
            return state - 10
        default : 
            return state
    }
}