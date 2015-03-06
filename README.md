##Installation
If you want to run these scripts locally on your machine, be sure you have the following requirements installed.

###Requirements

- [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
- [Node](http://nodejs.org/download/)


Clone flickr-scripts from the command line:

``` sh
$ git clone https://github.com/uf0/flickr-scripts.git
```

browse to flickr-scripts root folder:

``` sh
$ cd flickr-scripts
```

install node dependencies:

``` sh
$ npm install
```

edit configuration file

```sh
$ cp config.sample.js config.js
```

open ```config.js``` file and add you API and secret key

add data folder

``` sh
$ mkdir data
```
####Get number of photos around places

add palces file

``` sh
$ touch data/places.csv
```

open ```places.csv``` file insert the places to search for (tab delimiter)

```
id  lat lon
1 45.4465 9.2308
2 52.4576 3.0405
3 60.2039 9.0343
```

run the script

``` sh
$ node index.js
```
