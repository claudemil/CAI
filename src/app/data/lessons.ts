export interface Lesson {
  title: string;
  subtitle: string;
  objectives: string[];
}

export type LessonsMap = Record<string, Lesson>;

export const lessons: LessonsMap = {
  statistics: {
    title: "Intro to Statistics",
    subtitle: "Type & Classifications",
    objectives: [
      "Distinguish the difference Descriptive vs Inferential Statistics",
      "Classify Quantitative and Qualitative Data",
      "Understand Predictive and Prescriptive Statistics",
    ],
  },
  "history-rules": {
    title: "Intro to Statistics",
    subtitle: "Type & Classifications",
    objectives: [
      "Distinguish the difference Descriptive vs Inferential Statistics",
      "Classify Quantitative and Qualitative Data",
      "Understand Predictive and Prescriptive Statistics",
    ],
  },
};
