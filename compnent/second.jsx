class Second extends React.component{
    render(){
      return(
        <div  className='second1'>
          <table>
            <tr>
              <th><img src={image/w.png} alt={w}/></th>
              <th>Work Experience</th>
            </tr>
          </table>
        <div  className='block'>
          <h5 ><b>Front End Developer / Freelancer </b></h5>
          <table >
            <tr >
              <td><img src={image/d.png}  alt={d} /> </td>
              <td><h6  className='date'>Sep 2020 - <span  className='s'>still</span></h6></td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        <hr/><br/>
        <div  className='block'>
          <h5 ><b> Graphic Designer / Freelancer </b></h5>
          <table >
            <tr >
              <td><img src={image/d.png}  alt={d}/> </td>
              <td><h6  className='date'>mar 2019 - <span className='s'>still</span></h6></td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
    </div>
      )
    }
  }