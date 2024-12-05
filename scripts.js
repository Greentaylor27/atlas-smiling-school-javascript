$(document).ready(function() {
    
    let page = $('body').data('page');

    if (page === 'page1') {

        function getQuotes() {
            $('#quotesLoader').show();
            $('#quotesCarousel').hide();
            
            setTimeout(() => {
                $.ajax ({
                    url: 'https://smileschool-api.hbtn.info/quotes',
                    type: 'GET',
                    success: (data) => {
                        
                        $('#quotesLoader').hide();
                        $('#quotesCarousel').show();
                        
                        for (let i = 0; i < 3; i++) {
                            const element = data[i] || data[0];
                            
                            $(`.carousel-name${i + 1}, .singleQuote${i + 1}, .singleTitle${i + 1}`).empty();
                            
                            $(`.profilePic${i + 1}`).attr('src', element.pic_url);
                            $(`.carousel-name${i + 1}`).append(element.name);
                            $(`.singleQuote${i + 1}`).append(element.text);
                            $(`.singleTitle${i + 1}`).append(element.title);
                        }
                    },
                    error: function() {
                        getQuotes();
                    }
                });
            }, 1000);
        }

        function getPopularVideo() {
            $('#popularLoader').show();
            $('#popularCarousel').hide();

            setTimeout(() => {
                $.ajax ({
                    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
                    type: 'GET',
                    success: (data) => {
                        $('#popularLoader').hide();
                        $('#popularCarousel').show();


                        for (let i = 0; i < 12; i++) {
                            const element = data[i % data.length];
                            const stars = element.star;

                            $(`.popularVideo${i + 1}, .cardTitle${i + 1}, .subTitle${i + 1}, .cardAuthor${i + 1}, .videoDuration${i + 1}, .profile_Pic${i + 1}`).empty();

                            $(`.popularVideo${i + 1}`).attr('src', element.thumb_url);
                            $(`.cardTitle${i + 1}`).append(element.title);
                            $(`.cardAuthor${i + 1}`).append(element.author);
                            $(`.videoDuration${i + 1}`).append(element.duration);
                            $(`.profile_Pic${i + 1}`).attr('src', element.author_pic_url);
                            $(`.subTitle${i + 1}`).append(element['sub-title']);


                            // Looks a bit better than what I originally had again there is probably a better way to handle this but this is what I concluded with.
                            switch (stars) {
                                case 1:
                                    $(`#popularRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#popularRating${i + 1} > img:first-child`).attr('src', 'images/star_on.png');
                                    break
                                case 2:
                                    $(`#popularRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#popularRating${i + 1} > img:first-child, #popularRating${i + 1} > img:nth-child(2)`).attr('src', 'images/star_on.png');
                                    break
                                case 3:
                                    $(`#popularRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#popularRating${i + 1} > img:first-child, #popularRating${i + 1} > img:nth-child(2), #popularRating${i + 1} > img:nth-child(3)`).attr('src', 'images/star_on.png');
                                    break
                                case 4:
                                    $(`#popularRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#popularRating${i + 1} > img:first-child, #popularRating${i + 1} > img:nth-child(2), #popularRating${i + 1} > img:nth-child(3), #popularRating${i + 1} > img:nth-child(4)`).attr('src', 'images/star_on.png');
                                    break
                                case 5:
                                    $(`#popularRating${i + 1} > img`).attr('src', 'images/star_on.png');
                                    break
                            }
                        }
                    },
                    error: function () {
                        getPopularVideo();
                    }
                });
            }, 1000);


        }

        function getLatestVideo() {
            $('#latestLoader').show();
            $('#latestCarousel').hide();

            setTimeout(() => {
                $.ajax({
                    url: 'https://smileschool-api.hbtn.info/latest-videos',
                    type: 'GET',
                    success: (data) => {
    
                        $('#latestLoader').hide();
                        $('#latestCarousel').show();
    
                        for (let i = 0; i < 12; i++) {
                            const element = data[i % data.length];
                            const stars = element.star;
    
                            $(`.latestVideo${i + 1}, .latestTitle${i + 1}, .latestSub${i + 1}, .latestAuthor${i + 1}, .latestDuration${i + 1}, .latestProfile${i + 1}`).empty();
    
                            $(`.latestVideo${i + 1}`).attr('src', element.thumb_url);
                            $(`.latestTitle${i + 1}`).append(element.title);
                            $(`.latestAuthor${i + 1}`).append(element.author);
                            $(`.latestDuration${i + 1}`).append(element.duration);
                            $(`.latestProfile${i + 1}`).attr('src', element.author_pic_url);
                            $(`.latestSub${i + 1}`).append(element['sub-title']);

                            // Cleaned it up and made it a bit cleaner again probably a better way to handle this
                            switch (stars) {
                                case 1:
                                    $(`#latestRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#latestRating${i + 1} > img:first-child`).attr('src', 'images/star_on.png');
                                    break
                                case 2:
                                    $(`#latestRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#latestRating${i + 1} > img:first-child, #latestRating${i + 1} > img:nth-child(2)`).attr('src', 'images/star_on.png');
                                    break
                                case 3:
                                    $(`#latestRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#latestRating${i + 1} > img:first-child, #latestRating${i + 1} > img:nth-child(2), #latestRating${i + 1} > img:nth-child(3)`).attr('src', 'images/star_on.png');
                                    break
                                case 4:
                                    $(`#latestRating${i + 1} > img`).attr('src', 'images/star_off.png');
                                    $(`#latestRating${i + 1} > img:first-child, #latestRating${i + 1} > img:nth-child(2), #latestRating${i + 1} > img:nth-child(3), #latestRating${i + 1} > img:nth-child(4)`).attr('src', 'images/star_on.png');
                                    break
                                case 5:
                                    $(`#latestRating${i + 1} > img`).attr('src', 'images/star_on.png');
                                    break
                            }
                        }
                    },
                    error: function() {
                        getLatestVideo();
                    }
                });
            }, 1000);
        }

        getQuotes();
        getPopularVideo();
        getLatestVideo();
        
    }

    else if (page === 'page2') {
        function getQuotes() {
            setTimeout(() => {

                $('#quotesLoader').show();
                $('#quotesCarousel').hide();
                
                $.ajax ({
                    url: 'https://smileschool-api.hbtn.info/quotes',
                    type: 'GET',
                    success: (data) => {
                        
                        $('#quotesLoader').hide();
                        $('#quotesCarousel').show();
                        
                        for (let i = 0; i < 3; i++) {
                            const element = data[i] || data[0];
                            
                            $(`.carousel-name${i + 1}, .singleQuote${i + 1}, .singleTitle${i + 1}`).empty();
                            
                            $(`.profilePic${i + 1}`).attr('src', element.pic_url);
                            $(`.carousel-name${i + 1}`).append(element.name);
                            $(`.singleQuote${i + 1}`).append(element.text);
                            $(`.singleTitle${i + 1}`).append(element.title);
                        }
                    },
                    error: function() {
                        getQuotes();
                    }
                });
            }, 0);
        }
        getQuotes();
    }

    else if (page === 'page3') {
        console.log('This is the Courses page');
    }
    else {
        console.error(error);
    }
});
