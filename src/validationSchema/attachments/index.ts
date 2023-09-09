import * as yup from 'yup';

export const attachmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  task_id: yup.string().nullable().required(),
});
