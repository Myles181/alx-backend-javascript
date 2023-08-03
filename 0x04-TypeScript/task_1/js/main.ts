/* Interfacees
        Teacher
        Student
        Directors
    */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

}

interface Student {
    readonly firstName: string;
    readonly lastName: string;
    workonHomework(value?:void): string;
    displayName(value?:void): string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

/* Functions */

function printTeacher(fName: string, lName: string): string {
    const teacher1: Teacher = {
        firstName: fName,
        lastName: lName,
        fullTimeEmployee: true,
        location: 'Nigeria',
    }
    return (teacher1.firstName.slice(0, 1) + '.' + teacher1.lastName);
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workonHomework() {
        return "currently working";
    }

    displayName() {
        return this.firstName;
    }
}

