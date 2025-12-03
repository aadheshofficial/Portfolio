import React from 'react'
import FormBox from './FormBox/FormBox'
import FormTextBox from './FormTextBox/FormTextBox'
import FormSubmit from './FormSubmit/FormSubmit'

const FormContent = () => {
  return (
    <form action="" method="post">
        <div className="contact-form-content">
            <FormBox LabelName={"First Name"}/>
            <FormBox LabelName={"Last Name"}/>
            <FormBox LabelName={"Email"} InputType='email'/>
            <FormTextBox/>
            <FormSubmit/>
        </div>
      </form>
  )
}

export default FormContent
