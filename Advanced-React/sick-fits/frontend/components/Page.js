export default function Page(props){
    return(<div>
        <h2>This is page component</h2>
        {props.children}
    </div>)
}