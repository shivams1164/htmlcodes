const Url = "https://jsonplaceholder.typicode.com/users";
async function getapi(url) {
  const response = await fetch(Url);

  var data = await response.json(url);
  console.log(data);
  show(data);
}

function show(data) {
  let tab = `<tr>
		<th class="table-dark text-center">Id</th>
		<th class="table-dark text-center">Name</th>
		<th class="table-dark text-center">Email</th>
		</tr>`;

  for (let r of data) {
    tab += `<tr>
	
    <td style="border: 1px solid">${r.id}</td>
	<td style="border: 1px solid">${r.name}</td>
	<td style="border: 1px solid">${r.email}</td>
		
    </tr>`;
  }

  document.getElementById("employees").innerHTML = tab;
}

getapi(Url);