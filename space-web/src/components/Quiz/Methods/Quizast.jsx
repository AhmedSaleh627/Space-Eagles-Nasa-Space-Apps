import quizData from "./ast.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed

const Quizast = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizast;
