const followers_countEl = document.getElementById("followers_count")
const posts_countEl = document.getElementById("posts_count")

const API_KEY = "";

async function getFollowers() {
    const url = 'https://instagram130.p.rapidapi.com/account-info?username=kazuha__slayer';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
        }
    };

    try {
        console.log("Fetching Instagram Details...")
        const response = await fetch(url, options);
        const result = await response.json();

        // console.log(result.edge_followed_by.count);

        followers_countEl.setAttribute('data-purecounter-end', result.edge_followed_by.count);
        posts_countEl.setAttribute('data-purecounter-end', result.edge_owner_to_timeline_media.count);

    } catch (error) {
        console.error(error);
    }

    new PureCounter()
}

getFollowers()

