document.addEventListener("DOMContentLoaded", function() {
  const GAMES_URL = 'http://localhost:3000/api/v1/games'
  const USERS_URL = 'http://localhost:3000/api/v1/users'
  const modalDiv = document.getElementById('modal-div')
  let logInNameSpace = "Log In!";
  let mySound;
  const bg = "rgb(246, 246, 246)";

  const oneStepAtTheTime = [
    "A Waterloo Medal was designed by sculptor Benedetto Pistrucci. Commemorating the Battle of Waterloo, the medal was commissioned by the British Government in 1819 on the instructions of George IV while Prince Regent; copies were to be presented to the victorious generals and to leaders of Britain's allies. The Prince Regent and William Wellesley-Pole, Master of the Mint, had been impressed by Pistrucci's models, and gave him the commission.",
    `Augusta Ada King-Noel, Countess of Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is sometimes regarded as the first to recognize the full potential of a "computing machine" and the first computer programmer.`,
    `JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.`,
    `Matsumoto stresses that systems design needs to emphasize human, rather than computer, needs: Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run fast. By doing this, the machine will run more effectively. By doing this, the machine will something something something." They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines. We are the masters. They are the slaves.`,
    `A space elevator is a proposed type of planet-to-space transportation system. The main component would be a cable (also called a tether) anchored to the surface and extending into space. The design would permit vehicles to travel along the cable from a planetary surface, such as the Earth's, directly into space or orbit, without the use of large rockets. An Earth-based space elevator would consist of a cable with one end attached to the surface near the equator and the other end in space beyond geostationary orbit. The competing forces of gravity, which is stronger at the lower end, and the outward/upward centrifugal force, which is stronger at the upper end, would result in the cable being held up, under tension, and stationary over a single position on Earth. With the tether deployed, climbers could repeatedly climb the tether to space by mechanical means, releasing their cargo to orbit. Climbers could also descend the tether to return cargo to the surface from orbit.`,
    `Alan Mathison Turing was an English computer scientist, mathematician, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer. Turing is widely considered to be the father of theoretical computer science and artificial intelligence.`,
    `Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc., chairman and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs and Apple co-founder Steve Wozniak are widely recognized as pioneers of the microcomputer revolution of the 1970s and 1980s.`,
    `Mammals are vertebrate animals characterized by the presence of sweat glands, including milk producing sweat glands, and by the presence of: hair, three middle ear bones used in hearing, and a neocortex region in the brain. Mammals, other than the monotremes, give birth to live young instead of laying eggs. They also possess specialized teeth and use a placenta in the ontogeny. The mammalian brain regulates endothermic and circulatory systems, including a four-chambered heart. Mammals encompass approximately 5,400 species, ranging in size from the Bumblebee Bat, to the Blue Whale, distributed in about 1,200 genera, 153 families, and 29 orders, though this varies by classification scheme.`,
    `Deep Blue was a chess-playing computer developed by IBM. It is known for being the first computer chess-playing system to win both a chess game and a chess match against a reigning world champion under regular time controls. Deep Blue won its first game against a world champion on 10 February 1996, when it defeated Garry Kasparov in game one of a six-game match. However, Kasparov won three and drew two of the following five games, defeating Deep Blue by a score of 4–2. Deep Blue was then heavily upgraded, and played Kasparov again in May 1997. Deep Blue won game six, therefore winning the six-game rematch 3½–2½ and becoming the first computer system to defeat a reigning world champion in a match under standard chess tournament time controls. Kasparov accused IBM of cheating and demanded a rematch. IBM refused and retired Deep Blue.`,
    `Roger Federer is a Swiss professional tennis player who is currently ranked world No. 1 in men's singles tennis by the Association of Tennis Professionals. Federer has won 20 Grand Slam singles titles—the most in history for a male player—and has held the world No. 1 spot in the ATP rankings for a record total of 310 weeks, including a record 237 consecutive weeks. After turning professional in 1998, he was continuously ranked in the top ten from October 2002 to November 2016. He re-entered the top ten following his victory at the 2017 Australian Open. Federer has won a record eight Wimbledon titles, a joint-record six Australian Open titles, a record five consecutive US Open titles, and one French Open title. He is one of eight men to have captured a career Grand Slam. Federer has reached a record 30 men's singles Grand Slam finals, including 10 in a row from the 2005 Wimbledon Championships to the 2007 US Open. Federer has also won a record six ATP Finals, 27 ATP World Tour Masters 1000 titles, and a record 20 ATP World Tour 500 titles. Given these achievements, many players and analysts consider Federer the greatest tennis player of all time.`,
    `Rafael Nadal Parera is a Spanish professional tennis player, currently world No. 2 in men's singles tennis by the Association of Tennis Professionals. Known as "The King of Clay", he is widely regarded as the greatest clay-court player in history. Nadal's evolution into an all-court threat has established him as one of the greatest tennis players of all time. Nadal has won 17 Grand Slam singles titles, a record 32 ATP World Tour Masters 1000 titles, a record 20 ATP World Tour 500 tournaments, and the 2008 Olympic gold medal in singles. In majors, Nadal has won 11 French Open titles, 3 US Open titles, 2 Wimbledon titles, and one Australian Open title. He was also a member of the winning Spain Davis Cup team in 2004, 2008, 2009, and 2011. In 2010, he became the seventh male player in history and youngest of five in the Open Era to achieve the Career Grand Slam at age 24. He is the second male player, after Andre Agassi, to complete the singles Career Golden Slam. In 2011, Nadal was named the Laureus World Sportsman of the Year.`,
    `The Andrea Doria class was a pair of dreadnought battleships built for the Royal Italian Navy during the early 1910s. The two ships, Andrea Doria and Caio Duilio , were completed during World War I. The class was an incremental improvement over the preceding Conte di Cavour class. Like the earlier ships, Andrea Doria and Caio Duilio were armed with a main battery of thirteen 305-millimeter guns. The two ships were based in southern Italy during World War I to help ensure that the Austro-Hungarian Navy surface fleet would be contained in the Adriatic. Neither vessel saw any combat during the conflict. After the war, they cruised the Mediterranean and were involved in several international incidents, including at Corfu in 1923. In 1933, both ships were placed in reserve. In 1937 the ships began a lengthy reconstruction. The modifications included removing their center main battery turret and boring out the rest of the guns to 320 mm, strengthening their armor protection, installing new boilers and steam turbines, and lengthening their hulls. The reconstruction work lasted until 1940, by which time Italy was already engaged in World War II.`,
    `Thomas Edison 1847-1931 Thomas Edison was born on 11 February 1847. He was one of the outstanding geniuses of technology and he obtained patents for more than one thousand inventions including the electric light bulb, the record player and an early type of film projector. He also created the world's first industrial research laboratory. He was born in Milan, Ohio and he was always an inquisitive boy. By the time he was 10 he had set up a small chemical laboratory in his house after his mother had shown him a science book. He soon became fascinated with electrical currents and it remained the main interest of his life. In 1869, he borrowed a small amount of money and became a freelance inventor. In the same summer, there was a crisis in the New York financial district called Wall Street when the new telegraphic gold-price indicator broke down. Edison was called in to repair it and he did it so well that he was given a job as supervisor with the Western Union Telegraph Company. They later commissioned him to improve the Wall Street stock ticker that was just coming into use. He did so and produced the Edison Universal Stock Printer, which immediately brought him a fortune of $40,000. With this money, he set up as a manufacturer in order to produce electrical machines.`,
    `Galileo Galilei was an Italian polymath. Galileo is a central figure in the transition from natural philosophy to modern science and in the transformation of the scientific Renaissance into a scientific revolution. Galileo's championing of heliocentrism and Copernicanism was controversial during his lifetime, when most subscribed to either geocentrism or the Tychonic system. He met with opposition from astronomers, who doubted heliocentrism because of the absence of an observed stellar parallax. The matter was investigated by the Roman Inquisition in 1615, which concluded that heliocentrism was "foolish and absurd in philosophy, and formally heretical since it explicitly contradicts in many places the sense of Holy Scripture." Galileo later defended his views in Dialogue Concerning the Two Chief World Systems (1632), which appeared to attack Pope Urban VIII and thus alienated him and the Jesuits, who had both supported Galileo up until this point. He was tried by the Inquisition, found "vehemently suspect of heresy", and forced to recant. He spent the rest of his life under house arrest. While under house arrest, he wrote one of his best-known works, Two New Sciences, in which he summarized work he had done some forty years earlier on the two sciences now called kinematics and strength of materials.`,
    `Ernest Miller Hemingway was an American novelist, short story writer, and journalist. His economical and understated style, which he termed the Iceberg Theory, had a strong influence on 20th-century fiction, while his adventurous lifestyle and his public image brought him admiration from later generations. Hemingway produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel Prize in Literature in 1954. He published seven novels, six short-story collections, and two non-fiction works. Three of his novels, four short story collections, and three non-fiction works were published posthumously. Many of his works are considered classics of American literature. Hemingway was raised in Oak Park, Illinois. After high school, he reported for a few months for The Kansas City Star, before leaving for the Italian Front to enlist as an ambulance driver in World War I. In 1918, he was seriously wounded and returned home. His wartime experiences formed the basis for his novel A Farewell to Arms (1929).`
  ]

  const container = document.getElementById("container");
  const leaderBoard = document.getElementById('leaderboard');

  let intervalFn;
  let counterKeystroke = 0;
  let correctStrokeCnt = 0;
  let txtSize = "20px";

  let totalTime = 30;
  let timerCount = totalTime;
  let flag = true;
  let user;
  let usersArray = [];
  let userFlag = true;


  let leftPos = null;
  let speed=1        // speed of scroller  bound slowest = 30 //  fastest = 1
  let step=2          // smoothness of movement


  //request to our backend API for the games that have been played
  function requestGames() {
    let h1 = document.createElement('H1')
    h1.innerText = "Leaderboard"
    h1.style.textAlign = "center"
    h1.style.marginTop = "10px"

    leaderBoard.appendChild(h1)

    fetch(GAMES_URL).then(response=>response.json()).then(displayGames)
  }

  //displays the live words per minute and accuracy on the screen below the game
  function displayGames(gameObjs) {
    let ol = document.createElement('OL')

    usersGetRequest().then(userObjs =>
      userObjs.forEach(function(userObj) {
        usersArray.push(userObj);
      })
    ).then(() => {
      let gamesArray = Array.from(gameObjs).sort(function(a,b) {
        return parseInt(b.wpm)*parseInt(b.accuracy)-parseInt(a.wpm)*parseInt(a.accuracy)
      })

      gamesArray.forEach(gameObj => {
        let userInstance = usersArray.find(user => user.id === gameObj.user_id)
        let li = document.createElement('LI')
        li.innerHTML = `<strong>${userInstance.name}</strong> | Accuracy: ${gameObj.accuracy} | WPM: ${gameObj.wpm} | Score: ${parseInt(gameObj.accuracy)*parseInt(gameObj.wpm)}`

        if (ol.children.length < 10 ) {
          ol.appendChild(li)
        }
      })
    })
    ol.className = "ol-class"
    leaderBoard.appendChild(ol)
  }

  //API request for the user
  function usersGetRequest() {
    return fetch(USERS_URL).then(resp=>resp.json())
  }

  //saving the score of the completed game
  function userPostRequest(e) {
    let nameInput = document.getElementById('name-input-field').value

    let config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: nameInput})
    }
    fetch(USERS_URL, config).then(resp=>resp.json()).then(data => user = data).then(pageSetUp)
    // console.log(userFlag)
    // console.log(logInNameSpace)
    if (userFlag === true) {
      logInNameSpace = "Change User";
      userFlag = false;
      getModal();
    }
  }

  //in order to reset what we have displaying on the page to make sure they are removed and reset for a "new" game look
  function pageSetUp() {
    container.innerHTML = ""
    leaderBoard.innerHTML = ""
    if (document.getElementById('clock')) {
      document.getElementById('clock').remove();
    }


    timerCount = totalTime;


    flag = true;
    counterKeystroke = 0;
    correctStrokeCnt = 0;
    mySound = new sound("sounds/tw_sound.mp3");

    displayClock();
    initScroller();
    displayText();
    requestGames();
  }

  //adding the Modal from bootstrap to pop up for user interaction and input
  function getModal() {
    modalDiv.innerHTML = `<button type="button" class="btn btn-info" data-toggle="modal" data-target="#logInModal" style="position: absolute; right: 0px; top: 0px; width: 120px; margin: 10px; padding: 10px;">
      ${logInNameSpace}
    </button>

    <div class="modal fade" id="logInModal" tabindex="-1" role="dialog" aria-labelledby="ourModalDisplay" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ourModalDisplay">Start Your Engines!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Please enter your name: <input id="name-input-field" type="text"
          </div>
          <div class="modal-footer">
            <button type="button" id="submitName" class="btn btn-info" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>`
    const submitNameButton = document.getElementById('submitName')
    submitNameButton.addEventListener('click', userPostRequest)
  }

  //our clock's timer 
  function startClock() {
    intervalFn = setInterval(handleInterval, 1000);
    setTimeout(stopClock, timerCount*1000)
  }

  //countdown of the timer
  function handleInterval() {
    const clockDiv = document.getElementById("clock")
    clockDiv.innerText = --timerCount;
  }

  //stops the clock
  function disableInterval() {
    clearInterval(intervalFn);
  }

  //displays the clock
  function displayClock(){
    // console.log('this is display Clock')
    let clockContainer = document.getElementById('clock-container')
    let clockDiv = document.createElement("div");
    clockDiv.id = "clock";
    clockDiv.style.backgroundColor = "black";
    clockDiv.style.margin = "auto";
    clockDiv.style.fontSize = '50px';
    clockDiv.style.color = bg;
    clockDiv.style.fontFamily = "'Orbitron', sans-serif";
    clockDiv.style.color = "rgb(224, 88, 88)"

    clockDiv.style.width = '100px';
    clockDiv.style.height = '70px';
    clockDiv.style.textAlign = "center";

    clockDiv.innerText = timerCount;
    clockContainer.prepend(clockDiv);
  }

  //displays text for user to type
  function displayText() {
    // console.log('this is display Text')
    container.innerHTML += "<br>";
    let inputForm = document.createElement("textarea");
    inputForm.type = 'text';
    inputForm.style.width = "100%";
    inputForm.style.height = "100px";
    inputForm.style.fontSize = "20px";
    inputForm.id = "inputTxt";
    container.appendChild(inputForm);
    if (logInNameSpace === "Log In!") {
      inputForm.disabled = true;
      inputForm.placeholder = "Please log in."
    } else {
      inputForm.disabled = false;
      inputForm.placeholder = "Start typing here!"
    }


    let displayAcc = document.createElement("div");
    displayAcc.id = "display-accuracy";
    container.appendChild(displayAcc);

    document.addEventListener('keydown', event => {
      if(event.target.tagName === "TEXTAREA" && flag === true){
        startClock(event);
        flag = false;
      }
    });// document.addEventListener

    let pArray = Array.from(document.getElementsByTagName('P')[0].children)

    inputForm.addEventListener('keyup', event => {
      mySound.play()
      if ((event.which <= 90 && event.which >= 48) || (event.which <= 222 && event.which >= 186) || event.which === 32 ){
        counterKeystroke ++;
        startTest(event,displayAcc,pArray);
      }
    })//inputForm.addEventListener
  }

  //beings the test as well as adjusts the speed according to the speed and accuracy of the typer
  function startTest(event,displayAcc,p) {

    let currentText = event.target.value;
    let index = currentText.length -1;


    if (p[index].innerText === currentText[index]){
      if(!atTheEdge(p[index].offsetLeft)){typingInterval();}
      
      if (faster(p[index].offsetLeft)){
       changeSpeed(true);
      } else {
        changeSpeed(false);
      }
    }
    else {
      changeSpeed(false);
    }

    correctStrokeCnt = checkTyping(currentText, p);
    let thisAccuracy = parseFloat((correctStrokeCnt/counterKeystroke)*100).toFixed(2)
    if (thisAccuracy > 100.00) {
      thisAccuracy = 100.00
    }

    displayAcc.innerText = `Accuracy: ${thisAccuracy}%`;
  }


  function atTheEdge(offset) {
    if(offset+leftPos < 100){return true;}
    return false;
  }

  function faster(offsetLeft) {
    let cutOff = 500;
    let typingPosition = leftPos + offsetLeft;
    if(leftPos != null){
      if (typingPosition > cutOff){
        return true;
      }
    }
    return false;
  }

  //executes the increasing of the speed in combination with the above function
  function changeSpeed(faster) {
    if(faster){
      if(speed >2) speed--;
    }else{
      speed ++;
    }
    if(speed < 2) speed =2;
    if(speed > 20) speed = 20;
  }

  //changes the color of the text to green or red based on correct/incorrect keys entered
  function checkTyping(currentText, p) {
      let index =0;
      let counter = 0;
    [...currentText].forEach(e => {
        if (p[index].innerText === e){
            p[index].style.color = 'green';
            p[index].style.fontSize = txtSize;
            counter ++;
          } else {
            p[index].style.color = 'red';
            p[index].style.fontSize = txtSize;
          }
        index ++;
    })

    return counter;
  }

  //stops the clock
  function stopClock() {
    let inputForm = document.getElementById('inputTxt')
    const clockDiv = document.getElementById("clock")

    clockDiv.innerText = 0;
    let wordArray = inputForm.value.trim().split(' ')
    if (clockDiv.innerText == 0) {
      endOfGameAlert(wordArray)
      // console.log(wordArray);
    }
    disableInterval();
    mySound.stop();
  }

  //notify user game has ended with their wpm/accuracy/score as well as saving it to our backend 
  function endOfGameAlert(wordArray) {
    let typingAccuracy = `${parseFloat((correctStrokeCnt/counterKeystroke)*100).toFixed(2)}%`
    let wordsPerMin = `${wordArray.length * 2}`
    container.innerHTML += `<div><h3>Game over! Your accuracy is ${parseFloat((correctStrokeCnt/counterKeystroke)*100).toFixed(2)}%, and you typed ${wordsPerMin} words per minute. Your score is ${parseInt(typingAccuracy)*parseInt(wordsPerMin)}.</h3><button id="play-again" class="btn btn-secondary">Play again?</button></div>`

    let playAgainButton = document.getElementById('play-again')
    playAgainButton.addEventListener('click', pageSetUp)

    let config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({accuracy: typingAccuracy, wpm: wordsPerMin, user_id: user.id})
    }

    fetch('http://0.0.0.0:3000/api/v1/games', config)
  }

  //sound effect of the typewriter in the background
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
  }
  pageSetUp();
  getModal();



  ///////////////////////////////

