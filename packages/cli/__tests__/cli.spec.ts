import { expect } from "chai";
import * as initStubs from "./stubs/initialization.stubs";
import {
  InitializationAnswers,
  InputQuestions,
} from "../src/lib/questions/initialization.questions";
// import generateProject from "../src/lib/generators/project.generator";

const mockPrompt = (questions: InputQuestions): InitializationAnswers => {
  return {
    projectName: questions.projectName,
    git: questions.git,
    useIndependent: questions.useIndependent,
  };
};

describe("Initializer Tests", () => {
  describe("with default options", () => {
    it("should return the default response", () => {
      const res = mockPrompt(initStubs.defaultStub);
      expect(res).to.be.an("object");
      expect(res.projectName).to.equal(initStubs.defaultResponse.projectName);
      expect(res.git).to.equal(initStubs.defaultResponse.git);
      expect(res.useIndependent).to.equal(
        initStubs.defaultResponse.useIndependent
      );
    });
  });

  describe("with only git disabled", () => {
    it("should return the gitless response", () => {
      const res = mockPrompt(initStubs.noGitStub);
      expect(res).to.be.an("object");
      expect(res.projectName).to.equal(initStubs.noGitResponse.projectName);
      expect(res.git).to.equal(initStubs.noGitResponse.git);
      expect(res.useIndependent).to.equal(
        initStubs.noGitResponse.useIndependent
      );
    });
  });

  describe("with independent versioning disabled", () => {
    it("should return the single versioned response with no independent selected", () => {
      const res = mockPrompt(initStubs.noIndependentStub);
      expect(res).to.be.an("object");
      expect(res.projectName).to.equal(
        initStubs.noIndependentResponse.projectName
      );
      expect(res.git).to.equal(initStubs.noIndependentResponse.git);
      expect(res.useIndependent).to.equal(
        initStubs.noIndependentResponse.useIndependent
      );
    });
  });

  describe("with both disabled", () => {
    it("should return the single versioned gitless response with no options selected", () => {
      const res = mockPrompt(initStubs.noGitNoIndependentStub);
      expect(res).to.be.an("object");
      expect(res.projectName).to.equal(
        initStubs.noGitNoIndependentResponse.projectName
      );
      expect(res.git).to.equal(initStubs.noGitNoIndependentResponse.git);
      expect(res.useIndependent).to.equal(
        initStubs.noGitNoIndependentResponse.useIndependent
      );
    });
  });
});
