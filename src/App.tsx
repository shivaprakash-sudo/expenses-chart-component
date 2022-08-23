import ExpensesChart from "./components/ExpensesChart";

function App() {
  return (
    <>
      <main className="container flex col items-center justify-center">
        <ExpensesChart />
        <Attribution />
      </main>
    </>
  );
}

const Attribution = () => {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/shivaprakash-sudo"
        rel="noreferrer"
        target="_blank"
      >
        Shiva Prakash Pendem
      </a>
      .
    </div>
  );
};

export default App;
