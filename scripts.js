
$(document).ready(function() {
    let page = $('body').data('page');

    if (page === 'page1') {

    $.ajax ({
        url: 'https://smileschool-api.hbtn.info/quotes',
        type: 'GET',
        success: (data) => {
                    
            for (let i = 0; i < 3; i++) {
                const quote = data[i] || data[0];
    
                $(`.carousel-name${i + 1}, .singleQuote${i + 1}, .singleTitle${i + 1}`).empty();
    
                $(`.profilePic${i + 1}`).attr('src', quote.pic_url);
                $(`.carousel-name${i + 1}`).append(quote.name);
                $(`.singleQuote${i + 1}`).append(quote.text);
                $(`.singleTitle${i + 1}`).append(quote.title);
            }
        }
    });

        $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            type: 'GET',
            success: (video) => {

                for (let i = 0; i < 12; i++) {
                    const data = video[i % video.length];

                    $(`.popularVideo${i + 1},
                        .cardTitle${i + 1},
                        .subTitle${i + 1},
                        .cardAuthor${i + 1},
                        .videoDuration${i + 1},
                        .profile_Pic${i + 1}`).empty();

                    $(`.popularVideo${i + 1}`).attr('src', data.thumb_url);
                    $(`.cardTitle${i + 1}`).append(data.title);
                    $(`.cardAuthor${i + 1}`).append(data.author);
                    $(`.videoDuration${i + 1}`).append(data.duration);
                    $(`.profile_Pic${i + 1}`).attr('src', data.author_pic_url);
                    $(`.subTitle${i + 1}`).append(data['sub-title']);
                
                }
            }
        });

        $.ajax({
            url: 'https://smileschool-api.hbtn.info/latest-videos',
            type: 'GET',
            success: (data) => {
                for (let i = 0; i < 12; i++) {
                    const video = data[i % data.length];

                    $(`.latestVideo${i + 1},
                        .latestTitle${i + 1},
                        .latestSub${i + 1},
                        .latestAuthor${i + 1},
                        .latestDuration${i + 1},
                        .latestProfile${i + 1}`).empty();

                    $(`.latestVideo${i + 1}`).attr('src', video.thumb_url);
                    $(`.latestTitle${i + 1}`).append(video.title);
                    $(`.latestAuthor${i + 1}`).append(video.author);
                    $(`.latestDuration${i + 1}`).append(video.duration);
                    $(`.latestProfile${i + 1}`).attr('src', video.author_pic_url);
                    $(`.latestSub${i + 1}`).append(video['sub-title']);
                
                }
            }
        })

        function showLoader(event) {

        }
    }

    else if (page === 'page2') {
        console.log('This is the Pricing page');

        $.ajax ({
            url: 'https://smileschool-api.hbtn.info/quotes',
            type: 'GET',
            success: (data) => {

                $('.carousel-name1, .singleQuote1, .singleTitle1').empty();
                $('.carousel-name2, .singleQuote2, .singleTitle2').empty();
                $('.carousel-name3, .singleQuote3, .singleTitle3').empty();
                
                for (let i = 0; i < 3; i++) {
                    const quote = data[i] || data[0];
                    $(`.profilePic${i + 1}`).attr('src', quote.pic_url);
                    $(`.carousel-name${i + 1}`).append(quote.name);
                    $(`.singleQuote${i + 1}`).append(quote.text);
                    $(`.singleTitle${i + 1}`).append(quote.title);
                }
            }
        });
    }

    else if (page === 'page3') {
        console.log('This is the Courses page');
    }
    else {
        console.error(error);
    }
});
