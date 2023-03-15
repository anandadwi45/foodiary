const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Favorite Restaurant','.favorite__title');
  
    I.amOnPage('/');
  
    I.seeElement('.item__name a');
  
    const firstResto = locate('.item__name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card-meal');
    const likeRestoName = await I.grabTextFrom('.item__name');
  
    assert.strictEqual(firstRestoName, likeRestoName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Favorite Restaurant','.favorite__title');
  
    I.amOnPage('/');
  
    I.seeElement('.item__name a');
  
    const firstResto = locate('.item__name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card-meal');
    const likeRestoName = await I.grabTextFrom('.item__name a');

    I.click(likeRestoName);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.see('Favorite Restaurant','.favorite__title');
  
    assert.strictEqual(firstRestoName, likeRestoName);
});