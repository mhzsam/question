import axios from 'axios'

export const state = () => {
    return {
        data: [],
    }
}


export const getters = {
    Get_Data(state) {
        return state.data
    },
}

export const mutations = {
    Set_Data(state, payload) {
        state.data = payload
    }

}



export const actions = {
    FetchData({ commit }) {
        return axios({
            method: 'get',
            url: "http://vistaapi.citnog.ir/api/v1/customer/question/question/",

        }).then(function(response) {
            commit('Set_Data', response.data)
            console.log("data", response.data)

        }).catch(() => {
            console.log("error")
        })

    },
}