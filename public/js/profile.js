const newFormHandler = async (event) => {
  event.preventDefault();

  const  job_title = document.querySelector('#job_title').value.trim();
  const  location = document.querySelector('#location').value.trim();
  const  job_type = document.querySelector('#job_type').value.trim();
  const  min_salary = document.querySelector('#min_salary').value.trim();
  const  max_salary = document.querySelector('#max_salary').value.trim();
  const  description = document.querySelector('#description').value.trim();
  const  category = document.querySelector('#category').value.trim();
  const  remote = document.querySelector('#remote').value.trim();
  

  if (job_title && max_salary && min_salary ) {
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({ job_title, location, job_type, min_salary, max_salary, description, category, remote }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create job');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete job');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.job-list')
  .addEventListener('click', delButtonHandler);
