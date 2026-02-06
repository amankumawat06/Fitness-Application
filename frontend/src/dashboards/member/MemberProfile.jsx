import { useState, useEffect } from 'react'
import axios from 'axios'
const MemberProfile = () => {

    useEffect(() => {
        let token = localStorage.getItem("token")
        axios.get("http://localhost:8080/member/profile",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data.user.name)
            console.log(res.data.user.email)
            console.log(res.data.user._id)
            console.log(res.data.user)
        })
    })

  return (
    <div className='p-4'>
      <h3>Welcome to your profie</h3>
    </div>
  )
}

export default MemberProfile
