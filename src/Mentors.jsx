import React, { useState } from 'react'
import { useEffect } from 'react'
import CardMentors from './CardMentors'
const Mentors = () => {

    const [users, setUsers] = useState([])
    const [findUsers, setFindUsers] = useState([])
    useEffect(() => {
        (async () => {
            let data
            try {
                const res = await fetch('https://randomuser.me/api/?results=99')
                data = (await res.json()).results
            } catch (error) {
                console.log(error);
                data = []
            }
            console.log(data);
            setFindUsers(data)
            setUsers(data)
            console.log(users);
        })()
    }, [])


    const inputHandle = (e) => {
        const value = e.target.value.toLowerCase();
        const filterIt = findUsers.filter((user) => (`${user.name.title}${user.name.first}${user.name.last}`.toLowerCase().includes(value)))
        setUsers(filterIt)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Mentors </h1>
            </div>
            <div className="input-group mb-3">

                <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder='Search mentors name.....' onChange={inputHandle} style={{ borderRadius: "20px",marginBottom:'20px' }} />
            </div>
            <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {users.map((user, index) => {
                return <CardMentors mentorData={user} key={index}  />;
              })}
            </div>
          </div>
        </div>
      </div>







        </>
    )
}

export default Mentors