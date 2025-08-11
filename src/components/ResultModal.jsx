export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open> 
      <h2>You {result}</h2>
      <p>
        The targey time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
