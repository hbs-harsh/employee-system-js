const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  // Add more employee records here
];

// Generate HTML card for each employee
function generateEmployeeCard(employee) {
  return `
    <div class="employee-card">
      <p><strong>ID:</strong> ${employee.id}</p>
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Age:</strong> ${employee.age}</p>
      <p><strong>Department:</strong> ${employee.department}</p>
      <p><strong>Salary:</strong> $${employee.salary}</p>
    </div>
  `;
}

// Display all employees
function displayEmployees() {
  const cards = employees.map(generateEmployeeCard).join('');
  document.getElementById('employeesDetails').innerHTML = cards;
}

// Calculate total salary of all employees
function calculateTotalSalaries() {
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  alert(`Total Salaries: $${total}`);
}

// Display only HR employees
function displayHREmployees() {
  const hrOnly = employees.filter(emp => emp.department === 'HR');
  const hrCards = hrOnly.length
    ? hrOnly.map(generateEmployeeCard).join('')
    : `<p>No employees found in HR department.</p>`;
  document.getElementById('employeesDetails').innerHTML = hrCards;
}

// Find and display employee by ID
function findEmployeeById(employeeId) {
  const employee = employees.find(emp => emp.id === employeeId);
  document.getElementById('employeesDetails').innerHTML = employee
    ? generateEmployeeCard(employee)
    : `<p>No employee found with ID ${employeeId}.</p>`;
}

// Handle input and call findEmployeeById
function searchEmployeeById() {
  const input = document.getElementById('searchId').value;
  const employeeId = parseInt(input);
  if (!isNaN(employeeId)) {
    findEmployeeById(employeeId);
  } else {
    document.getElementById('employeesDetails').innerHTML = '<p>Please enter a valid numeric ID.</p>';
  }
}
