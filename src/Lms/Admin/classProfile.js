import React from 'react'


    export default function ClassProfile ({setStatus, searchUser, SearchClass, students, Title}){

        function handleProfile (code){
            searchUser(code)
            setStatus("registerProfile")
        }

        return(
            <div>
                <br/>
                    <h1 className="title">{Title} Profile</h1>    
                <br/>
            
            <div className="columns">
                <div className="column is-3">
                    
                    <p className="button is-warning is-large " onClick={()=>setStatus("")}>Back</p>
                    <br/>
                    <br/>
                    <p className="button is-success is-large is-fullwidth" onClick={()=>SearchClass("Class_1", "Class One")} >Class One</p>
                    <br/>
                    <p className="button is-warning is-large is-fullwidth" onClick={()=>SearchClass("Class_2", "Class Two")}>Class Two</p>
                    <br/>
                    <p className="button is-danger is-large is-fullwidth" onClick={()=>SearchClass("Class_3", "Class Three")}>Class Three</p>
                    <br/>
                    <p className="button is-primary is-large is-fullwidth" onClick={()=>SearchClass("Class_4", "Class Four")}>Class Four</p>
                    <br/>
                    <p className="button is-danger is-large is-fullwidth" onClick={() => window.print()}>Print</p>
                
                </div>
                <div className="column is-7">
                    <h1 className="title">{Title}</h1>
    
                <br/>
                Class list of students
                <table className="table table is-striped table is-hoverable table is-fullwidth">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student=> 
                            <tr key={student.code}>
                            <th>{students.indexOf(student)+1}</th>
                            <td>{student.firstname + " " + student.lastname}</td>
                            <td>{student.code}</td>
                            <td><p className="button is-info is-fullwidth" onClick={()=>handleProfile(student.code)}>Profile</p></td>
                            </tr>
                         )}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        )
}