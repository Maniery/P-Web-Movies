export default async function handler(req, res) {
    const { query } = req.query;
  
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`);
    const data = await response.json();
  
    res.status(200).json(data);
  }
  