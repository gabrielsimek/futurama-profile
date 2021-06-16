import { Router } from 'express';
import getQuote from '../utils/futuramaApi';
import Profile from '../Models/Profile';
export default Router()
  .post('/api/v1/profiles', async (req, res) => {
    try {
      const quote = await getQuote(req.body.favoriteCharacter);
      const profile = await Profile.createProfile(req.body, quote);
        
      res.send(profile);
          
          
    } catch (error) {
      res.status(500).send({ error: error.message });
          
    }
  });
