function create{
  const myPost = document.getElementById("input").value;

const options = {
method: 'POST',
body: JSON.stringify(myPost),
headers: {
  'Content-Type': 'application/json'
}
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
.then(res => res.json())
.then(res => console.log(res));
}
