var Flickr = require('flickr').Flickr,
    csv = require("fast-csv"),
    fs = require("fs"),
    CONFIG = require('./config.js'),

var flickr = new Flickr(CONFIG.api, CONFIG.secret);

var getPhotos = function(id, lat, lon){

var flickr_params = {
  lat:lat,
  lon:lon,
  radius:0.02,
  radius_units:'km',
  per_page:1,
  format:'json'
};

flickr.executeAPIRequest("flickr.photos.search", flickr_params, false, function(err, result) {
        // Show the error if we got one
        if(err) {
            console.log("FLICKR ERROR: " + err);
            datacount = datacount + 1
            if(datacount < datalength){
              getPhotos(data[datacount][0], data[datacount][1],data[datacount][2])
            }

        }else{

          // Do something with flicker photos
          console.log(id, result.photos.total)
          csvStream.write({id: id, total: result.photos.total});
          datacount = datacount + 1
          if(datacount < datalength){
            getPhotos(data[datacount][0], data[datacount][1],data[datacount][2])
          }else{
            console.log("finished")
          }
        }
      })

}

var csvStream = csv
   .format({headers: true})
   .transform(function(row){
       return {
          id: row.id,
          total: row.total
       };
   }),
   writableStream = fs.createWriteStream("data/img_count.csv");

writableStream.on("finish", function(){
 console.log("DONE!");
});

csvStream.pipe(writableStream);

var data = [],
    datalength;
csv
 .fromPath("data/places.csv", {delimiter:'\t'})
 .on("data", function(d){

     //set your unique id, lat and lon column
     data.push([d[0], d[1],d[2]])

 })
 .on("end", function(){
     datalength = data.length - 1;
     datacount = 0;
     getPhotos(data[datacount][0], data[datacount][1],data[datacount][2])
 });
