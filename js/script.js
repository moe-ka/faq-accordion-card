const list = document.querySelectorAll('.faq');
const answers = document.querySelectorAll('.faq');

list.forEach(function (faq, index) {
    faq.addEventListener('click', function () {
        answers[index].classList.toggle('active');
        answers.forEach(function(x,p) {
            if(x !== answers[index]){
                x.classList.remove('active')
            }
        })
        
    })
})