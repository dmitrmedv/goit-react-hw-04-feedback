import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleChengeValue }) => {
  return (
    <>
      <div className={css.buttons}>
        {options.map(buttonItem => {
          return (
            <button
              key={buttonItem}
              type="button"
              className={css.btn}
              data-name={buttonItem}
              onClick={handleChengeValue}
            >
              {buttonItem}
            </button>
          );
        })}
      </div>
      <h2 className={css.statisticTitle}>Statistics</h2>
    </>
  );
};
