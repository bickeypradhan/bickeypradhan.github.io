import { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data';

export default function TerminalMode({ onClose }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Bicky\'s Terminal! Type "help" for available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [
      ...history,
      { type: 'command', text: cmd }
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'exit') {
      onClose();
      return;
    }

    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const output = terminalCommands[trimmed];
    if (output) {
      newHistory.push({ type: 'output', text: output });
    } else {
      newHistory.push({ type: 'output', text: `bash: ${trimmed}: command not found. Type "help" for available commands.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-titlebar">
          <div className="terminal-dot terminal-dot--red" onClick={onClose} style={{ cursor: 'pointer' }} />
          <div className="terminal-dot terminal-dot--yellow" />
          <div className="terminal-dot terminal-dot--green" />
          <span className="terminal-titlebar__text">bicky@portfolio:~</span>
        </div>
        <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {history.map((entry, i) => (
            <div key={i} className="terminal-line">
              {entry.type === 'command' ? (
                <>
                  <span className="terminal-prompt">bicky@portfolio</span>
                  <span style={{ color: '#f5c2e7' }}>:</span>
                  <span style={{ color: '#89b4fa' }}>~</span>
                  <span style={{ color: '#f5c2e7' }}>$ </span>
                  <span className="terminal-command">{entry.text}</span>
                </>
              ) : (
                <span className="terminal-output" style={{ whiteSpace: 'pre-wrap' }}>{entry.text}</span>
              )}
            </div>
          ))}
          <div className="terminal-line terminal-input-line">
            <span className="terminal-prompt">bicky@portfolio</span>
            <span style={{ color: '#f5c2e7' }}>:</span>
            <span style={{ color: '#89b4fa' }}>~</span>
            <span style={{ color: '#f5c2e7' }}>$ </span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
