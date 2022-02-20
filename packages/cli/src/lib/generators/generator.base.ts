import { QuestionCollection } from "inquirer";

export default class GeneratorBase {
  prompt;
  questions: QuestionCollection;
  constructor(prompt, questions) {
    this.prompt = prompt;
    this.questions = questions;
  }

  async Prompt() {
    return await this.prompt(this.questions);
  }
}
