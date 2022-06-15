
const initialState = {
    formData: {
        login: '',
        password: '',
        remembered: false
    }

}

const formikReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default formikReducer