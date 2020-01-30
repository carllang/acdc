import React from "react"
import { Form, Field } from "react-final-form"
import ErrorWithDelay from "./ErrorWithDelay"
import styled from "styled-components"

const StyledLabel = styled.label`
  display: block;
  font-size: 0.8em;
`

class ContactForm extends React.Component {
  onSubmit = () => {}

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ firstName: "Bob" }}
        validate={values => {
          const errors = {}
          if (!values.firstName) {
            errors.firstName = "Required"
          }
          if (!values.lastName) {
            errors.lastName = "Required"
          }
          if (!values.message) {
            errors.message = "Required"
          }
          if (!values.age) {
            errors.age = "Required"
          }
          return errors
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="fullName">
              {({ input, meta }) => (
                <div>
                  <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
                  <input {...input} type="text" placeholder="Full name" />
                  <ErrorWithDelay name="fullName" delay={1000}>
                    {error => <span>{error}</span>}
                  </ErrorWithDelay>
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <input {...input} type="text" placeholder="Email" />
                  <ErrorWithDelay name="email" delay={1000}>
                    {error => <span>{error}</span>}
                  </ErrorWithDelay>
                </div>
              )}
            </Field>
            <Field name="phone">
              {({ input, meta }) => (
                <div>
                  <StyledLabel htmlFor="phone">Phone</StyledLabel>
                  <input {...input} type="text" placeholder="Phone" />
                  <ErrorWithDelay name="phone" delay={1000}>
                    {error => <span>{error}</span>}
                  </ErrorWithDelay>
                </div>
              )}
            </Field>
            <Field name="subject">
              {({ input, meta }) => (
                <div>
                  <StyledLabel htmlFor="subject">Subject</StyledLabel>
                  <input {...input} type="text" placeholder="Subject" />
                  <ErrorWithDelay name="subject" delay={1000}>
                    {error => <span>{error}</span>}
                  </ErrorWithDelay>
                </div>
              )}
            </Field>
            <Field name="message">
              {({ input, meta }) => (
                <div>
                  <StyledLabel htmlFor="message">Message</StyledLabel>
                  <textarea {...input} type="text" placeholder="Message" />
                  <ErrorWithDelay name="message" delay={1000}>
                    {error => <span>{error}</span>}
                  </ErrorWithDelay>
                </div>
              )}
            </Field>

            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Send
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    )
  }
}

export default ContactForm
