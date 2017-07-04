import express from 'express';
import file from './file';

const router = express.Router();

router.use( function timeLog(req, res, next){
    console.log( 'Time:', Date.now() , req.originalUrl );
    next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('api home...');
});

router.get( '/file/upload', file.upload );
router.get( '/file/list', file.getList );

module.exports = router;