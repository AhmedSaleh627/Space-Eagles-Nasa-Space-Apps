import ReusableDiv from "../ReusableDiv";

const CandidateVSConfirmed = () => {
  return (
    <ReusableDiv
      title="Understanding Exoplanet Candidates and Confirmed Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanet_CandidateVSConfirmed.json"
      quizPath="/quiz"
      previousPath="/exoplanet/naming" // Previous page
      nextPath="/exoplanet/types" // Next page
    />
  );
};

export default CandidateVSConfirmed;
