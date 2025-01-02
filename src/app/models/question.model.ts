export interface Answer {
  text: string; // The method name (e.g., "Hashing")
  description: string; // Detailed explanation of the method
  timeComplexity: string; // Time complexity of the method
  spaceComplexity: string; // Space complexity of the method
  isFastest: boolean; // Indicates whether this is the best solution
}

export interface Question {
  prompt: string; // Problem description
  exampleInput: string; // Example input(s)
  exampleOutput: string; // Example output(s)
  answers: Answer[]; // Possible answers for the question
}
