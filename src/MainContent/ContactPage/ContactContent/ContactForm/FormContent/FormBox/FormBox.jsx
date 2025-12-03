import React from 'react'

const FormBox = ({LabelName,InputType="text"}) => {
  return (
    <div className="contact-form-box">
        <lable className="contact-form-lable">{LabelName}</lable>
        <input type={InputType} name="" id="" className="contact-form-input" />
    </div>
  )
}

export default FormBox
