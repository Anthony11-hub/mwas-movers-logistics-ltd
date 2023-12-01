document.getElementById("contact").addEventListener("submit", createBooking);

const axiosInstance = axios.create({
  baseURL: "https://good-gray-octopus-suit.cyclic.app/api/v1/post",
});

function createBooking(e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email_address"]').value;
  const phoneNumber = document.querySelector('input[name="phone"]').value;
  const region = document.querySelector('input[name="region"]').value;
  const service = document.querySelector("#service").value;

  const data = {
    name,
    email,
    phoneNumber,
    region,
    service,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axiosInstance
    .post("", data, config)
    .then((response) => {
      if (response.status === 201) {
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email_address"]').value = "";
        document.querySelector('input[name="phone"]').value = "";
        document.querySelector('input[name="region"]').value = "";
        document.querySelector("#service").value = "";
      } else {
        console.error("Failed to create booking:", response.statusText);
      }
    })
    .catch((err) => {
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
