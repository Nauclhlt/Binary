let currentAnswer = '1000';
let currentQuestion = '8';
let destNormal = '2';
let srcNormal = '10';

window.addEventListener('load', (event) => {
    document.getElementById("answer").style.display = 'none';
    onRerollButtonClick();
    reloadInfo();
});

function reloadInfo()
{
    let dest = document.getElementById('dest-id');
    dest.textContent = destNormal.toString();
    let question = document.getElementById("que-id");
    question.textContent = currentQuestion.toString();
    let src = document.getElementById("src-id");
    src.textContent = srcNormal.toString();
    let ans = document.getElementById("ans-id");
    ans.textContent = currentAnswer;
}

function initView()
{
    document.getElementById("answer").style.display='none';
}

function onRerollButtonClick()
{
    let s = genRandom(0, 3);
    let d = genRandom(0, 3);

    if (s === 0)
    {
        // 16
        srcNormal = '16';
        
    }
    else if (s === 1)
    {
        // 10
        srcNormal = '10';
    }
    else if (s === 2)
    {
        // 2
        srcNormal = '2';
    }

    let decq = genRandom(0, 129);
    currentQuestion = decq.toString(srcNormal).toUpperCase();

    setDest(genRandom(0, 3));

    initView();
    reloadInfo();
}

function setDest(x)
{
    while (true)
    {
        if (x === 0)
        {
            // 16
            destNormal = '16';
        }
        else if (x === 1)
        {
            // 10
            destNormal = '10';
        }
        else if (x === 2)
        {
            // 2
            destNormal = '2';
        }

        if (srcNormal === destNormal)
        {
            x = genRandom(0, 3);
            continue;
        }

        break;
    }

    let i = parseInt(currentQuestion, parseInt(srcNormal));
    currentAnswer = i.toString(destNormal).toUpperCase();
}

function onAnswerButtonClick()
{
    document.getElementById("answer").style.display='block';
}

function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}