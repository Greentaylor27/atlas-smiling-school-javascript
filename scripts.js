
$(document).ready(function() {
    let page = $('body').data('page');

    if (page === 'page1') {
        console.log("This is the HomePage");
        $.ajax ({
            url: "https://smileschool-api.hbtn.info/quotes",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(person => {
                    console.log('ID: ' + person.id);
                    console.log('Pic_URL: ' + person.pic_url);
                    console.log('Name: ' + person.name);
                    console.log('Title: ' + person.title);
                    console.log('Text: ' + person.text);
                });
            },
            error: function(error) {
                console.error('There is an error', error);
            }
        });
    }
    else if (page === 'page2') {
        console.log("This is Pricing");
    }
    else if (page === 'page3') {
        console.log("This is Courses");
    }
    else {
        console.error("There is nopage");
    }
})