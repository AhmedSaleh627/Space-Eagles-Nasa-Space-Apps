import ReusableDiv from "../ReusableDiv";

const Rocky = () => {
  return (
    <ReusableDiv
      title="Rocky Planets: Unearthing the Secrets of Terrestrial Worlds!"
      dataPath="/data/Exoplanets_types/Exoplanet_Rocky.json"
      quizPath="/quizrok"
      previousPath="/exoplanet/super-earth" // Previous page path
      nextPath="/" // Next page path (home)
      URL="https://eyes.nasa.gov/apps/exo/#/filter/Terrestrial"
      topic="Rocky"
      imageUrls={["../src/assets/Exoplanets/TRAPPIST.png", "../src/assets/Exoplanets/TRAPPIST2.png"]}
    />
  );
};

export default Rocky;