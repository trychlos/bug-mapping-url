import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
});

WebApp.connectHandlers.use( function( req, res, next ){
    const indexOf = req.url.indexOf( '/jstree/' );
    if( indexOf > 0 ){
        const newurl = req.url.substring( indexOf );
        console.log( 'substituting', req.url, 'with', newurl );
        req.url = newurl;
    }
    next();
});
