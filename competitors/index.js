const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const LOCATIONS = {
    "Fresno, CA": {
        city: "Fresno",
        state: "California",
        country: "United-States"
    },
    "Clovis, CA": {
        city: "Clovis",
        state: "California",
        country: "United-States"
    },
    "Maui, HI": {
        city: "Maui",
        state: "Hawaii",
        country: "USA"
    },
    "Srae Ambel, Cambodia": {
        city: "Srae Ambel",
        state: "Koh Kong Province",
        country: "Cambodia"
    }
}

function updateAbnb() {
    const today = new Date();
    const location = LOCATIONS[document.getElementById('location').value];

    const uri = `${'https://www.airbnb.com/s'}/${location.city}--${location.state}--${location.country}/homes?`;
    const query = new URLSearchParams();
    
    query.set("room_types[]", "Entire home/apt");
    query.set("l2_property_type_ids[]", document.getElementById('property').value);
    query.set("adults", 1);

    query.set("date_picker_type", "flexible_dates");
    query.set("flexible_trip_dates[]", MONTHS[today.getMonth()]);
    
    query.set("flexible_trip_lengths[]", "weekend_trip");
    document.getElementById('weekend').href = uri + query.toString();

    query.set("flexible_trip_lengths[]", "one_week");
    document.getElementById('week').href = uri + query.toString();

    query.set("flexible_trip_lengths[]", "one_month");
    document.getElementById('month').href = uri + query.toString();

    query.set("date_picker_type", "calendar");
    today.setDate(today.getDate() + (((2 + 7 - today.getDay()) % 7) || 7)); // 2 = next Tuesday
    query.set("checkin", today.getFullDate());
    today.setDate(today.getDate() + 1); // Wednesday
    query.set("checkout", today.getFullDate());
    document.getElementById('weekday').href = uri + query.toString();
}

function updateFF() {
    const location = LOCATIONS[document.getElementById('location').value];
    const uri = "https://www.furnishedfinder.com/stats?";
    const query = new URLSearchParams();
    query.set("ci", location.city);
    query.set("st", location.state);
    document.getElementById('ff').href = uri + query.toString();
}

function render(name, uri) {
    const today = new Date();
    today.setMonth(today.getMonth() + 6);
    const query = new URLSearchParams();
    query.set("adults", 1);

    today.setDate(today.getDate() + (((5 + 7 - today.getDay()) % 7) || 7)); // Friday
    query.set("check_in", today.getFullDate());
    today.setDate(today.getDate() + 2); // Sunday
    query.set("check_out", today.getFullDate());
    document.getElementById(`${name}-weekend`).href = uri + query.toString();

    today.setDate(today.getDate() + (((2 + 7 - today.getDay()) % 7) || 7)); // Tuesday
    query.set("check_in", today.getFullDate());
    today.setDate(today.getDate() + 1); // Wednesday
    query.set("check_out", today.getFullDate());
    document.getElementById(`${name}-weekday`).href = uri + query.toString();

    today.setDate(today.getDate() + 6); // one week
    query.set("check_out", today.getFullDate());
    document.getElementById(`${name}-week`).href = uri + query.toString();

    today.setDate(today.getDate() + 3*7); // one month
    query.set("check_out", today.getFullDate());
    document.getElementById(`${name}-month`).href = uri + query.toString();
}

window.onload = event => {
    render("tom", "https://airbnb.com/h/downtown-fresno?");
    render("h", "https://airbnb.com/h/downtown-fresno-studio?");
    updateUrl(event);
}

window.updateUrl = event => {
    updateAbnb();
    updateFF();
}

Date.prototype.getFullDate = function() {
    return `${this.getFullYear()}-${String(this.getMonth()+1).padStart(2, "0")}-${String(this.getDate()).padStart(2, "0")}`;
}