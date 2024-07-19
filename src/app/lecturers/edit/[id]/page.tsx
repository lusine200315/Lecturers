import { handleUpdate } from '@/app/lib/actions.tsx/lecturer-actions';
import { getLecturerById } from '@/app/lib/api';
import React from 'react'

interface IProps {
    params: { id: number };
}

export const Page = ({ params }: IProps) => {
  const lecturer = getLecturerById(params.id);
  return (
    <>  
        <div className='is-size-1'>Edit details Page</div>
        <h1 className='is-size-5'>Lecturer No. {params.id}</h1>
        <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdate}>
                  <input type="hidden" name="id" defaultValue={params.id} />
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="name"
                            className="input is-text"
                            placeholder="enter a name"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="age"
                            className="input is-text"
                            placeholder="enter an age"
                            defaultValue={lecturer.age}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="salary"
                            className="input is-text"
                            placeholder="enter a salary"
                            defaultValue={lecturer.salary}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-link">Submit</button>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Page;