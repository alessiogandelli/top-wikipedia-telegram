import axios from 'axios';





let url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/it.wikipedia/all-access/2022/09/03"


export async function getData() {
    let data;
    let articles = [];

    await axios.get(url)
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            data = res.data
        })
        .catch(error => {
        console.error(error);
    });

    articles.push('https://it.wikipedia.org/wiki/'+data.items[0].articles[1].article);
    articles.push('https://it.wikipedia.org/wiki/'+data.items[0].articles[2].article);
    articles.push('https://it.wikipedia.org/wiki/'+data.items[0].articles[3].article);
    articles.push('https://it.wikipedia.org/wiki/'+data.items[0].articles[4].article);
    

    return articles

}


async function main () {
    let data = await getData()
    console.log(data)
}

