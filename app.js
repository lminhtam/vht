require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');
var categoryRouter = require('./routes/category')
var singleProductRouter = require('./routes/single-product');
var checkoutRouter = require('./routes/checkout');
var cartRouter = require('./routes/cart');
var confirmationRouter = require('./routes/confirmation');
var blogRouter = require('./routes/blog');
var singleBlogRouter = require('./routes/single-blog');
var loginRouter = require('./routes/login');
var forgotPasswordRouter = require('./routes/forgot-password');
var registrationRouter = require('./routes/registration');
var trackingRouter = require('./routes/tracking');
var elementsRouter = require('./routes/elements');
var contactRouter = require('./routes/contact');
var dashboardRouter = require('./routes/dashboard');
var logoutRouter = require('./routes/logout');

var app = express();

// passport config
require('./config/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express session
app.use(session(
{
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// global variables
app.use(function(req, res, next) 
{
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

// routers
app.use('/', indexRouter);
app.use('/index.html', indexRouter);
app.use('/category.html', categoryRouter);
app.use('/single-product.html', singleProductRouter);
app.use('/checkout.html', checkoutRouter);
app.use('/cart.html', cartRouter);
app.use('/confirmation.html', confirmationRouter);
app.use('/blog.html', blogRouter);
app.use('/single-blog.html', singleBlogRouter);
app.use('/login.html', loginRouter);
app.use('/forgot-password.html', forgotPasswordRouter);
app.use('/registration.html', registrationRouter);
app.use('/tracking.html', trackingRouter);
app.use('/elements.html', elementsRouter);
app.use('/contact.html', contactRouter);
app.use('/dashboard.html', dashboardRouter);
app.use('/logout.html', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
