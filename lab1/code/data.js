var groups = localStorage.getItem('groups_data');
if(localStorage.getItem("groups_data") === null) {
    groups = [
        {
            number: 301,
            faculty: 'Computer science'
        },
        {
            number: 302,
            faculty: 'Computer network'
        }
    ];
    localStorage.setItem("groups_data", JSON.stringify(groups)); } else {
    groups = JSON.parse(groups);
}