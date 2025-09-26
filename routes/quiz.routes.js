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

    const scienceP = ((science*100)/total).toFixed(2)
    const commerceP = ((commerce*100)/total).toFixed(2)
    const artsP = ((arts*100)/total).toFixed(2)
    const vocalP = ((vocal*100)/total).toFixed(2)
    console.log(scienceP)
    console.log(commerceP)
    console.log(artsP)
    console.log(vocalP)

    console.log(science)
    console.log(commerce)
    console.log(arts)
    console.log(vocal)
    console.log(req.body)
    
    res.render('pie_chart', {
    username: 'Aarav',
    stats: { science:scienceP,commerce:commerceP,arts:artsP,vocal:vocalP  }
    });


    
   
    //res.send(`Quiz Completed 
    //    Your Science affinity is ${scienceP.toFixed(2)}% 
    //    Your Commerce affinity is ${commerceP.toFixed(2)}% 
    //    Your Arts affinity is ${artsP.toFixed(2)}% 
    //    Your Vocational affinity is ${vocalP.toFixed(2)}% `)
})

router.get('/quiz2', (req,res) => {
    res.render('quiz2')
})


router.post('/quiz2' , (req,res) => {
    var mech = 1
    var civil = 1
    var ece = 1
    var cse = 1
    var bca = 1
    var law = 1
    var ba = 1
    var ca = 1
    var journ = 1
    var bcom = 1
    var bsc = 1
    var bba = 1
    var med = 1
    var bed = 1
    const {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30} = req.body
    if (q1 == 'agree'){
        med = med + 2
        law = law + 2
    }
    else if (q1 == 'disagree'){
        bsc = bsc + 2
    }
    if (q2 == 'agree'){
        med = med + 2
    }
    else if (q2 == 'disagree'){
        mech=mech+2
        civil=civil+2
        ece=ece+2
        cse=cse+2
    }
    else if (q2 == 'neutral'){
        bsc = bsc + 1
        bed=bed+1
    }
    if (q3 == 'agree'){
        law=law+2
        bed=bed+2
        ba=ba+2
    }
    else if (q3 == 'disagree'){
        mech=mech+2
        civil=civil+2
        ece=ece+2
        cse=cse+2
        bca=bca+2
        bba=bba+2
    }
    else if (q3 == 'neutral'){
        med=med+1
        bsc=bsc+1
    }
    if (q4 == 'agree'){
        med = med + 2
        bcom=bcom+2
    }
    else if (q4 == 'disagree'){
        law=law+2
    }
    if (q5 == 'agree'){
        mech=mech+2
        civil=civil+2
        ece=ece+2
        cse=cse+2
        bca=bca+3
        ca=ca+2
        bba=bba+2
    }
    else if (q5 == 'disagree'){
        journ=journ+2
        ba=ba+2
    }
    else if (q5 == 'neutral'){
        med = med + 1
    }
    if (q6 == 'agree'){
        cse=cse+2
        bca=bca+3
    }
    else if (q6 == 'disagree'){
        bsc=bsc+2
        mech=mech+2
        civil=civil+2
        ece=ece+2
    }
    else if (q6 == 'neutral'){
        ca=ca+1
        ba=ba+1
        bba=bba+1
        bcom=bcom+1
    }
    if (q7 == 'agree'){
        law=law+2
        journ=journ+2
    }
    else if (q7 == 'neutral'){
        bcom=bcom+1
        bba=bba+1
        ca=ca+1
    }
    if (q8 == 'agree'){
        law=law+2
        bcom=bcom+2
        bba=bba+2
        ca=ca+2
    }
    if (q9 == 'agree'){
        bcom=bcom+2
        bba=bba+2
        ca=ca+2
    }
    else if (q9 == 'disagree'){
        med=med+2
        bca=bca+2
    }
    if (q10 == 'agree'){
        ca=ca+2
        bba=bba+2
        bcom=bcom+2
    }
    else if (q10 == 'disagree'){
        med=med+2
        bca=bca+2
    }
    else if (q10 == 'neutral'){
        bed=bed+1
    } 
    if (q11 == 'agree'){
        bed=bed+2
        bba=bba+2
        law=law+2
    }
    else if (q11 == 'neutral'){
        ca=ca+1
        ba=ba+1
        bcom=bcom+1
    }  
    if (q12 == 'agree'){
        bed=bed+2
        bba=bba+2
    }
    else if (q12 == 'disagree'){
        bcom=bcom+2
        bsc=bsc+2
        ca=ca+2
    }
    else if (q12 == 'neutral'){
        med=med+1
    }
    if (q13 == 'agree'){
        bca=bca+2
        cse=cse+2
    }
    else if (q13 == 'disagree'){
        bsc=bsc+2
    }
    else if (q13 == 'neutral'){
        ba=ba+1
    }
    if (q14 == 'agree'){
        bsc=bsc+2
        bed=bed+2
    }
    else if (q14 == 'disagree'){
        law=law+2
    }
    else if (q14 == 'neutral'){
        journ=journ+1
    }
    if (q15 == 'agree'){
        bed=bed+2
    }
    else if (q15 == 'disagree'){
        law=law+2
    }
    else if (q15 == 'neutral'){
        ba=ba+1
    }
    if (q16 == 'agree'){
        bba=bba+2
        journ=journ+2
        ba=ba+2
        bcom=bcom+2
    }
    else if (q16 == 'neutral'){
        law=law+1
    }
    if (q17 == 'agree'){
        journ=journ+2
        ba=ba+2
    }
    else if (q17 == 'disagree'){
        bca=bca+2
    }
    else if (q17 == 'neutral'){
        bed=bed+1
        bba=bba+1
    }
    if (q18 == 'agree'){
        ca=ca+2
        bcom=bcom+2
        bsc=bsc+2
        bba=bba+2
        ece=ece+2
    }
    else if (q18 == 'neutral'){
        mech=mech+1
        civil=civil+1
        cse=cse+1
        med=med+1
    }
    if (q19 == 'agree'){
        journ=journ+2
        bca=bca+2
        ba=ba+2
    }
    else if (q19 == 'disagree'){
        med=med+2
        ca=ca+2
        law=law+2
    }
    else if (q19 == 'neutral'){
        mech=mech+1
        civil=civil+1
        cse=cse+1
        ece=ece+1        
    }
    if (q20 == 'agree'){
        med=med+2
        ca=ca+2
        mech=mech+2
        ece=ece+2
    }
    else if (q20 == 'disagree'){
        cse=cse+2
        law=law+2
    }
    else if (q20 == 'neutral'){
        bed=bed+1
        ca=ca+1
        ba=ba+1
    }
    if (q21 == 'agree'){
        med=med+2
        civil=civil+2
        cse=cse+2
        mech=mech+2
        ece=ece+2
    }
    else if (q21 == 'disagree'){
        bed=bed+2
        bba=bba+2
        ca=ca+2
        ba=ba+2
    }
    else if (q21 == 'neutral'){
        law=law+1
        bsc=bsc+1
        bcom=bcom+1
    }
    if (q22 == 'agree'){
        med=med+2
        civil=civil+2
        cse=cse+2
        ece=ece+2
    }
    else if (q22 == 'disagree'){
        bed=bed+2
    }
    else if (q22 == 'neutral'){
        med=med+1
    }
    if (q23 == 'agree'){
        mech=mech+2
    }
    else if (q23 == 'disagree'){
        cse=cse+2
    }
    else if (q23 == 'neutral'){
        ece=ece+1
    }
    if (q24== 'agree'){
        civil=civil+2
    }
    else if (q24 == 'disagree'){
        journ=journ+2
        med=med+2
        ca=ca+2
        ba=ba+2
        law=law+2
    }
    else if (q24 == 'neutral'){
        cse=cse+1
        mech=mech+1
        ece=ece+1
    }
    if (q25== 'agree'){
        ece=ece+2
        bcom=bcom+2
    }
    else if (q25 == 'disagree'){
        bba=bba+2
        med=med+2
        ca=ca+2
        ba=ba+2
    }
    else if (q25 == 'neutral'){
        cse=cse+1
        mech=mech+1
        civil=civil+1
    }
    if (q26== 'agree'){
        cse=cse+2
    }
    else if (q26 == 'disagree'){
        bsc=bsc+2
        law=law+2
        med=med+2
    }
    else if (q26 == 'neutral'){
        bed=bed+1
        bca=bca+1
    }  
    if (q27== 'agree'){
        cse=cse+2
        civil=civil+1
        ece=ece+2
    }
    else if (q27 == 'disagree'){
        mech=mech+2
        med=med+2
    }
    else if (q27 == 'neutral'){
        ca=ca+1
        ba=ba+1
    }
    if (q28== 'agree'){
        mech=mech+2
    }
    else if (q28 == 'disagree'){
        bcom=bcom+2
        journ=journ+2
    }
    else if (q28 == 'neutral'){
        bca=bca+1
        civil=civil+1
    } 
    if (q29 == 'agree'){
        journ=journ+2
        med=med+2
        ca=ca+2
        ba=ba+2
        law=law+2
        cse=cse+2
        mech=mech+2
        civil=civil+2
        ece=ece+2
        bca=bca+3
        bed=bed+2
        bba=bba+2
        bsc=bsc+2
        bcom=bcom+2
    }
    else if (q29 == 'neutral'){
        journ=journ+1
        med=med+1
        ca=ca+1
        ba=ba+1
        law=law+1
        cse=cse+1
        mech=mech+1
        civil=civil+1
        ece=ece+1
        bca=bca+1
        bed=bed+1
        bba=bba+1
        bsc=bsc+1
        bcom=bcom+1
    }
    if (q30 == 'agree'){
        journ=journ+2
        med=med+2
        ca=ca+2
        ba=ba+2
        law=law+2
        cse=cse+2
        mech=mech+2
        civil=civil+2
        ece=ece+2
        bca=bca+3
        bed=bed+2
        bba=bba+2
        bsc=bsc+2
        bcom=bcom+2
    }
    else if (q30 == 'neutral'){
        journ=journ+1
        med=med+1
        ca=ca+1
        ba=ba+1
        law=law+1
        cse=cse+1
        mech=mech+1
        civil=civil+1
        ece=ece+1
        bca=bca+1
        bed=bed+1
        bba=bba+1
        bsc=bsc+1
        bcom=bcom+1
    }
    const total = journ+med+ba+ca+law+cse+mech+civil+ece+bca+bed+bba+bsc+bcom

    const journP = ((journ*100)/total).toFixed(2)
    const medP = ((med*100)/total).toFixed(2)
    const baP = ((ba*100)/total).toFixed(2)
    const caP = ((ca*100)/total).toFixed(2)
    const lawP = ((law*100)/total).toFixed(2)
    const cseP = ((cse*100)/total).toFixed(2)
    const mechP = ((mech*100)/total).toFixed(2)
    const civilP = ((civil*100)/total).toFixed(2)
    const eceP = ((ece*100)/total).toFixed(2)
    const bcaP = ((bca*100)/total).toFixed(2)
    const bedP = ((bed*100)/total).toFixed(2)
    const bbaP = ((bba*100)/total).toFixed(2)
    const bscP = ((bsc*100)/total).toFixed(2)
    const bcomP = ((bcom*100)/total).toFixed(2)
    
    console.log(journP)
    console.log(medP)
    console.log(baP)
    console.log(caP)
    console.log(lawP)
    console.log(cseP)
    console.log(mechP)
    console.log(civilP)
    console.log(eceP)
    console.log(bcaP)
    console.log(bedP)
    console.log(bbaP)
    console.log(bscP)
    console.log(bcomP)


    console.log(journ)
    console.log(med)
    console.log(ba)
    console.log(ca)
    console.log(law)
    console.log(cse)
    console.log(mech)
    console.log(civil)
    console.log(ece)
    console.log(bca)
    console.log(bed)
    console.log(bba)
    console.log(bsc)
    console.log(bcom)

    console.log(req.body)

    res.render('pie_chart2',{
    stats: {journ:journP,med:medP,ba:baP,ca:caP,law:lawP,cse:cseP,mech:mechP,civil:civilP,ece:eceP,bca:bcaP,bed:bedP,bba:bbaP,bsc:bscP,bcom:bcomP}    
    });


    //module.exports = chart

    //res.render('pie_chart')






    //res.send(`Quiz Completed 
     //   Your Journalism affinity is ${journP.toFixed(2)}% 
     //   Your Medical affinity is ${medP.toFixed(2)}% 
      //  Your Bachelor of arts affinity is ${baP.toFixed(2)}% 
      //  Your Charted accountant affinity is ${caP.toFixed(2)}%
      //  Your Electronics and Communication affinity is ${eceP.toFixed(2)}% 
      //  Your Bachelors of computer applications affinity is ${bcaP.toFixed(2)}% 
      //  Your Bachelors of education affinity is ${bedP.toFixed(2)}% 
      //  Your Bachelors of business administration affinity is ${bbaP.toFixed(2)}%
       // Your Bachelors of sciences affinity is ${bscP.toFixed(2)}% 
       // Your Bachelors of commerce affinity is ${bcomP.toFixed(2)}% 
       // Your Civil Engineering affinity is ${civilP.toFixed(2)}% 
       // Your Mechanical affinity is ${mechP.toFixed(2)}%
       // Your Computer Science affinity is ${cseP.toFixed(2)}% 
       // Your LAW affinity is ${lawP.toFixed(2)}%`)
})


module.exports = router