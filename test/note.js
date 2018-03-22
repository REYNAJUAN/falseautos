// pull in our packages
// Chai allows us to create routes or interact with our server routes. Nin
var chai = require('chai'); 
var chaiHttp = require('chai-http');
var should = chai.should(); // <-- chai is a constructor on the chai object. Should gives you an object you can call. Ex.) if this data should be an object, array, string, etc. it will provide a way to check the data.

chai.use(chaiHttp); // <-- uses the Http package we pulled in.

// <-- '/GET all Notes' just console logs this message for you so you know what this check is going to be doing. This is not code.
// <-- 'beforeEach()'This is a function within the 'mocha' package. Once the check is done, the 'done' function is initiated to complete the function.
describe('/GET all Notes', function() { 
    beforeEach(function(done) { 

    }) 
}