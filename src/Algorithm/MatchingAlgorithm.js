const AGENDA_WEIGHT = 2;
const TECHSKILLS_WEIGHT = 1;
const SOFTSKILLS_WEIGHT = 1;
const NUM_OF_MATCHES = 5;

// let yuval = {id: 1, agendas: ["women"], filedsList: ["PM", "QA"], softSkills: ["English"], techSkills: ["Python", "Java", "C"]};
// let shir = {id: 2, agendas: ["man"], filedsList: ["PM", "DS"], softSkills: [], techSkills: ["Java", "C", "C++"]};
// let omer = {id: 3, agendas: ["man"], filedsList: ["Algo", "DS"], softSkills: [], techSkills: ["Java", "C", "C++"]};
// let dan = {id: 4, agendas: ["man"], filedsList: ["PM", "DS"], softSkills: ["Hebrew", "smallTalk"], techSkills: ["Java", "C", "C++"]};
// let nitsan = {id: 10, agendas: ["women"], filedsList: ["PM"], softSkills: ["Hebrew", "smallTalk"], techSkills: ["Python", "C++"]};
// let lee = {id: 11, agendas: ["man"], filedsList: ["DS"], softSkills: ["Hebrew"], techSkills: ["Java", "C", "C++"]};

// let interviewers = [nitsan, lee];
// let interviewees = [shir, omer, yuval, dan];
// matchAll(interviewers, interviewees);

function matchAll(interviewers, interviewees) {
    let allMatches = [];
    for (let i = 0; i < interviewers.length; i++) {
        allMatches.push(matchInterviewer(interviewers[i], interviewees));
        }
    return allMatches;
}

function matchInterviewer(interviewer, interviewees) {
    let intervieweesScores = initIntervieweesScoresAccordingToFields(interviewer, interviewees);

    for (let i = 0; i < intervieweesScores.length; i++) {
        intervieweesScores[i][1] += calcScore(interviewer.agendas, intervieweesScores[i][0].agendas, AGENDA_WEIGHT);
        intervieweesScores[i][1] += calcScore(interviewer.techSkills, intervieweesScores[i][0].techSkills, TECHSKILLS_WEIGHT);
        intervieweesScores[i][1] += calcScore(interviewer.softSkills, intervieweesScores[i][0].softSkills, SOFTSKILLS_WEIGHT);
        // console.log("final score for : " + intervieweesScores[i][0].id + " = " + intervieweesScores[i][1]);
    }

    intervieweesScores.sort(function(first, second) {
        return second[1] - first[1];
    });

    // console.log("matches for interviewer " + interviewer.id + " :");
    let matches = [];
    for (let i = 0; i < Math.min(intervieweesScores.length, NUM_OF_MATCHES); i++) {
        matches.push(intervieweesScores[i][0].id);
        // console.log("match " + i + ": id "+  matches[i]);
    }
    

    return {interviewerId: interviewer.id, matches: matches};
}

function initIntervieweesScoresAccordingToFields(interviewer, interviewees) {
    let intervieweesScores = [];
    for (let i = 0; i < interviewees.length; i++) {
        let addInterviewee = false;
        for (let j = 0; j < interviewer.filedsList.length; j++) {
            if (interviewees[i].filedsList.includes(interviewer.filedsList[j])) {
                addInterviewee = true;
            }
        }
        if (addInterviewee) {
            intervieweesScores.push([interviewees[i], 0]);
        }
    }
    return intervieweesScores;
}

function calcScore(interViewerTags, intervieweeTags, weight) {
    let score = 0;
    for (let i = 0; i < interViewerTags.length; i++) {
        for (let j = 0; j < intervieweeTags.length; j++) {
            if (interViewerTags[i] === intervieweeTags[j]) {
                score += weight;
            }
        }
    }
    return score;
}
