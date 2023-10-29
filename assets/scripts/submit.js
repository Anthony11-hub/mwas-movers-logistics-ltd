document.getElementById('contact').addEventListener('submit', createBooking);

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/bookings',
});

function createBooking(e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const postalCode = document.querySelector('input[name="postalCode"]').value;

  // Get selected region and service from dropdowns
  const region = document.querySelector('#region').value;
  const service = document.querySelector('#service').value;

  // Create an object with the data
  const data = {
    name,
    email,
    phoneNumber,
    address,
    postalCode,
    region,
    service,
  };

  // Ensure you have the 'Content-Type' header in the config
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axiosInstance
    .post('', data, config) // Pass the data as the second argument
    .then((response) => {
      if (response.status === 201) {
        // Booking created successfully
        // Clear the form
        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('input[name="phoneNumber"]').value = '';
        document.querySelector('input[name="address"]').value = '';
        document.querySelector('input[name="postalCode"]').value = '';
        document.querySelector('#region').value = ''; // Clear the region dropdown
        document.querySelector('#service').value = ''; // Clear the service dropdown
      } else {
        console.error('Failed to create booking:', response.statusText);
      }
    })
    .catch((err) => {
      // Handle errors
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}
