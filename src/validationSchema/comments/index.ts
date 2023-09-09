import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  task_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