//how our scrolling functions work with where it begins and how it is able to move across the screen
  var x, scroll, divW, sText=""

  function stopScroller(){clearTimeout(scroll)}

  function startScroller(){
    let tagEle = document.getElementById('tag')
    tagEle.style.whiteSpace='nowrap'
    var p=document.createElement('p')
    p.id='testP'
    p.style.fontSize='25%' //fix for mozilla. multiply by 4 before using
    x-=step
    if (document.getElementById('tag').className) p.className=document.getElementById('tag').className
    p.appendChild(document.createTextNode(sText))
    document.body.appendChild(p)
    pw=p.offsetWidth
    document.body.removeChild(p)
    if (x<(pw*4)*-1){x=divW}
    tagEle.style.left=x+'px'
    leftPos = x;
    scroll=setTimeout(startScroller,speed)
  }

  function initScroller(){
    // console.log('this is init scroller')
    test();

      document.getElementById('tag').style.whiteSpace='nowrap'

    if (document.getElementById && document.createElement && document.body.appendChild) {
      divW=document.getElementById('scroller').offsetWidth;
      x=divW - 800;
      document.getElementById('tag').style.position='relative';
      document.getElementById('tag').style.left=divW+'px';
      var ss=document.getElementById('tag').childNodes;
      for (i=0;i<ss.length;i++) {sText+=ss[i].nodeValue+" "};
      typingInterval();
    }

  }


  function test(){
    let text = oneStepAtTheTime[Math.floor(Math.random()*oneStepAtTheTime.length)];
    let pTag = document.createElement('p');
    let scrollerDiv = document.createElement('div');
    scrollerDiv.style.backgroundColor= bg

    scrollerDiv.id = "scroller";
    pTag.id = "tag";

    pTag.style.fontSize = txtSize;

    let counter = 0;
    [...text].forEach(char => {
      let t = document.createElement('SPAN')
      t.dataset.id = counter
      t.innerText = (char)
      pTag.appendChild(t)
      counter++
    });

    scrollerDiv.appendChild(pTag);
    container.appendChild(scrollerDiv);
  }


  let startOrStop = true;

  //moving the line longer or shorter
  function typingInterval(){
      setTimeout(startAction, 10); //start the scrolling
      setTimeout(startAction, 400); // stop the scrolling
  }

  function startAction() {
      if(startOrStop){startScroller();startOrStop = false;}
      else{stopScroller(); startOrStop = true;}
  }
})
