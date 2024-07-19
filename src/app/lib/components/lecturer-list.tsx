import React from 'react'
import { ILecturers } from '../api'
import Link from 'next/link'

interface IProps {
    lecturers: ILecturers[]
}

const LecturersList = ({lecturers}:IProps) => {
  return (
    <>
        <div className='is-size-1'>Lecturers List</div>
        <div style={{display: 'flex', gap: '50px'}}>
        {
            lecturers.map(lecturer => {
                return <div key={lecturer.id} className="column">
                    <p>Name -{lecturer.name}</p>    
                    <p>Age - {lecturer.age}</p>
                    <strong> Slary - {lecturer.salary}</strong>
                    <br />
                    <Link href={'/lecturers/edit/' + lecturer.id}> Edit</Link>    
                </div>
            })
        }
        </div>
    </>
  )
}

export default LecturersList;