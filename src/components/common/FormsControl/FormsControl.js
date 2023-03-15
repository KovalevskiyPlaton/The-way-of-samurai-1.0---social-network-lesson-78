import React from "react"
import styles from './FormsControl.module.css'


const FormControl =({meta,input, child, ...props})=>{
    const hasErorr = meta.touched && meta.error;

    return (
        <div  className={styles.formControl + " " + (hasErorr ? styles.error : '')}>
            <div>
                {props.children}
            </div>
           {hasErorr && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props)=>{
    const {meta,input, child, ...restprops} = props;
            return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}

export const Input = (props)=>{
    const {meta,input, child, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
}

