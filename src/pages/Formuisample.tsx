import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { DatePicker, DateTimePicker, TimePicker } from 'formik-mui-lab';
import * as React from 'react';
import { InputBase,  Select } from 'formik-mui';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{
          date: new Date(),
          time: new Date(),
          dateTime: new Date(),
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
          <Field
  component={Select}
  formHelperText={{ children: 'How old are you?' }}
  id="age"
  name="age"
  labelId="age-simple"
  label="Age"
  validate={(age: number) =>
    !age
      ? 'Please enter your age'
      : age < 21
      ? 'You must be 21 or older'
      : undefined
  }
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Field>
          <Field 
          component={InputBase} 
          name="inputBase"
           />
          <br />
           <br />
            <Field
              component={DatePicker}
              name="date"
              label="Date"
              textField={{ helperText: 'Helper text', variant: 'filled' }}
            />
            <br />
            <Field
                component={DateTimePicker}
                name="dateTime"
                label="Date Time"
                textField={{ helperText: 'Another Helper text', variant: 'filled' }}
            />
            <br />
            <Field component={TimePicker} name="time" label="Time" />
            <br />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
}

export default App;