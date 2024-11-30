
$(document).ready(function() {
    let page = $('body').data('page');

    if (page === 'page1') {
        console.log('This is the Homepage');

        $.ajax ({
            url: 'https://smileschool-api.hbtn.info/quotes',
            type: 'GET',
            success: (data) => {
                console.log(data);
                console.log(data[0].name);

                
            }
        })
    }

    else if (page === 'page2') {
        console.log('This is the Pricing page');
    }

    else if (page === 'page3') {
        console.log('This is the Courses page');
    }
    else {
        console.error(error);
    }
});
