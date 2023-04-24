import React from "react";

class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hello world",
    };
  }

  render() {
    return (
      <div>
        <header>
        <audio id="winningAudio" src="./Audio/Final Fantasy Victory Fanfare - Sound Effect [HQ].mp3"></audio>
      <h1>Guess My Number!</h1>
      <p>(Between 1 and 20)</p>
      <button >Again!</button>
      <div>?</div>
        </header>
        <main>
        <section>
        <input/>
        <button>Check!</button>
      </section>
      <section>
        <p>Start guessing...</p>
        <p>💯 Score: <span>20</span></p>
        <p>
          🥇 Highscore: <span>0</span>
        </p>
        </section>
        </main>
      </div>
      
    );
  }
}

export default Guess;
