// Keeps the user's place while they are over on LinkedIn.
// Opening LinkedIn marks step 1 as started; coming back to this tab lights its lamp and moves on to step 2,
// and the footer's "I've requested it" becomes the primary action.
(function () {
  var KEY = 'aik.export.opened';
  var link = document.getElementById('open-linkedin');
  var open = document.getElementById('step-open');
  var pick = document.getElementById('step-pick');
  if (!link || !open || !pick) return;
  var away = false;

  function read() { try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function write() { try { sessionStorage.setItem(KEY, '1'); } catch (e) { /* private mode: state lasts for this view only */ } }

  function advance(announce) {
    if (open.classList.contains('done')) return;
    open.classList.replace('now', 'done');
    open.removeAttribute('aria-current');
    open.querySelector('.num').innerHTML = '<svg viewBox="0 0 12 12"><path d="M2.5 6.5l2.2 2.2L9.5 3.8"/></svg>';
    open.querySelector('h2').insertAdjacentHTML('beforeend', '<span class="sr-only"> (done)</span>');
    pick.classList.add('now');
    pick.setAttribute('aria-current', 'step');
    link.classList.replace('solid', 'ghost');
    var next = document.getElementById('requested');
    if (next) next.classList.add('solid');
    link.querySelector('[data-label]').textContent = 'Open LinkedIn again';
    document.getElementById('open-hint').textContent = 'Opened in another tab';
    if (announce) document.getElementById('status').textContent = 'Welcome back. Next, pick Connections only and request the archive.';
  }

  link.addEventListener('click', function () { away = true; write(); });
  function back() { if (away && document.visibilityState === 'visible') { away = false; advance(true); } }
  document.addEventListener('visibilitychange', back);
  window.addEventListener('focus', back);

  if (read()) advance(false);
})();
