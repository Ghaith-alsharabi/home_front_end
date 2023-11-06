function submitForm() {
  var startDate = document.getElementById("start-datepicker").value;
  var startTime = document.getElementById("start-timepicker").value;
  var endDate = document.getElementById("end-datepicker").value;
  var endTime = document.getElementById("end-timepicker").value;
  var textInputValue = document.getElementById("textinput").value;
  var sprayInfo = document.getElementById("dropdown").value;

  var data = {
    start_date: startDate,
    start_time: startTime,
    end_date: endDate,
    end_time: endTime,
    sprays: textInputValue,
    spray_info: sprayInfo
  };

  // Make an HTTP POST request to the server
  fetch('https://iot.ghaith.nl/api/webhook/some_hook_id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Handle the server response as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
  // Close the popup if needed
   browser_mod.closePopup();
}
