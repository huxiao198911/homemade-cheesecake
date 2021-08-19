window.addEventListener('load', function() {
    // animate function(horizontally)
    function animate(obj, target, callback) {
        // to make sure there is only one timer all the time, clear setInterval is needed
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // ease out motion
            var steps = (target - obj.offsetLeft) / 10;
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
            if (Math.abs(obj.offsetLeft) == Math.abs(target)) {
                clearInterval(obj.timer);
                // if there is a callback function, call function at this time
                callback && callback();
            } else {
                obj.style.left = obj.offsetLeft + steps + 'px';
            }
        }, 20);
    }
    // step 1: mouse enter carousel, arrows appear; mouse leave carousel, arrows disappear
    var carousel = document.querySelector('.carousel');
    var frameWidth = carousel.offsetWidth;
    // console.log(frameWidth);
    var arrows = document.querySelector('.arrows');
    carousel.addEventListener('mouseenter', function() {
        arrows.style.opacity = '1';
        arrows.style.transition = 'opacity 0.5s';
        // step 6: mouse hover on carousel, clearInterval
        clearInterval(timeId);
    });
    carousel.addEventListener('mouseleave', function() {
        arrows.style.opacity = '0';
        var timeId = setInterval(function() {
            rightArr.click();
        }, 2000);
    });

    //step 2: calculate the number of circle based on the number of images and corresponding image content appears
    var images = document.querySelector('.pro-images');
    var content = document.querySelector('.content');
    var circles = document.querySelector('.circles');
    for (var i = 0; i < images.children.length; i++) {
        var li = document.createElement('li');
        circles.appendChild(li);
        circles.children[0].className = "active";
        // step 3: click any circle, image will be switched to the corresponding image(animate function is needed)
        li.setAttribute('index', i);
        li.addEventListener('click', function() {
            for (var i = 0; i < circles.children.length; i++) {
                circles.children[i].className = "";
                content.children[i].style.display = 'none';
            }
            this.className = 'active';
            var index = this.getAttribute('index');
            counter = index;
            circle = index;
            content.children[index].style.display = 'block';
            animate(images, -index * frameWidth);
        })
    }

    //step 4: click left or right arrow, switch image
    images.appendChild(images.children[0].cloneNode(true));
    content.appendChild(content.children[0].cloneNode(true));
    content.children[content.children.length - 1].className = '';

    var counter = 0;
    var circle = 0;
    var flag = true;

    function circleChange() {
        if (counter == images.children.length - 1) {
            circle = 0;
        }
        circle = counter;
        for (var i = 0; i < circles.children.length; i++) {
            circles.children[i].className = '';
            content.children[i].className = ''
            content.children[i].style.display = 'none';
        }
        circles.children[circle].className = 'active';
        content.children[circle].style.display = 'block';
        content.children[circle].className = 'current';
    }
    var leftArr = document.querySelector('.fa-chevron-left');
    leftArr.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (counter == 0) {
                    counter = images.children.length - 1;
                    images.style.left = -counter * frameWidth + 'px';
                }
                counter--;
                animate(images, -counter * frameWidth, function() {
                    flag = true;
                });
            }
            circleChange();
        })
        // console.log(counter + '----' + circle);

    var rightArr = document.querySelector('.fa-chevron-right');
    rightArr.addEventListener('click', function() {
        if (flag) {
            flag = false;
            counter++;
            if (counter == images.children.length - 1) {
                counter = 0;
                images.style.left = 0;
            }
            animate(images, -counter * frameWidth, function() {
                flag = true;
            })
        }
        circleChange();
    })

    // step 5: carousel auto play
    var timeId = setInterval(function() {
        rightArr.click();
    }, 2000);



















































})