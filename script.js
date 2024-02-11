const followers_countEl = document.getElementById("followers_count")
const posts_countEl = document.getElementById("posts_count")

const API_KEY = "e1b4cd495fmsha012f496d4e2893p14a6e6jsna1a4b7cf2d61";

async function getFollowers() {
    const url = 'https://instagram210.p.rapidapi.com/ig_profile?ig=kazuha__slayer';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'instagram210.p.rapidapi.com'
        }
    };

    try {
        console.log("Fetching Instagram Details...")
        const response = await fetch(url, options);
        const result = await response.json();

        followers_countEl.setAttribute('data-purecounter-end', result[0].follower_count);
        posts_countEl.setAttribute('data-purecounter-end', result[0].media_count);

    } catch (error) {
        console.error(error);
    }

    new PureCounter()
}

getFollowers()

