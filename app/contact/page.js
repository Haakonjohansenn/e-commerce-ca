"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactPage() {
  const initialValues = {
    fullName: '',
    subject: '',
    email: '',
    body: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, 'Full name must be at least 3 characters')
      .required('Full name is required'),
    subject: Yup.string()
      .min(3, 'Subject must be at least 3 characters')
      .required('Subject is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    body: Yup.string()
      .min(3, 'Body must be at least 3 characters')
      .required('Body is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    // You can perform further actions like sending the form data to a server
    resetForm();
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <Field type="text" id="subject" name="subject" />
            <ErrorMessage name="subject" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <Field as="textarea" id="body" name="body" />
            <ErrorMessage name="body" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
