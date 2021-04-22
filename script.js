"use strict"


async function display() {

    let res = await fetch('https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/jobs')
    let obj =  await res.json()
    console.log(obj)
    let jobs = obj.jobs
    jobs.forEach(job => {
        let jobData = job.data
        jobData.forEach(el =>{
            for(let i=0;i<el.length;i++){
                if('formula' in el[i]){
                    let formula = el[i].formula
                    if('reference' in formula){
                        console.log(el[i])
                    }else if('sum' in formula){
                        console.log(el[i])
                    }else if('multiply' in formula){
                        console.log(el[i])
                    }else if('devide' in formula){
                        console.log(el[i])
                    }else if('is_greater' in formula){
                        console.log(el[i])
                    }else if('is_equal' in formula){
                        console.log(el[i])
                    }else if('not' in formula){
                        console.log(el[i])
                    }else if('and' in formula){
                        console.log(el[i])
                    }else if('or' in formula){
                        console.log(el[i])
                    }else if('if' in formula){
                        console.log(el[i])
                    }
                }
                
            }
        })
        
    });
    
    let lukas = new DataToSend
    lukas.email = 'lukas.klisevicius@gmail.com'
    console.log(lukas.email)


}

class DataToSend{
    constructor(email,results){
        this.email = email
        this.results = results
    }
}

class JobData{
    constructor(id,JobResults){
        this.id = id
        this.data = JobResults
    }
}

class JobResults{
    constructor(value){
        this.value = value
    }
}

function workWithJob(job){

}