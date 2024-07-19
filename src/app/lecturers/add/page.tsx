import { handleAdd } from '@/app/lib/actions.tsx/lecturer-actions';
import React from 'react'

function Page() {
  return (
    <>
        <h1 className='is-size-1'>Add Lecturers</h1>
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleAdd}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="name"
                            className="input is-text"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="age"
                            className="input is-text"
                            placeholder="enter an age"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            name="salary"
                            className="input is-text"
                            placeholder="enter a salary"
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