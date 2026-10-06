import React, { createContext, useContext, useEffect, useState } from "react";
import { lessons } from "../data/lessons";

type CourseStatus = "Completed" | "In Progress" | "Locked";

interface CourseContextType {
  completedKeys: string[];
  handleCompleteCourse: (key: string) => void;
  getCourseStatus: (key: string) => CourseStatus;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("CourseProvider mounted");
    return () => console.log("CourseProvider unmounted");
  }, []);
  const [completedKeys, setCompletedKeys] = useState<string[]>([]);

  const handleCompleteCourse = (key: string) => {
    if (!completedKeys.includes(key)) {
      setCompletedKeys((prev) => {
        if (!prev.includes(key)) {
          const updated = [...prev, key];
          console.log("Updated completed keys:", updated);
          return updated;
        } else {
          return prev;
        }
      });
    }
  };

  const getCourseStatus = (key: string): CourseStatus => {
    if (completedKeys.includes(key)) {
      return "Completed";
    }

    const lessonKeys = Object.keys(lessons);
    const currentIndex = lessonKeys.indexOf(key);

    if (currentIndex === 0) {
      return "In Progress";
    }

    const previousKey = lessonKeys[currentIndex - 1];
    if (previousKey && completedKeys.includes(previousKey)) {
      return "In Progress";
    }

    return "Locked";
  };

  return (
    <CourseContext.Provider
      value={{ completedKeys, handleCompleteCourse, getCourseStatus }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};

export default useCourse;
