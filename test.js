function generateAndRenderHTML() {
  const htmlCode = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body>
    <p>shit</p>
</body>
</html>`;

  const container = document.createElement('div');
  container.innerHTML = htmlCode;
  document.body.appendChild(container);
}
