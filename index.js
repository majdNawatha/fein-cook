const express = require('express'),
      url = require('url'),
     bodyParser = require('body-parser'),
     mangoconnect = require('./mangoconnect'),
     app = express(),
    recipe = require('./recipeSchema'),
    article = require('./artSchema'),
    product = require('./prodSchema'),
     port = process.env.PORT || 3000;
     
   app.use('assets',express.static('${__dirname}/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

 app.get('/', function(req,res){
      console.log('im here');
    });

    app.get('/recipe/all', function(req,res){
      recipe.find().then(function(results){
                console.log(' Get All Recipes  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
  	});


    app.post('/recipe/all', function(req,res){
      recipe.find().then(function(results){
                console.log(' Get All Recipes  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });


   app.get('/recipe/id/:id', function(req,res){
     var urlPart = url.parse(req.url,true);
     var query = urlPart.query;
     console.log(' Search recipe ID--> ' + req.params.id );

      recipe.find({recipeID: + req.params.id }).then(function(results){
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });



   app.post('/recipe/add', function(req,res){

    var newRecipe  = new recipe({

        recipeName : req.body.recipeName,
        Cat : req.body.cat,
        howTo : [req.body.howto],
        summ : req.body.summ,
        prod : [req.body.prod]
     });

console.log(req.body);
console.log(newRecipe);
     console.log(' add recipe --> ');
      newRecipe.save(
        (err, model) => {
          if(err)
            console.log('err' + err);
        else{
          console.log('saved recipe');
        }
        });
});



   app.get('/recipe/cat/:id', function(req,res){
     var urlPart = url.parse(req.url,true);
     var query = urlPart.query;
     console.log(' Search recipe cat--> ' + req.params.id );

      recipe.find({Cat:  req.params.id }).then(function(results){
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });
  

  app.get('/recipe/lvl/:id', function(req,res){
     var urlPart = url.parse(req.url,true);
     var query = urlPart.query;
     console.log(' Search recipe lvl--> ' + req.params.id );

      recipe.find({lvl:  req.params.id }).then(function(results){
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });


   app.get('/recipe/new', function(req,res){
    console.log("recipe/new");
      recipe.find().sort({"addDate": -1}).limit(1).then(function(results){
                console.log(' Get  last recipe  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });



    app.get('/article/all', function(req,res){
      article.find().then(function(results){
                console.log(' Get All article  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });

   app.get('/article/new', function(req,res){
      article.find().sort({"addDate": -1}).limit(3).then(function(results){
                console.log(' Get  last article  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });


   app.get('/article/:id', function(req,res){
     var urlPart = url.parse(req.url,true);
     var query = urlPart.query;
     console.log(' Search article ID--> ' + req.params.id );
      article.find({artID: + req.params.id }).then(function(results){
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });



    app.get('/product/all', function(req,res){
      product.find().then(function(results){
                console.log(' Get All products  ');

                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });


   app.get('/product/new', function(req,res){
    console.log("product/new");
      product.find().sort({"addDate": -1}).limit(1).then(function(results){
                console.log(' Get  last product  ');
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });

      app.get('/product/:id', function(req,res){
     var urlPart = url.parse(req.url,true);
     var query = urlPart.query;
     console.log(' Search product ID--> ' + req.params.id );

      product.find({prodID: + req.params.id }).then(function(results){
                res.json(results);
      }).catch(function(e){
        res.json(e);
      });
    });




    app.get('*', function(req,res){
      res.send('Got Lost? This is Friendly 404 Page ;) ');
      console.log(' 404 Get Lost ');
    });

        app.listen(port);
      	console.log('listening to port :  '+ port );




 // res.set('Content-Type' ,'text/html');
 // res.send('<html><body>hi</body></html>');