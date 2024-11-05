// const form = document.querySelector("form");
// const h1 = document.querySelector("h1");
// const table_data = document.getElementByID("table_data");

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const form_data = new FormData(e.target);
//   fetch(
//     "https://script.google.com/macros/s/AKfycbzO-RrNBHmiKWZtUYRLH1VjHgI31WBgLs8UZdCNJNECbgyjcXMRbGfutAeVQ4s-YMD3NQ/exec",
//     {
//       method: "POST",
//       body: form_data,
//     }
//   )
//     .then((res) => res.text())
//     .then((msg) => (h1.innerHTML = msg));
// };

//Get data from Google Sheet

// fetch(
//   "https://script.google.com/macros/s/AKfycbwD-6hrblMkIh17I_DR_bDDnmTCx5ePVp7Y5VOsA6T7PaZq2IKfaiEaZBEbAX3nsT0wtQ/exec",
//   {
//     method: "GET",
//   }
// )
//   .then((res) => res.json())
//   .then((datas) => {
//     datas.myalldata.revarse().map((data, index) => {
//       let date = data[0];
//       let allorder = data[1];

//       table_data.innerHTML += `
// 		<tr>
// 		<td> ${index + 1} </td>
// 		<td> ${date} </td>
// 		<td> ${allorder} </td>

// 		</tr>

// 	`;
//     });
//   });

const form = document.querySelector("form");
const h1 = document.querySelector("h1");

form.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  fetch(
    "https://script.google.com/macros/s/AKfycbzO-RrNBHmiKWZtUYRLH1VjHgI31WBgLs8UZdCNJNECbgyjcXMRbGfutAeVQ4s-YMD3NQ/exec",
    {
      method: "POST",
      body: form_data,
    }
  )
    .then((res) => res.text())
    .then((msg) => {
      // Set the success message
      h1.innerHTML = msg;
      h1.style.color = "green"; // Make the message text green

      // Refresh the page after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => {
      // Handle errors
      h1.innerHTML = "Error submitting form. Please try again.";
      h1.style.color = "red"; // Error message in red
      console.error("Error:", error);
    });
};
