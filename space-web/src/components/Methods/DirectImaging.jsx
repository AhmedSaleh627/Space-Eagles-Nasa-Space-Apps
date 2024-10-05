// src/components/Methods/DirectImaging.jsx
import ReusableDiv from "../ReusableDiv";

const DirectImaging = () => {
    return (
        <ReusableDiv
            title="Direct Imaging Method"
            dataPath="/data/Discovery/Discovery_Direct_Imaging.json"
            quizPath="/quiz"
            previousPath="/methods/radial-velocity"
            nextPath="/methods/microlensing"
        />
    );
};

export default DirectImaging;
