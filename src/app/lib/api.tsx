import Database from 'better-sqlite3';

export interface ILecturers{
    id:number
    name:string
    age:number
    salary:number
}

export type InputLecturers = Omit<ILecturers,'id'>

const db = new Database("lecturers.db");

export const addLecturer = (lecturer:InputLecturers) => {
    db.prepare(`
            INSERT INTO lecturers(name, age, salary)
            VALUES(@name, @age, @salary)
    `).run(lecturer)
};

export const getAllLecturers = ():ILecturers[] => {
    return db.prepare(`
            SELECT * FROM lecturers
    `).all() as ILecturers[]
};

export const getLecturerById = (id: number): ILecturers => {
    return db
        .prepare(`SELECT * FROM lecturers where id = ?`)
        .get(id) as ILecturers;
}

export const updateLecturerById = (id:number, lecturer:InputLecturers) => {
    return db
    .prepare("UPDATE lecturers set name=?, age=?, salary=? WHERE id=?")
    .run(lecturer.name, lecturer.age, lecturer.salary, id);
}