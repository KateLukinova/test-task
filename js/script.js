$(document).ready(function () {
    var coll = document.getElementsByClassName("expand-button");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle('active');

            if ($(this).hasClass('active')) {
                $(this).find('.button-text').text('Уменьшить')
            } else {
                $(this).find('.button-text').text('Больше статей')
            }

            var content = this.nextElementSibling.nextElementSibling;

            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
