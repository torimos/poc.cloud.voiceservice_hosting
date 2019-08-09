module.exports = async function (context, request) {
    var t = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
    var r = `${request.query.redirect_uri}#access_token=${t}&token_type=bearer&state=${request.query.state}`;
    context.log('Request redirect: ' + JSON.stringify(r));
    context.res.status(302)
            .set('location',r)
            .send();
};