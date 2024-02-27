import { useState } from 'react';

export function useForm(initialValues: any = {}) {
  const [formValues, setFormValues] = useState(initialValues);

  const setValue = (name: string, value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const getUniqueValue = (name: string) => {
    return formValues[name] || '';
  };

  const getAllValues = () => {
    return formValues;
  };

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const clearForm = () => {
    setFormValues({});
  };

  return {
    setValue,
    getUniqueValue,
    getAllValues,
    clearForm,
    resetForm,
    formValues,
  };
}
