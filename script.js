/*  ------------------------------------------------------

  ---------------------
  - TABLE OF CONTENTS -
  ---------------------

  - State Object
  - Input Field Event Listener
  - Read Button Event Listener
  - Delete Button Event Listener
  - Function Declarations
    * createBookmarkBox()
    * resetForm()
    * displayErrorMessage()
    * removeErrorMessage()

*/

// STATE OBJECT

var state = {
  linksCurrentlyOnPage: 0,
  numberOfReadLinks: 0,
  numberOfUnreadLinks: 0,
  updateLinkCount: function() {
    linksCurrentlyOnPage = $('.bookmark-box').find().length;
    numberOfReadLinks = $('.read').find().length;
    numberOfUnreadLinks = $('.bookmark-box').find().length - $('.read').find().length;

    $('.total-link-number').text(linksCurrentlyOnPage);
    $('.read-link-number').text(numberOfReadLinks);
    $('.unread-link-number').text(numberOfUnreadLinks);
  }
}

// CHECK NUMBER OF LINKS ON PAGE LOAD
state.updateLinkCount();

// INPUT FIELD EVENT LISTENER

$('bookmark-title-input').keyup(function() {
  $('.enter-button').prop("disabled", !this.value);
})

$('.bookmark-url-input').keyup(function() {
  $('.enter-button').prop("disabled", !this.value);
})

// ENTER BUTTON EVENT LISTENER
$('.enter-button').on('click', function(e) {
  e.preventDefault();

  var enterButton = $('.enter-button');
  var bookmarkTitleInput = $('.bookmark-title-input').val();
  var bookmarkUrlInput = $('.bookmark-url-input').val();

  removeErrorMessage();

  // disableButton(enterButton);

  bookmarkTitleInput === '' ? displayErrorMessage('Title cannot be blank!') : null;
  bookmarkUrlInput === '' ? displayErrorMessage('URL cannot be blank!') : null;

  bookmarkTitleInput.length === 0 || bookmarkUrlInput.length === 0 ? null : enableButton(enterButton);

  $('.error-message').length > 0 ? null : createBookmarkBox(bookmarkTitleInput, bookmarkUrlInput);

  resetForm();

  $('.bookmark-title-input').focus();

  state.updateLinkCount();
});

// READ BUTTON EVENT LISTENER
$('.right-side').on('click', '.read-link', function(e) {
  e.preventDefault();
  $(this).closest('article').toggleClass('read-box');
  $(this).closest('article').find('.bookmark-url-link').toggleClass('read-url');
  $(this).toggleClass('read-read');
  $(this).closest('div').find('.delete-link').toggleClass('read-delete');
});

// DELETE BUTTON EVENT LISTENER
$('.right-side').on('click', '.delete-link', function() {
  $(this).parents().eq(2).remove();
});

// FUNCTION DECLARATIONS

function createBookmarkBox(title, url) {
  $('.right-side').prepend(`<article class="bookmark-box">
  <h2 class="bookmark-title">${title}</h2>
  <p class="bookmark-url"><a class="bookmark-url-link" href="${url}">${url}</a></p>
  <div class="bookmark-bottom-line">
    <p class="read-button"><span class="read-link">Read</span></p>
    <p class="delete-button"><span class="delete-link">Delete</span></p>
  </div>
  </article>`);
}

function resetForm() {
  $('input[type="text"]').val('');
}

function displayErrorMessage(cause) {
  $('.left-side').append(`<p class="error-message">Error: <span class="error-cause">${cause}</span></p>`);
}

function removeErrorMessage() {
  $('.error-message').remove();
}
