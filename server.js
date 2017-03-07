var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content={
    title:'Article One|Pavani',
    Heading:'Article One',
    date:'mar 07 2017',
content:`<p>This is first article This is first article This is first article This is first article
        This is first article This is first article This is first article This is first article</p>
        
        <p>This is first article This is first article This is first article This is first article
        This is first article This is first article This is first article This is first article</p>
        
        <p>This is first article This is first article This is first article This is first article
        This is first article This is first article This is first article This is first article</p>`  
};


function createTemplate(data){
   var title=data.title;
   var heading= data.Heading;
   var date=data.date;
   var content=data.content;
    

var htmlTemplate =`

<html>
    
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
    
     
        </head>
    <body>
       "
        <div>
        <div>
            <a href="/">Home</a>
        </div>
        
        <div>
        <h3>${heading}
        </h3>
        </div>
        
        <div${date}</div>
        
    <div>
        
         ${content}
        
    </div>
    </div>
    </body>
    
    
</html>


`;
    
    return htmlTemplate;  
}


app.get('/article-one',function(req,res){
   res.send(createTemplate(content));
});

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
