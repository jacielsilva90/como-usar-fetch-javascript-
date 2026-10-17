
//capture o form e os dados dos inputs do form
//adicione os dados no formData
async function getData() {
	const url = "https://jsonplaceholder.typicode.com/posts";
	try {
		const response = await fetch('url', {
			method:'GET' ou 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:formData, //Outra: JSON.stringify({nome:'nome', valor:10})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error.message);
	}
}
getData() //recomendado: form.addEventListener('submit', getData)

