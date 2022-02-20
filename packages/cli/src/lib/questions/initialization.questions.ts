import type { Answers, QuestionCollection } from "inquirer";

const initializationQ: QuestionCollection = [
  {
    name: "projectName",
    type: "input",
    message: "What would you like to name your new project?",
    default: "my-awesome-fullstack-project",
  },
  {
    name: "git",
    type: "confirm",
    message: "Do you want to use git?",
    default: true,
    suffix: " (Highly recommended)",
  },
  {
    name: "useIndependent",
    type: "confirm",
    message: "Do you want Lerna to use independent versioning?",
    default: true,
    suffix: " (Recommended)",
  },
];

export interface InputQuestions {
  projectName: string;
  git: boolean;
  useIndependent: boolean;
}

export interface InitializationAnswers extends Answers {
  projectName: string;
  git: boolean;
  useIndependent: boolean;
}

export default initializationQ;
