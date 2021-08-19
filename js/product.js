window.addEventListener('load', function() {
    // click images in the showcase, the corresponding image appears in the big frame
    var bigImg = document.querySelector('.big-img');
    var basqueShowcase = document.querySelector('.basque-showcase');

    var cottonShowcase = document.querySelector('.cotton-showcase');

    var doubleShowcase = document.querySelector('.double-showcase');

    var tokyoShowcase = document.querySelector('.tokyo-showcase');
    var counter = 0;

    function switchImage(obj, callback) {
        for (var i = 0; i < obj.children.length; i++) {
            obj.children[i].setAttribute('index', i);
            obj.children[i].addEventListener('click', function() {
                for (var i = 0; i < obj.children.length; i++) {
                    obj.children[i].className = '';
                }
                this.className = 'current';
                var index = parseInt(this.getAttribute('index'));
                counter = index;
                callback && callback();
            })
        }
    }

    if (basqueShowcase) {
        switchImage(basqueShowcase, function() {
            bigImg.src = '../../../images/products/basque-burnt-cheese-cake/basque-cheesecake' + (counter + 1) + '.jpg';
        });
    } else if (cottonShowcase) {
        switchImage(cottonShowcase, function() {
            bigImg.src = '../../../images/products/cotton-cheese-cake/cotton-cheesecake' + (counter + 1) + '.jpg';
        });

    } else if (doubleShowcase) {
        switchImage(doubleShowcase, function() {
            bigImg.src = '../../../images/products/double-cheese-cake/double-cheesecake' + (counter + 1) + '.jpg';
        });
    } else {

        switchImage(tokyoShowcase, function() {
            bigImg.src = '../../../images/products/tokyo-cheese-cake/Tokyo-cheesecake' + (counter + 1) + '.jpg';
        });

    }


















})