const  SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  
}

 const dialogsReducer = (state=initialState, action)=>{
     switch(action.type){
     case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        
        messages: [...state.messages, {id: 10, message: body}]
      };
     default:
    return state
   }
  }
   
  export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody})
  
export default dialogsReducer;