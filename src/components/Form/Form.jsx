import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';
import './Form.scss';


const Form = () => {
      const onSubmit = (toSend) => {
        send(
            'service_9k3rr0q',
            'template_vq3do1a',
            toSend,
            'user_bTe2NUwyryRKCZkJyLz70'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        reset();
      };
    
    
    const {register, handleSubmit, formState: { errors }, reset, trigger} = useForm();


    return (
        <div className="form" id="form">
            <div className="header">
                <span>Get in Touch</span>
                <p>Feel free to contact me anytime</p>
            </div>
            <div class="main_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                     placeholder="Name"
                     name="from_name"
                      id="name" {...register('from_name', { required: "Name is required" })} />
                    {errors.from_name && (<span className="danger_text">{errors.from_name.message}</span>)}
                    <input type="text"
                     placeholder="Email"
                     name="reply_to"
                      id="email"
                      {...register("reply_to", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
              />
              {errors.reply_to && (
                <small className="danger_text">{errors.reply_to.message}</small>
              )}
                    <input type="text"
                     placeholder=
                     "Subject" 
                     id="subj"
                     name="subject"/>
                    <input type="text"
                     placeholder="Message"
                      id="msg"
                      name="message"
                       {...register('message', { required: true })}/>
                    {errors.message && (<small className="danger_text">Enter your message</small>)}
                    <input type="submit" className="btn_red" value="Send a message"></input>
                </form>
            </div>
            
        </div>
    );
}

export default Form;
