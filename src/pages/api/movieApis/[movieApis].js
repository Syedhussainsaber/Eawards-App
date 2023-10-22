export default async function handler(req, res) {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGEzYzFhYmUzNDZhY2FiMTdkYzQzODgwZTEzMjI1YyIsInN1YiI6IjY0ZjYxMWE2ZTBjYTdmMDEwZGU2MGIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlUyPRuWTZ9S9MMYEhWnj7OmNOwiLjDtgYzqbvjhvVY'
        },
 cache: 'force-cache' 
      };

        try {
          const {movieApis} = req.query
          const result = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=hi-IN&region=IN&page=${movieApis}`,options)
    const response = await result.json()
          res.status(200).json({ response })
        } catch (err) {
          res?.status(500).json({ error: 'failed to load data' })
        }
  }