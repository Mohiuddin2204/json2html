// json2html.js

export default function json2html(data) {
  // Initialize the HTML table string with the data-user attribute
  let html = `<table data-user="mohiuddinafnan02004@gmail.com">`;

  // Create the table header dynamically based on object keys
  html += '<thead><tr>';
  Object.keys(data[0]).forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += '</tr></thead>';

  // Create the table rows from the data
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    Object.keys(row).forEach(key => {
      html += `<td>${row[key]}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
