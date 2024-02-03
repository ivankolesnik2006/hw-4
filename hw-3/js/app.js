const hours = parseFloat(prompt('Enter the number of hours:'));

if ( isNaN(hours)) {
    alert("Please enter a correct number!")
} else {
    const second = hours * 3600;
    alert(`${hours} hours is equal to ${second} seconds.`);
}
