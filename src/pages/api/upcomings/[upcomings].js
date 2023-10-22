export default async function handle(req,res){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGEzYzFhYmUzNDZhY2FiMTdkYzQzODgwZTEzMjI1YyIsInN1YiI6IjY0ZjYxMWE2ZTBjYTdmMDEwZGU2MGIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlUyPRuWTZ9S9MMYEhWnj7OmNOwiLjDtgYzqbvjhvVY'
        }
        ,cache: 'force-cache' 
      };
    try{
        const  response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=${req.query.upcomings}&region=IN`, options)
        const data = await response.json()
        res.status(200).json(data)
              }
              catch(err){
        console.log(err)
        res?.status(500).json({ error: 'failed to load data' })
              }
              
}