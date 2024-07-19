import React from 'react'
import LecturersList from '../lib/components/lecturer-list';
import { getAllLecturers } from '../lib/api';

export const Page = () => {
  const lecturersList = getAllLecturers();
  
  return (
    <LecturersList lecturers={lecturersList}/>
  )
}

export default Page;