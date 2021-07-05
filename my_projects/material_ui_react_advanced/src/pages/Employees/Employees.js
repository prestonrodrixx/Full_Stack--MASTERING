import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default function Employees() {
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design"
        icon={<PeopleAltIcon fontSize="medium" />}
      />
      <EmployeeForm />
    </>
  );
}
