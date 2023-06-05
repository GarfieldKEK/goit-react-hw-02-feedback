import style from "./feedback.module.css"

export const FeedbackOptions=({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option) => (
        <button
          key={option}
          className={style.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
    
  );
  