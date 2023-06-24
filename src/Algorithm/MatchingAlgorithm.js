import * as Constants from '../Constants';

// let yuval = {id: 1, agendas: ["women"], fields: ["PM", "QA"], softSkills: ["English"], techSkills: ["Python", "Java", "C"]};
// let shir = {id: 2, agendas: ["man"], fields: ["PM", "DS"], softSkills: [], techSkills: ["Java", "C", "C++"]};
// let omer = {id: 3, agendas: ["man"], fields: ["Algo", "DS"], softSkills: [], techSkills: ["Java", "C", "C++"]};
// let dan = {id: 4, agendas: ["man"], fields: ["PM", "DS"], softSkills: ["Hebrew", "smallTalk"], techSkills: ["Java", "C", "C++"]};
// let nitsan = {id: 10, agendas: ["women"], fields: ["PM"], softSkills: ["Hebrew", "smallTalk"], techSkills: ["Python", "C++"]};
// let lee = {id: 11, agendas: ["man"], fields: ["DS"], softSkills: ["Hebrew"], techSkills: ["Java", "C", "C++"]};

// let interviewers = [nitsan, lee];
// let interviewees = [shir, omer, yuval, dan];
// matchAll(interviewers, interviewees);

//  getMutualTags(nitsan, yuval);

export function matchAll(interviewers, interviewees) {
    let allMatches = [];
    for (let i = 0; i < interviewers.length; i++) {
        allMatches.push(matchInterviewer(interviewers[i], interviewees));
        }
    return allMatches;
}

export function matchInterviewer(interviewer, interviewees) {
    let intervieweesScores = initIntervieweesScoresAccordingToFields(interviewer, interviewees);

    for (let i = 0; i < intervieweesScores.length; i++) {
        intervieweesScores[i][1] += calcScore(interviewer.agendas, intervieweesScores[i][0].agendas, Constants.AGENDA_WEIGHT);
        intervieweesScores[i][1] += calcScore(interviewer.techSkills, intervieweesScores[i][0].techSkills, Constants.TECHSKILLS_WEIGHT);
        intervieweesScores[i][1] += calcScore(interviewer.softSkills, intervieweesScores[i][0].softSkills, Constants.SOFTSKILLS_WEIGHT);
        // console.log("final score for : " + intervieweesScores[i][0].id + " = " + intervieweesScores[i][1]);
    }

    intervieweesScores.sort(function(first, second) {
        return second[1] - first[1];
    });

    // console.log("matches for interviewer " + interviewer.id + " :");
    let matches = [];
    for (let i = 0; i < Math.min(intervieweesScores.length, Constants.NUM_OF_MATCHES); i++) {
        if(!interviewer.declinedMentees?.includes(intervieweesScores[i][0].id) && !interviewer.finishedMentees?.includes(intervieweesScores[i][0].id)){
            matches.push(intervieweesScores[i][0].id);
        // console.log("match " + i + ": id "+  matches[i]);
        }
    }
    
    return {interviewerId: interviewer.id, matches: matches};
}

function initIntervieweesScoresAccordingToFields(interviewer, interviewees) {
    let intervieweesScores = [];
    for (let i = 0; i < interviewees.length; i++) {
        let addInterviewee = false;
        for (let j = 0; j < interviewer.fields.length; j++) {
            if (interviewees[i].fields.includes(interviewer.fields[j])) {
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

export function getMutualTags(interviewer, interviewee) {
    let mutualTags = {fields: [], techSkills: [], softSkills: [], agendas: []};
    for (let i = 0; i < interviewer.fields.length; i++) {
        if (interviewee.fields.includes(interviewer.fields[i])) {
            mutualTags.fields.push(interviewer.fields[i]);
        }
    }
    for (let i = 0; i < interviewer.techSkills.length; i++) {
        if (interviewee.techSkills.includes(interviewer.techSkills[i])) {
            mutualTags.techSkills.push(interviewer.techSkills[i]);
        }
    }
    for (let i = 0; i < interviewer.softSkills.length; i++) {
        if (interviewee.softSkills.includes(interviewer.softSkills[i])) {
            mutualTags.softSkills.push(interviewer.softSkills[i]);
        }
    }
    for (let i = 0; i < interviewer.agendas.length; i++) {
        if (interviewee.agendas.includes(interviewer.agendas[i])) {
            mutualTags.agendas.push(interviewer.agendas[i]);
        }
    }
    return mutualTags;
}
