
const Courses = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
  return (
 
   
    <section>
        <div className="up">{month}</div>
        <div className="down"></div>
    </section>
  )
}

export default Courses