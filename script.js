//Globals

let score = 0;
let currentQ = 0;
let qBank = [
    {id: "1", q: "What is Milhouse Van Houten's middle name?", answers:["Adolf","Mao","Mussolini","Castro"], correct: 2, fileName: "1 Milhouse's middle name.jpg", alt:"picture of Milhouse"},
    {id: "2", q: "Nancy Cartwright does the voice of what Simpson?", answers:["Homer","Marge","Lisa","Bart"], correct: 3, fileName: "2 Bart's voice.jpg", alt:"picture of Nancy Cartwright"},
    {id: "3", q: "Who was Krusty the Clown suppose to be originally?", answers: ["Ned","Barney","Moe","Homer"], correct: 3, fileName: "3 Krusty originally.jpg", alt:"picture of Krusty the Clown"},
    {id: "4", q: "When is Bart's birthday?", answers:["May 27th","February 23rd","November 9th","July 5th"], correct: 1, fileName: "4 Bart's birthday.jpg", alt:"picture of Bart Simpson under water imitating the cover of Nirvana's Nevermind album."},
    {id: "5", q: "Who does the voice of Sideshow Bob?", answers:["Kelsey Grammer","Harry Shearer","Hank Azaria","Matt Groening"], correct: 0, fileName: "5 Sideshow Bob voice.jpg", alt:"picture of Sideshow Bob sitting behind a desk, looking evil."},
    {id: "6", q: "Who was in \"The Be Sharps\"?", answers:["Homer, Apu, Barney, and Wiggum","Homer, Moe, Barney, and Apu","Homer, Skinner, Barney, and Wiggum","Homer, Apu, Skinner, and Barney"], correct: 3, fileName: "6 BSharp members.jpg", alt:"graphic of The BeSharps, imitating the look of The Beatles."},
    {id: "7", q: "What is Maggie\'s first word?", answers:["Goodbye","Donuts","Homer","Daddy"], correct: 3, fileName: "7 Maggie\'s first word.jpg", alt:"picture of Maggie Simpson"},
    {id: "8", q: "What is the name of Selma's daughter?", answers:["Lian","Ling","Momo","Yoko"], correct: 1, fileName: "8 Selma's daughter's name.jpg", alt:"picture of Maggie Simpson and another baby kneeling on the floor."},
    {id: "9", q: "What is Bart's blood-type?", answers:["O-","AB-","A+","B+"], correct: 0, fileName: "9 Bart's blood type.jpg", alt:"picture of Bart Simpson's eyes popping out of his head."},
    {id: "10", q: "Which of Marge's twin sisters is a lesbian?", answers:["Both","Patty","Selma","Neither"], correct: 1, fileName: "10 Patty Selma Gay.jpg", alt:"picture of Patty and Selma."},
    {id: "11", q: "How long does it take the animators to make one episode?", answers:["1 year","4-6 Months","2-4 Weeks","7 Days/A Week"], correct: 1, fileName: "11 How long to make an episode.jpg", alt:"picture of an animator drawing on a computer showing an unknown simpsons character."},
    {id: "12", q: "What is the name of Homer's mother?", answers:["Nina","Mona","Lora","Sara"], correct: 1, fileName: "12 Homer's mother's name.jpg", alt:"picture of Homer Simpson and his mother hugging."},
    {id: "13", q: "How old is Ned Flanders?", answers:["52","60","35","44"], correct: 1, fileName: "13 Ned's age.jpg", alt:"picture of Ned Flanders naked with a large fig leaf over his bits."},
    {id: "14", q: "The Simpsons are distant relatives of what fellow Springfieldian?", answers:["Ned","Mr. Burns","Smithers","Skinner"], correct: 1, fileName: "14 Simpsons related to.jpg", alt:"picture of Simpson family smiling."},    
    {id: "15", q: "What color are Marge's eyes?", answers:["Hazel","Blue","Green","Brown"], correct: 0, fileName: "15 Marge's eye color.jpg", alt:"picture of Marge and Homer Simpson posing for the camera"},
    {id: "16", q: "In the episode \"And Maggie Makes Three\" Homer quits his job at the nuclear planet, but ends up wanting his job back. Mr.Burn puts up a plaque after he's given his job back, what does Homer do to it?", answers:["Cover it with a sheet","Scribbles all over it","Covers it in photos","Homer takes it down"], correct: 2, fileName: "16 Homer's plaque.jpg", alt:"picture of Homer Simpson."},
    {id: "17", q: "What is Bart's full name?", answers:["Bartholomew James Simpson","Bartholomew Jojo Simpson","Bartholomew Jones Simpson","Bartholomew Jay Simpson"], correct: 1, fileName: "17 Bart's full name.jpg", alt:"picture of Bart Simpson flying into the scene on a rope wearing a mask and cape, looking like a super-hero."},
    {id: "18", q: "What is Lisa's IQ?", answers:["195","159","131","177"], correct: 1, fileName: "18 Lisa's IQ.jpg", alt:"picture of Lisa Simpson smiling and carrying a stack of library books."},
    {id: "19", q: "What is the name of Milhouse and Lisa's daughter?", answers:["Zia","Mia","Kia","Tia"], correct: 0, fileName: "19 Lisa and Milhouse's daughter's name.jpg", alt:"picture of grown-up Lisa Simpson and Milhouse."},
    {id: "20", q: "What is Maggie's middle name?", answers:["Mona","Marjorie","Evelyn","Lisa"], correct: 2, fileName: "20 Maggie's middle name.jpg", alt:"picture of Maggie Simpson's head as if she was the lead character in an old time cartoon."},
    {id: "21", q: "When is Lisa's Birthday?", answers:["December 11th","March 31st","August 22nd","June 19th"], correct: 1, fileName: "21 Lisa's Birthday.jpg", alt:"picture of Lisa Simpson wearing a beret."},
    {id: "22", q: "What is Comic Book Guy's real name?", answers:["Norman Jefferson","Jeffrey Albertson","Spencer Albertson","Albert Jefferson"], correct: 1, fileName: "22 Comic Book Guy.jpg", alt:"picture of Comic book guy."},
    {id: "23", q: "How many characters does Hank Azaria voice on the show?", answers:["16+","24+","3+","10+"], correct: 1, fileName: "23 Hank Azaria.jpg", alt:"picture of Hank Azaria."}
];


