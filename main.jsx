import { createRoot } from 'react-dom/client'
import { Lobby } from './src/components/Lobby'
import './src/styles/styles.css'

const root = createRoot(document.getElementById('app'))

root.render(<Lobby/>)