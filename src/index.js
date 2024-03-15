import { createRoot } from 'react-dom/client'

import { App } from "src/App";

const appContainer = document.getElementById('react-root');
const root = createRoot(appContainer);

root.render(<App/>);