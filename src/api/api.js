import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL : 'https://social-network.samuraijs.com/api/1.0/',
  headers:{
    'API-KEY':'8dfb3310-212e-4ffc-8d7f-764c82122f10'
          }
});


export const usersAPI={
  getUsers(currentPage=1, pageSize=10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(response=>{
        return response.data
      });
  },
  follow(userId){
   return instance.post(`follow/${userId}`)

  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId){
    console.warn("Obsolete method. Please use profileAPI obkect")
    return profileAPI.getProfile(userId);
    
  }
}

export const profileAPI={
    getProfile(userId){
    return instance.get(`profile/`+ userId)
  },
  getStatus(userId){
    return instance.get(`profile/status/`+ userId)
  },
  updateStatus(status){
    return instance.put('profile/status', {status:status})
  }
}

export const authAPI={
  me(){
    return instance.get(`auth/me/`)
  },
  login(email, password, rememberMe=false){
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
 }






//   export const getUsers =(currentPage=1,pageSize=10)=>{ //до рефакторинга ст.7-14 урок 63 тайм-код: 16:44
//   return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, {
//       withCredentials: true
//     })
//     .then(response=>{
//       return response.data
//     });
// }
