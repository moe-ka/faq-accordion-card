const answers = document.querySelectorAll('.faq');
var saveIndex = 0;

answers.forEach(function (faq, index) {
    faq.addEventListener('click', function () {
        answers[saveIndex].classList.remove('active');
        answers[index].classList.toggle('active');
        saveIndex = index;
        // answers.forEach(function(x,p) {
            //     if(x !== answers[index]){
                //         x.classList.remove('active')
                //     }
                // })      
    })     
})
        
