import '../styles/header.scss';

import TodoLogo from './TodoLogo';

export function Header() {
  return (
    <header className="header">
      <div>
        <TodoLogo />
      </div>
    </header>
  );
}
