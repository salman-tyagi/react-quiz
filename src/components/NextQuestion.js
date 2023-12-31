import { useQuiz } from '../contexts/QuizContext';

export default function NextQuestion() {
  const { answer, index, dispatch } = useQuiz();

  if (answer === null) return null;

  if (index === 14) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finished' })}
      >
        Finish
      </button>
    );
  }

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      Next
    </button>
  );
}
