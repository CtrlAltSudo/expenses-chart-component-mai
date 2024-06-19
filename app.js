const daysOfWeek = document.querySelectorAll("li");

fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error loading JSON:', error);
});

for(day of daysOfWeek) {
    console.log(day)
}