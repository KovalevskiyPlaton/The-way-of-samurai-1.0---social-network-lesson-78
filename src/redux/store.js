import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
 

  
  

  let store ={
    _state:{
      profilePage: {
        posts :  [
            {id: 1, message: 'Hi, how are you?', likesCount:12},
            {id: 2, message: 'It`s my, firts post', likesCount:11},
            {id: 3, message: 'It`s post from mapArray', likesCount:3},
            {id: 4, message: 'Lesson 29 at 27/03/2022', likesCount:3}
          ],
        newPostText: 'it-kamasutra!',
               },
      dialogsPage: {
        dialogs : [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'}, 
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
            {id: 7, name: 'MapNameId'},
            {id: 8, name: 'Less_23.03.2022'},
            {id: 9, name: 'Less29'}

          ],
          messages : [
            {id: 1, message: 'Hi !!!'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Hellow from map !!'},
            {id: 7, message: '23.03.2022'},
            {id: 8, message: '27.03.2022 - messages arr'}
          ],
          newMessageBody: ''
      },
      sidebar:{}
    },
    _callSubscriber(){
      console.log('State changed')
    },

    getState(){
      return this._state;
    },
    subscribe (observer){
      this._callSubscriber=observer;        
    },

   
    dispatch(action){

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
      }
    }


   

  
  
  export default store;
