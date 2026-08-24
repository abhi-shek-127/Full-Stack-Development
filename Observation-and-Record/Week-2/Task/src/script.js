// 1. Define the JavaScript Class
class Student {
    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// 2. Event Handling & DOM Selection
const generateBtn = document.getElementById('generateBtn');
const profileOutput = document.getElementById('profile-output');

generateBtn.addEventListener('click', function() {
    // Retrieve user-provided values
    const nameVal = document.getElementById('nameInput').value;
    const rollVal = document.getElementById('rollInput').value;
    const deptVal = document.getElementById('deptInput').value;
    const cgpaVal = document.getElementById('cgpaInput').value;

    // 3. Create an object of the Student class
    const student = new Student(nameVal, rollVal, deptVal, cgpaVal);

    // Clear previous output if any
    profileOutput.innerHTML = '';
    
    // 4. Create HTML elements dynamically
    const header = document.createElement('h3');
    header.textContent = 'Student Profile';
    header.className = 'profile-title';

    // Function to format the text uniformly like the expected output
    const createRow = (label, value) => {
        const p = document.createElement('div');
        p.className = 'profile-row';
        // Using padEnd to align colons using a monospace font
        p.innerHTML = `<strong>${label.padEnd(11, '&nbsp;')} :</strong> ${value}`;
        return p;
    };

    // 5. Modify element content and append to the DOM
    profileOutput.appendChild(header);
    profileOutput.appendChild(createRow('Name', student.name));
    profileOutput.appendChild(createRow('Roll No', student.rollNumber));
    profileOutput.appendChild(createRow('Department', student.department));
    profileOutput.appendChild(createRow('CGPA', student.cgpa));

    // Show the profile container
    profileOutput.style.display = 'block';
});