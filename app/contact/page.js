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
    <div className="container mx-auto mt-10 max-w-screen-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col space-y-4 items-center w-3/4 mx-auto">
          <div className="w-full">
            <label htmlFor="fullName" className="block text-gray-700 text-center">Full Name:</label>
            <Field type="text" id="fullName" name="fullName" className="form-input mt-1 w-full border rounded-md p-2" />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="block text-gray-700 text-center">Subject:</label>
            <Field type="text" id="subject" name="subject" className="form-input mt-1 w-full border rounded-md p-2" />
            <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-700 text-center">Email:</label>
            <Field type="email" id="email" name="email" className="form-input mt-1 w-full border rounded-md p-2" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="body" className="block text-gray-700 text-center">Body:</label>
            <Field as="textarea" id="body" name="body" className="form-textarea mt-1 w-full border rounded-md p-2" rows="5" />
            <ErrorMessage name="body" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
