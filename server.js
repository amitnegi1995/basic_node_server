const express= require('express');
const hbs = require('hbs');

const port= process.env.PORT || 3000;

var app=express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res)
{
  res.render('home.hbs',
  {
    welcome_message:'welcome to Handle bar example',
    ti:'2nd handelBar ',
    year:new Date().getFullYear()
  });
});

app.get('/bad',function(req,res)
{
  res.send({
    message:'error found'
  });
});
app.get('/about',function(req,res)
{
  res.render('temp.hbs',
  {
    ti:'1st handelBar ',
    year:new Date().getFullYear()
  });
});

app.listen(3000,function()
{
  console.log(`server started on port ${port}`);
});
