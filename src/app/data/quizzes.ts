export interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Quiz {
  title: string;
  type: string;
  questions: Question[];
}

export type QuizzesMap = Record<string, Quiz>;

export const Quizzes: QuizzesMap = {
  "intro-to-statistics": {
    title: "Statistics",
    type: "Multiple Choice",
    questions: [
      {
        question: "Probability can take values ranging from",
        answers: ["-∞ to ∞", "-∞ to 1", "-1 to 1", "0 to 1"],
        correctAnswer: "0 to 1",
      },
      {
        question: "Niggaro",
        answers: ["yes", "nig", "bu", "ian"],
        correctAnswer: "nig",
      },
    ],
  },
};

export const QuizKeys = Object.keys(Quizzes);
export default Quizzes;
