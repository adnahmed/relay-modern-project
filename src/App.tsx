import React from 'react';
import logo from './logo.svg';
import './App.css';
import create from 'zustand';

interface TodoState {
  votes: number
  addVotes: () => void
  substractVotes: () => void
  action: () => void
}
// define store
const useStore = create<TodoState>((set, get) => ({
  votes: 0,
  action: () => {
    const userVotes = get().votes
  },
  addVotes: () => set(state => ({votes: state.votes + 1})),
  substractVotes: () => set(state => ({votes: state.votes - 1}))
}));

function App() {
  const addVotes = useStore(state => state.addVotes);
  const substractVotes = useStore(state => state.substractVotes)
  const getVotes = useStore((state) => state.votes);
  return (
    <div className="App">
      <h1>{getVotes} people have cast their votes.</h1>
      <button onClick={addVotes}>Cast a vote</button>
      <button onClick={substractVotes}>Delete a vote.</button>
    </div>
  );
}

export default App;
