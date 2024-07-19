"use server"

import { redirect } from "next/navigation";
import { addLecturer, InputLecturers, updateLecturerById } from "../api"

export const handleAdd = (data: FormData) => {
    
     let lecturer: InputLecturers = {
        name: data.get('name') as string,
        age: +(data.get('age') as string),
        salary: +(data.get('salary') as string),
    };

    addLecturer(lecturer);
    redirect('/lecturers');
}

export const handleUpdate = (data:FormData) => {
    let lecturer: InputLecturers = {
        name: data.get('name') as string,
        age: +(data.get('age') as string),
        salary: +(data.get('salary') as string),
    };
  
     let id = +(data.get("id") as string)
     updateLecturerById(id, lecturer);
     redirect('/lecturers');
}