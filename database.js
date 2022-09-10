const random = require('random');
const fs = require('fs');
const { daysInWeek } = require('date-fns/constants/index.js');

const plot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum viverra nisi nec ornare. Morbi sed nunc risus. Sed eu dapibus elit. In eget metus at diam malesuada tincidunt. Vestibulum eu viverra nulla. Donec eu imperdiet lorem. Pellentesque eget lacus convallis, iaculis lectus at, sodales ex. Suspendisse potenti. Maecenas mauris ligula, luctus ut vulputate vitae, finibus eget tortor. Sed dignissim quam eu mi consequat ultrices et scelerisque enim. Nulla viverra a mi mattis efficitur. Cras congue interdum dolor, a facilisis leo feugiat sed. Suspendisse ultrices ipsum ac nisi fermentum luctus id at nisl. Proin vulputate nisl ligula. Nam mi ex, tempus et mauris ut, laoreet pellentesque risus. Vestibulum vehicula viverra euismod. Duis vel dolor maximus, consectetur erat a, elementum justo. Aliquam erat volutpat. In in metus eu risus ullamcorper maximus. Mauris fermentum, lorem a venenatis dictum, nibh ex bibendum tortor, et rhoncus sapien massa quis lorem. Etiam lacinia ex vel magna rutrum, sed porttitor orci convallis. Aliquam sed diam nulla.";
const sampleImgUrl = (seed) => `https://picsum.photos/seed/${seed}/200/300`;

function rInt(l, u) {
    return random.int(l, u);
}

module.exports = function database(n = 100) {
    let database = {
        movies: [],
        events: []
    }

    const dayMillis = 86400 * 1000;

    for (let i = 1; i <= n; i++) {
        const currentDate = Date.now();
        const randomMillis = rInt(0, currentDate + dayMillis * 30);
        const randomMillisFuture = rInt(currentDate, currentDate + dayMillis * 60);
        const releaseDate = (new Date(randomMillis)).toLocaleDateString();

        let randomHours = rInt(1, 3);
        let randomMins = String(rInt(0, 59));
        let randomSecs = String(rInt(0, 59));
        randomMins = (randomMins.length == 1) ? ("0" + randomMins) : randomMins;
        randomSecs = (randomSecs.length == 1) ? ("0" + randomSecs) : randomSecs;

        const duration = `${randomHours}:${randomMins}:${randomSecs}`;
        const rating = random.float((min = 1), (max = 5)).toFixed(1);

        const genre = (new Array(rInt(1, 3))).fill('').map(() => {
            return `Genre ${rInt(1, 10)}`;
        });

        let showings = [];
        let dayN = [];

        for (let j = 1; j <= 10; j++) {
            let timings = [];
            let day = 0

            for (let j = rInt(6, 10); j <= 23 - randomHours; j += randomHours + 2) {
                const minutes = ['00', '30'][rInt(1, 2) % 2];
                timings.push(`${j}:${minutes} - ${j + randomHours + 1}:${minutes}`);
            }

            do {
                day = rInt(1, 60);
            } while(dayN.includes(day));
            dayN.push(day);

            const randomMillisFuture = currentDate + dayMillis * day;
            showings.push({
                date: randomMillisFuture,
                timings: timings,
            });
        }

        showings.sort((a , b) => {
            if(a.date > b.date) return 1;
            if(a.date < b.date) return -1;
            return 0;
        })

        database.movies.push({
            id: i,
            title: `Movie Title ${i}`,
            plot: plot,
            director: `Director ${rInt(1, 20)}`,
            genre: genre,
            posterImg: sampleImgUrl(i),
            releaseDate: randomMillis,
            duration: duration,
            rating: rating,
            showings: showings,
        });

        database.events.push({
            id: i,
            name: `Event ${i}`,
            eventDate: randomMillisFuture,
            venue: `Venue ${i}`,
            posterImg: sampleImgUrl(i),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum viverra nisi nec ornare. Morbi sed nunc risus. Sed eu dapibus elit. In eget metus at diam malesuada tincidunt. Vestibulum eu viverra nulla. Donec eu imperdiet lorem."
        });
    }

    fs.writeFileSync('database.json', JSON.stringify(database));

    return database;
}