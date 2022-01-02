import axios from 'axios'

export const state = () => {
    return {
        data: [],
        reward: [],
    }
}


export const getters = {
    Get_Data(state) {
        return state.data
    },
    Get_reward(state) {
        return state.reward
    }
}

export const mutations = {
    Set_Data(state, payload) {
        state.data = payload
    },
    Set_Reward(state, payload) {
        state.reward = payload
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
    FetchReward({ commit, score }) {
        return axios({

                method: 'get',
                url: "http://vistaapi.citnog.ir/api/v1/customer/question/reward/?sum_answer_score=",


            })
            .then(function(response) {

                commit('Set_Reward', response.data)
                    // console.log("Reward", response.data)

            }).catch(() => {
                console.log("error")
            })
    }
}