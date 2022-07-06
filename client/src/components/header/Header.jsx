import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">"Two roads diverged in a wood, and I – I took the road less traveled by"</span>
            <span className="headerTitleLg">Poetry</span>
        </div>
        <img className = "headerImg" src="/images/uwp263633.png" alt="" />
    </div>
  )
}
