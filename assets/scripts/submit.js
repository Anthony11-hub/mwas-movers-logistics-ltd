// =============================================
// POST BOOKING
// ==============================================
document.getElementById("contact").addEventListener("submit", createBooking);

function createBooking(e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phoneNumber = document.querySelector('input[name="phone"]').value; // Corrected the name attribute
  const region = document.querySelector('input[name="region"]').value;
  const service = document.querySelector('select[name="service"]').value;

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

  axios
    .post(
      "https://mwas-admin-production.up.railway.app/api/v1/post",
      data,
      config
    )
    .then((response) => {
      if (response.status === 201) {
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="phone"]').value = "";
        document.querySelector('input[name="region"]').value = "";
        document.querySelector('select[name="service"]').value;

        alert("Submitted successfully");
      } else {
        console.log("an error occured");
      }
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}
// =============================================
// =============================================
