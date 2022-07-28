class Render {
  renderRecipes(recipesGoodness) {
    $('.main').empty();
    const source = $('#Recipes-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({ recipesGoodness });
    $('.main').append(newHTML);
  }
}
