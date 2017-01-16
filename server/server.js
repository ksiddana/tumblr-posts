const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const tumblr = require('tumblr');


if( process.argv[2] !== undefined && !isNaN(process.argv[2]) ){
  app.set('port', process.argv[2]);
}
else {
  app.set('port', process.env.PORT || 3000 );
}


app.use(express.static(__dirname + '/../tumblr2'));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(cors());

/* **************************************************************************
 * API
 * *************************************************************************/


var oauth = {
  consumer_key: 'Qka3GMiZoTMAQqO32boeOW7JsAQsTpzcjw3bPduo4JL9UC4mqB',
  consumer_secret: 'VImvH8zNq4qimhmuqBDU49RbNJU8UlPFLR8ikWT9M6NgxtdqhP',
  token: 'xulmnXuFQAFqSTacBZCfyIwR6gVLqhCHAfaHdcBoqby74HIHgO',
  token_secret: 'biC2SPUGeWt1W5psDx8PjjwjgtOOuEJzfIF50gBxy8fsLh7WXM'
};


app.get('/bloginfo', (req, res) => {

  if (!req.query.blog_name) {
    req.query.blog_name = 'peacecorps'
  }

  console.log("Parameters: ", req.query.blog_name);


  var blog = new tumblr.Blog(req.query.blog_name + '.tumblr.com', oauth);

  // Make the request
  blog.text({limit: 10}, function(error, data) {
    
    if (error) {
      console.error(error);
      res.send(error);
    }  
    res.send(data.posts);
  })

});

app.get('/reports/:id', (req, res) => {
  res.send(db.fetch(req.params.id));
});

app.post('/reports', (req, res) => {
  res.send(db.save(req.body));
});

app.put('/reports/:id', (req, res) => {
  res.send(db.update(req.params.id, req.body));
});

app.delete('/reports/:id', (req, res) => {
  res.send(db.remove(req.params.id));
});

// 404
app.use((req, res, next) => {
  res.status(404).send({
    message: `Yay! The API is running but there is nothing at ${req.url}`,
  });
});

// 5xx
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Server Error. Check our console logs.' });
});

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log('Server listening on localhost:' + app.get('port'));
  console.log('Test Complete ...');
});
