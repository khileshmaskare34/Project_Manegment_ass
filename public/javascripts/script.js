
document.addEventListener('DOMContentLoaded', function () {
    const departmentDropdown = document.getElementById('departmentDropdown');
    const projectDropdown = document.getElementById('projectDropdown');
    const userData = document.getElementById('userData');

    departmentDropdown.addEventListener('change', handleDropdownChange);
    projectDropdown.addEventListener('change', handleDropdownChange);

    function handleDropdownChange() {
        const selectedDepartment = departmentDropdown.value;
        const selectedProject = projectDropdown.value;

        const rows = userData.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const department = row.getAttribute('data-department');
            const project = row.getAttribute('data-project');

            if (
                (selectedDepartment === '' || department === selectedDepartment) &&
                (selectedProject === '' || project === selectedProject)
            ) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
