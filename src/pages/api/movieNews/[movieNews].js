
export default async function handler(req, res) {
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65c19ac390mshf0801303b4d848dp17752ejsn8954c3586f09',
		'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
	},
	cache: 'force-cache' 
};

try {
	const {movieNews} = req.query
	const response = await fetch(`https://newsapi.org/v2/everything?q=${movieNews}&apiKey=9fa6d35358dc475396f5c04a62720dfe`, options);
	const result = await response.json();
	console.log(result);
    res.status(200).json(result )
} catch (error) {
	console.error(error);
    res?.status(500).json({ error: 'failed to load data' })
}
}