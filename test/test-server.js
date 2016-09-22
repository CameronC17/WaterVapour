var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Games', function() {
   it('should list ALL games on get /games', function(done) {
           // create a request manager that uses our app
           var request = chai.request(app);

           // send a request
           request
               .get('/games')
               .end(function(err, res) {

                   // check we got a 200 response
                   res.should.have.status(200);

                   // and that it's html
                   res.should.be.html;

                   res.text.should.match(/Spooky Skeltal game/);
                   res.text.should.match(/Call of Doody 23/);
                   res.text.should.match(/Pineshaft/);

                   // finish the test ( don't forget this! )
                   done();
               });
       }),
   it('should list ALL users on get /users', function(done) {
           // create a request manager that uses our app
           var request = chai.request(app);

           // send a request
           request
               .get('/users')
               .end(function(err, res) {

                   // check we got a 200 response
                   res.should.have.status(200);

                   // and that it's html
                   res.should.be.html;

                   res.text.should.match(/CaptainCam/);
                   res.text.should.match(/o_r_l_y/);
                   res.text.should.match(/Nathn123/);

                   // finish the test ( don't forget this! )
                   done();
               });
       });
});
