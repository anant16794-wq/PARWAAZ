const express = require('express')
const router = express.Router()

router.get('/quiz', (req,res) => {
    res.render('quiz')
})

router.post('/quiz' , (req,res) => {
    var arts = 1
    var commerce = 1
    var science = 1
    var vocal = 1
    const {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20} = req.body
    if (q1 == 'agree'){
        science = science + 2
        commerce = commerce + 2
    }
    else if (q1 == 'disagree'){
        arts =arts+2
    }
    else if (q1 == 'neutral'){
        science = science + 1
        commerce = commerce + 1
        arts =arts+1
    }
    if (q2 == 'agree'){
        arts = arts + 2
    }
    else if (q2 == 'disagree'){
        science=science+2
    }
    else if (q2 == 'neutral'){
        science = science + 1
        commerce = commerce + 1
        arts =arts+1
    }
    if (q3 == 'agree'){
        science=science+2
        commerce=commerce+2
    }
    else if (q3 == 'neutral'){
        science = science + 1
        commerce = commerce + 1
        arts =arts+1
    }
    if (q4 == 'agree'){
        commerce = commerce + 2
        vocal = vocal + 2
    }
    else if (q4 == 'neutral'){
        vocal = vocal + 1
        commerce = commerce + 1
    }
    if (q5 == 'agree'){
        commerce = commerce + 2
    }
    else if (q5 == 'neutral'){
        commerce = commerce + 1
    }
    if (q6 == 'agree'){
        science = science + 2
    }
    else if (q6 == 'neutral'){
        science = science + 1
    }
    if (q7 == 'agree'){
        science = science + 2
    }
    else if (q7 == 'neutral'){
        science = science + 1
    }
    if (q8 == 'agree'){
        science = science + 2
    }
    else if (q8 == 'disagree'){
        vocal=vocal+2
    }
    else if (q8 == 'neutral'){
        science = science + 1
        vocal=vocal+1
    }
    if (q9 == 'agree'){
        arts=arts+2
    }
    else if (q9 == 'neutral'){
        arts=arts+1
    }
    if (q10 == 'agree'){
        science = science + 2
    }
    else if (q10 == 'disagree'){
        vocal=vocal+2
    }
    else if (q10 == 'neutral'){
        science = science + 1
        vocal=vocal+1
    }
    if (q11 == 'agree'){
        commerce=commerce+2
    }
    else if (q11 == 'neutral'){
        commerce=commerce+1
    }
    if (q12 == 'agree'){
        commerce=commerce+2
    }
    else if (q12 == 'neutral'){
        commerce=commerce+1
    }
    if (q13 == 'agree'){
        science = science + 2
        vocal=vocal+2
    }
    else if (q13 == 'disagree'){
        arts=arts+2
    }
    else if (q13 == 'neutral'){
        science = science + 1
        vocal=vocal+1
        arts=arts+1
    }
    if (q14 == 'agree'){
        science = science + 2
    }
    else if (q14 == 'disagree'){
        arts=arts+2
    }
    else if (q14 == 'neutral'){
        science = science + 1
        arts=arts+1
    }
    if (q15 == 'agree'){
        commerce=commerce+2
        arts=arts+2
    }
    else if (q15 == 'neutral'){
        commerce=commerce+1
        arts=arts+1
    }
    if (q16 == 'agree'){
        science = science + 2
    }
    else if (q16 == 'neutral'){
        science = science + 1
    }
    if (q17 == 'agree'){
        science = science + 2
        vocal = vocal + 2
    }
    else if (q17 == 'neutral'){
        vocal = vocal + 1
        commerce = commerce + 1
    }
    if (q18 == 'agree'){
        vocal=vocal+2
    }
    else if (q18 == 'neutral'){
        vocal=vocal+1
    }
    if (q19 == 'agree'){
        science = science + 2
        commerce = commerce + 2
        arts=arts+2
        vocal=vocal+2
    }
    else if (q19 == 'neutral'){
        science = science + 1
        commerce = commerce + 1
        arts=arts+1
        vocal=vocal+1
    }
    if (q20 == 'agree'){
        science = science + 2
        commerce = commerce + 2
        arts=arts+2
        vocal=vocal+2
    }
    else if (q20 == 'neutral'){
        science = science + 1
        commerce = commerce + 1
        arts=arts+1
        vocal=vocal+1
    }
    
    const total = science + commerce + arts + vocal 

    const scienceP = (science*100)/total
    const commerceP = (commerce*100)/total
    const artsP = (arts*100)/total
    const vocalP = (vocal*100)/total
    console.log(scienceP)
    console.log(commerceP)
    console.log(artsP)
    console.log(vocalP)

    const chart = [scienceP,commerceP,artsP,vocalP]

    console.log(chart)

    console.log(science)
    console.log(commerce)
    console.log(arts)
    console.log(vocal)
    console.log(req.body)

    //module.exports = chart

    //res.render('pie_chart')
    
   
    res.send(`Quiz Completed 
        Your Science affinity is ${scienceP.toFixed(2)}% 
        Your Commerce affinity is ${commerceP.toFixed(2)}% 
        Your Arts affinity is ${artsP.toFixed(2)}% 
        Your Vocational affinity is ${vocalP.toFixed(2)}% `)
})


module.exports = router