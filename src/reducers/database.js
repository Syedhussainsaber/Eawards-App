
export const reducer = async(state,action)=>{

    if(action.type ==='UPDATE_MOVIE'){
return {
    ...state,
    currentMovie:[action.payload]
}
}

if (action.type === 'REVIEW_MOVIE'){
    return{
        ...state,
        reviewMovie:action.payload
    }
}

if (action.type === 'REVIEW_NEWS'){
    return{
        ...state,
        reviewNews:action.payload
    }
}


if(action.type === 'UPLOAD_COMMENTS'){
    return {
        ...state,
        comments:[action.payload]
    }
}


return state
}