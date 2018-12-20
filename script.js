// each day, program crawls rate my professor
// check the number of ratings
// if the number of rating is greater than the last registered count 
// return most recent rating

const rateMyProfessorIzzyUrl = 'http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1622086';

const izzyRatingPage = fetch(rateMyProfessorIzzyUrl);

function fetchAndScrapeRatingPage(page) {
  page
    .then((response) => response.clone())
    .then((response) => {
      return response.text();
    })
    .then((pageHTML) => {
      const indexOfRatingCountClass = pageHTML.indexOf('rating-count');
      const ratingCountString = pageHTML
        .slice(indexOfRatingCountClass + 50, indexOfRatingCountClass + 60)
        .trim();
      const ratingCount = Number(ratingCountString);
      console.log('at ', (new Date()).toLocaleString('en-US'), ' ratingCountString is ', ratingCount);
    })
}

setInterval(
  function() {
    fetchAndScrapeRatingPage(izzyRatingPage)
  },
  1000,
)