//Listeners

    $('.begin').click(function(e){
        e.preventDefault();
        startQuiz();
    });

    $('.myNextB').click(function(e){
        e.preventDefault();
        goToTheQuestions();
    })

    $('.mySubmit').click(function(e){
        e.preventDefault();
        prepAnswer();
    });

    $('.playAgain').click(function(e) {
        playAgain();
    })

// Functions

function startQuiz(){
    $('.frontPage').hide();
    $('.qPage').addClass('flexOn').show();
    $('header p').show();
    $('footer p').show();
    $('.myNextB').hide();
    deliverQAs();                               
}

function deliverQAs(){
    let thisQuestion = qBank[currentQ];
    let thisPic =  thisQuestion.fileName;
    $('.qPic').attr('src', `pics/${thisPic}`).attr('alt', `${thisQuestion.alt}`);
    $('#question').text('');
    $('#question').text(thisQuestion.q).attr('alt', `${thisQuestion.q}`);
    $('#answersToQs').html('');
    $('#qNumber').text(currentQ+1);
    $('#totalQs').text(qBank.length);

    for (i=0;i<thisQuestion.answers.length;i++){
        $('#answersToQs').append(`<input type="radio" id="${i}" name="${thisQuestion.q}" class="answers" alt="${thisQuestion.answers[i]}" value="${thisQuestion.answers[i]}"><label for="${i}" class="answers radio">${thisQuestion.answers[i]}</label><p class="remarks ${i}"></p><br>`);
    }
}

function checkAnswer(userChoice){
    let question = qBank[currentQ];

    if (userChoice === question.correct){
        $(`p.${userChoice}`).addClass('right').append("RIGHT!");
        score++;    
    }else{
        $(`p.${userChoice}`).addClass('wrong').append("WRONG!");
    }

    if (userChoice !== question.correct){
        $(`p.${question.correct}`).addClass('right').append("is the RIGHT answer!");
    }
    $('#correctNumber').text(`${score}`);    
    $('.mySubmit').hide();
    $('.myNextB').show();
}

function goToTheQuestions (){
    currentQ++;
    if (currentQ < qBank.length) {
        $('.mySubmit').show();
        $('.myNextB').hide();
        deliverQAs();
    } else {
        $('.myNextB').text("Results");
        $('.qPage').hide();
        $('#x').text(`${score}`);
        $('#y').text(qBank.length);
        $('#summaryPage').show(); 
        $('header p').hide();
        $('footer p').hide();    
    }
}

function playAgain() {
    currentQ = 0;
    score = 0;
    $('#summaryPage').hide();
    $('.answerB').show();
    $('.mySubmit').show();
    $('#correctNumber').text(`${score}`);
    startQuiz();
}

function prepAnswer() {
    if(document.getElementById('0').checked) {
        checkAnswer(0);
    }else if(document.getElementById('1').checked) {
        checkAnswer(1);
    }else if(document.getElementById(2).checked) {
        checkAnswer(2);
    }else if(document.getElementById('3').checked) {
        checkAnswer(3);
    }else{
        alert("Please select an answer");
    }
}