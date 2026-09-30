export interface Quiz {
  title: string;
  type: string;
  questions: string[];
  answers: string[];
  correctAnswer: string;
}

export type QuizzesMap = Record<string, Quiz>;

export const Quizzes: QuizzesMap = {
  "intro-to-statistics": {
    title: "Statistics",
    type: "Multiple Choice",
    questions: ["Probability can take values ranging from"],
    answers: ["-∞ to ∞", "-∞ to 1", "-1 to 1", "0 to 1"],
    correctAnswer: "0 to 1",
  },
};
