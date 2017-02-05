import React from 'react';
import request from 'request';
import cheerio from 'cheerio';

const Recipe = React.createClass({
    getInitialState() {
        return {recipe: this.getRecipe()}
    },

    getRecipe() {
        const url = 'https://cooking.nytimes.com/';
        request(url, function(error, response, html) {
            if (!error) {
                const $ = cheerio.load(html);
                let data = $('.top-label');
                console.log(data);
            }
        });

        return 'HI';
    },

    render(){
      const {recipe} = this.state;

      return <h2>{recipe}</h2>
    }
});

export default Recipe;
