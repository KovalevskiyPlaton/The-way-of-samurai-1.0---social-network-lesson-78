import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom'
import { reduxForm,Field } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControl';
import { maxLenghtCreator, requared } from '../../utils/validators/validators';

const maxLenghtCreator50 = maxLenghtCreator(50)
const Dialogs = (props) => {
  let state = props.dialogsPage; 
   

   let dialogsElements = state.dialogs.map(d=><DialogItem key={d.id} name = {d.name} id={d.id}/>);
   let messageElements = state.messages.map(m=><Message  key={m.id} message={m.message}></Message>);
   let newMessageBody = state.newMessageBody;

     

   let addNewMassage = (values)=>{
      props.sendMessage(values.newMessageBody);
   }

   if (!props.isAuth){
      return <Navigate to ={'/login'}/>
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {
               dialogsElements
            }
         </div>

         <div className={s.messages}>
            <div>{messageElements}</div>
            <div>
               <AddMessageFromRedux onSubmit={addNewMassage}/>
                 </div>
         </div>
      </div>
   )
}

const AddMessageFrom = (props)=>{
   return(
         <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
            validate={[requared, maxLenghtCreator50]}
            name='newMessageBody' 
            placeholder='Enter your message please!'/>
            <div> <button className={s.sendMessage} >Send</button></div>
          </form>
   )
}

const AddMessageFromRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageFrom); 
export default Dialogs;