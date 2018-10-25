import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
       todos: [
           { name: 'dva', content:'antd',id: 1 },
             ],
       },
 });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/todos').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
