import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes: [41,30,20],
      checkLikes : [false,false,false],
    }
  },

  //변경
  mutations : {
    이름변경(state){
      state.name = 'park'
    },
    나이변경(state,payload){
      state.age+=payload;
    },
    좋아요증가(state, payload){
      if(state.checkLikes[payload] == false){
        state.likes[payload]++;
        state.checkLikes[payload] = true;
      }else{
        state.likes[payload]--;
        state.checkLikes[payload] = false;
      }
      
    }
  },
})

export default store