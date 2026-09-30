export interface Lesson {
  title: string;
  subtitle: string;
  objectives: string[];
}

export type LessonsMap = Record<string, Lesson>;

export const lessons: LessonsMap = {
  "intro-to-statistics": {
    title: "Intro to Statistics",
    subtitle: "Type & Classifications",
    objectives: [
      "Distinguish the difference Descriptive vs Inferential Statistics",
      "Classify Quantitative and Qualitative Data",
      "Understand Predictive and Prescriptive Statistics",
    ],
  },
  "measure-of-tendencies": {
    title: "Measures Of Tendencies",
    subtitle: "Type & Classifications",
    objectives: [
      "Distinguish the difference Descriptive vs Inferential Statistics",
      "Classify Quantitative and Qualitative Data",
      "Understand Predictive and Prescriptive Statistics",
    ],
  },
  "correlation-and-covariance": {
    title: "Correlation and Covariance",
    subtitle: "Type & Classifications",
    objectives: [
      "Distinguish the difference Descriptive vs Inferential Statistics",
      "Classify Quantitative and Qualitative Data",
      "Understand Predictive and Prescriptive Statistics",
    ],
  },
};
