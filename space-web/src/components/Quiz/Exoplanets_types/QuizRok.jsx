import quizData from "./rok.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed

const QuizRok = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default QuizRok;
