import React from "react";

export default function Error(props) {
  return (
    <main className="matchmaking__error">
      <section className="matchmaking__error-message">
        <h2 className="text--light">Error</h2>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="error__close"
        src="images/exitX.png"
        alt="Close"
        onClick={() => props.onClose()}
      />
    </main>
  );
}
