(function() {
  'use strict';
  var TagMatcher = function() {};

  /**
   * Would return all valid tags as DOMs
   */
  TagMatcher.prototype.parse = function(string) {
    var dummy = document.createElement('div');
    dummy.innerHTML = string;
    return [...dummy.children];
  };

  var Render = function() {};

  Render.prototype.start = function() {
    var lines = [...document.querySelectorAll('#log > p')],
        tagMatcher = new TagMatcher();

    lines.forEach((line) => {
      var text = [...line.querySelectorAll('span')].map((span) => {
            return span.textContent;
          }).join(''),
          doms = tagMatcher.parse(text);
      doms.forEach((dom) => {
        line.appendChild(dom);
      });
    });
  };

  var Main = function() {};

  Main.prototype.start = function() {
    var id = setInterval(() => {
      var actions = document.querySelector('#actions > ul');
      if (actions) {
        clearInterval(id);
        actions.appendChild(this.renderButton());
      }
    }, 500);
  };

  Main.prototype.renderButton = function() {
    var button = document.createElement('li'),
        a = document.createElement('a');
    button.classList.add('icon');
    a.style.color = 'black';
    a.textContent = 'R';
    button.appendChild(a);
    button.addEventListener('click', function() {
      (new Render()).start();
    });
    return button;
  };

  (new Main()).start();
})();
