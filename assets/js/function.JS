function view(){
    document.getElementById('student-profile').style.display='none'
}


// Nav bar function

function navFunction(){
    let nav = document.getElementById('side-nav')
    nav.style.transform='translateX(0%)'
    nav.style.transition='600ms'
    nav.style.zIndex='100'

    
    var cover =document.getElementById('cover2')
    cover.style.display='block'
    cover.style.transition='600ms'
}
function navClose(){
    document.getElementById('side-nav').style.transform='translateX(-150%)'
    var cover =document.getElementById('cover2')
    cover.style.display='none'
}


function eventFunction(){
    document.getElementById('event').style.display='block'
}
    function dashboardView(){
        document.getElementById('student').style.display='none'
        document.getElementById('course').style.display='none'
        document.getElementById('dashboard').style.display='block'
        document.getElementById('report').style.display='none'
        document.getElementById('test').style.display='none'
        document.getElementById('grade').style.display='none'
        document.getElementById('subscription').style.display='none'
        document.getElementById('faq').style.display='none'
        }


    function course_view(){
        document.getElementById('student').style.display='none'
        document.getElementById('course').style.display='block'
        document.getElementById('dashboard').style.display='none'
        document.getElementById('report').style.display='none'
        document.getElementById('test').style.display='none'
        document.getElementById('grade').style.display='none'
        document.getElementById('subscription').style.display='none'
        document.getElementById('faq').style.display='none'
        }


    function studentView(){
        document.getElementById('student').style.display='block'
        document.getElementById('course').style.display='none'
        document.getElementById('dashboard').style.display='none'
        document.getElementById('report').style.display='none'
        document.getElementById('test').style.display='none'
        document.getElementById('grade').style.display='none'
        document.getElementById('subscription').style.display='none'
        document.getElementById('faq').style.display='none'
        }
        function testView(){
            document.getElementById('test').style.display='block'
            document.getElementById('student').style.display='none'
            document.getElementById('course').style.display='none'
            document.getElementById('dashboard').style.display='none'
            document.getElementById('report').style.display='none'
            document.getElementById('grade').style.display='none'
            document.getElementById('subscription').style.display='none'
            document.getElementById('faq').style.display='none'
        }
        function gradeView(){
            document.getElementById('grade').style.display='block'
            document.getElementById('test').style.display='none'
            document.getElementById('student').style.display='none'
            document.getElementById('course').style.display='none'
            document.getElementById('dashboard').style.display='none'
            document.getElementById('report').style.display='none'
            document.getElementById('subscription').style.display='none'
            document.getElementById('faq').style.display='none'
        }
        function faqView(){
            document.getElementById('faq').style.display='block'
            document.getElementById('subscription').style.display='none'
            document.getElementById('grade').style.display='none'
            document.getElementById('test').style.display='none'
            document.getElementById('student').style.display='none'
            document.getElementById('course').style.display='none'
            document.getElementById('dashboard').style.display='none'
            document.getElementById('report').style.display='none'
            }
                function subscriptionView(){
                    document.getElementById('subscription').style.display='block'
                    document.getElementById('grade').style.display='none'
                    document.getElementById('test').style.display='none'
                    document.getElementById('student').style.display='none'
                    document.getElementById('course').style.display='none'
                    document.getElementById('dashboard').style.display='none'
                    document.getElementById('report').style.display='none'
                    document.getElementById('faq').style.display='none'
                }
                
    function reportView(){
        document.getElementById('report').style.display='block'
        document.getElementById('course').style.display='none'
        document.getElementById('dashboard').style.display='none'
        document.getElementById('student').style.display='none'
        document.getElementById('test').style.display='none'
        document.getElementById('grade').style.display='none'
        document.getElementById('subscription').style.display='none'
        document.getElementById('faq').style.display='none'
        // var link = document.getElementById('report-link');
        // link.style.background='green'
        // link.style.padding='5px'
        // link.style.color='white'
        // link.style.borderRadius='5px'
}



function add(){
    var pop = document.getElementById('pop')
    pop.style.position='fixed'
    pop.style.top='20%'
    pop.style.display='block'
    pop.style.transition='600ms'
    var cover =document.getElementById('cover')
    cover.style.display='block'
}
function addDismiss(){
    var pop = document.getElementById('pop')
    pop.style.position='fixed'
    pop.style.top='100%'
    pop.style.transition='600ms'
    var cover =document.getElementById('cover')
    cover.style.display='none'
}








// UPDATE FORM FUNCTIONS



let nextForm = document.getElementById('next1')
let nextForm2 = document.getElementById('next2')
let backForm = document.getElementById('back')
let backForm2 = document.getElementById('back2')
let submit = document.getElementById('submit')

nextForm.addEventListener('click', function(){
    document.getElementById('form1').style.display='none'
    document.getElementById('form2').style.display='block'
    document.getElementById('progress2').style.background='green'
    document.getElementById('progress2').style.transition='600ms'

})
backForm.addEventListener('click', function(){
    document.getElementById('form1').style.display='block'
    document.getElementById('form2').style.display='none'
    document.getElementById('progress2').style.background='rgb(176, 179, 176)'

})
backForm2.addEventListener('click', function(){
    document.getElementById('form3').style.display='none'
    document.getElementById('form2').style.display='block'
    document.getElementById('progress3').style.background='rgb(176, 179, 176)'

})
nextForm2.addEventListener('click', function(){
    document.getElementById('form1').style.display='none'
    document.getElementById('form2').style.display='none'
    document.getElementById('form3').style.display='block'
    document.getElementById('progress3').style.background='green'

})
submit.addEventListener('click', function(){
    let cont =document.getElementById('cont')
    cont.style.transform='scale(0)'
    cont.style.transition='600ms'

    let cont2 =document.getElementById('cont2')
    cont2.style.transform='scale(1)'
    cont2.style.transition='2s'
})