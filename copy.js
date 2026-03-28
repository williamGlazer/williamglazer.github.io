let timeoutId;

/**
 * Copy email address to the clipboard.
 */
function copy() {
  navigator.clipboard.writeText('willcavanagh@hotmail.com')
    .then(() => {
      updateButton();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resetButton, 700);
    })
    .catch(err => console.error('Failed to copy text:', err));
}

/**
 * Change the button label to “Copied!”.
 */
function updateButton() {
  document.getElementById('mail').textContent = 'Copied!';
}

/**
 * Restore the original button label.
 */
function resetButton() {
  document.getElementById('mail').textContent = 'Mail';
}
