//accept form input
//TODO: clear input field after enter button click
//create bookmarks box with form input
//add and remove classes to html elements
//mark as .read event
//remove .read event
//delete event

$('.enter-button').on('click', function() {
  event.preventDefault();
  var bookmarkTitleInput = $('.bookmark-title-input').val();
  var bookmarkUrlInput = $('.bookmark-url-input').val();

  var bookmarkTitle = $('.bookmark-title');
  var bookmarkUrl = $('.bookmark-url');

  bookmarkTitle.text(bookmarkTitleInput);
  bookmarkUrl.text(bookmarkUrlInput);

});

$('.read-link').on('click', function (){
  event.preventDefault();
  $('.bookmark-box').toggleClass('read-box');
  $('.bookmark-url-link').toggleClass('read-url');
  $('.read-link').toggleClass('read-read');
  $('.delete-link').toggleClass('read-delete');
});

$('.delete-button').on('click', function() {
  event.preventDefault();
  $('.bookmark-box').remove();
})
