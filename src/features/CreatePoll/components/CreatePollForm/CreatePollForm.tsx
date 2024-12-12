import { BaseButton } from '../../../../components/buttons/BaseButton/BaseButton';
import { IconButton } from '../../../../components/buttons/IconButton/IconButton';
import './CreatePollForm.css';
import React from 'react';

interface CreatePollFormProps {
  formik: any;
  handleSubmit: () => void;
}

const CreatePollForm: React.FC<CreatePollFormProps> = ({ formik, handleSubmit }) => {
  const addOption = () => {
    formik
      .setFieldValue('options', [...formik.values.options, formik.values.optionTitle])
      .then(() => formik.validateForm());

    formik.setFieldValue('optionTitle', '');
  };

  const removeOption = (index: number) => {
    const options = formik.values.options.filter((_: string, i: number) => i !== index);

    formik.setFieldValue('options', options);
  };

  const optionList = () => {
    return formik.values.options.map((option: string, index: number) => {
      return (
        <div className="option-list-item" key={index}>
          <span>{option}</span>

          <BaseButton
            size="sm"
            type="button"
            className="text-primary"
            onClick={() => removeOption(index)}>
            Remove
          </BaseButton>
        </div>
      );
    });
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      <div className="form-field">
        <label htmlFor="firstName">Poll Question</label>
        <input
          type="text"
          name="question"
          placeholder="Ex: What should we have for lunch tomorrow?"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.question}
          className="focus:border-primary"
        />
        <div className="form-field-error">
          {formik.touched.question && formik.errors.question && (
            <span className="text-warn">{formik.errors.question}</span>
          )}
        </div>
      </div>

      <div className="add-option-field grid items-center">
        <div className="form-field">
          <label htmlFor="lastName">Poll Options</label>
          <input
            type="text"
            name="optionTitle"
            placeholder="Ex: Pizza"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.optionTitle}
            className="focus:border-primary"
          />
          <div className="form-field-error">
            {formik.touched.optionTitle && formik.errors.optionTitle && (
              <span className="text-warn">{formik.errors.optionTitle}</span>
            )}
          </div>
        </div>

        <IconButton
          type="button"
          disabled={!formik.values.optionTitle || formik.errors.optionTitle}
          onClick={() => addOption()}>
          <img src={'/icons/add.svg'} />
        </IconButton>
      </div>

      {formik.touched.options && formik.errors.options && (
        <div className="form-field-error">
          <span className="text-warn">{formik.errors.options}</span>
        </div>
      )}

      {formik.values.options.length > 0 && <div className="option-list">{optionList()}</div>}
    </form>
  );
};

export default CreatePollForm;
