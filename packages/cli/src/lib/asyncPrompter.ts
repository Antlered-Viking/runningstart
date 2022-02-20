import { prompt } from "inquirer";
import type { QuestionCollection, Answers } from "inquirer";
import * as inquirer from "inquirer";

async function asyncPrompter(questions: QuestionCollection): Promise<Answers> {
  return prompt(questions);
}

export default asyncPrompter;
