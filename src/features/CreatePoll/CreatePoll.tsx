import React from 'react';
import { Divider } from '../../components/buttons/Divider/Divider';
import { PrimaryButton } from '../../components/buttons/PrimaryButton/PrimaryButton';
import CreatePollForm from './components/CreatePollForm/CreatePollForm';
import { useCreatePollMutation } from '../../store/apiSlice';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './CreatePoll.css';

interface FormValues {
  question: string;
  optionTitle: string;
  options: string[];
}

const PollSchema = Yup.object().shape({
  question: Yup.string().required('Required'),
  optionTitle: Yup.string().min(2, `Please enter at least 2 letters`)
});

const CreatePoll: React.FC = () => {
  const [createPoll] = useCreatePollMutation();

  const formik = useFormik({
    initialValues: {
      question: '',
      optionTitle: '',
      options: [] as string[]
    },
    validationSchema: PollSchema,
    validate: (values: FormValues) => {
      const errors: Partial<Record<keyof FormValues, string>> = {};

      if (values.options.some((option: string) => option === values.optionTitle)) {
        errors.optionTitle = 'Each option must be unique';
      }

      if (values.options.length < 2) {
        errors.options = 'Please provide at least two options';
      }

      return errors;
    },
    onSubmit: async ({ question, options }) => {
      try {
        await createPoll({ question, options }).unwrap();

        formik.resetForm();

        toast('Poll created successfully!');
      } catch (err) {
        console.error('Failed to create poll:', err);
      }
    }
  });

  const handleSubmit = () => {
    if (formik.isValid) formik.handleSubmit();

    formik.setTouched({ question: true, optionTitle: true, options: true }, true);
  };

  return (
    <div className="create-poll-container flex justify-center">
      <div className="create-poll-card p-5">
        <h4 className="mb-7">Create Your Poll</h4>

        <CreatePollForm formik={formik} handleSubmit={handleSubmit} />

        <Divider className="create-poll-divider" />

        <div className="pt-4 flex justify-end">
          <PrimaryButton type="button" loading={formik.isSubmitting} onClick={() => handleSubmit()}>
            Submit
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
