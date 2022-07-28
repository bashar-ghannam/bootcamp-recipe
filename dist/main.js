const render = new Render();
$('#recipe-btn').on('click', function () {
  $.get(`/recipes/${$('input').val()}`, function (recipesGoodness) {
    render.renderRecipes(recipesGoodness);
  });
});

$('.main').on('click', 'img', function () {
  alert($(this).siblings('ul').find('li:first-child').text());
});
