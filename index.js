import { FileMon } from './filemon.js'
import { WSServer } from './wsserver.js'
import { Logger } from './logger.js'

const wss = new WSServer()
const logger = new Logger()
const fm = new FileMon("./public/index.html");

fm.events.on('change', (c) => { 
    wss.onChange(c)
    logger.onChange(c); 
});

// fm.addListener(wss)
// fm.addListener(logger)
