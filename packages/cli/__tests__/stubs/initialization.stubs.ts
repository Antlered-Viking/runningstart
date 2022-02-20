import { InitializationAnswers } from "../../src/lib/questions/initialization.questions";

// INPUTS
export const defaultStub = {
  projectName: "my-awesome-fullstack-project",
  git: true,
  useIndependent: true,
};
export const noGitStub = {
  projectName: "gitless-project",
  git: false,
  useIndependent: true,
};
export const noIndependentStub = {
  projectName: "single-versioned-project",
  git: true,
  useIndependent: false,
};
export const noGitNoIndependentStub = {
  projectName: "gitless-single-versioned-project",
  git: false,
  useIndependent: false,
};

// RESPONSES
export const defaultResponse: InitializationAnswers = {
  projectName: "my-awesome-fullstack-project",
  git: true,
  useIndependent: true,
};

export const noGitResponse: InitializationAnswers = {
  projectName: "gitless-project",
  git: false,
  useIndependent: true,
};

export const noIndependentResponse: InitializationAnswers = {
  projectName: "single-versioned-project",
  git: true,
  useIndependent: false,
};

export const noGitNoIndependentResponse: InitializationAnswers = {
  projectName: "gitless-single-versioned-project",
  git: false,
  useIndependent: false,
};
