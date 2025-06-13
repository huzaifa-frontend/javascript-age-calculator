function calculateAge() {
    let day = prompt("Enter your birth day (1-31):");
    let month = prompt("Enter your birth month (e.g: 'January', 'Jan', or '01'):");
    let year = prompt("Enter your birth year:");

    let monthNumber;
    if (isNaN(month)) {
        const months = [
            "january", "february", "march", "april", "may", "june",
            "july", "august", "september", "october", "november", "december"
        ];
        month = month.toLowerCase();
        if (month.length <= 3) {
            month = months.find(m => m.startsWith(month));
        }
        monthNumber = months.indexOf(month) + 1;
    } else {
        monthNumber = parseInt(month);
    }

    const today = new Date();
    const birthDate = new Date(year, monthNumber - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    alert(`Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days!`);
}
