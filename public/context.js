const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAE8ewoiEZlTXJyLhlc8BucG4I3ztMXFtg",
  authDomain: "fir-auth-1a573.firebaseapp.com",
  projectId: "fir-auth-1a573",
  storageBucket: "fir-auth-1a573.appspot.com",
  messagingSenderId: "487849138116",
  appId: "1:487849138116:web:7c22b570e7a8910a97b691"
};

firebase.initializeApp(firebaseConfig);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
       {/*} {props.status && (<div id='createStatus'>{props.status}</div>)}*/}
      </div>
    </div>      
  );    
}
