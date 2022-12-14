import styles from "./styles";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          hero
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          stats
          business
          billing
          carddeal
          testimonial
          clients
          cta
          footer
        </div>
      </div>

    </div>
  );
};

export default App;
