export const fetchTravellerList = (state, action) => ({
    ...state,
    loading: action.payload
})

export const setTravellerList = (state, action) => ({
    ...state,
    travellerList: action.payload
})

export const handleError = (state, action) => ({
    ...state,
    error: true,
    errorText: action.payload
})

export const changeLoaderState = (state, action) => ({
    ...state,
    loading: action.payload
})

export const fetchListAction = () => {
    return ({
        type: 'FETCH_TRAVELLER_LIST'
    })
}

export const changeListData = (data) => {
    return ({
        type: 'FETCH_TRAVELLER_LIST_SUCCESS',
        payload: data
    })
}

export const setSelectedTraveller = (state, action) => ({
    ...state,
    selectedTraveller: action.payload
})

export const setSelectedTravellerAction = (data) => ({
    type: 'SET_SELECTED_TRAVELLER',
    payload: data
})