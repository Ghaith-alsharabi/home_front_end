function fetchHTMLTemplate() {
  fetch('https://raw.githubusercontent.com/Ghaith-alsharabi/home_front_end/master/test.html')
    .then(response => response.text())
    .then(htmlContent => {
      const templateContainer = document.getElementById('templateContainer');
      templateContainer.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error fetching HTML template:', error));
}
