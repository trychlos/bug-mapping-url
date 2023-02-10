import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
});

WebApp.connectHandlers.use( function( req, res, next ){
    const indexOf = req.url.indexOf( '/jstree/' );
    if( indexOf > 0 ){
        const newurl = req.url.substring( indexOf );
        console.log( 'WebApp redirecting', req.url, 'with', newurl );
        res.writeHead( 301, {
            Location: newurl
        });
        res.end();
    } else {
        next();
    }
});
