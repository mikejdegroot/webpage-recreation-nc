$(() => {
  console.log('JS loaded');

  const $button = $('.button');
  const $emailInput = $('.emailInput');
  const $emailWarn = $('.emailWarn');
  const $passInput = $('.passInput');
  const $passWarn = $('.passWarn');



  $button.on('click', () => {
    if (!$emailInput.val().match(/\S+@\S+\.\S+/)) {
      $emailWarn.html('Not a valid email address');
      $emailWarn.css('list-style-image', `url('./assets/icon-error.svg')`);

    } else {
      $emailWarn.html('');
      $emailWarn.css('list-style-image', `url()`);
    }

    if($passInput.val().length < 7) {
      $passWarn.html('password must be at least 7 characters');
      $passWarn.css('list-style-image', `url('./assets/icon-info.svg')`);

    } else {
      $passWarn.html('');
      $passWarn.css('list-style-image', `url()`);
    }
  });
});
