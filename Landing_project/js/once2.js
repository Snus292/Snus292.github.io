(function () {
    var square = document.querySelector('.once2');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('once-animation2');
        }
      });
    });
  
    observer.observe(square); 
  })();