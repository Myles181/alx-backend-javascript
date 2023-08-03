// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(fName: string, lName: string): string {
    const teacher1: Teacher = {
        firstName: fName,
        lastName: lName,
        fullTimeEmployee: true,
        location: 'Nigeria',
    }
    return (teacher1.firstName.slice(0, 1) + '.' + teacher1.lastName);
}


console.log(printTeacher('Emmanuel', 'Cyril'));