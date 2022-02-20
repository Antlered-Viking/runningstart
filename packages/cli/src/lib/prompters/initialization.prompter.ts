import asyncPrompter from "../asyncPrompter";
import initializationQ, {
  InitializationAnswers,
} from "../questions/initialization.questions";

const initializationPrompt = async (): Promise<InitializationAnswers> => {
  return (await asyncPrompter(initializationQ)) as InitializationAnswers;
};

export default initializationPrompt;
