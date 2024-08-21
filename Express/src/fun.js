let input1 = document.querySelector('input');

let data = (event) => {
    event.preventDefault();
    console.log(input1.value);
    fetch('http://localhost:5000/submitform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Newname: input1.value })
    })
    .then(() => console.log('success'))
    .catch(() => console.log('failure'));
};

function getData() {
    fetch('http://localhost:5000/api')
        .then((res) => res.json())
        .then((data) => { console.log(data); })
        .catch((err) => console.error(err));
}
