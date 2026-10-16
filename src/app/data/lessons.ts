export interface LessonOutline {
  title: string;
  subtitle: string;
  objectives: string[];
}

export type TextChunk =
  | string
  | {
      text: string;
      bold?: boolean;
      color?: string;
    };

export type LessonParagraph = {
  theme?: "default" | "opposite";
  chunks: TextChunk[];
};

export interface Lesson {
  number: string;
  title: string[];
  content: LessonParagraph[][];
}

export type LessonOutlinesMap = Record<string, LessonOutline>;

export type LessonMap = Record<string, Lesson>;

export const LessonOutlines: LessonOutlinesMap = {
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

export const Lessons: LessonMap = {
  "what-is-statistics": {
    number: "1.1",
    title: ["What is Statistics?"],
    content: [
      [
        {
          theme: "default",
          chunks: [
            "Statistics is the mathematical discipline and structured framework concerned with",
            {
              text: " collecting, organizing, analyzing, interpreting, and presenting data.",
              bold: true,
            },
            " In digital systems and e-learning platforms, statistics allows decision-makers to make sense of large amounts of data under conditions of uncertainty.",
          ],
        },
      ],
      [
        {
          theme: "opposite",
          chunks: [
            "When people speak of the word ",
            { text: "statistics", bold: true },
            ", it usually means one of two things:",
          ],
        },
      ],
      [
        {
          theme: "default",
          chunks: [
            { text: "Statistics as Singular:", bold: true },
            " Referring to the ",
            { text: "field itself", bold: true },
            ", which is concerned with the",
            { text: " scientific methods and principles", bold: true },
            " used to process data",
          ],
        },
      ],
      [
        {
          theme: "opposite",
          chunks: [
            { text: "Statistics as Plural:", bold: true },
            " The numerical facts and observations, which are the ",
            { text: "data itself", bold: true },
          ],
        },
      ],
    ],
  },
  "objectives-of-statistics": {
    number: "1.2",
    title: ["Objectives of Statistics"],
    content: [
      [
        {
          theme: "default",
          chunks: [
            { text: "Data Summarization: ", bold: true },
            "Reducing massive datasets into clear, manageable metrics (e.g., measures of central tendencies and standard deviations).",
          ],
        },
      ],
      [
        {
          theme: "opposite",
          chunks: [
            { text: "Pattern Recognition: ", bold: true },
            "Identifying correlations, trends, and anomalies within data streams.",
          ],
        },
      ],
      [
        {
          theme: "default",
          chunks: [
            { text: "Hypothesis Testing: ", bold: true },
            "Using statistical tests to validate or refute assumptions.",
          ],
        },
      ],
      [
        {
          theme: "opposite",
          chunks: [
            { text: "Risk & Uncertainty Quantification: ", bold: true },
            "Calculating probabilities and margins of error.",
          ],
        },
      ],
    ],
  },
};

export const LessonKeys = Object.keys(Lessons);

export default LessonOutlines;
