document.addEventListener('DOMContentLoaded', function () {
  // Get the current date
  const currentDate = new Date();

  // Get the date components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Format the date as desired (e.g., "YYYY-MM-DD")
  const formattedDate = `${year}-${month}-${day}`;

  // Display the date in the HTML
  const dateElement = document.getElementById('date');
  dateElement.textContent = formattedDate;

  // Add task to the list
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', function () {
        newTask.remove();
      });

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }

  // Get the add button element
  const addButton = document.getElementById('addButton');

  // Add event listener to the add button
  addButton.addEventListener('click', addTask);
});
