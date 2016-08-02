# :pizza: PizzaGO
A great way to order your pizza on the GO!

## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 5 and up recommended)
* [Github Client ID and Secret](https://github.com/settings/developers) (for OAuth)

### Installation

* Clone down the repository.
```
git clone https://github.com/cynical89/PizzaGO.git
```

* Install packages (from inside the PizzaGO folder).
```
npm install
```

* Create your config.  There's a `config.json.example` file in the root.  Edit it to include all your values for the site.  Save it as `config.json` and leave it in the root.

* If you want to use Google Analytics, set `config.site.analytics` to your Tracking ID and make sure the analytics partial (analytics.hbs) contains the correct Universal Analytics tracking code.  If you don't want to use Google Analytics, remove that property or set it to false.

* Start it up.
```
npm start
```

* Enjoy!
