(function () {
    var square = document.querySelector('.once');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('once-animation');
        }
      });
    });
  
    observer.observe(square); 
  })();